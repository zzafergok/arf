import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { siteMetadata } from '@/lib/metadata/site-metadata';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), 'public', siteMetadata.assets.logo));
  const logoUrl = `data:image/png;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%', background: '#061638', padding: '0 120px', gap: 60 }}>
        {/* ImageResponse renders the embedded asset without Next.js image optimization. */}
        <img src={logoUrl} alt="" width={305} height={305} style={{ borderRadius: 65 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ color: '#f8fafc', fontSize: 64, fontWeight: 700 }}>{siteMetadata.name}</div>
          <div style={{ color: '#a8c3e6', fontSize: 26 }}>Finans ve çalışma hayatı hesaplamaları</div>
        </div>
      </div>
    ),
    size,
  );
}
