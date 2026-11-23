import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/matematik-muhendislik/birim-donusturucu',
    title: 'Kapsamlı Birim Dönüştürücü (Uzunluk, Ağırlık, Sıcaklık, Veri)',
    description: 'Metrik, emperyal, sıcaklık ve dijital veri depolama birimlerini anında birbirine dönüştürün.',
  },
  'tr',
);

export default function BirimDonusturucuPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="birim-donusturucu"
      categoryId="matematik-muhendislik"
    />
  );
}
