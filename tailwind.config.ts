import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core dark palette
        onyx: '#0A0E1A',
        navy: '#111827',
        'slate-deep': '#1F2937',

        // Accent — gold
        gold: {
          DEFAULT: '#E8A33A',
          soft: '#F5C56A',
          deep: '#B4791F',
        },

        // Secondary accent — indigo
        indigo: {
          DEFAULT: '#4F46E5',
          soft: '#818CF8',
        },

        // Development sector accent
        teal: {
          DEFAULT: '#0F766E',
        },

        // Light surfaces
        paper: '#FFFFFF',
        cream: '#FAFAF7',
        line: {
          DEFAULT: '#E5E7EB',
          soft: '#F3F4F6',
        },

        // Text on light
        ink: {
          DEFAULT: '#0F172A',
          secondary: '#334155',
          muted: '#64748B',
        },

        // Semantic
        danger: '#B91C1C',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Space Grotesk', 'sans-serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // Spec type scale (desktop)
        'display': ['64px', { lineHeight: '1.0', letterSpacing: '-0.035em', fontWeight: '600' }],
        'h1': ['44px', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '600' }],
        'h2': ['32px', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h3': ['20px', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['16px', { lineHeight: '1.4', fontWeight: '600' }],
        'lead': ['18px', { lineHeight: '1.55' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'small': ['13px', { lineHeight: '1.5' }],
        'eyebrow': ['12px', { lineHeight: '1.3', letterSpacing: '0.18em' }],
        'btn': ['15px', { lineHeight: '1', letterSpacing: '0.01em', fontWeight: '500' }],

        // Mobile type scale
        'display-mobile': ['40px', { lineHeight: '1.0', letterSpacing: '-0.035em', fontWeight: '600' }],
        'h1-mobile': ['32px', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '600' }],
        'h2-mobile': ['24px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
      },
      borderRadius: {
        'btn': '6px',
        'card': '10px',
        'feature': '16px',
      },
      boxShadow: {
        'card-resting': '0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 12px rgba(15, 23, 42, 0.06)',
        'card-hover': '0 4px 8px rgba(15, 23, 42, 0.06), 0 16px 32px rgba(15, 23, 42, 0.10)',
        'focus-ring': '0 0 0 3px rgba(232, 163, 58, 0.35)',
        'glow-gold': '0 0 120px rgba(232, 163, 58, 0.25)',
        'glow-indigo': '0 0 120px rgba(79, 70, 229, 0.18)',
      },
      maxWidth: {
        // Spec §07 calls for 1280px, but on 1920px+ monitors that left a lot of
        // dead margin per side and read as a narrow centered column. 1680px
        // pulls the visual frame close to the edges of a 1920px viewport
        // (~120px gutter per side) while readability is preserved because the
        // sub-paragraphs stay constrained to max-w-2xl etc. inside the frame.
        'page': '1680px',
      },
      spacing: {
        // Spec uses a 4px base which Tailwind defaults already cover (1=4px, 2=8px, etc.)
        // Just add the larger spec values
        '18': '72px',
        '30': '120px',
      },
      transitionTimingFunction: {
        'aura': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'drift-a': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(40px, -30px) scale(1.05)' },
        },
        'drift-b': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-30px, 40px) scale(0.95)' },
        },
        'fade-rise': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'drift-a': 'drift-a 22s ease-in-out infinite',
        'drift-b': 'drift-b 26s ease-in-out infinite',
        'fade-rise': 'fade-rise 0.4s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
