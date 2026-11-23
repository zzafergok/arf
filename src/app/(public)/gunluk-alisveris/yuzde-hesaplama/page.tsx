import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/gunluk-alisveris/yuzde-hesaplama',
    title: 'Çok Amaçlı Yüzde (%) Hesaplayıcı',
    description: 'Bir sayının yüzdesini, iki sayı arasındaki değişim oranını veya yüzde fazlasını/eksiğini tek dokunuşla bulun.',
  },
  'tr',
);

export default function YuzdeHesaplamaPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="yuzde-hesaplama"
      categoryId="gunluk-alisveris"
    />
  );
}
