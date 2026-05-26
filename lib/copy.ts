/**
 * Centralised copy for the Aura Gen website.
 * Every visible string lives here so future copy edits touch a single file.
 * Spec sections 10–15 map directly to the shapes below.
 */

export const brand = {
  name: 'Aura Gen',
  legal: 'Aura Gen Pty Ltd',
  tagline: 'Intelligent data. Measurable impact.',
  blurb:
    'A South African technology and consulting partner. We help organisations turn data into smarter decisions, faster operations and measurable business impact.',
  email: 'info@auragen.co.za',
  phone: '+27 73 492 7363',
  phone2: '+27 73 282 8034',
  office: 'Johannesburg, South Africa',
  linkedinUrl: 'https://www.linkedin.com/company/auragen',
  locale: 'en_ZA',
  founded: 2026,
} as const;

export const nav = {
  primary: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Sectors', href: '/sectors' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: { label: 'Start a conversation', href: '/contact' },
} as const;

export const ctas = {
  primary: { label: 'Start a conversation', href: '/contact' },
  secondary: { label: 'Explore services', href: '/services' },
} as const;

export const home = {
  hero: {
    eyebrow: 'Intelligent Digital Transformation · South Africa',
    headline: 'Intelligent data, made visible.',
    sub:
      'Aura Gen helps organisations across South Africa turn complex data into smarter decisions, faster operations, and measurable business impact — through data engineering, AI, business intelligence, and specialist IT talent.',
    trustStrip:
      'Trusted across municipalities, financial services, retail, healthcare and development organisations in South Africa.',
  },
  whatWeDo: {
    eyebrow: 'What we do',
    heading: 'From fragmented data to confident decisions.',
    body:
      'We are a South African technology and consulting partner specialising in data intelligence, artificial intelligence, business intelligence, enterprise integration and digital transformation. We work with our clients to modernise operations, unlock hidden insights, improve governance, and drive measurable business outcomes through technology.',
  },
  sectors: {
    eyebrow: 'Sectors',
    heading: "Built for South Africa's operating realities.",
    body:
      'Our work spans the public, private and development sectors. We bring an understanding of the regulatory, operational and budgetary realities of each.',
  },
  promise: {
    eyebrow: 'Our promise',
    heading: 'We do not simply deliver technology.',
    body:
      'We deliver outcomes. Better decisions, operational visibility, integrated intelligence, improved service delivery, future-ready digital ecosystems, and measurable business impact. Your success becomes our benchmark.',
    outcomes: [
      'Better decision-making',
      'Operational visibility',
      'Integrated business intelligence',
      'Improved service delivery',
      'Future-ready digital ecosystems',
      'Trusted technical expertise',
      'Measurable business outcomes',
    ],
  },
  why: {
    heading: 'Why organisations choose Aura Gen.',
    reasons: [
      'Deep expertise in enterprise data ecosystems.',
      'Strong understanding of South African public and private sector environments.',
      'Strategic and operational technology alignment.',
      'Scalable and future-ready solutions.',
      'Agile delivery methodologies.',
      'Client-focused partnerships.',
      'Executive-level consulting approach.',
      'Skilled multidisciplinary technology specialists.',
    ],
  },
  closingCta: {
    heading: "Let's turn your data into a decision.",
    sub: 'Tell us what you are trying to solve. We will respond within one business day.',
  },
} as const;

export const about = {
  hero: {
    eyebrow: 'About Aura Gen',
    heading:
      'We help organisations transform complex data into intelligent business decisions.',
    lead:
      'Aura Gen Pty Ltd is a South African technology and consulting company specialising in data intelligence, artificial intelligence, business intelligence, enterprise integration and digital transformation. From municipalities and state-owned entities to enterprise and private-sector organisations, we partner with our clients to modernise operations, unlock hidden insights, improve governance and drive measurable business impact through technology.',
  },
  missionVision: {
    mission: {
      title: 'Mission',
      body:
        'To empower organisations through intelligent technology solutions, data-driven decision-making and world-class IT expertise that improve operational performance, governance, efficiency and long-term business growth.',
    },
    vision: {
      title: 'Vision',
      body:
        "To become Africa's trusted leader in intelligent digital transformation, helping organisations harness the full power of data, AI and enterprise technology to shape smarter, more sustainable futures.",
    },
  },
  approach: {
    heading: 'Strategic thinking. Technical excellence. Industry expertise.',
    body:
      "Our approach combines strategic thinking, technical excellence and industry expertise to deliver scalable, future-ready solutions tailored to each client's unique operational environment. We work as an extension of our clients' leadership — bringing executive-level consulting, multidisciplinary specialists and an outcomes-focused delivery model.",
  },
  values: [
    {
      number: '01',
      title: 'Innovation with Purpose',
      body:
        'We build practical, intelligent solutions that solve real business challenges.',
    },
    {
      number: '02',
      title: 'Client-Centric Excellence',
      body:
        'Every solution is designed around the operational goals, challenges and growth objectives of our clients.',
    },
    {
      number: '03',
      title: 'Integrity & Trust',
      body:
        'Strong partnerships are built on transparency, accountability and professionalism.',
    },
    {
      number: '04',
      title: 'Agility & Adaptability',
      body:
        'Technology evolves rapidly — and so do we. We stay flexible, responsive and future-focused.',
    },
    {
      number: '05',
      title: 'Empowerment Through Data',
      body:
        'We help organisations transform raw information into strategic advantage.',
    },
    {
      number: '06',
      title: 'Sustainable Impact',
      body:
        'We strive to create technology solutions that deliver lasting value for businesses, communities and industries.',
    },
  ],
  closingCta: {
    heading:
      'Partner with a team that treats your success as the benchmark.',
  },
} as const;

