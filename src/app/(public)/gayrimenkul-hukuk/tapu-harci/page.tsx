import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/gayrimenkul-hukuk/tapu-harci',
    title: 'Tapu Harcı & Döner Sermaye Hesaplama',
    description: 'Konut, arsa ve işyeri satışlarında %2 alıcı + %2 satıcı tapu harcı ve döner sermaye masraf dökümü.',
  },
  'tr',
);

export default function TapuHarciPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="tapu-harci"
      categoryId="gayrimenkul-hukuk"
    />
  );
}
