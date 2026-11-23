import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/matematik-muhendislik/akademik-not',
    title: 'Üniversite Vize / Final Not Ortalaması & GPA Hesaplama',
    description: 'Vize ve final ağırlıklarına, final geçme barajına göre dönem sonu başarı notu ve 4’lük harf karşılığı.',
  },
  'tr',
);

export default function AkademikNotPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="akademik-not"
      categoryId="matematik-muhendislik"
    />
  );
}
