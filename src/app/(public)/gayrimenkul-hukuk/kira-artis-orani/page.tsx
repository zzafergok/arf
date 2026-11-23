import { buildPageMetadata } from '@/lib/metadata/site-metadata';

import { CalculatorDetailScreen } from '@/features/calculators';

export const metadata = buildPageMetadata(
  {
    path: '/gayrimenkul-hukuk/kira-artis-orani',
    title: 'Kira Artış Oranı & TÜFE Yasal Sınır Hesaplama',
    description: '6098 Sayılı TBK Md. 344 uyarınca 12 aylık TÜFE ortalamasına göre yasal kira artış üst sınırı.',
  },
  'tr',
);

export default function KiraArtisOraniPage() {
  return (
    <CalculatorDetailScreen
      calculatorId="kira-artis-orani"
      categoryId="gayrimenkul-hukuk"
    />
  );
}
