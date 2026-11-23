import { buildPageMetadata } from '@/lib/metadata/site-metadata';
import { notFound } from 'next/navigation';

import {
  CALCULATOR_CATEGORIES,
  CategoryDetailScreen,
} from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/bordro-vergi',
    title: '2. İş Hayatı, Bordro & Vergi',
    description: 'Brütten nete maaş, kıdem ve ihbar tazminatı, işsizlik maaşı, KDV tevkifatı ve SMM makbuz araçları.',
  },
  'tr',
);

export default function BordroVergiCategoryPage() {
  const category = CALCULATOR_CATEGORIES.find((c) => c.id === 'bordro-vergi');
  if (!category) {
    notFound();
  }

  return (
    <div lang="tr">
      <CategoryDetailScreen
        categoryId="bordro-vergi"
        category={category}
      />
    </div>
  );
}
