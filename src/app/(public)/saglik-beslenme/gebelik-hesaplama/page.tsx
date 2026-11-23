import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/saglik-beslenme/gebelik-hesaplama',
    title: 'Gebelik Haftası & Tahmini Doğum Tarihi Hesaplayıcı',
    description: 'Son adet tarihine (SAT) ve Naegele kuralına göre mevcut gebelik haftası, trimester ve tahmini doğum tarihi.',
  },
  'tr',
);

export default function GebelikHesaplamaPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="gebelik-hesaplama"
      categoryId="saglik-beslenme"
    />
  );
}
