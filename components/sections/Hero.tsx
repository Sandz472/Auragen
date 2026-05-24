import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import HeroGlow from '@/components/ui/HeroGlow';
import Reveal from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

type HeroAction = { label: string; href: string; variant?: 'primary' | 'secondary' };

type HeroProps = {
  variant?: 'dark-display' | 'light-page' | 'light-compact';
  eyebrow: string;
  headline: string;
  sub?: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  trustStrip?: string;
};

/**
 * Page hero — three modes (spec §10–§14):
 * - dark-display: home only. Onyx + radial glows + display-size headline.
 * - light-page: standard inner-page hero. Paper bg, h1-size headline.
 * - light-compact: contact page. Same as light-page but tighter vertical rhythm.
 */
export default function Hero({
  variant = 'light-page',
  eyebrow,
  headline,
  sub,
  primaryAction,
  secondaryAction,
  trustStrip,
}: HeroProps) {
  const isDark = variant === 'dark-display';

  // Headline scales — display on Home, h1 elsewhere
  const headlineClass = isDark
    ? 'text-display-mobile md:text-display text-balance text-white'
    : 'text-h1-mobile md:text-h1 text-balance text-ink';

  // Section bg + padding — top must clear the 72px fixed nav; bottom is
  // intentionally tight so the visual gap to the following section comes
  // mostly from the *next* section's top padding, not double-stacked padding.
  const sectionClass = isDark
    ? 'relative overflow-hidden bg-onyx pt-24 pb-10 md:pt-28 md:pb-12 lg:pt-32 lg:pb-14'
    : variant === 'light-compact'
      ? 'relative overflow-hidden bg-paper pt-24 pb-8 md:pt-28 md:pb-10'
      : 'relative overflow-hidden bg-paper pt-24 pb-10 md:pt-28 md:pb-12 lg:pt-32 lg:pb-14';

  return (
    <section className={sectionClass}>
      {isDark && <HeroGlow variant="home" />}
      {!isDark && (
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
        >
          {/* Subtle warm corner glow on light heroes — keeps the "aura" thread without dominating */}
          <div
            className="absolute -right-32 -top-32 h-[60vh] w-[60vh] rounded-full opacity-[0.55]"
            style={{
              background:
                'radial-gradient(circle at center, rgba(232,163,58,0.22) 0%, rgba(232,163,58,0) 60%)',
              filter: 'blur(40px)',
            }}
          />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
              maskImage:
                'radial-gradient(ellipse at 70% 30%, black 0%, transparent 70%)',
              WebkitMaskImage:
                'radial-gradient(ellipse at 70% 30%, black 0%, transparent 70%)',
            }}
          />
        </div>
      )}

      <div className="relative page-container">
        {/* Left-aligned, generous content area — uses more of the wide viewport
            without losing optimal reading measure on the sub-paragraph. */}
        <div className={cn(isDark ? 'max-w-5xl' : 'max-w-4xl')}>
          <Reveal>
            <Eyebrow surface={isDark ? 'dark' : 'light'}>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              className={cn(
                'mt-6 font-display font-semibold leading-[1.02] tracking-[-0.03em]',
                headlineClass,
              )}
            >
              {headline}
            </h1>
          </Reveal>
          {sub && (
            <Reveal delay={0.12}>
              <p
                className={cn(
                  'mt-6 max-w-2xl text-lead',
                  isDark ? 'text-white/75' : 'text-ink-secondary',
                )}
              >
                {sub}
              </p>
            </Reveal>
          )}

          {(primaryAction || secondaryAction) && (
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                {primaryAction && (
                  <Button
                    href={primaryAction.href}
                    variant={primaryAction.variant ?? 'primary'}
                    surface={isDark ? 'dark' : 'light'}
                    arrow="upRight"
                  >
                    {primaryAction.label}
                  </Button>
                )}
                {secondaryAction && (
                  <Button
                    href={secondaryAction.href}
                    variant={secondaryAction.variant ?? 'secondary'}
                    surface={isDark ? 'dark' : 'light'}
                    arrow="right"
                  >
                    {secondaryAction.label}
                  </Button>
                )}
              </div>
            </Reveal>
          )}

          {trustStrip && (
            <Reveal delay={0.3}>
              <p
                className={cn(
                  'mt-12 max-w-2xl text-small',
                  isDark ? 'text-white/50' : 'text-ink-muted',
                )}
              >
                {trustStrip}
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
