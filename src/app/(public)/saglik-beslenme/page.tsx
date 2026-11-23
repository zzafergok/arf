import { buildPageMetadata } from '@/lib/metadata/site-metadata';
import { notFound } from 'next/navigation';

import {
  CALCULATOR_CATEGORIES,
  CategoryDetailScreen,
} from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/saglik-beslenme',
    title: '4. Sağlık, Fitness & Beslenme',
    description: 'Vücut kitle indeksi (VKİ), bazal metabolizma (BMR/TDEE), makro besin, su ihtiyacı ve gebelik haftası.',
  },
  'tr',
);

export default function SaglikBeslenmeCategoryPage() {
  const category = CALCULATOR_CATEGORIES.find((c) => c.id === 'saglik-beslenme');
  if (!category) {
    notFound();
  }

  return (
    <div lang="tr">
      <CategoryDetailScreen
        categoryId="saglik-beslenme"
        category={category}
      />
    </div>
  );
}
