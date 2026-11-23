import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/finans/erken-kapama',
    title: 'Erken Kapama & Ara Ödeme Simülatörü',
    description: 'Krediye toplu ara ödeme yapıldığında vade kısaltma ile taksit düşürme seçeneklerinin net faiz tasarrufu karşılaştırması.',
  },
  'tr',
);

export default function ErkenKapamaPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="erken-kapama"
      categoryId="finans"
    />
  );
}
