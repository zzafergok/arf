import {
  ALL_CALCULATORS,
  CALCULATOR_CATEGORIES,
} from '@/features/calculators/registry';
import { siteMetadata } from '@/lib/metadata/site-metadata';

export const dynamic = 'force-static';

export function GET() {
  const categories = CALCULATOR_CATEGORIES.map((category) => {
    const categoryUrl = new URL(`/${category.id}`, siteMetadata.url).toString();
    const calculators = ALL_CALCULATORS.filter(
      (calculator) => calculator.categoryId === category.id,
    )
      .map((calculator) => {
        const url = new URL(
          `/${category.id}/${calculator.id}`,
          siteMetadata.url,
        ).toString();
        return `- [${calculator.title}](${url}): ${calculator.description}`;
      })
      .join('\n');

    return `## ${category.shortTitle}

- [${category.title}](${categoryUrl}): ${category.description}
${calculators}`;
  }).join('\n\n');

  const body = `# ${siteMetadata.name}

> ${siteMetadata.description}

Arf, farklı alanlarda çevrimiçi hesaplama araçları sunar.

## Ana Sayfa

- [Arf](${siteMetadata.url.origin}/): Hesaplama araçlarını keşfedin.

${categories}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
