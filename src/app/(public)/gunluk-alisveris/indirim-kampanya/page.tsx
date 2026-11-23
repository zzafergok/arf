import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/gunluk-alisveris/indirim-kampanya',
    title: 'İndirim & Kampanya Fiyat Hesaplayıcı',
    description: 'Etiket fiyatı üzerinden tekli veya kademeli (\"kasada ek indirim\") kampanyaların net fiyat ve gerçek indirim yüzdesi.',
  },
  'tr',
);

export default function IndirimKampanyaPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="indirim-kampanya"
      categoryId="gunluk-alisveris"
    />
  );
}
