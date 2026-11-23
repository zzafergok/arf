import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/gayrimenkul-hukuk/miras-paylasimi',
    title: 'Yasal Miras Paylaşımı (Veraset) Simülatörü',
    description: '4721 Sayılı Türk Medeni Kanunu zümre sistemine göre sağ kalan eş ve mirasçılar arasındaki yasal hisse dökümü.',
  },
  'tr',
);

export default function MirasPaylasimiPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="miras-paylasimi"
      categoryId="gayrimenkul-hukuk"
    />
  );
}
