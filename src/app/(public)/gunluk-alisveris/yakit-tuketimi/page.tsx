import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/gunluk-alisveris/yakit-tuketimi',
    title: 'Yol Masrafı & Yakıt Tüketimi Hesaplama',
    description: 'Gidilecek mesafe, 100 km ortalama yakıt tüketimi ve güncel akaryakıt fiyatına göre toplam ve kişi başı yol masrafı.',
  },
  'tr',
);

export default function YakitTuketimiPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="yakit-tuketimi"
      categoryId="gunluk-alisveris"
    />
  );
}
