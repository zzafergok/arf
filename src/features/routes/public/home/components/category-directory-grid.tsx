'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

import { Badge } from '@/components/core/badge';
import { Card, CardContent } from '@/components/core/card';
import { Link } from '@/components/core/link';
import { getCategoryIcon } from '@/components/layout/public-navbar';
import { MEVZUAT_2026 } from '@/config/payroll';
import {
  ALL_CALCULATORS,
  CALCULATOR_CATEGORIES,
  getCategoryTheme,
} from '@/features/calculators/registry';
import { formatCurrency } from '@/lib/utils';

export function CategoryDirectoryGrid() {
  const tl = (amount: number) => formatCurrency(amount, 'TRY', 'tr-TR');

  return (
    <div className="w-full space-y-8">
      {/* Başlık Bölümü */}
      <div className="flex flex-col justify-between gap-3 border-b border-gunmetal/60 pb-5 md:flex-row md:items-end">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <Badge
              variant="default"
              className="font-mono text-micro font-semibold uppercase tracking-wider"
            >
              {CALCULATOR_CATEGORIES.length} Ana Kategori •{' '}
              {ALL_CALCULATORS.length} Hesaplama Ekranı
            </Badge>
          </div>
          <h2 className="font-display text-heading font-bold tracking-tight text-titanium">
            Tüm Hesaplama Kategorileri
          </h2>
          <p className="mt-1 max-w-2xl font-sans text-body-sm font-normal text-ash">
            İlgilendiğiniz ana kategoriyi açarak altındaki tüm hesaplama
            ekranlarına ulaşabilir veya doğrudan istediğiniz araca
            geçebilirsiniz.
          </p>
        </div>
      </div>

      {/* 7 Kategori + 1 Mevzuat Özeti (4x2 Dengeli Grid) */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {CALCULATOR_CATEGORIES.map((cat, idx) => {
          const Icon = getCategoryIcon(cat.id);
          const theme = getCategoryTheme(cat.id);
          const tools = ALL_CALCULATORS.filter((c) => c.categoryId === cat.id);

          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card
                className={`relative flex h-full flex-col justify-between overflow-hidden border-gunmetal/60 bg-obsidian/95 transition-all ${theme.hoverBorder} hover:shadow-xl`}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent ${theme.topBeam} to-transparent opacity-75 transition-opacity group-hover/card:opacity-100`}
                />
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full ${theme.topBar} opacity-10 blur-2xl transition-opacity group-hover/card:opacity-20`}
                />
                <CardContent className="flex h-full flex-col justify-start p-6">
                  <div className="space-y-4">
                    <Link
                      href={`/${cat.id}`}
                      className="group/header block space-y-3"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`flex h-11 w-11 items-center justify-center rounded-xl border ${theme.border} ${theme.bgSoft} ${theme.text} shadow-sm transition-transform group-hover/header:scale-105`}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <ArrowUpRight
                          className={`h-4 w-4 text-ash transition-transform group-hover/header:-translate-y-0.5 group-hover/header:translate-x-0.5 ${theme.text}`}
                        />
                      </div>

                      <div className="space-y-1">
                        <h3 className="font-display text-heading-sm font-bold leading-snug text-titanium transition-colors group-hover/header:text-primary">
                          {cat.title}
                        </h3>
                        <p className="line-clamp-2 font-sans text-caption font-normal leading-relaxed text-ash">
                          {cat.description}
                        </p>
                      </div>
                    </Link>

                    {/* Alt Route Listesi */}
                    <div className="space-y-1 border-t border-gunmetal/40 pt-3">
                      {tools.map((tool) => (
                        <Link
                          key={tool.id}
                          href={`/${tool.categoryId}/${tool.id}`}
                          className="group flex items-center justify-between rounded-md px-2 py-1.5 font-sans text-compact font-medium text-titanium transition-colors hover:bg-gunmetal/25"
                        >
                          <span className="truncate">{tool.shortTitle}</span>
                          <span
                            className={`font-mono text-2xs font-bold text-ash transition-transform group-hover:translate-x-0.5 ${theme.text}`}
                          >
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}

        {/* 8. Kart: 2026 Mevzuat & Parametre Özeti */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          className="h-full"
        >
          <Card className="relative flex h-full flex-col justify-between overflow-hidden border-signal-green/35 bg-gradient-to-br from-obsidian via-obsidian/95 to-signal-green/10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-signal-green to-transparent opacity-80" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-signal-green opacity-10 blur-2xl" />
            <CardContent className="flex h-full flex-col justify-start p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="bg-signal-green/12 flex h-11 w-11 items-center justify-center rounded-xl border border-signal-green/35 text-signal-green">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <Badge
                    variant="outline"
                    className="bg-signal-green/12 border-signal-green/35 font-mono text-micro font-semibold text-signal-green"
                  >
                    {MEVZUAT_2026.yil} Mevzuatı
                  </Badge>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-heading-sm font-bold leading-snug text-titanium">
                    Güncel Yasal Parametreler
                  </h3>
                  <p className="font-sans text-caption font-normal leading-relaxed text-ash">
                    Tüm bordro, tazminat ve vergi motorları aşağıdaki güncel
                    resmi değerlerle çalışır.
                  </p>
                </div>

                <div className="space-y-2.5 border-t border-gunmetal/40 pt-3">
                  <div className="flex items-center justify-between font-sans text-compact">
                    <span className="text-ash">Kıdem Tavanı</span>
                    <span className="font-mono font-bold tabular-nums text-titanium">
                      {tl(MEVZUAT_2026.kidemTavani)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between font-sans text-compact">
                    <span className="text-ash">Brüt Asgari Ücret</span>
                    <span className="font-mono font-bold tabular-nums text-titanium">
                      {tl(MEVZUAT_2026.brutAsgariUcret)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between font-sans text-compact">
                    <span className="text-ash">Gelir Vergisi Dilimleri</span>
                    <span className="font-mono font-bold tabular-nums text-signal-green">
                      %15 – %40
                    </span>
                  </div>
                  <div className="flex items-center justify-between font-sans text-compact">
                    <span className="text-ash">Damga Vergisi</span>
                    <span className="font-mono font-bold tabular-nums text-titanium">
                      ‰7,59
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
