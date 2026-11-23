import { buildPageMetadata } from '@/lib/metadata/site-metadata';
import { notFound } from 'next/navigation';

import {
  CALCULATOR_CATEGORIES,
  CategoryDetailScreen,
} from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/zaman-takvim',
    title: '6. Zaman, Tarih & Takvim',
    description: 'İki tarih arası gün farkı, resmi tatiller hariç net iş günü, askerlik şafak sayacı ve etkinlik geri sayımı.',
  },
  'tr',
);

export default function ZamanTakvimCategoryPage() {
  const category = CALCULATOR_CATEGORIES.find((c) => c.id === 'zaman-takvim');
  if (!category) {
    notFound();
  }

  return (
    <div lang="tr">
      <CategoryDetailScreen
        categoryId="zaman-takvim"
        category={category}
      />
    </div>
  );
}
