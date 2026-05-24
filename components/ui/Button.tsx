import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Surface = 'light' | 'dark';
type Arrow = 'right' | 'upRight' | 'none';

type BaseProps = {
  variant?: Variant;
  surface?: Surface;
  arrow?: Arrow;
  children: ReactNode;
  className?: string;
};

type LinkButtonProps = BaseProps & { href: string } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    'href' | 'children' | 'className'
  >;

type NativeButtonProps = BaseProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<'button'>, 'children' | 'className'>;

type ButtonProps = LinkButtonProps | NativeButtonProps;

const baseClasses =
  'group relative inline-flex items-center justify-center gap-2 rounded-btn px-5 py-3 text-btn font-medium transition-all duration-200 ease-aura';

function variantClasses(variant: Variant, surface: Surface) {
  if (variant === 'primary') {
    // Gold on dark or light — gold needs a dark text color either way
    return cn(
      'bg-gold text-onyx hover:-translate-y-px hover:bg-gold-soft hover:shadow-card-resting active:bg-gold-deep',
      surface === 'dark' ? 'focus-ring-dark' : 'focus-ring',
    );
  }
  if (variant === 'secondary') {
    if (surface === 'dark') {
      return 'border border-white/60 text-white hover:bg-white/5 focus-ring-dark';
    }
    return 'border border-ink/20 text-ink hover:bg-ink/5 focus-ring';
  }
  // ghost — text link with arrow shift
  return cn(
    'px-0 py-0 hover:opacity-90',
    surface === 'dark' ? 'text-white focus-ring-dark' : 'text-ink focus-ring',
  );
}

function ArrowIcon({ arrow }: { arrow: Arrow }) {
  if (arrow === 'none') return null;
  const Icon = arrow === 'upRight' ? ArrowUpRight : ArrowRight;
  return (
    <Icon
      size={16}
      strokeWidth={2}
      className={cn(
        'transition-transform duration-200 ease-aura',
        arrow === 'right' && 'group-hover:translate-x-1',
        arrow === 'upRight' && 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
      )}
      aria-hidden
    />
  );
}

export default function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    surface = 'light',
    arrow = variant === 'primary' ? 'upRight' : variant === 'ghost' ? 'right' : 'none',
    children,
    className,
    ...rest
  } = props;

  const classes = cn(baseClasses, variantClasses(variant, surface), className);

  if ('href' in props && props.href) {
    const { href, ...linkRest } = rest as Omit<LinkButtonProps, keyof BaseProps>;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
        <ArrowIcon arrow={arrow} />
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentPropsWithoutRef<'button'>)}>
      {children}
      <ArrowIcon arrow={arrow} />
    </button>
  );
}
