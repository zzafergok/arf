import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/finans/mevduat-getirisi',
    title: 'Mevduat Getirisi & Bileşik Faiz Hesaplama',
    description: 'Günlük ve aylık vadeli mevduatta stopaj kesintisi sonrası net faiz kazancı.',
  },
  'tr',
);

export default function MevduatGetirisiPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="mevduat-getirisi"
      categoryId="finans"
    />
  );
}
