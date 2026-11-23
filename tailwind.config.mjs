/** @type {import('tailwindcss').Config} */

const SHADES = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];

/**
 * Generates a full 50-950 shade scale along with DEFAULT and optional foreground.
 * @param {string} name - Base CSS variable prefix (e.g. 'primary')
 * @param {string} [defaultVar] - CSS variable for DEFAULT (defaults to name)
 * @param {boolean} [hasForeground] - Whether to include foreground token
 */
const createColorScale = (name, defaultVar = name, hasForeground = false) => {
  const scale = {
    DEFAULT: `hsl(var(--${defaultVar}) / <alpha-value>)`,
  };

  for (const shade of SHADES) {
    scale[shade] = `hsl(var(--${name}-${shade}, var(--${name})) / <alpha-value>)`;
  }

  if (hasForeground) {
    scale.foreground = `hsl(var(--${name}-foreground) / <alpha-value>)`;
  }

  return scale;
};

const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '!./src/**/*.test.{js,ts,jsx,tsx,mdx}',
    '!./src/**/*.spec.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        desktop: '1440px',
      },
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',

        /* 50-950 Scales with Semantic Tokens */
        primary: createColorScale('primary', 'primary', true),
        neutral: createColorScale('neutral', 'neutral', true),
        slate: createColorScale('neutral', 'neutral', true),
        secondary: createColorScale('secondary', 'secondary', true),
        muted: createColorScale('muted', 'muted', true),
        accent: createColorScale('accent', 'accent', true),
        destructive: createColorScale('error', 'destructive', true),

        success: createColorScale('success', 'success'),
        warning: createColorScale('warning', 'warning'),
        error: createColorScale('error', 'error'),
        info: createColorScale('info', 'info'),

        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
        },
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',

        /* Brand & Adaptive Identity Tokens (Light/Dark Responsive) */
        'void-black': createColorScale('void-black', 'void-black'),
        obsidian: createColorScale('obsidian', 'obsidian'),
        gunmetal: createColorScale('gunmetal', 'gunmetal'),
        titanium: createColorScale('titanium', 'titanium'),
        ash: createColorScale('ash', 'ash'),

        'hesaplamalarim-blue': createColorScale('hesaplamalarim-blue', 'hesaplamalarim-blue'),
        'hesaplamalarim-gold': createColorScale('warning', 'hesaplamalarim-gold'),
        'hesaplamalarim-firuze': 'hsl(var(--hesaplamalarim-firuze) / <alpha-value>)',
        'hesaplamalarim-cosmic': 'hsl(var(--hesaplamalarim-cosmic) / <alpha-value>)',
        'accent-violet': 'hsl(var(--accent-violet) / <alpha-value>)',
        'accent-amber': 'hsl(var(--accent-amber) / <alpha-value>)',
        'accent-rose': 'hsl(var(--accent-rose) / <alpha-value>)',
        'signal-green': createColorScale('success', 'signal-green'),
        'alert-red': createColorScale('error', 'alert-red'),
      },

      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: [
          'var(--font-space-grotesk)',
          'var(--font-sans)',
          'sans-serif',
        ],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },

      fontSize: {
        micro: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.015em' }],
        '2xs': ['0.8125rem', { lineHeight: '1.15rem', letterSpacing: '0.01em' }],
        compact: ['0.875rem', { lineHeight: '1.3rem' }],
        caption: ['0.9375rem', { lineHeight: '1.45rem' }],
        'body-sm': ['1rem', { lineHeight: '1.55rem' }],
        body: ['1.0625rem', { lineHeight: '1.7rem' }],
        'heading-sm': [
          '1.25rem',
          { lineHeight: '1.35', letterSpacing: '-0.015em' },
        ],
        heading: [
          '1.75rem',
          { lineHeight: '1.22', letterSpacing: '-0.02em' },
        ],
        metric: [
          '2.125rem',
          { lineHeight: '1.15', letterSpacing: '-0.025em' },
        ],
        display: [
          'clamp(2.25rem, 4vw, 3.5rem)',
          { lineHeight: '1.12', letterSpacing: '-0.03em' },
        ],
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
      },
    },
  },
  plugins: [],
};

export default config;
