import type { Metadata } from 'next';
import StubPage from '@/components/sections/StubPage';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Aura Gen insights — articles, points of view and field notes. Coming soon.',
  alternates: { canonical: '/insights/' },
};

export default function InsightsPage() {
  return (
    <StubPage
      eyebrow="Insights"
      heading="A publishing home for our points of view."
      status="Coming soon"
      body="We are preparing a small library of field notes, technical write-ups and points of view on data, AI and digital transformation in South Africa. Check back, or start a conversation in the meantime."
      primaryAction={{ label: 'Start a conversation', href: '/contact' }}
      backLink={{ label: 'Back home', href: '/' }}
    />
  );
}
