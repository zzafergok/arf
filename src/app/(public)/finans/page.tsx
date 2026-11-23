import { buildPageMetadata } from '@/lib/metadata/site-metadata';
import { notFound } from 'next/navigation';

import {
  CALCULATOR_CATEGORIES,
  CategoryDetailScreen,
} from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/finans',
    title: '1. Finans, Kredi ve Bankacılık',
    description: 'Kredi taksit ve amortisman, erken kapama, mevduat faizi, enflasyon ve altın/bilezik değerleme araçları.',
  },
  'tr',
);

export default function FinansCategoryPage() {
  const category = CALCULATOR_CATEGORIES.find((c) => c.id === 'finans');
  if (!category) {
    notFound();
  }

  return (
    <div lang="tr">
      <CategoryDetailScreen
        categoryId="finans"
        category={category}
      />
    </div>
  );
}
