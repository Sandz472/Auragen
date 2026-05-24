import type { Metadata } from 'next';
import StubPage from '@/components/sections/StubPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Aura Gen handles personal information and complies with the Protection of Personal Information Act (POPIA).',
  alternates: { canonical: '/privacy/' },
};

export default function PrivacyPage() {
  return (
    <StubPage
      eyebrow="Privacy Policy"
      heading="How we handle personal information."
      body="Aura Gen Pty Ltd is committed to protecting your personal information in line with the Protection of Personal Information Act (POPIA). The full policy is being finalised and will be published here. For specific privacy questions, please get in touch."
      primaryAction={{ label: 'Contact us', href: '/contact' }}
      backLink={{ label: 'Back home', href: '/' }}
    />
  );
}
