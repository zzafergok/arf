import { buildPageMetadata } from '@/lib/metadata/site-metadata';
import { notFound } from 'next/navigation';

import {
  CALCULATOR_CATEGORIES,
  CategoryDetailScreen,
} from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/matematik-muhendislik',
    title: '7. Matematik, Geometri & Mühendislik',
    description: 'Birim dönüştürücüler, geometrik alan/hacim hesaplama ve üniversite vize/final GPA not ortalaması.',
  },
  'tr',
);

export default function MatematikMuhendislikCategoryPage() {
  const category = CALCULATOR_CATEGORIES.find((c) => c.id === 'matematik-muhendislik');
  if (!category) {
    notFound();
  }

  return (
    <div lang="tr">
      <CategoryDetailScreen
        categoryId="matematik-muhendislik"
        category={category}
      />
    </div>
  );
}
