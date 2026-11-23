'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calculator, ChevronRight } from 'lucide-react';
import { useMemo } from 'react';

import { Badge } from '@/components/core/badge';
import { Button } from '@/components/core/button';
import { Card, CardContent } from '@/components/core/card';
import { Link } from '@/components/core/link';
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
                  <div className={cn('h-1.5 w-full', theme.topBar)} />
                  <CardContent className="flex h-full flex-col justify-between p-5">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={cn(
                            'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
                            theme.border,
                            theme.bgSoft,
                            theme.text,
                          )}
                        >
                          <Calculator className="h-5 w-5" />
                        </span>
                        <Badge
                          variant="outline"
                          className="border-gunmetal/70 font-mono text-micro font-semibold text-ash"
                        >
                          {tool.fields.length} Parametre
                        </Badge>
                      </div>

                      <div>
                        <h2 className="font-display text-heading-sm font-bold text-titanium">
                          {tool.title}
                        </h2>
                        <p className="mt-1.5 font-sans text-caption font-normal leading-relaxed text-ash">
                          {tool.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-gunmetal/60 pt-3">
                      <span className="font-sans text-2xs font-medium text-ash">
                        {tool.shortTitle}
                      </span>
                      <span
                        className={cn(
                          'font-mono text-compact font-bold',
                          theme.text,
                        )}
                      >
                        Ekranı Aç →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Diğer Ana Kategori Rotaları */}
      <div className="flex flex-wrap items-center gap-2 border-t border-gunmetal/60 pt-6">
        <span className="mr-2 font-sans text-2xs font-semibold text-ash">
          Diğer Kategoriler:
        </span>
        {CALCULATOR_CATEGORIES.filter((c) => c.id !== category.id).map((cat) => (
          <Button
            key={cat.id}
            asChild
            variant="outline"
            size="sm"
            className="font-sans text-compact font-semibold"
          >
            <Link href={`/${cat.id}`}>{cat.shortTitle}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
