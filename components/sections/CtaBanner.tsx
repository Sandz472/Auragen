import Button from '@/components/ui/Button';
import HeroGlow from '@/components/ui/HeroGlow';
import Reveal from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

type CtaBannerProps = {
  heading: string;
  sub?: string;
  ctaLabel: string;
  ctaHref: string;
  variant?: 'dark-strong' | 'dark-subtle';
};

/**
 * Closing CTA banner used across pages. Two flavours:
 * - dark-strong: thick gold lighting (used at end of long pages like Home/Services)
 * - dark-subtle: quieter, smaller — used at end of About / Sectors / Contact
 */
export default function CtaBanner({
  heading,
  sub,
  ctaLabel,
  ctaHref,
  variant = 'dark-strong',
}: CtaBannerProps) {
  const strong = variant === 'dark-strong';
  return (
    <section className="relative bg-onyx text-white">
      <div className="page-container">
        <div
          className={cn(
            'relative overflow-hidden rounded-feature my-16 md:my-24',
            strong ? 'bg-navy' : 'bg-navy/60',
            'border border-white/5',
          )}
        >
          {strong && <HeroGlow variant="subtle" />}
          {/* corner mark — a subtle gold L-shaped frame in the top-right */}
          <div className="pointer-events-none absolute right-0 top-0" aria-hidden>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <path d="M0 0 H80 V80" stroke="rgba(232,163,58,0.45)" strokeWidth="1" />
            </svg>
          </div>

          <div className="relative px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
            <div className="max-w-3xl">
              <Reveal>
                <h2 className="text-h2-mobile md:text-h2 lg:text-[40px] font-display font-semibold leading-[1.08] tracking-[-0.025em] text-white text-balance">
                  {heading}
                </h2>
              </Reveal>
              {sub && (
                <Reveal delay={0.08}>
                  <p className="mt-5 max-w-xl text-lead text-white/70">{sub}</p>
                </Reveal>
              )}
              <Reveal delay={0.15}>
                <div className="mt-9">
                  <Button href={ctaHref} variant="primary" surface="dark" arrow="upRight">
                    {ctaLabel}
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
