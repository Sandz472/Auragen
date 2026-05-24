import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';

type IconBadgeProps = {
  icon: string;
  size?: 'sm' | 'md' | 'lg';
  tone?: 'gold' | 'indigo' | 'teal' | 'plain';
  className?: string;
};

const sizes = {
  sm: { wrap: 'h-9 w-9', icon: 18 },
  md: { wrap: 'h-10 w-10', icon: 20 },
  lg: { wrap: 'h-14 w-14', icon: 24 },
};

const toneStyles = {
  gold:
    'bg-[linear-gradient(135deg,rgba(232,163,58,0.18)_0%,rgba(232,163,58,0.04)_100%)] ring-1 ring-gold/30 text-gold-deep',
  indigo:
    'bg-[linear-gradient(135deg,rgba(79,70,229,0.16)_0%,rgba(79,70,229,0.04)_100%)] ring-1 ring-indigo/30 text-indigo',
  teal:
    'bg-[linear-gradient(135deg,rgba(15,118,110,0.16)_0%,rgba(15,118,110,0.04)_100%)] ring-1 ring-teal/30 text-teal',
  plain: 'bg-line-soft text-ink',
};

export default function IconBadge({ icon, size = 'md', tone = 'gold', className }: IconBadgeProps) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[icon] || Icons.Sparkle;
  const s = sizes[size];
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-card',
        s.wrap,
        toneStyles[tone],
        className,
      )}
    >
      <Icon size={s.icon} strokeWidth={1.75} aria-hidden />
    </span>
  );
}
