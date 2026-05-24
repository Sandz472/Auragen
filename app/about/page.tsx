import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import SectionHeading from '@/components/sections/SectionHeading';
import CtaBanner from '@/components/sections/CtaBanner';
import Reveal from '@/components/ui/Reveal';
import { about, ctas } from '@/lib/copy';

export const metadata: Metadata = {
  title: 'About Aura Gen',
  description:
    'We are a South African technology and consulting company specialising in data intelligence, AI, business intelligence and enterprise integration.',
  alternates: { canonical: '/about/' },
};

export default function AboutPage() {
  return (
    <>
      {/* A1 — Page hero (light) */}
      <Hero
        variant="light-page"
        eyebrow={about.hero.eyebrow}
        headline={about.hero.heading}
        sub={about.hero.lead}
      />

      {/* A2 — Mission and Vision (dark, two-column) */}
      <section className="relative overflow-hidden bg-onyx text-white section-pad">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[40vh] w-full -translate-x-1/2 opacity-40"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(232,163,58,0.18) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
        <div className="relative page-container">
          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
            {[about.missionVision.mission, about.missionVision.vision].map((card, i) => (
              <Reveal key={card.title} delay={i * 0.08}>
                <article
                  className="group relative h-full overflow-hidden rounded-feature bg-navy/70 p-8 ring-1 ring-white/10 transition-all duration-300 ease-aura hover:ring-gold/40 md:p-10 lg:p-12"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="font-mono text-eyebrow uppercase tracking-[0.18em] text-gold"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="h-px flex-1 bg-white/10" aria-hidden />
                  </div>
                  <h2 className="mt-6 text-h2-mobile md:text-h2 font-display font-semibold tracking-[-0.02em] text-white">
                    {card.title}
                  </h2>
                  <p className="mt-5 text-lead text-white/75">{card.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* A3 — Our approach (light) */}
      <section className="bg-paper section-pad">
        <div className="page-container">
          <SectionHeading heading={about.approach.heading} body={about.approach.body} />
        </div>
      </section>

      {/* A4 — Core values (light, 3x2) */}
      <section className="bg-cream section-pad">
        <div className="page-container">
          <Reveal>
            <p className="font-mono text-eyebrow uppercase tracking-[0.18em] text-ink-muted">
              <span className="text-gold">●</span>&nbsp;&nbsp;Core values
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 max-w-2xl text-h2-mobile md:text-h2 font-display font-semibold tracking-[-0.025em] text-ink text-balance">
              The principles that shape how we work.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
            {about.values.map((value, i) => (
              <Reveal key={value.number} delay={i * 0.05}>
                <article className="group relative h-full overflow-hidden rounded-card border border-line bg-paper p-7 transition-all duration-300 ease-aura hover:-translate-y-0.5 hover:border-gold hover:shadow-card-hover">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-h2 font-semibold leading-none text-gold">
                      {value.number}
                    </span>
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-gold/30 transition-colors group-hover:bg-gold"
                      aria-hidden
                    />
                  </div>
                  <h3 className="mt-6 text-h3 font-semibold text-ink tracking-[-0.01em]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">
                    {value.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* A5 — Closing CTA */}
      <CtaBanner
        heading={about.closingCta.heading}
        ctaLabel={ctas.primary.label}
        ctaHref={ctas.primary.href}
        variant="dark-strong"
      />
    </>
  );
}
