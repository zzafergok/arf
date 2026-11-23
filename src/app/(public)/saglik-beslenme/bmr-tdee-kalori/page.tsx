import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/saglik-beslenme/bmr-tdee-kalori',
    title: 'Bazal Metabolizma Hızı (BMR) & Günlük Kalori (TDEE)',
    description: 'Mifflin-St Jeor denklemiyle dinlenme metabolizma hızı ve kilo koruma/verme/alma kalori hedefleri.',
  },
  'tr',
);

export default function BmrTdeeKaloriPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="bmr-tdee-kalori"
      categoryId="saglik-beslenme"
    />
  );
}
