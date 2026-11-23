import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/bordro-vergi/brutten-nete-maas',
    title: 'Brütten Nete / Netten Brüte Maaş Hesaplama',
    description: 'Kümülatif vergi dilimleri (%15-%40), SGK işçi payı, SPEK tavanı ve asgari ücret istisnası dahil bordro dökümü.',
  },
  'tr',
);

export default function BruttenNeteMaasPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="brutten-nete-maas"
      categoryId="bordro-vergi"
    />
  );
}
