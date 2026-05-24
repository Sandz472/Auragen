import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import IconBadge from './IconBadge';
import { cn } from '@/lib/utils';

type ServiceCardProps = {
  icon: string;
  title: string;
  body: string;
  href: string;
  number?: string;
  className?: string;
};

/**
 * Service card per spec §08:
 * - White surface, 1px Line border, 10px radius, 24px padding
 * - Icon top-left in a 40x40 rounded-square with soft gold gradient
 * - Title in Space Grotesk, body in Inter
 * - Bottom-right arrow shifts on card hover
 * - Hover: border becomes gold, shadow lifts
 *
 * The whole card is a link (stretched-link pattern) so the arrow is decorative.
 */
export default function ServiceCard({
  icon,
  title,
  body,
  href,
  number,
  className,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative flex flex-col rounded-card border border-line bg-paper p-6 transition-all duration-300 ease-aura',
        'hover:-translate-y-0.5 hover:border-gold hover:shadow-card-hover focus-ring',
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <IconBadge icon={icon} size="md" tone="gold" />
        {number && (
          <span className="font-mono text-eyebrow uppercase tracking-[0.18em] text-ink-muted/70">
            {number}
          </span>
        )}
      </div>
      <h3 className="mt-5 text-h3 text-ink tracking-[-0.01em]">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">
        {body}
      </p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink transition-colors group-hover:text-gold-deep">
        Learn more
        <ArrowUpRight
          size={14}
          strokeWidth={2}
          className="transition-transform duration-200 ease-aura group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      </span>
    </Link>
  );
}
