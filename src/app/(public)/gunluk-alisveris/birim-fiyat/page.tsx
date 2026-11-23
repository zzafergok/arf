import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/gunluk-alisveris/birim-fiyat',
    title: 'Market Birim Fiyat Karşılaştırma',
    description: 'Farklı gramaj veya hacimdeki iki ürünün 1 kg / 1 Litre başına maliyetini kıyaslayarak en ekonomik olanı bulun.',
  },
  'tr',
);

export default function BirimFiyatPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="birim-fiyat"
      categoryId="gunluk-alisveris"
    />
  );
}
