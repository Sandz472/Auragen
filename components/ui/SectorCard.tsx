import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Sector } from '@/lib/sectors';
import { cn } from '@/lib/utils';

type SectorCardProps = {
  sector: Sector;
  className?: string;
};

const accentStyles = {
  indigo: { stripe: 'bg-indigo', glow: 'group-hover:shadow-[0_-2px_24px_rgba(79,70,229,0.18)]' },
  gold: { stripe: 'bg-gold', glow: 'group-hover:shadow-[0_-2px_24px_rgba(232,163,58,0.25)]' },
  teal: { stripe: 'bg-teal', glow: 'group-hover:shadow-[0_-2px_24px_rgba(15,118,110,0.22)]' },
};

/**
 * Sector card per spec §08:
 * - White surface, 1px Line border, 10px radius, 24px padding
 * - Coloured top stripe (3px) — indigo / gold / teal per sector
 * - Otherwise identical mechanics to ServiceCard
 *
 * Used on Home in horizontal row and on /sectors (where it's expanded).
 */
export default function SectorCard({ sector, className }: SectorCardProps) {
  const accent = accentStyles[sector.accent];
  return (
    <Link
      href={`/sectors${sector.anchor}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-card border border-line bg-paper transition-all duration-300 ease-aura',
        'hover:-translate-y-0.5 hover:border-gold hover:shadow-card-hover focus-ring',
        accent.glow,
        className,
      )}
    >
      <span className={cn('block h-[3px] w-full', accent.stripe)} aria-hidden />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-h3 text-ink tracking-[-0.01em]">{sector.title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">
          {sector.lead}
        </p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink transition-colors group-hover:text-gold-deep">
          Explore sector
          <ArrowUpRight
            size={14}
            strokeWidth={2}
            className="transition-transform duration-200 ease-aura group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}
