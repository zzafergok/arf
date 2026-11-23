import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/saglik-beslenme/makro-besin',
    title: 'Makro Besin Dağılımı (Protein, Karbonhidrat, Yağ)',
    description: 'Günlük hedef kalorinize ve beslenme profilinize göre almanız gereken gramaj bazlı makro besin dağılımı.',
  },
  'tr',
);

export default function MakroBesinPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="makro-besin"
      categoryId="saglik-beslenme"
    />
  );
}
