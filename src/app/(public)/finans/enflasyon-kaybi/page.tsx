import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/finans/enflasyon-kaybi',
    title: 'Enflasyon & Satın Alma Gücü Kaybı',
    description: 'Paranızın enflasyon karşısındaki reel alım gücü erimesini ve gelecekteki eşdeğer maliyetini hesaplayın.',
  },
  'tr',
);

export default function EnflasyonKaybiPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="enflasyon-kaybi"
      categoryId="finans"
    />
  );
}
