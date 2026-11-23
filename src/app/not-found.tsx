import { ArrowLeft, Compass, Home } from 'lucide-react';
import { Button } from '@/components/core/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/core/card';
import { Link } from '@/components/core/link';
import { PublicShell } from '@/features/routes/_shared/layouts';
import { getCurrentLocale } from '@/lib/i18n/server-locale';

export default async function NotFound() {
  const locale = await getCurrentLocale();
  const isTr = locale === 'tr';

  const copy = {
    badge: isTr ? '404 • SAYFA BULUNAMADI' : '404 • PAGE NOT FOUND',
    title: isTr ? 'Sayfa Bulunamadı' : 'Page Not Found',
    description: isTr
      ? 'Aradığınız sayfa silinmiş, taşınmış veya henüz inşa edilmemiş olabilir. Ana sayfaya dönebilir veya hesaplama araçlarını keşfedebilirsiniz.'
      : 'The page you are looking for might have been removed, moved, or is still under construction. Return home or explore our calculator tools.',
    homeButton: isTr ? 'Ana Sayfaya Dön' : 'Return Home',
    exploreButton: isTr ? 'Hesaplama Araçlarını Keşfet' : 'Explore Calculators',
  };

  return (
    <PublicShell>
      <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-16">
        <Card className="w-full max-w-lg border-gunmetal bg-obsidian text-center shadow-2xl">
          <CardHeader className="space-y-4 pb-2">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg border border-hesaplamalarim-blue/40 bg-hesaplamalarim-blue/10 text-hesaplamalarim-blue">
              <Compass className="h-7 w-7 animate-pulse" />
            </div>
            <div className="inline-block font-mono text-compact font-bold uppercase tracking-widest text-hesaplamalarim-blue">
              {copy.badge}
            </div>
            <CardTitle className="font-display text-heading font-bold tracking-tight text-titanium">
              {copy.title}
            </CardTitle>
            <CardDescription className="mx-auto max-w-md font-sans text-body-sm leading-relaxed text-ash">
              {copy.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                asChild
                className="h-10 rounded-lg bg-hesaplamalarim-blue font-sans text-body-sm font-bold text-primary-foreground hover:bg-hesaplamalarim-blue/90"
              >
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  {copy.homeButton}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-10 rounded-lg border-gunmetal font-sans text-body-sm font-semibold text-titanium hover:bg-gunmetal/20"
              >
                <Link href="/#hesaplama-araclari">
                  <ArrowLeft className="mr-2 h-4 w-4 rotate-180" />
                  {copy.exploreButton}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PublicShell>
  );
}
