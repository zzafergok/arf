'use client';

import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  Calculator,
  Search,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { useMemo, useState } from 'react';

import { Badge } from '@/components/core/badge';
import { Button } from '@/components/core/button';
import { Input } from '@/components/core/input';
import { Link } from '@/components/core/link';
import { getCategoryIcon } from '@/components/layout/public-navbar';
import {
  ALL_CALCULATORS,
  CALCULATOR_CATEGORIES,
  getCategoryTheme,
} from '@/features/calculators/registry';
import { cn } from '@/lib/utils';
import type { PublicHomeCopy } from '../types';

const FEATURED_TOOL_IDS = [
  'brutten-nete-maas',
  'kredi-hesaplama',
  'kidem-tazminati',
  'vucut-kitle-indeksi',
];

export function HomeHero({
  badges,
  hero,
}: {
  badges: PublicHomeCopy['badges'];
  hero: PublicHomeCopy['hero'];
}) {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return ALL_CALCULATORS.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.shortTitle.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q),
    ).slice(0, 6);
  }, [query]);

  const featuredTools = useMemo(
    () =>
      FEATURED_TOOL_IDS.map((id) =>
        ALL_CALCULATORS.find((c) => c.id === id),
      ).filter((item): item is NonNullable<typeof item> => Boolean(item)),
    [],
  );

  return (
    <section className="to-accent-violet/10 relative overflow-hidden rounded-3xl border border-hesaplamalarim-blue/25 bg-gradient-to-br from-obsidian via-obsidian/95 p-6 shadow-xl sm:p-10 lg:p-12">
      <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
        {/* Sol Sütun: Başlık, Anlık Arama ve Aksiyonlar */}
        <div className="space-y-6 lg:col-span-7">
          <div className="flex flex-wrap items-center gap-2">
            <Badge
              variant="default"
              className="to-accent-violet bg-gradient-to-r from-hesaplamalarim-blue font-mono text-micro font-semibold uppercase tracking-wider text-primary-foreground shadow-sm"
            >
              <Sparkles className="mr-1.5 h-3 w-3" />
              {badges[0]}
            </Badge>
            <Badge
              variant="outline"
              className="border-hesaplamalarim-firuze/35 bg-hesaplamalarim-firuze/10 font-mono text-micro font-semibold text-hesaplamalarim-firuze"
            >
              {CALCULATOR_CATEGORIES.length} Kategori • {ALL_CALCULATORS.length}{' '}
              Araç
            </Badge>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-display font-bold tracking-tight text-titanium"
          >
            {hero.title}
          </motion.h1>

          <p className="max-w-2xl font-sans text-body font-normal leading-relaxed text-ash">
            {hero.description}
          </p>

          {/* Anlık Hesaplama Aracı Arama */}
          <div className="relative max-w-xl">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ash" />
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={hero.searchPlaceholder}
              className="h-12 rounded-xl border-gunmetal/80 bg-void-black/80 pl-10 pr-4 font-sans text-body-sm text-titanium placeholder:text-ash/75 focus-visible:ring-hesaplamalarim-blue"
            />
            {searchResults.length > 0 && (
              <div className="absolute left-0 right-0 top-full z-30 mt-2 max-h-72 overflow-y-auto rounded-xl border border-gunmetal/80 bg-obsidian/95 p-2 shadow-2xl backdrop-blur-md">
                {searchResults.map((item) => {
                  const theme = getCategoryTheme(item.categoryId);
                  return (
                    <Link
                      key={item.id}
                      href={`/${item.categoryId}/${item.id}`}
                      onClick={() => setQuery('')}
                      className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-gunmetal/30"
                    >
                      <div className="min-w-0">
                        <div className="truncate font-sans text-compact font-semibold text-titanium">
                          {item.title}
                        </div>
                        <div className="truncate font-sans text-2xs text-ash">
                          {item.description}
                        </div>
                      </div>
                      <span
                        className={cn(
                          'shrink-0 font-mono text-2xs font-bold',
                          theme.text,
                        )}
                      >
                        Aç →
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button
              asChild
              size="default"
              className="to-accent-violet h-11 rounded-xl bg-gradient-to-r from-hesaplamalarim-blue px-5 font-sans text-body-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.02]"
            >
              <Link href="#hesaplama-araclari">
                <Calculator className="mr-2 h-4 w-4" />
                {hero.ctaAction}
                <ArrowDown className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>

            <Button
              asChild
              size="default"
              variant="outline"
              className="h-11 rounded-xl border-gunmetal/80 bg-void-black/60 px-5 font-sans text-body-sm font-semibold text-titanium hover:bg-gunmetal/30"
            >
              <Link href="/finans">
                {hero.secondaryCta}
                <ArrowRight className="ml-1.5 h-4 w-4 text-hesaplamalarim-blue" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Sağ Sütun: Popüler Araçlar & Güven Kartı */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-gunmetal/70 bg-void-black/75 p-5 shadow-inner backdrop-blur-md">
            <div className="mb-4 flex items-center justify-between border-b border-gunmetal/50 pb-3">
              <div>
                <h2 className="font-display text-heading-sm font-bold text-titanium">
                  {hero.quickAccessTitle}
                </h2>
                <p className="font-sans text-2xs text-ash">
                  {hero.quickAccessSubtitle}
                </p>
              </div>
              <ShieldCheck className="h-5 w-5 shrink-0 text-signal-green" />
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {featuredTools.map((tool) => {
                const Icon = getCategoryIcon(tool.categoryId);
                const theme = getCategoryTheme(tool.categoryId);

                return (
                  <Link
                    key={tool.id}
                    href={`/${tool.categoryId}/${tool.id}`}
                    className={cn(
                      'group flex items-center justify-between gap-3 rounded-xl border border-gunmetal/60 bg-obsidian/90 p-3 transition-all hover:bg-obsidian',
                      theme.hoverBorder,
                    )}
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span
                        className={cn(
                          'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border',
                          theme.border,
                          theme.bgSoft,
                          theme.text,
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <div className="truncate font-sans text-compact font-semibold text-titanium">
                          {tool.shortTitle}
                        </div>
                        <div className="truncate font-sans text-2xs text-ash">
                          {tool.fields.length} Parametre
                        </div>
                      </div>
                    </div>
                    <ArrowRight
                      className={cn(
                        'h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1',
                        theme.text,
                      )}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
