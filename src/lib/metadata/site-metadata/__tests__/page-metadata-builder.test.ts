import { describe, expect, it } from 'vitest';
import { buildPageMetadata } from '@/lib/metadata/site-metadata/page-metadata-builder';
import { siteMetadata } from '@/lib/metadata/site-metadata/constants';

describe('buildPageMetadata', () => {
  it('uses the page path and text for canonical and social metadata', () => {
    const metadata = buildPageMetadata(
      { path: '/finans/kredi-hesaplama', title: 'Kredi Hesaplama', description: 'Kredi taksitlerini hesaplayın.' },
      'tr',
    );
    const url = new URL('/finans/kredi-hesaplama', siteMetadata.url).toString();

    expect(metadata.title).toEqual({ absolute: 'Kredi Hesaplama | Arf' });
    expect(metadata.alternates?.canonical).toBe('/finans/kredi-hesaplama');
    expect(metadata.openGraph).toMatchObject({
      url,
      title: 'Kredi Hesaplama | Arf',
      description: 'Kredi taksitlerini hesaplayın.',
      locale: 'tr_TR',
    });
    expect(metadata.twitter).toMatchObject({
      title: 'Kredi Hesaplama | Arf',
      description: 'Kredi taksitlerini hesaplayın.',
    });
  });

  it('does not append the brand twice to the home title', () => {
    const metadata = buildPageMetadata('publicHome', 'tr');
    expect(metadata.title).toEqual({ absolute: 'Arf | Çevrimiçi Finans, Tazminat ve Bordro Araçları' });
  });
});
