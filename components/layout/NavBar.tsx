'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { nav } from '@/lib/copy';
import { cn } from '@/lib/utils';
import Wordmark from './Wordmark';

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Home is the only "dark-led" page; the rest start light.
  const darkMode = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll + mark the rest of the page inert while the mobile menu is open
  useEffect(() => {
    const main = document.getElementById('main');
    const footer = document.querySelector('footer');
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      main?.setAttribute('inert', '');
      footer?.setAttribute('inert', '');
    } else {
      document.body.style.overflow = '';
      main?.removeAttribute('inert');
      footer?.removeAttribute('inert');
    }
    return () => {
      document.body.style.overflow = '';
      main?.removeAttribute('inert');
      footer?.removeAttribute('inert');
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Escape closes mobile menu
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Move keyboard focus into the menu on open, restore to trigger on close
  useEffect(() => {
    if (menuOpen) {
      // Defer to allow the inert/transition to settle
      requestAnimationFrame(() => firstLinkRef.current?.focus());
    } else {
      // Only restore if focus came from inside the closed menu
      if (document.activeElement instanceof HTMLElement) {
        const el = document.activeElement;
        if (el.closest('#mobile-menu') || el === document.body) {
          triggerRef.current?.focus();
        }
      }
    }
  }, [menuOpen]);

  const textColor = darkMode ? 'text-white' : 'text-ink';
  const linkHover = darkMode ? 'hover:text-gold-soft' : 'hover:text-ink';
  const bgWhenScrolled = darkMode
    ? 'bg-onyx/85 border-white/10 backdrop-blur-xl'
    : 'bg-paper/85 border-line backdrop-blur-xl';

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-[60] transition-all duration-300 ease-aura',
          scrolled
            ? `${bgWhenScrolled} border-b shadow-[0_1px_0_rgba(0,0,0,0.02)]`
            : 'bg-transparent border-b border-transparent',
        )}
      >
        <div className="page-container">
          <div className="flex h-18 items-center justify-between">
            <Wordmark variant={darkMode ? 'dark' : 'light'} />

            {/* Desktop nav */}
            <nav
              aria-label="Primary"
              className={cn('hidden lg:flex items-center gap-1', textColor)}
            >
              {nav.primary.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'relative px-4 py-2 text-[14px] font-medium tracking-[0.005em] transition-colors focus-ring',
                      linkHover,
                      active && (darkMode ? 'text-white' : 'text-ink'),
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        'pointer-events-none absolute left-4 right-4 -bottom-px h-px origin-left scale-x-0 bg-gold transition-transform duration-300 ease-aura',
                        active && 'scale-x-100',
                      )}
                      aria-hidden
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                href={nav.cta.href}
                className={cn(
                  'group inline-flex items-center gap-2 rounded-btn bg-gold px-5 py-3 text-btn font-medium text-onyx transition-all duration-200 ease-aura',
                  'hover:-translate-y-px hover:bg-gold-soft hover:shadow-card-resting active:bg-gold-deep focus-ring',
                )}
              >
                {nav.cta.label}
                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform duration-200 ease-aura group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* Mobile menu trigger */}
            <button
              ref={triggerRef}
              type="button"
              className={cn(
                'lg:hidden inline-flex items-center justify-center rounded-btn p-2 focus-ring',
                textColor,
              )}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((s) => !s)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        id="mobile-menu"
        inert={!menuOpen}
        className={cn(
          'lg:hidden fixed inset-0 z-[55] bg-onyx text-white transition-all duration-300 ease-aura',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-full flex-col">
          <div className="h-18" /> {/* spacer for header */}
          <div className="flex flex-1 flex-col justify-between px-6 pb-12 pt-6">
            <nav aria-label="Mobile primary" className="flex flex-col gap-1">
              {nav.primary.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'group flex items-baseline gap-4 border-b border-white/10 py-5 transition-colors',
                      active ? 'text-white' : 'text-white/80 hover:text-white',
                    )}
                  >
                    <span className="font-mono text-eyebrow uppercase tracking-[0.18em] text-gold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-h2-mobile">
                      {item.label}
                    </span>
                    {active && (
                      <span
                        className="ml-auto h-1.5 w-1.5 self-center rounded-full bg-gold"
                        aria-hidden
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-10">
              <Link
                href={nav.cta.href}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-btn bg-gold px-5 py-4 text-btn font-medium text-onyx hover:bg-gold-soft active:bg-gold-deep focus-ring-dark"
              >
                {nav.cta.label}
                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform duration-200 ease-aura group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
