import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/bordro-vergi/kidem-tazminati',
    title: 'Kıdem Tazminatı Hesaplama',
    description: 'Çalışma süresi, giydirilmiş brüt ücret ve 2026 kıdem tavanına göre net kıdem tazminatı dökümü.',
  },
  'tr',
);

export default function KidemTazminatiPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="kidem-tazminati"
      categoryId="bordro-vergi"
    />
  );
}
