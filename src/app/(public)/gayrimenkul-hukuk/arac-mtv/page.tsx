import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/gayrimenkul-hukuk/arac-mtv',
    title: 'Araç MTV (Motorlu Taşıtlar Vergisi) Hesaplama',
    description: 'Motor silindir hacmi ve araç yaş grubuna göre yıllık MTV ve Ocak/Temmuz taksit tutarları.',
  },
  'tr',
);

export default function AracMtvPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="arac-mtv"
      categoryId="gayrimenkul-hukuk"
    />
  );
}
