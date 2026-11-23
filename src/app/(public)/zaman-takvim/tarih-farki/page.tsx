import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/zaman-takvim/tarih-farki',
    title: 'İki Tarih Arası Gün, Hafta ve Saat Farkı',
    description: 'Başlangıç ve bitiş tarihleri arasındaki toplam gün, hafta, saat ve Yıl/Ay/Gün kırılımı.',
  },
  'tr',
);

export default function TarihFarkiPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="tarih-farki"
      categoryId="zaman-takvim"
    />
  );
}
