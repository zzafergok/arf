'use client';

import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calculator,
  ChevronRight,
} from 'lucide-react';
import { useMemo } from 'react';

import { Badge } from '@/components/core/badge';
import { Button } from '@/components/core/button';
import { Card, CardContent } from '@/components/core/card';
import { Link } from '@/components/core/link';
import { getCategoryIcon } from '@/components/layout/public-navbar';
import { cn } from '@/lib/utils';
import {
  ALL_CALCULATORS,
  CALCULATOR_CATEGORIES,
  CalculatorCategoryMeta,
  getCategoryTheme,
} from '../registry';
import { AnimatedGeometricBackdrop } from './visuals';

interface CategoryDetailScreenProps {
  categoryId?: string;
  category?: CalculatorCategoryMeta;
}

export function CategoryDetailScreen({
  categoryId,
  category: initialCategory,
}: CategoryDetailScreenProps) {
  const category =
    initialCategory ??
    CALCULATOR_CATEGORIES.find((c) => c.id === categoryId) ??
    CALCULATOR_CATEGORIES[0];

  const theme = getCategoryTheme(category.id);
  const tools = useMemo(
    () => ALL_CALCULATORS.filter((c) => c.categoryId === category.id),
    [category.id],
  );

  return (
    <div className="relative mx-auto w-full max-w-[1600px] space-y-8 px-4 py-6 sm:px-6 lg:px-8">
      <AnimatedGeometricBackdrop />

      {/* 1. Üst Navigasyon */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5 font-sans text-compact font-medium text-ash">
          <Link href="/" className="transition-colors hover:text-titanium">
            Ana Sayfa
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className={cn('font-semibold', theme.text)}>
            {category.shortTitle}
          </span>
        </div>

        <Button
          asChild
          size="sm"
          variant="outline"
          className="font-sans text-compact font-semibold"
        >
          <Link href="/">
            <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
            Ana Sayfa
          </Link>
        </Button>
      </div>

      {/* 2. Kategori Başlık Kartı */}
      <div
        className={cn(
          'relative overflow-hidden rounded-2xl border bg-gradient-to-br from-obsidian via-obsidian/95 p-6 shadow-md sm:p-8',
          theme.border,
          theme.gradientFrom,
        )}
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <Badge
              variant="outline"
              className={cn(
                'font-mono text-micro font-semibold',
                theme.border,
                theme.bgSoft,
                theme.text,
              )}
            >
              {tools.length} Hesaplama Ekranı
            </Badge>
            <h1 className="font-display text-heading font-bold tracking-tight text-titanium">
              {category.title}
            </h1>
            <p className="max-w-3xl font-sans text-body-sm font-normal leading-relaxed text-ash">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Alt Hesaplama Ekranları Kart Listesi */}
      <section aria-label="Kategori Hesaplama Ekranları">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="h-full"
            >
              <Link
                href={`/${tool.categoryId}/${tool.id}`}
                className="block h-full"
              >
                <Card
                  className={cn(
                    'relative h-full overflow-hidden border-gunmetal/70 bg-obsidian/95 transition-all hover:shadow-xl',
                    theme.hoverBorder,
                  )}
                >
                  <div
                    className={cn(
                      'pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent to-transparent opacity-75 transition-opacity group-hover/card:opacity-100',
                      theme.topBeam,
                    )}
                  />
                  <div
                    className={cn(
                      'pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-10 blur-2xl transition-opacity group-hover/card:opacity-20',
                      theme.topBar,
                    )}
                  />
                  <CardContent className="flex h-full flex-col justify-start p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={cn(
                            'inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-transform group-hover/card:scale-105',
                            theme.border,
                            theme.bgSoft,
                            theme.text,
                          )}
                        >
                          <Calculator className="h-5 w-5" />
                        </span>
                        <ArrowUpRight
                          className={cn(
                            'h-4 w-4 text-ash transition-all group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5',
                            `group-hover/card:${theme.text}`,
                          )}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <h2 className="font-display text-heading-sm font-bold leading-snug text-titanium">
                          {tool.title}
                        </h2>
                        <p className="line-clamp-2 font-sans text-caption font-normal leading-relaxed text-ash">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Diğer Ana Kategori Rotaları */}
      <section className="space-y-4 border-t border-gunmetal/60 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-heading-sm font-bold text-titanium">
            Diğer Kategoriler
          </h2>
          <span className="font-mono text-2xs text-ash">
            {CALCULATOR_CATEGORIES.length - 1} Kategori
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {CALCULATOR_CATEGORIES.filter((c) => c.id !== category.id).map(
            (cat) => {
              const catTheme = getCategoryTheme(cat.id);
              const CatIcon = getCategoryIcon(cat.id);
              const catCount = ALL_CALCULATORS.filter(
                (item) => item.categoryId === cat.id,
              ).length;

              return (
                <motion.div
                  key={cat.id}
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                >
                  <Link href={`/${cat.id}`} className="block h-full">
                    <Card
                      className={cn(
                        'relative h-full overflow-hidden border-gunmetal/70 bg-obsidian/95 transition-all hover:shadow-lg',
                        catTheme.hoverBorder,
                      )}
                    >
                      <div
                        className={cn(
                          'pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent to-transparent opacity-70 transition-opacity group-hover/card:opacity-100',
                          catTheme.topBeam,
                        )}
                      />
                      <div
                        className={cn(
                          'pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-10 blur-xl transition-opacity group-hover/card:opacity-25',
                          catTheme.topBar,
                        )}
                      />
                      <CardContent className="flex items-center justify-between gap-3 p-3.5">
                        <div className="flex min-w-0 items-center gap-2.5">
                          <span
                            className={cn(
                              'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border',
                              catTheme.border,
                              catTheme.bgSoft,
                              catTheme.text,
                            )}
                          >
                            <CatIcon className="h-4 w-4" />
                          </span>
                          <div className="min-w-0">
                            <div className="truncate font-display text-compact font-bold text-titanium">
                              {cat.shortTitle}
                            </div>
                            <div className="font-mono text-micro text-ash">
                              {catCount} Ekran
                            </div>
                          </div>
                        </div>
                        <ArrowRight
                          className={cn(
                            'h-4 w-4 shrink-0 transition-transform group-hover/card:translate-x-0.5',
                            catTheme.text,
                          )}
                        />
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            },
          )}
        </div>
      </section>
    </div>
  );
}