export const servicesPage = {
  hero: {
    eyebrow: 'Services',
    heading: 'Nine capabilities. One outcomes-focused team.',
    lead:
      'From data foundations to AI to specialist IT talent — we cover the full lifecycle of intelligent digital transformation. Each engagement is shaped around the operational reality of the organisation we are partnering with.',
  },
  closingCta: {
    heading: 'Not sure which capability you need?',
    sub:
      'Tell us what you are trying to solve and we will help you scope the right starting point.',
  },
} as const;

export const sectorsPage = {
  hero: {
    eyebrow: 'Sectors',
    heading: 'Built for the operational realities of South Africa.',
    lead:
      'We work across the public, private and development sectors. We bring an understanding of the regulatory, operational and budgetary realities of each — and adapt our approach accordingly.',
  },
  closingCta: {
    heading: 'Working in a sector we have not listed?',
    sub: "We have likely worked with something adjacent. Let's talk.",
  },
} as const;

export const contact = {
  hero: {
    eyebrow: 'Contact',
    heading: 'Start a conversation.',
    lead:
      'Tell us what you are trying to solve. We respond to all enquiries within one business day. For urgent matters, call us directly.',
  },
  form: {
    submitLabel: 'Send enquiry',
    consent:
      'I agree that Aura Gen Pty Ltd may use these details to respond to my enquiry, in line with POPIA.',
    newsletter: 'Send me occasional Aura Gen insights.',
    success: {
      title: 'Thank you — your enquiry is on its way.',
      body:
        "We've received your message. A member of the Aura Gen team will respond within one business day.",
    },
    sectorOptions: ['Public Sector', 'Private Sector', 'Development Sector', 'Other'],
    interestOptions: [
      'Data Intelligence & Analytics',
      'Artificial Intelligence',
      'Business Intelligence & Reporting',
      'Enterprise Integration & Data Management',
      'Data Warehousing & ETL',
      'Data Governance, Protection & Compliance',
      'WhatsApp & Digital Automation Solutions',
      'Strategic IT Consulting',
      'Specialist IT Talent Solutions',
      'Talent placement',
      'Not sure yet',
    ],
  },
  details: {
    officeTitle: 'Office',
    officeLines: ['Johannesburg, South Africa', 'Full street address — TBC'],
    directLinesTitle: 'Direct lines',
    connectTitle: 'Connect',
    responseTitle: 'Response time',
    response: 'We respond to all enquiries within one business day.',
  },
} as const;

export const pillars = [
  {
    icon: 'Activity',
    title: 'Data & Intelligence',
    body:
      'Transforming fragmented data into actionable insights that support strategic and operational decision-making.',
    anchor: '#data-intelligence',
  },
  {
    icon: 'Sparkles',
    title: 'Artificial Intelligence',
    body:
      'Building intelligent solutions that automate processes, improve efficiency and unlock predictive capabilities.',
    anchor: '#artificial-intelligence',
  },
  {
    icon: 'LayoutDashboard',
    title: 'Business Intelligence & Reporting',
    body:
      'Interactive dashboards, reporting platforms and executive insights that drive performance visibility.',
    anchor: '#business-intelligence',
  },
  {
    icon: 'Compass',
    title: 'Strategic IT & Talent',
    body:
      'IT strategy, enterprise architecture, governance, and specialist IT talent placement across data, cloud, software and agile delivery.',
    anchor: '#it-consulting',
  },
] as const;

export const footer = {
  brandBlurb: brand.blurb,
  columns: {
    navigate: {
      title: 'Navigate',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Sectors', href: '/sectors' },
        { label: 'Insights', href: '/insights', note: '(coming soon)' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    services: { title: 'Services' }, // populated from services array at render time
    contact: { title: 'Contact' },
  },
  bottom: {
    rights: `© ${brand.founded} ${brand.legal}. All rights reserved.`,
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'POPIA', href: '/privacy' },
    ],
  },
} as const;

export const cookie = {
  message:
    'We use cookies to make Aura Gen work and to understand how the site is used. See our Privacy Policy.',
  privacyHref: '/privacy',
  accept: 'Accept',
  reject: 'Reject',
  storageKey: 'auragen-cookie-choice',
  expiryDays: 180,
} as const;

export const seo = {
  defaultDescription:
    'Aura Gen is a South African data, AI and IT consulting partner. We help organisations turn complex data into smarter decisions and measurable business impact.',
  titleTemplate: '%s — Aura Gen',
  defaultTitle: 'Aura Gen — Intelligent data. Measurable impact.',
  // Placeholder OG asset — SVG works for most consumers; swap for a designed PNG when one exists.
  ogImage: '/og-default.svg',
  siteUrl: 'https://auragen.co.za',
} as const;
