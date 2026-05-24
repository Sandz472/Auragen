import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import CtaBanner from '@/components/sections/CtaBanner';
import AnchorStrip from '@/components/sections/AnchorStrip';
import IconBadge from '@/components/ui/IconBadge';
import Reveal from '@/components/ui/Reveal';
import { servicesPage, ctas } from '@/lib/copy';
import { services } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Nine capabilities across data, AI, BI, integration, governance, IT strategy and specialist IT talent solutions.',
  alternates: { canonical: '/services/' },
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        variant="light-page"
        eyebrow={servicesPage.hero.eyebrow}
        headline={servicesPage.hero.heading}
        sub={servicesPage.hero.lead}
      />

      <AnchorStrip />

      <div className="bg-paper">
        <div className="page-container">
          <ol className="divide-y divide-line">
            {services.map((service, i) => {
              const isEven = i % 2 === 0;
              return (
                <li key={service.id} id={service.id} className="scroll-mt-40">
                  <article className="grid grid-cols-1 gap-8 py-16 md:gap-12 md:py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
                    {/* Left column — number + icon + capability label */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                      <Reveal>
                        <div className="flex items-baseline gap-4">
                          <span
                            className="font-display text-[64px] leading-none font-semibold tracking-[-0.04em] text-gold"
                            aria-hidden
                          >
                            {service.number}
                          </span>
                          <span className="h-px flex-1 bg-line lg:hidden" aria-hidden />
                        </div>
                        <div className="mt-5 flex items-center gap-3">
                          <IconBadge icon={service.icon} size="md" tone="gold" />
                          <span className="font-mono text-eyebrow uppercase tracking-[0.18em] text-ink-muted">
                            Capability
                          </span>
                        </div>
                      </Reveal>
                    </div>

                    {/* Right column — text content */}
                    <div className="lg:col-span-8">
                      <Reveal delay={0.05}>
                        <h2 className="text-h2-mobile md:text-h2 font-display font-semibold tracking-[-0.025em] text-ink text-balance">
                          {service.title}
                        </h2>
                      </Reveal>
                      <Reveal delay={0.1}>
                        <p className="mt-5 text-lead text-ink-secondary">{service.lead}</p>
                      </Reveal>
                      <Reveal delay={0.15}>
                        <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-ink-secondary">
                          {service.body}
                        </p>
                      </Reveal>

                      {/* Decorative end-of-section mark, alternating side */}
                      <div className="mt-10 flex items-center gap-3" aria-hidden>
                        <span
                          className={`h-px ${isEven ? 'w-12 bg-gold' : 'w-8 bg-ink/15'}`}
                        />
                        <span
                          className={`h-px ${isEven ? 'w-8 bg-ink/15' : 'w-12 bg-gold'}`}
                        />
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <CtaBanner
        heading={servicesPage.closingCta.heading}
        sub={servicesPage.closingCta.sub}
        ctaLabel={ctas.primary.label}
        ctaHref={ctas.primary.href}
        variant="dark-strong"
      />
    </>
  );
}
