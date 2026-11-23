import { getCurrentLocale } from '@/lib/i18n/server-locale';
import { siteMetadata } from '@/lib/metadata/site-metadata';
import { PublicHomeClient } from './components/public-home-client';
import { getPublicHomeCopy } from './i18n';

export async function PublicHomeScreen() {
  const locale = await getCurrentLocale();
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteMetadata.name,
    url: new URL('/', siteMetadata.url).toString(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      <PublicHomeClient copy={getPublicHomeCopy(locale)} />
    </>
  );
}
