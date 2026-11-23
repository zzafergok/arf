import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/finans/kredi-hesaplama',
    title: 'Kredi Taksit & Geri Ödeme Hesaplama',
    description: 'İhtiyaç, konut ve taşıt kredileri için KKDF ve BSMV vergileri dahil aylık taksit ve ödeme planı dökümü.',
  },
  'tr',
);

export default function KrediHesaplamaPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="kredi-hesaplama"
      categoryId="finans"
    />
  );
}
