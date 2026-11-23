import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/matematik-muhendislik/alan-hacim',
    title: 'Geometrik Alan, Çevre & Hacim Hesaplama',
    description: 'Daire, dikdörtgen, üçgen, silindir, küre ve koni için alan, çevre ve hacim hesaplamaları.',
  },
  'tr',
);

export default function AlanHacimPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="alan-hacim"
      categoryId="matematik-muhendislik"
    />
  );
}
