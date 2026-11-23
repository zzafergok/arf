import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import sitemap from '@/app/sitemap';
import robots from '@/app/robots';
import { GET as getLlms } from '@/app/llms.txt/route';
import { siteMetadata } from '@/lib/metadata/site-metadata';

function getPublicPagePaths(directory: string, path = ''): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory()) {
      return getPublicPagePaths(join(directory, entry.name), `${path}/${entry.name}`);
    }
    return entry.name === 'page.tsx' ? [path || '/'] : [];
  });
}

describe('Arama ve LLM keşfi', () => {
  it('site haritası gerçek herkese açık sayfaları tekrar etmeden ve sahte güncelleme tarihi olmadan listeler', () => {
    const pages = getPublicPagePaths(join(process.cwd(), 'src/app/(public)'));
    const entries = sitemap();
    const paths = entries.map((entry) => new URL(entry.url).pathname);

    expect(new Set(paths).size).toBe(paths.length);
    expect(paths.sort()).toEqual(pages.sort());
    expect(entries.every((entry) => entry.lastModified === undefined)).toBe(true);
  });

  it('llms.txt herkese açık tüm sayfalara bağlantı verir', async () => {
    const response = getLlms();
    const text = await response.text();
    const paths = getPublicPagePaths(join(process.cwd(), 'src/app/(public)'));

    expect(response.headers.get('content-type')).toContain('text/plain');
    for (const path of paths) {
      expect(text).toContain(new URL(path, siteMetadata.url).toString());
    }
    expect(text).not.toContain('Next.js application template');
  });

  it('arama botuna izin verirken mevcut eğitim botu tercihini korur', () => {
    const rules = robots().rules;
    expect(Array.isArray(rules)).toBe(true);
    if (!Array.isArray(rules)) throw new Error('Bot kuralları eksik');

    const search = rules.find((rule) => Array.isArray(rule.userAgent) && rule.userAgent.includes('OAI-SearchBot'));
    const training = rules.find((rule) => Array.isArray(rule.userAgent) && rule.userAgent.includes('GPTBot'));
    expect(search?.allow).toContain('/');
    expect(training?.disallow).toBe('/');
  });
});
