import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/bordro-vergi/ihbar-tazminati',
    title: 'İhbar Tazminatı Hesaplama',
    description: '4857 Sayılı İş Kanunu Md. 17 uyarınca 2, 4, 6 ve 8 haftalık ihbar bildirim süresi ve tazminatı.',
  },
  'tr',
);

export default function IhbarTazminatiPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="ihbar-tazminati"
      categoryId="bordro-vergi"
    />
  );
}
