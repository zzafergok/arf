import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/saglik-beslenme/vucut-kitle-indeksi',
    title: 'Vücut Kitle İndeksi (VKİ) & İdeal Kilo Hesaplama',
    description: 'Boy, kilo ve cinsiyete göre Dünya Sağlık Örgütü (WHO) VKİ kategorisi ve Devine ideal kilo aralığı.',
  },
  'tr',
);

export default function VucutKitleIndeksiPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="vucut-kitle-indeksi"
      categoryId="saglik-beslenme"
    />
  );
}
