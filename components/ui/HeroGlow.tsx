import { cn } from '@/lib/utils';

type HeroGlowProps = {
  variant?: 'home' | 'subtle';
  className?: string;
};

/**
 * Atmospheric radial glows behind hero sections. Spec §10/§16:
 * - Two soft radial glows — gold bottom-left, indigo top-right
 * - Very slow drift via Tailwind keyframes (drift-a/drift-b)
 * - "Subtle" variant is dimmer, used for inner CTA banners
 *
 * Reduced motion: the @media query in globals.css cancels animations
 * by zeroing animation-duration, so the glows freeze in place — still
 * atmospheric, no motion.
 */
export default function HeroGlow({ variant = 'home', className }: HeroGlowProps) {
  const goldOpacity = variant === 'home' ? 0.55 : 0.32;
  const indigoOpacity = variant === 'home' ? 0.4 : 0.22;
  const blur = variant === 'home' ? '130px' : '110px';

  return (
    <div
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden
    >
      {/* Gold — bottom left */}
      <div
        className="absolute left-[-15%] bottom-[-25%] h-[55vh] w-[55vh] rounded-full animate-drift-a"
        style={{
          background: `radial-gradient(circle at center, rgba(232,163,58,${goldOpacity}) 0%, rgba(232,163,58,0) 70%)`,
          filter: `blur(${blur})`,
        }}
      />
      {/* Indigo — top right */}
      <div
        className="absolute right-[-10%] top-[-20%] h-[50vh] w-[50vh] rounded-full animate-drift-b"
        style={{
          background: `radial-gradient(circle at center, rgba(79,70,229,${indigoOpacity}) 0%, rgba(79,70,229,0) 70%)`,
          filter: `blur(${blur})`,
        }}
      />
      {/* Subtle grid texture overlay — gives the void some structure */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />
    </div>
  );
}
