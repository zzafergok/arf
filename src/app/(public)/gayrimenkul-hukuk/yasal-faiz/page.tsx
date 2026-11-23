import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/gayrimenkul-hukuk/yasal-faiz',
    title: 'Gecikme Zammı, Yasal Faiz & Temerrüt Faizi',
    description: 'İcra, sözleşme veya vergi gecikmelerinde gün bazlı yasal faiz ve toplam borç hesabı.',
  },
  'tr',
);

export default function YasalFaizPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="yasal-faiz"
      categoryId="gayrimenkul-hukuk"
    />
  );
}
