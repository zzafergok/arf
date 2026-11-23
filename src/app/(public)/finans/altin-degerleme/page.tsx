import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/finans/altin-degerleme',
    title: 'Altın, Bilezik & Hurda Altın Değerleme',
    description: 'Gram, çeyrek, tam, ata altın ve 22/14 ayar bileziklerin milyem saflık oranlarına göre has altın ve nakit karşılığı.',
  },
  'tr',
);

export default function AltinDegerlemePage() {
  return (
    <CalculatorDetailScreen
      calculatorId="altin-degerleme"
      categoryId="finans"
    />
  );
}
