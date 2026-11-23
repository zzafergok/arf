import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/bordro-vergi/issizlik-maasi',
    title: 'İşsizlik Maaşı Hesaplama',
    description: 'Son 4 aylık prime esas kazanç ortalaması ve son 3 yıldaki prim gününe göre İŞKUR işsizlik ödeneği.',
  },
  'tr',
);

export default function IssizlikMaasiPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="issizlik-maasi"
      categoryId="bordro-vergi"
    />
  );
}
