/**
 * The three sectors Aura Gen serves (spec §13).
 * `accent` matches the sector card stripe colour from spec §08.
 */

export type SectorAccent = 'indigo' | 'gold' | 'teal';

export type Sector = {
  id: string;
  anchor: string;
  title: string;
  lead: string;
  body: string;
  accent: SectorAccent;
  serves: readonly string[];
};

export const sectors: readonly Sector[] = [
  {
    id: 'public-sector',
    anchor: '#public-sector',
    title: 'Public Sector',
    lead:
      "Modernising operations, governance and service delivery for South Africa's public institutions.",
    body:
      'We help public sector organisations modernise their data foundations, improve governance and reporting, and use technology to deliver better outcomes for citizens. Our work meets the procurement, compliance and accountability standards that the sector requires.',
    accent: 'indigo',
    serves: [
      'Municipalities',
      'State-owned enterprises',
      'Utilities',
      'Healthcare',
    ],
  },
  {
    id: 'private-sector',
    anchor: '#private-sector',
    title: 'Private Sector',
    lead: 'Helping enterprises and corporates move from data to decisions, faster.',
    body:
      'We partner with private sector organisations to unlock the value in their data, modernise their analytics and AI capabilities, and deliver measurable business impact — whether that is revenue growth, cost reduction, customer insight or operational efficiency.',
    accent: 'gold',
    serves: [
      'Financial services',
      'Technology and digital companies',
      'Retail and commerce',
      'Corporates',
    ],
  },
  {
    id: 'development-sector',
    anchor: '#development-sector',
    title: 'Development Sector',
    lead:
      'Technology that creates measurable impact for development organisations and the communities they serve.',
    body:
      'We support NGOs, donor agencies, research institutions and public-private innovation projects with data and technology capabilities that improve programme design, reporting, accountability and impact measurement.',
    accent: 'teal',
    serves: [
      'NGOs and donor agencies',
      'Academic and research institutions',
      'Public-private innovation projects',
    ],
  },
];
