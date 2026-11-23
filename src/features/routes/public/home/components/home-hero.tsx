'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Calculator, Sparkles, Trophy } from 'lucide-react';

import { Badge } from '@/components/core/badge';
import { Button } from '@/components/core/button';
import { Link } from '@/components/core/link';
import { ALL_CALCULATORS } from '@/features/calculators/registry';
import type { PublicHomeCopy } from '../types';

export function HomeHero({
  badges,
  hero,
}: {
  badges: PublicHomeCopy['badges'];
  hero: PublicHomeCopy['hero'];
}) {
  return (
    <section className="to-accent-violet/10 relative overflow-hidden rounded-3xl border border-hesaplamalarim-blue/30 bg-gradient-to-br from-obsidian via-obsidian/95 p-6 shadow-xl sm:p-10 lg:p-14">
      {/* Multi-Tone Ambient Gradient Orbs Inside Hero */}
      <motion.div
        animate={{ rotate: [0, 360], scale: [1, 1.15, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rotate-12 rounded-3xl border border-hesaplamalarim-blue/30 bg-gradient-to-br from-hesaplamalarim-blue/15 to-hesaplamalarim-firuze/10"
      />
      <motion.div
        animate={{ rotate: [360, 0], y: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="border-accent-violet/30 from-accent-violet/10 pointer-events-none absolute -bottom-16 -right-12 h-72 w-72 rounded-full border border-dashed bg-gradient-to-tr to-hesaplamalarim-gold/10"
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
          {badges.map((badge, idx) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
            >
              <Badge
                variant={idx === 0 ? 'default' : 'outline'}
                className={
                  idx === 0
                    ? 'to-accent-violet bg-gradient-to-r from-hesaplamalarim-blue font-mono text-micro font-semibold uppercase tracking-wider text-primary-foreground shadow-sm'
                    : 'border-gunmetal/60 bg-void-black/60 font-mono text-micro font-semibold uppercase tracking-wider text-titanium'
                }
              >
                {idx === 0 && <Sparkles className="mr-1 h-3 w-3" />}
                {badge}
              </Badge>
            </motion.div>
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-titanium via-titanium to-hesaplamalarim-blue bg-clip-text font-display text-display font-bold tracking-tight text-transparent"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-4 max-w-3xl font-sans text-body font-normal leading-relaxed text-ash"
        >
          {hero.description}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.18 }}
          className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-hesaplamalarim-firuze/30 bg-hesaplamalarim-firuze/10 px-3.5 py-1 font-sans text-compact font-medium text-hesaplamalarim-firuze"
        >
          Her hesaplama aracı kendi özel sayfasında çalışır; hesaplama yaptıkça
          XP ve kaşif rozetleri kazanırsın.
        </motion.p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            size="default"
            className="to-accent-violet bg-gradient-to-r from-hesaplamalarim-blue font-sans text-body-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.02] hover:opacity-95"
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
            className="border-hesaplamalarim-gold/40 bg-hesaplamalarim-gold/10 font-sans text-body-sm font-semibold text-titanium transition-transform hover:scale-[1.02] hover:bg-hesaplamalarim-gold/20"
          >
            <Link href="/finans">
              <Trophy className="mr-2 h-4 w-4 text-hesaplamalarim-gold" />
              Finans ve {ALL_CALCULATORS.length} Özel Hesaplama Sayfasını Keşfet
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
