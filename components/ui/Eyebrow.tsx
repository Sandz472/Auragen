import { cn } from '@/lib/utils';

type EyebrowProps = {
  children: React.ReactNode;
  surface?: 'light' | 'dark';
  className?: string;
  as?: 'span' | 'p' | 'div';
};

/**
 * Small uppercase mono label that prefixes section headings (spec §06).
 * Includes a gold square accent to give it more visual weight than a
 * plain block of mono text.
 */
export default function Eyebrow({
  children,
  surface = 'light',
  className,
  as: Tag = 'span',
}: EyebrowProps) {
  const color = surface === 'dark' ? 'text-white/60' : 'text-ink-muted';
  return (
    <Tag
      className={cn(
        'inline-flex items-center gap-3 font-mono text-eyebrow uppercase tracking-[0.18em]',
        color,
        className,
      )}
    >
      <span
        className="inline-block h-1.5 w-1.5 rounded-[1px] bg-gold"
        aria-hidden
      />
      <span>{children}</span>
    </Tag>
  );
}
