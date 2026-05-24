'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { cookie } from '@/lib/copy';
import { cn } from '@/lib/utils';

type StoredChoice = { value: 'accept' | 'reject'; ts: number };

const expiryMs = cookie.expiryDays * 24 * 60 * 60 * 1000;

function read(): StoredChoice | null {
  try {
    const raw = localStorage.getItem(cookie.storageKey);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredChoice;
    if (Date.now() - parsed.ts > expiryMs) return null;
    return parsed;
  } catch {
    return null;
  }
}

function write(value: StoredChoice['value']) {
  try {
    localStorage.setItem(
      cookie.storageKey,
      JSON.stringify({ value, ts: Date.now() } satisfies StoredChoice),
    );
  } catch {
    /* localStorage unavailable — fail silently */
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  // Only show after mount to avoid SSR/hydration mismatch
  useEffect(() => {
    if (!read()) {
      // small delay so it doesn't fight the hero entrance for attention
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = (choice: StoredChoice['value']) => {
    write(choice);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      aria-hidden={!visible}
      className={cn(
        'fixed inset-x-3 bottom-3 z-40 transition-all duration-500 ease-aura md:inset-x-6 md:bottom-6',
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none',
      )}
    >
      <div className="mx-auto max-w-page rounded-card bg-onyx text-white shadow-card-hover ring-1 ring-white/10">
        <div className="flex flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:gap-6 md:px-6">
          <p className="flex-1 text-[13.5px] leading-relaxed text-white/80">
            {cookie.message}{' '}
            <Link
              href={cookie.privacyHref}
              className="text-gold underline-offset-4 hover:underline focus-ring-dark rounded-sm"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => dismiss('reject')}
              className="rounded-btn border border-white/20 px-4 py-2 text-btn text-white/85 transition-colors hover:bg-white/5 focus-ring-dark"
            >
              {cookie.reject}
            </button>
            <button
              type="button"
              onClick={() => dismiss('accept')}
              className="rounded-btn bg-gold px-4 py-2 text-btn font-medium text-onyx transition-colors hover:bg-gold-soft active:bg-gold-deep focus-ring-dark"
            >
              {cookie.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
