import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/gunluk-alisveris/bahsis-bolusturme',
    title: 'Bahşiş & Hesap Bölüştürme (Alman Usulü)',
    description: 'Restoran ve kafe adisyonlarında servis/bahşiş oranını ekleyerek kişi başı ödenecek net tutarı hesaplayın.',
  },
  'tr',
);

export default function BahsisBolusturmePage() {
  return (
    <CalculatorDetailScreen
      calculatorId="bahsis-bolusturme"
      categoryId="gunluk-alisveris"
    />
  );
}
