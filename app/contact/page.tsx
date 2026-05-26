import type { Metadata } from 'next';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import Reveal from '@/components/ui/Reveal';
import { contact, brand } from '@/lib/copy';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Tell us what you are trying to solve. We respond within one business day.',
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  return (
    <>
      <Hero
        variant="light-compact"
        eyebrow={contact.hero.eyebrow}
        headline={contact.hero.heading}
        sub={contact.hero.lead}
      />

      <section className="bg-paper section-pad pt-0">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Form — left column */}
            <div className="lg:col-span-7">
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>

            {/* Contact details — right column */}
            <aside className="lg:col-span-5">
              <Reveal delay={0.08}>
                <div className="rounded-feature bg-onyx p-6 text-white md:p-8">
                  <div className="space-y-8">
                    {/* Office */}
                    <div>
                      <h2 className="flex items-center gap-2 font-mono text-eyebrow uppercase tracking-[0.18em] text-white/55">
                        <MapPin size={14} className="text-gold" aria-hidden />
                        {contact.details.officeTitle}
                      </h2>
                      <div className="mt-3 space-y-1">
                        {contact.details.officeLines.map((line, i) => (
                          <p
                            key={line}
                            className={
                              i === 0
                                ? 'font-display text-[20px] font-semibold tracking-[-0.01em] text-white'
                                : 'text-[14px] italic text-white/55'
                            }
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="h-px bg-white/10" aria-hidden />

                    {/* Direct lines */}
                    <div>
                      <h2 className="flex items-center gap-2 font-mono text-eyebrow uppercase tracking-[0.18em] text-white/55">
                        <Phone size={14} className="text-gold" aria-hidden />
                        {contact.details.directLinesTitle}
                      </h2>
                      <div className="mt-3 space-y-2">
                        <a
                          href={`mailto:${brand.email}`}
                          className="group flex items-center gap-3 text-[15px] text-white/85 transition-colors hover:text-gold focus-ring-dark rounded-sm"
                        >
                          <Mail size={16} className="text-white/40 group-hover:text-gold" aria-hidden />
                          {brand.email}
                        </a>
                        <a
                          href={`tel:${brand.phone.replace(/\s/g, '')}`}
                          className="group flex items-center gap-3 text-[15px] text-white/85 transition-colors hover:text-gold focus-ring-dark rounded-sm"
                        >
                          <Phone size={16} className="text-white/40 group-hover:text-gold" aria-hidden />
                          {brand.phone}
                        </a>
                        <a
                          href={`tel:${brand.phone2.replace(/\s/g, '')}`}
                          className="group flex items-center gap-3 text-[15px] text-white/85 transition-colors hover:text-gold focus-ring-dark rounded-sm"
                        >
                          <Phone size={16} className="text-white/40 group-hover:text-gold" aria-hidden />
                          {brand.phone2}
                        </a>
                      </div>
                    </div>

                    <div className="h-px bg-white/10" aria-hidden />

                    {/* Response time */}
                    <div>
                      <h2 className="flex items-center gap-2 font-mono text-eyebrow uppercase tracking-[0.18em] text-white/55">
                        <Clock size={14} className="text-gold" aria-hidden />
                        {contact.details.responseTitle}
                      </h2>
                      <p className="mt-3 text-[15px] leading-relaxed text-white/75">
                        {contact.details.response}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
