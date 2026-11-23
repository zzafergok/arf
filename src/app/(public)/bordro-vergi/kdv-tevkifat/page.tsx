import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/bordro-vergi/kdv-tevkifat',
    title: 'KDV Tevkifatı & KDV Dahil / Hariç Hesaplama',
    description: '%1, %10, %20 KDV oranları ve 2/10, 5/10, 7/10, 9/10 tevkifat paylarıyla fatura matrahı hesaplama.',
  },
  'tr',
);

export default function KdvTevkifatPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="kdv-tevkifat"
      categoryId="bordro-vergi"
    />
  );
}
