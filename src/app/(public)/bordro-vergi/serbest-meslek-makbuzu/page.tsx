import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/bordro-vergi/serbest-meslek-makbuzu',
    title: 'Freelance / Serbest Meslek Makbuzu (SMM) Hesaplama',
    description: 'Brüt ücretten veya net tahsilattan %20 gelir vergisi stopajı ve %20 KDV dahil SMM makbuz dökümü.',
  },
  'tr',
);

export default function SerbestMeslekMakbuzuPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="serbest-meslek-makbuzu"
      categoryId="bordro-vergi"
    />
  );
}
