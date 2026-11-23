'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, ChevronRight, Share2 } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/core/button';
import { Card, CardContent } from '@/components/core/card';
import { Link } from '@/components/core/link';
import { cn } from '@/lib/utils';
import {
  ALL_CALCULATORS,
  CALCULATOR_CATEGORIES,
  CalculatorDefinition,
  getCategoryTheme,
} from '../registry';
import { DynamicCalculatorCard } from './dynamic-calculator-card';
import { AnimatedGeometricBackdrop } from './visuals';

interface CalculatorDetailScreenProps {
  calculatorId: string;
  categoryId?: string;
  calculator?: CalculatorDefinition;
}

export function CalculatorDetailScreen({
  calculatorId,
  categoryId,
  calculator: initialCalculator,
}: CalculatorDetailScreenProps) {
  const [copied, setCopied] = useState(false);

  const calculator =
    initialCalculator ??
    ALL_CALCULATORS.find(
      (c) =>
        c.id === calculatorId && (!categoryId || c.categoryId === categoryId),
    ) ??
    ALL_CALCULATORS.find((c) => c.id === calculatorId) ??
    ALL_CALCULATORS[0];

  const categoryMeta =
    CALCULATOR_CATEGORIES.find((c) => c.id === calculator.categoryId) ??
    CALCULATOR_CATEGORIES[0];
  const theme = getCategoryTheme(calculator.categoryId);

  const categoryTools = ALL_CALCULATORS.filter(
    (c) => c.categoryId === calculator.categoryId,
  );
  const siblingCalculators = categoryTools.filter(
    (c) => c.id !== calculator.id,
  );

  const handleCopyUrl = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-[1600px] space-y-8 px-4 py-6 sm:px-6 lg:px-8">
      <AnimatedGeometricBackdrop />

      {/* 1. Üst Navigasyon & Paylaşım Çubuğu */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5 font-sans text-compact font-medium text-ash">
          <Link href="/" className="transition-colors hover:text-titanium">
            Ana Sayfa
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link
            href={`/${categoryMeta.id}`}
            className="transition-colors hover:text-titanium"
          >
            {categoryMeta.shortTitle}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className={cn('font-semibold', theme.text)}>
            {calculator.shortTitle}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={handleCopyUrl}
            className="font-sans text-compact font-semibold"
          >
            <Share2 className="mr-1.5 h-3.5 w-3.5" />
            {copied ? 'Bağlantı Kopyalandı!' : 'Sayfa Linkini Paylaş'}
          </Button>
          <Button
            asChild
            size="sm"
            variant="ghost"
            className="font-sans text-compact font-semibold"
          >
            <Link href={`/${categoryMeta.id}`}>
              <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
              {categoryMeta.shortTitle}
            </Link>
          </Button>
        </div>
      </div>

      {/* 2. Kategori İçi Alt Route Sekmeleri */}
      <div className="flex flex-wrap items-center gap-2.5">
        {categoryTools.map((tool) => {
          const isActive = tool.id === calculator.id;

          return (
            <Button
              key={tool.id}
              asChild
              variant={isActive ? 'default' : 'outline'}
              className={cn(
                'h-auto gap-2 rounded-xl px-4 py-2 font-sans text-compact font-semibold transition-all',
                isActive
                  ? cn(
                      theme.buttonBg,
                      'border-transparent text-primary-foreground shadow-md',
                    )
                  : cn(
                      'border-gunmetal/70 bg-obsidian/90 text-titanium hover:bg-gunmetal/30',
                      theme.hoverBorder,
                    ),
              )}
            >
              <Link href={`/${tool.categoryId}/${tool.id}`}>
                <span>{tool.shortTitle}</span>
              </Link>
            </Button>
          );
        })}
      </div>

      {/* 3. Ana Hesaplama Modülü */}
      <DynamicCalculatorCard calculator={calculator} showFullPageLink={false} />

      {/* 4. Aynı Kategorideki Diğer Hesaplama Araçları */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display text-heading-sm font-bold text-titanium">
              {categoryMeta.shortTitle} Kategorisindeki Diğer Araçlar
            </h2>
            <p className="font-sans text-caption font-normal text-ash">
              Aynı kategori altındaki diğer hesaplama araçlarına hızlı geçiş
              yapın.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="font-sans text-compact font-semibold"
          >
            <Link href={`/${categoryMeta.id}`}>Kategoriyi Gör</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siblingCalculators.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Link
                href={`/${item.categoryId}/${item.id}`}
                className="block h-full"
              >
                <Card
                  className={cn(
                    'relative h-full overflow-hidden border-gunmetal/70 bg-obsidian/95 transition-all hover:shadow-lg',
                    theme.hoverBorder,
                  )}
                >
                  <div
                    className={cn(
                      'pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent to-transparent opacity-70 transition-opacity group-hover/card:opacity-100',
                      theme.topBeam,
                    )}
                  />
                  <CardContent className="flex h-full flex-col justify-start p-5">
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display text-body-sm font-bold leading-snug text-titanium">
                          {item.title}
                        </h3>
                        <ArrowUpRight
                          className={cn(
                            'mt-0.5 h-4 w-4 shrink-0 text-ash transition-transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5',
                            theme.text,
                          )}
                        />
                      </div>
                      <p className="line-clamp-2 font-sans text-compact font-normal leading-relaxed text-ash">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
