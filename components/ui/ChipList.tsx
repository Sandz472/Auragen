import { cn } from '@/lib/utils';

type ChipListProps = {
  items: readonly string[];
  surface?: 'light' | 'dark';
  className?: string;
};

/**
 * Pill-shaped chip list for things like sector "Who we serve" rows.
 * Per spec §08 — full-rounded (999px), sits on Line Soft background on light.
 */
export default function ChipList({ items, surface = 'light', className }: ChipListProps) {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            'inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[13px] transition-colors',
            surface === 'dark'
              ? 'border-white/15 bg-white/[0.04] text-white/80 hover:border-gold/50'
              : 'border-line bg-line-soft text-ink-secondary hover:border-gold/50 hover:bg-paper',
          )}
        >
          <span
            className={cn(
              'h-1.5 w-1.5 rounded-full',
              surface === 'dark' ? 'bg-gold' : 'bg-gold',
            )}
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
