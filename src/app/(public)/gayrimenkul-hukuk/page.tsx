import { buildPageMetadata } from '@/lib/metadata/site-metadata';
import { notFound } from 'next/navigation';

import {
  CALCULATOR_CATEGORIES,
  CategoryDetailScreen,
} from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/gayrimenkul-hukuk',
    title: '5. Gayrimenkul, Araç & Hukuk',
    description: 'TÜFE kira artış oranı, %4 tapu harcı, araç MTV, yasal/temerrüt faizi ve yasal miras paylaşımı simülatörü.',
  },
  'tr',
);

export default function GayrimenkulHukukCategoryPage() {
  const category = CALCULATOR_CATEGORIES.find((c) => c.id === 'gayrimenkul-hukuk');
  if (!category) {
    notFound();
  }

  return (
    <div lang="tr">
      <CategoryDetailScreen
        categoryId="gayrimenkul-hukuk"
        category={category}
      />
    </div>
  );
}
