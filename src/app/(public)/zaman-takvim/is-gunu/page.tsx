import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/zaman-takvim/is-gunu',
    title: 'İş Günü & Mesai Günü Hesaplama',
    description: 'Hafta sonları ve resmi tatiller düşüldükten sonra iki tarih arasındaki net çalışma (iş) günü sayısı.',
  },
  'tr',
);

export default function IsGunuPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="is-gunu"
      categoryId="zaman-takvim"
    />
  );
}
