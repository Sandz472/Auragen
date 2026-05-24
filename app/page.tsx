import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import SectionHeading from '@/components/sections/SectionHeading';
import CtaBanner from '@/components/sections/CtaBanner';
import ServiceCard from '@/components/ui/ServiceCard';
import SectorCard from '@/components/ui/SectorCard';
import Reveal from '@/components/ui/Reveal';
import Eyebrow from '@/components/ui/Eyebrow';
import { home, pillars, ctas, seo } from '@/lib/copy';
import { sectors } from '@/lib/sectors';

export const metadata: Metadata = {
  title: seo.defaultTitle,
  description: seo.defaultDescription,
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      {/* H1 — Hero (dark) */}
      <Hero
        variant="dark-display"
        eyebrow={home.hero.eyebrow}
        headline={home.hero.headline}
        sub={home.hero.sub}
        primaryAction={{ label: 'Start a conversation', href: ctas.primary.href }}
        secondaryAction={{ label: 'Explore services', href: ctas.secondary.href }}
        trustStrip={home.hero.trustStrip}
      />

      {/* H2 — What we do (light) */}
      <section className="bg-paper section-pad">
        <div className="page-container">
          <SectionHeading
            eyebrow={home.whatWeDo.eyebrow}
            heading={home.whatWeDo.heading}
            body={home.whatWeDo.body}
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 md:mt-16">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <ServiceCard
                  icon={p.icon}
                  title={p.title}
                  body={p.body}
                  href={`/services${p.anchor}`}
                  number={String(i + 1).padStart(2, '0')}
                  className="h-full"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* H3 — Sectors (dark) */}
      <section className="relative overflow-hidden bg-onyx text-white section-pad">
        {/* Atmospheric backdrop */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute left-1/2 top-0 h-[40vh] w-[80vh] -translate-x-1/2 opacity-50"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(232,163,58,0.18) 0%, transparent 60%)',
              filter: 'blur(80px)',
            }}
          />
        </div>
        <div className="relative page-container">
          <SectionHeading
            eyebrow={home.sectors.eyebrow}
            heading={home.sectors.heading}
            body={home.sectors.body}
            surface="dark"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-5 md:mt-16">
            {sectors.map((sector, i) => (
              <Reveal key={sector.id} delay={i * 0.08}>
                <SectorCard sector={sector} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* H4 — Our promise (light, two-column) */}
      <section className="bg-cream section-pad">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow={home.promise.eyebrow}
                heading={home.promise.heading}
                body={home.promise.body}
              />
            </div>
            <div className="lg:col-span-6 lg:pt-2">
              <Reveal>
                <ul className="divide-y divide-line">
                  {home.promise.outcomes.map((outcome, i) => (
                    <li
                      key={outcome}
                      className="group flex items-baseline gap-5 py-4 first:pt-0 last:pb-0"
                    >
                      <span
                        className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted/70"
                        aria-hidden
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="flex flex-1 items-baseline gap-3">
                        <span className="inline-block h-px w-6 bg-gold" aria-hidden />
                        <span className="text-[17px] font-medium text-ink tracking-[-0.005em]">
                          {outcome}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* H5 — Why organisations choose Aura Gen (dark) */}
      <section className="relative overflow-hidden bg-onyx text-white section-pad">
        <div
          className="pointer-events-none absolute right-[-15%] bottom-[-30%] h-[60vh] w-[60vh] opacity-60"
          aria-hidden
          style={{
            background:
              'radial-gradient(circle at center, rgba(79,70,229,0.28) 0%, transparent 60%)',
            filter: 'blur(120px)',
          }}
        />
        <div className="relative page-container">
          <Reveal>
            <h2 className="text-h2-mobile md:text-h2 max-w-2xl font-display font-semibold tracking-[-0.025em] text-white text-balance">
              {home.why.heading}
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-0 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
            {home.why.reasons.map((reason, i) => (
              <Reveal key={reason} delay={i * 0.04}>
                <div
                  className="group relative flex h-full items-start gap-4 border-t border-white/10 py-6 transition-colors hover:border-gold/50"
                >
                  <span
                    className="font-mono text-eyebrow uppercase tracking-[0.18em] text-gold"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[15.5px] leading-relaxed text-white/85">
                    {reason}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* H6 — Closing CTA banner */}
      <CtaBanner
        heading={home.closingCta.heading}
        sub={home.closingCta.sub}
        ctaLabel={ctas.primary.label}
        ctaHref={ctas.primary.href}
        variant="dark-strong"
      />
    </>
  );
}
