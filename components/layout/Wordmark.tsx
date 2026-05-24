import Link from 'next/link';
import { cn } from '@/lib/utils';
import { brand } from '@/lib/copy';

type WordmarkProps = {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md';
  href?: string | null;
};

/**
 * The Aura Gen wordmark.
 *
 * Per spec §08, this is the primary brand mark: a small gold dot accent before
 * the word "Aura Gen" set in the display face. The dot doubles as a soft glow
 * source on hover to reinforce the "aura" metaphor without being literal.
 */
export default function Wordmark({
  variant = 'light',
  size = 'md',
  href = '/',
}: WordmarkProps) {
  const textColor = variant === 'dark' ? 'text-white' : 'text-ink';
  const sizing =
    size === 'sm'
      ? { text: 'text-[16px]', dot: 'h-1.5 w-1.5' }
      : { text: 'text-[18px]', dot: 'h-2 w-2' };

  const inner = (
    <span
      className={cn(
        'group inline-flex items-center gap-2.5 font-display font-semibold tracking-[-0.01em]',
        textColor,
        sizing.text,
      )}
    >
      <span className="relative inline-flex">
        <span
          className={cn(
            'inline-block rounded-full bg-gold transition-shadow duration-300 ease-aura group-hover:shadow-[0_0_18px_rgba(232,163,58,0.7)]',
            sizing.dot,
          )}
          aria-hidden
        />
      </span>
      <span>
        Aura<span className="font-light text-gold">·</span>Gen
      </span>
      <span className="sr-only">{brand.name}</span>
    </span>
  );

  if (!href) return inner;
  return (
    <Link href={href} className="focus-ring rounded-btn -m-1 p-1" aria-label={`${brand.name} — home`}>
      {inner}
    </Link>
  );
}
