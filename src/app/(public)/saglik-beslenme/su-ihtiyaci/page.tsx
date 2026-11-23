import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/saglik-beslenme/su-ihtiyaci',
    title: 'Günlük Su İhtiyacı Hesaplama',
    description: 'Vücut ağırlığınız ve günlük egzersiz sürenize göre tüketmeniz gereken ideal su miktarı.',
  },
  'tr',
);

export default function SuIhtiyaciPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="su-ihtiyaci"
      categoryId="saglik-beslenme"
    />
  );
}
