import Link from 'next/link';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { brand, footer, nav } from '@/lib/copy';
import { services } from '@/lib/services';
import Wordmark from './Wordmark';

export default function Footer() {
  return (
    <footer className="relative bg-onyx text-white">
      {/* Top hairline gradient — gold fade to nothing, signals brand without dominating */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(232,163,58,0.55) 50%, transparent 100%)',
        }}
        aria-hidden
      />

      <div className="page-container pb-12 pt-20 md:pt-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
          {/* Brand column */}
          <div className="md:col-span-5 lg:col-span-4">
            <Wordmark variant="dark" />
            <p className="mt-5 font-display text-[20px] leading-[1.3] tracking-[-0.015em] text-white">
              {brand.tagline}
            </p>
            <p className="mt-4 max-w-sm text-body text-white/65">
              {footer.brandBlurb}
            </p>
            <p className="mt-8 font-mono text-eyebrow uppercase tracking-[0.18em] text-white/55">
              <span className="text-gold">●</span>&nbsp;&nbsp;Based in Johannesburg
            </p>
          </div>

          {/* Navigate column */}
          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="font-mono text-eyebrow uppercase tracking-[0.18em] text-white/55">
              {footer.columns.navigate.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {footer.columns.navigate.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-baseline gap-1.5 text-[14px] text-white/75 transition-colors hover:text-gold focus-ring-dark rounded-sm"
                  >
                    {link.label}
                    {'note' in link && link.note && (
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                        {link.note}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="font-mono text-eyebrow uppercase tracking-[0.18em] text-white/55">
              {footer.columns.services.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services${service.anchor}`}
                    className="text-[14px] text-white/75 transition-colors hover:text-gold focus-ring-dark rounded-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-12 lg:col-span-3">
            <h3 className="font-mono text-eyebrow uppercase tracking-[0.18em] text-white/55">
              {footer.columns.contact.title}
            </h3>
            <ul className="mt-5 space-y-4 text-[14px]">
              <li className="flex items-start gap-3 text-white/75">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold/80" aria-hidden />
                <span>{brand.office}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold/80" aria-hidden />
                <a
                  href={`mailto:${brand.email}`}
                  className="text-white/75 transition-colors hover:text-gold focus-ring-dark rounded-sm"
                >
                  {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/75">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold/80" aria-hidden />
                <span>{brand.phone}</span>
              </li>
              <li className="flex items-start gap-3 pt-2">
                <a
                  href={brand.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-btn border border-white/15 text-white/75 transition-all hover:border-gold hover:text-gold focus-ring-dark"
                >
                  <Linkedin size={16} />
                </a>
              </li>
            </ul>

            <Link
              href={nav.cta.href}
              className="mt-8 inline-flex items-center gap-2 rounded-btn bg-gold px-4 py-3 text-btn font-medium text-onyx transition-all hover:-translate-y-px hover:bg-gold-soft active:bg-gold-deep focus-ring-dark"
            >
              {nav.cta.label}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 md:mt-20 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/55">
            {footer.bottom.rights}
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footer.bottom.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/55 transition-colors hover:text-gold focus-ring-dark rounded-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
