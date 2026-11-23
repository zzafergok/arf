import type { MetadataRoute } from 'next';

import {
  ALL_CALCULATORS,
  CALCULATOR_CATEGORIES,
} from '@/features/calculators/registry';
import {
  getIndexableRoutes,
  siteMetadata,
} from '@/lib/metadata/site-metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = getIndexableRoutes().map(
    (route) => ({
      url: new URL(route.path, siteMetadata.url).toString(),
    }),
  );

  const categoryEntries: MetadataRoute.Sitemap = CALCULATOR_CATEGORIES.map(
    (cat) => ({
      url: new URL(`/${cat.id}`, siteMetadata.url).toString(),
    }),
  );

  const calculatorEntries: MetadataRoute.Sitemap = ALL_CALCULATORS.map(
    (calc) => ({
      url: new URL(
        `/${calc.categoryId}/${calc.id}`,
        siteMetadata.url,
      ).toString(),
    }),
  );

  return [...staticEntries, ...categoryEntries, ...calculatorEntries];
}
