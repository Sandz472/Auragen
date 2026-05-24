import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import CtaBanner from '@/components/sections/CtaBanner';
import ChipList from '@/components/ui/ChipList';
import Reveal from '@/components/ui/Reveal';
import { sectorsPage, ctas } from '@/lib/copy';
import { sectors } from '@/lib/sectors';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sectors',
  description: 'We work across the public, private and development sectors in South Africa.',
  alternates: { canonical: '/sectors/' },
};

const accentClasses = {
  indigo: { dot: 'bg-indigo', text: 'text-indigo', line: 'bg-indigo' },
  gold: { dot: 'bg-gold', text: 'text-gold-deep', line: 'bg-gold' },
  teal: { dot: 'bg-teal', text: 'text-teal', line: 'bg-teal' },
};

export default function SectorsPage() {
  return (
    <>
      <Hero
        variant="light-page"
        eyebrow={sectorsPage.hero.eyebrow}
        headline={sectorsPage.hero.heading}
        sub={sectorsPage.hero.lead}
      />

      <div className="bg-paper">
        <div className="page-container">
          <ol className="divide-y divide-line">
            {sectors.map((sector, i) => {
              const accent = accentClasses[sector.accent];
              return (
                <li key={sector.id} id={sector.id} className="scroll-mt-32">
                  <article className="grid grid-cols-1 gap-8 py-16 md:gap-12 md:py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
                    {/* Left column — sector index + accent */}
                    <div className="lg:col-span-4">
                      <Reveal>
                        <div className="flex items-center gap-3">
                          <span
                            className={cn('h-2.5 w-2.5 rounded-full', accent.dot)}
                            aria-hidden
                          />
                          <span
                            className={cn(
                              'font-mono text-eyebrow uppercase tracking-[0.18em]',
                              accent.text,
                            )}
                          >
                            Sector {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <h2 className="mt-4 text-h2-mobile md:text-h2 font-display font-semibold tracking-[-0.025em] text-ink text-balance">
                          {sector.title}
                        </h2>
                        <span
                          className={cn('mt-6 block h-[2px] w-16', accent.line)}
                          aria-hidden
                        />
                      </Reveal>
                    </div>

                    {/* Right column — content */}
                    <div className="lg:col-span-8">
                      <Reveal delay={0.05}>
                        <p className="text-lead text-ink-secondary text-balance">
                          {sector.lead}
                        </p>
                      </Reveal>
                      <Reveal delay={0.1}>
                        <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-ink-secondary">
                          {sector.body}
                        </p>
                      </Reveal>

                      <Reveal delay={0.15}>
                        <div className="mt-10">
                          <h3 className="font-mono text-eyebrow uppercase tracking-[0.18em] text-ink-muted">
                            Who we serve
                          </h3>
                          <ChipList items={sector.serves} className="mt-4" />
                        </div>
                      </Reveal>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <CtaBanner
        heading={sectorsPage.closingCta.heading}
        sub={sectorsPage.closingCta.sub}
        ctaLabel={ctas.primary.label}
        ctaHref={ctas.primary.href}
        variant="dark-strong"
      />
    </>
  );
}
