import { buildPageMetadata } from '@/lib/metadata/site-metadata';
import { notFound } from 'next/navigation';

import {
  CALCULATOR_CATEGORIES,
  CategoryDetailScreen,
} from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/gunluk-alisveris',
    title: '3. Gündelik Pratik & Alışveriş Araçları',
    description: 'İndirim/kampanya, market birim fiyat kıyası, yol yakıt masrafı, bahşiş bölüştürme ve yüzde hesaplayıcı.',
  },
  'tr',
);

export default function GunlukAlisverisCategoryPage() {
  const category = CALCULATOR_CATEGORIES.find((c) => c.id === 'gunluk-alisveris');
  if (!category) {
    notFound();
  }

  return (
    <div lang="tr">
      <CategoryDetailScreen
        categoryId="gunluk-alisveris"
        category={category}
      />
    </div>
  );
}
