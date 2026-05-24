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
 * Per spec §08, this is the primary brand mark: the gold hexagonal "cube"
 * logo paired with the "Aura Gen" name in the display face. The mark is a
 * flat-gold, transparent rendering of the brand logo so it sits cleanly on
 * both light and dark surfaces, while the name is set in CSS so it stays
 * crisp and theme-aware. The mark picks up a soft gold glow on hover to
 * reinforce the "aura" metaphor without being literal.
 */
export default function Wordmark({
  variant = 'light',
  size = 'md',
  href = '/',
}: WordmarkProps) {
  const textColor = variant === 'dark' ? 'text-white' : 'text-ink';
  const sizing =
    size === 'sm'
      ? { text: 'text-[16px]', mark: 'h-5' }
      : { text: 'text-[18px]', mark: 'h-6' };

  const inner = (
    <span
      className={cn(
        'group inline-flex items-center gap-2.5 font-display font-semibold tracking-[-0.01em]',
        textColor,
        sizing.text,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, decorative mark */}
      <img
        src="/logo-mark.png"
        alt=""
        aria-hidden
        width={313}
        height={351}
        className={cn(
          'w-auto transition-[filter] duration-300 ease-aura group-hover:drop-shadow-[0_0_14px_rgba(232,163,58,0.6)]',
          sizing.mark,
        )}
      />
      <span>Aura Gen</span>
    </span>
  );

  if (!href) return inner;
  return (
    <Link href={href} className="focus-ring rounded-btn -m-1 p-1" aria-label={`${brand.name} — home`}>
      {inner}
    </Link>
  );
}
