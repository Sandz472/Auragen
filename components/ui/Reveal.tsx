'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'section' | 'header' | 'article' | 'span';
  once?: boolean;
};

type RevealState = 'visible' | 'hidden' | 'revealing';

/**
 * Scroll-triggered fade-and-rise.
 *
 * Design notes:
 * - Content defaults to visible — that means SSR HTML is fully readable for
 *   crawlers, no-JS users see everything, and headless tools that don't fire
 *   IntersectionObserver still capture content.
 * - After mount we check whether the element is above the fold. If so, we
 *   leave it visible (no point animating something the user can already see).
 * - If it's below the fold, we hide it and observe; the transition only
 *   engages on the reveal step, so the initial hide is a clean snap (one
 *   frame, before any user could see the area anyway).
 * - prefers-reduced-motion short-circuits all of the above.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
  as = 'div',
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const [state, setState] = useState<RevealState>('visible');

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    // If the element is already in (or above) the viewport on mount, leave it visible.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) return;

    setState('hidden');

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('revealing');
          if (once) obs.disconnect();
        } else if (!once) {
          setState('hidden');
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' },
    );
    obs.observe(el);

    // Defensive: if for some reason the observer never fires within 1.5s
    // (e.g. headless screenshot tooling), reveal anyway.
    const fallback = setTimeout(() => setState('revealing'), 1500);

    return () => {
      obs.disconnect();
      clearTimeout(fallback);
    };
  }, [reduce, once]);

  const Tag = as as React.ElementType;
  const hidden = state === 'hidden';
  const style: React.CSSProperties = {
    opacity: hidden ? 0 : 1,
    transform: hidden ? `translateY(${y}px)` : 'none',
    transition:
      state === 'revealing'
        ? `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`
        : 'none',
    willChange: hidden ? 'opacity, transform' : 'auto',
  };

  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement>} className={cn(className)} style={style}>
      {children}
    </Tag>
  );
}
