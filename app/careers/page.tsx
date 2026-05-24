import type { Metadata } from 'next';
import StubPage from '@/components/sections/StubPage';
import { brand } from '@/lib/copy';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Senior IT and data professionals: join the Aura Gen talent network in South Africa.',
  alternates: { canonical: '/careers/' },
};

export default function CareersPage() {
  return (
    <StubPage
      eyebrow="Careers"
      heading="Build your career inside South Africa's intelligent data work."
      body="We are a small, senior team — and our talent network places specialist IT professionals into client environments across data, AI, BI, cloud, software engineering and agile delivery. If that is the kind of work you want to do, we would like to hear from you."
      primaryAction={{ label: `Email ${brand.email}`, href: `mailto:${brand.email}?subject=Careers%20enquiry`, external: true }}
      backLink={{ label: 'Back home', href: '/' }}
    />
  );
}
