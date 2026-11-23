import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/zaman-takvim/geri-sayim',
    title: 'Özel Gün & Sınav Geri Sayım Sayacı',
    description: 'Hedeflenen sınav, tatil veya etkinlik tarihine bugünden itibaren kaç gün, hafta ve saat kaldığını hesaplayın.',
  },
  'tr',
);

export default function GeriSayimPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="geri-sayim"
      categoryId="zaman-takvim"
    />
  );
}
