'use client';

import { useEffect, useState } from 'react';
import { services } from '@/lib/services';
import { cn } from '@/lib/utils';

/**
 * Sticky horizontal anchor strip for /services (spec §12). Sits 72px below
 * the top, scrolls horizontally on mobile, and highlights the currently
 * visible service section via IntersectionObserver.
 */
export default function AnchorStrip() {
  const [active, setActive] = useState<string>(services[0].id);

  useEffect(() => {
    const sections = services
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport that's intersecting.
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
          );
          setActive(top.target.id);
        }
      },
      // The strip lives at ~120px from top, so push the rootMargin so the
      // section ABOVE that line counts as active.
      { rootMargin: '-140px 0px -60% 0px', threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="sticky top-[72px] z-20 border-y border-line bg-paper/85 backdrop-blur-xl"
      role="navigation"
      aria-label="Service sections"
    >
      <div className="page-container">
        <div className="-mx-2 flex overflow-x-auto scrollbar-hidden">
          <ul className="flex min-w-max items-center gap-1 px-2 py-3">
            {services.map((s, i) => {
              const isActive = active === s.id;
              return (
                <li key={s.id} className="flex items-center">
                  <a
                    href={s.anchor}
                    className={cn(
                      'group inline-flex items-center gap-2 whitespace-nowrap rounded-btn px-3 py-2 text-[13px] transition-colors focus-ring',
                      isActive
                        ? 'text-ink'
                        : 'text-ink-muted hover:text-ink',
                    )}
                  >
                    <span
                      className={cn(
                        'font-mono text-[10.5px] uppercase tracking-[0.18em]',
                        isActive ? 'text-gold-deep' : 'text-ink-muted/60',
                      )}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-medium">{s.title}</span>
                    {isActive && (
                      <span className="h-1 w-1 rounded-full bg-gold" aria-hidden />
                    )}
                  </a>
                  {i < services.length - 1 && (
                    <span
                      className="mx-1 h-3 w-px bg-line"
                      aria-hidden
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
