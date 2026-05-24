import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  heading: string;
  body?: ReactNode;
  surface?: 'light' | 'dark';
  align?: 'left' | 'center';
  className?: string;
};

/**
 * Standardised section header — eyebrow + h2 + optional lead paragraph.
 * Used throughout to keep vertical rhythm and type sizing consistent.
 */
export default function SectionHeading({
  eyebrow,
  heading,
  body,
  surface = 'light',
  align = 'left',
  className,
}: SectionHeadingProps) {
  const headingColor = surface === 'dark' ? 'text-white' : 'text-ink';
  const bodyColor = surface === 'dark' ? 'text-white/70' : 'text-ink-secondary';

  return (
    <header
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow surface={surface}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            'mt-5 font-display font-semibold tracking-[-0.025em] text-balance',
            'text-h2-mobile md:text-h2',
            headingColor,
          )}
        >
          {heading}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={0.1}>
          <div className={cn('mt-5 max-w-2xl text-lead', bodyColor, align === 'center' && 'mx-auto')}>
            {body}
          </div>
        </Reveal>
      )}
    </header>
  );
}
