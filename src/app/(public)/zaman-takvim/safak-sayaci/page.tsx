import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/zaman-takvim/safak-sayaci',
    title: 'Şafak & Askerlik Terhis Hesaplayıcı',
    description: 'Sülüs (sevk) tarihi, askerlik türü ve yol iznine göre kalan şafak günü ve resmi terhis tarihi.',
  },
  'tr',
);

export default function SafakSayaciPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="safak-sayaci"
      categoryId="zaman-takvim"
    />
  );
}
