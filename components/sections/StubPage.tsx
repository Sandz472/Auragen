import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

type StubPageProps = {
  eyebrow: string;
  heading: string;
  body: string;
  status?: string;
  primaryAction?: { label: string; href: string; external?: boolean };
  backLink?: { label: string; href: string };
};

/**
 * Minimal placeholder page shell used by /insights, /careers, /privacy, /terms
 * until each gets a full build. Matches the site's visual language so a visitor
 * who lands here doesn't feel they've fallen off the edge.
 */
export default function StubPage({
  eyebrow,
  heading,
  body,
  status,
  primaryAction,
  backLink,
}: StubPageProps) {
  return (
    <section className="relative overflow-hidden bg-paper pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Subtle corner glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute -right-32 -top-32 h-[60vh] w-[60vh] rounded-full opacity-[0.4]"
          style={{
            background:
              'radial-gradient(circle at center, rgba(232,163,58,0.2) 0%, rgba(232,163,58,0) 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative page-container">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-6 flex flex-wrap items-baseline gap-4">
              <h1 className="text-h1-mobile md:text-h1 font-display font-semibold tracking-[-0.025em] text-ink text-balance">
                {heading}
              </h1>
              {status && (
                <span
                  className={cn(
                    'inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1',
                    'font-mono text-[11px] uppercase tracking-[0.18em] text-gold-deep',
                  )}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                  {status}
                </span>
              )}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lead text-ink-secondary">{body}</p>
          </Reveal>

          {(primaryAction || backLink) && (
            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                {primaryAction && (
                  primaryAction.external ? (
                    <a
                      href={primaryAction.href}
                      className="group inline-flex items-center gap-2 rounded-btn bg-gold px-5 py-3 text-btn font-medium text-onyx transition-all hover:-translate-y-px hover:bg-gold-soft active:bg-gold-deep focus-ring"
                    >
                      {primaryAction.label}
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </a>
                  ) : (
                    <Link
                      href={primaryAction.href}
                      className="group inline-flex items-center gap-2 rounded-btn bg-gold px-5 py-3 text-btn font-medium text-onyx transition-all hover:-translate-y-px hover:bg-gold-soft active:bg-gold-deep focus-ring"
                    >
                      {primaryAction.label}
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </Link>
                  )
                )}
                {backLink && (
                  <Link
                    href={backLink.href}
                    className="group inline-flex items-center gap-1.5 text-btn text-ink-secondary transition-colors hover:text-ink focus-ring rounded-sm"
                  >
                    <span aria-hidden>←</span>
                    {backLink.label}
                  </Link>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
