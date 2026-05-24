import type { Metadata } from 'next';
import StubPage from '@/components/sections/StubPage';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for the Aura Gen website.',
  alternates: { canonical: '/terms/' },
};

export default function TermsPage() {
  return (
    <StubPage
      eyebrow="Terms of Use"
      heading="The terms that govern your use of this website."
      body="Use of this website is subject to Aura Gen Pty Ltd's terms of use. The full document is being prepared and will be published here. By continuing to use the site, you agree to the spirit of those terms — namely, lawful, respectful use of the content and services we provide."
      backLink={{ label: 'Back home', href: '/' }}
    />
  );
}
