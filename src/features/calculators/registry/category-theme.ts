import type { CalculatorCategoryId } from './types';

export interface CategoryTheme {
  text: string;
  bgSoft: string;
  border: string;
  hoverBorder: string;
  buttonBg: string;
  gradientFrom: string;
  topBar: string;
}

const CATEGORY_THEMES: Record<CalculatorCategoryId, CategoryTheme> = {
  finans: {
    text: 'text-hesaplamalarim-blue',
    bgSoft: 'bg-hesaplamalarim-blue/12',
    border: 'border-hesaplamalarim-blue/35',
    hoverBorder: 'hover:border-hesaplamalarim-blue/60',
    buttonBg: 'bg-hesaplamalarim-blue hover:bg-hesaplamalarim-blue/90',
    gradientFrom: 'from-hesaplamalarim-blue/15',
    topBar: 'bg-hesaplamalarim-blue',
  },
  'bordro-vergi': {
    text: 'text-accent-violet',
    bgSoft: 'bg-accent-violet/12',
    border: 'border-accent-violet/35',
    hoverBorder: 'hover:border-accent-violet/60',
    buttonBg: 'bg-accent-violet hover:bg-accent-violet/90',
    gradientFrom: 'from-accent-violet/15',
    topBar: 'bg-accent-violet',
  },
  'gunluk-alisveris': {
    text: 'text-accent-amber',
    bgSoft: 'bg-accent-amber/12',
    border: 'border-accent-amber/35',
    hoverBorder: 'hover:border-accent-amber/60',
    buttonBg: 'bg-accent-amber hover:bg-accent-amber/90',
    gradientFrom: 'from-accent-amber/15',
    topBar: 'bg-accent-amber',
  },
  'saglik-beslenme': {
    text: 'text-signal-green',
    bgSoft: 'bg-signal-green/12',
    border: 'border-signal-green/35',
    hoverBorder: 'hover:border-signal-green/60',
    buttonBg: 'bg-signal-green hover:bg-signal-green/90',
    gradientFrom: 'from-signal-green/15',
    topBar: 'bg-signal-green',
  },
  'gayrimenkul-hukuk': {
    text: 'text-hesaplamalarim-gold',
    bgSoft: 'bg-hesaplamalarim-gold/12',
    border: 'border-hesaplamalarim-gold/35',
    hoverBorder: 'hover:border-hesaplamalarim-gold/60',
    buttonBg: 'bg-hesaplamalarim-gold hover:bg-hesaplamalarim-gold/90',
    gradientFrom: 'from-hesaplamalarim-gold/15',
    topBar: 'bg-hesaplamalarim-gold',
  },
  'zaman-takvim': {
    text: 'text-hesaplamalarim-firuze',
    bgSoft: 'bg-hesaplamalarim-firuze/12',
    border: 'border-hesaplamalarim-firuze/35',
    hoverBorder: 'hover:border-hesaplamalarim-firuze/60',
    buttonBg: 'bg-hesaplamalarim-firuze hover:bg-hesaplamalarim-firuze/90',
    gradientFrom: 'from-hesaplamalarim-firuze/15',
    topBar: 'bg-hesaplamalarim-firuze',
  },
  'matematik-muhendislik': {
    text: 'text-accent-rose',
    bgSoft: 'bg-accent-rose/12',
    border: 'border-accent-rose/35',
    hoverBorder: 'hover:border-accent-rose/60',
    buttonBg: 'bg-accent-rose hover:bg-accent-rose/90',
    gradientFrom: 'from-accent-rose/15',
    topBar: 'bg-accent-rose',
  },
};

export function getCategoryTheme(categoryId: string): CategoryTheme {
  return (
    CATEGORY_THEMES[categoryId as CalculatorCategoryId] ??
    CATEGORY_THEMES.finans
  );
}
