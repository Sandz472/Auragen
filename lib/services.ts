/**
 * The nine Aura Gen services (spec §12).
 * Each service has an anchor used on /services and from home/footer links.
 * Icon names map to lucide-react components (resolved at render time).
 */

export type Service = {
  id: string;
  anchor: string;
  number: string;
  title: string;
  lead: string;
  body: string;
  icon: string;
};

export const services: readonly Service[] = [
  {
    id: 'data-intelligence',
    anchor: '#data-intelligence',
    number: '01',
    title: 'Data Intelligence & Analytics',
    lead:
      'Transforming fragmented data into actionable insights that support strategic and operational decision-making.',
    body:
      'We design and deliver analytics environments that bring data from across the organisation into one place, structure it for analysis, and produce the insights that leadership teams need to act with confidence. We work across descriptive, diagnostic, predictive and prescriptive analytics.',
    icon: 'Activity',
  },
  {
    id: 'artificial-intelligence',
    anchor: '#artificial-intelligence',
    number: '02',
    title: 'Artificial Intelligence',
    lead:
      'Intelligent solutions that automate processes, improve efficiency and unlock predictive capabilities.',
    body:
      'From machine learning models to generative AI applications, we help organisations identify the highest-value AI opportunities, build proofs of concept, and scale them into production. Our focus is on AI that creates measurable business value — not technology for its own sake.',
    icon: 'Sparkles',
  },
  {
    id: 'business-intelligence',
    anchor: '#business-intelligence',
    number: '03',
    title: 'Business Intelligence & Reporting',
    lead:
      'Interactive dashboards, reporting platforms and executive insights that drive performance visibility.',
    body:
      'We build BI environments on the platforms that fit your stack — Power BI, Tableau, Qlik and others — and design dashboards that executives, operational teams and front-line staff actually use. Every report is built around a decision someone needs to make.',
    icon: 'LayoutDashboard',
  },
  {
    id: 'enterprise-integration',
    anchor: '#enterprise-integration',
    number: '04',
    title: 'Enterprise Integration & Data Management',
    lead:
      'Connecting systems, platforms and data sources into unified ecosystems for improved operational flow.',
    body:
      'Most organisations do not have a data problem — they have an integration problem. We connect the systems and sources that produce your data, manage the flow between them, and give your teams a single operational view.',
    icon: 'Network',
  },
  {
    id: 'data-warehousing',
    anchor: '#data-warehousing',
    number: '05',
    title: 'Data Warehousing & ETL',
    lead:
      'Scalable data environments that centralise and optimise enterprise information.',
    body:
      'We design and build modern data warehouses and lakehouses on cloud and hybrid platforms. We move data reliably from operational systems into the warehouse, structure it for analysis, and operate the pipelines that keep it fresh.',
    icon: 'Database',
  },
  {
    id: 'data-governance',
    anchor: '#data-governance',
    number: '06',
    title: 'Data Governance, Protection & Compliance',
    lead:
      'Frameworks that improve data quality, security, compliance and governance maturity.',
    body:
      'We help organisations establish governance frameworks that work in practice — defining ownership, quality standards, security controls and compliance posture (including POPIA), and embedding them into the way data is produced and used every day.',
    icon: 'ShieldCheck',
  },
  {
    id: 'whatsapp-automation',
    anchor: '#whatsapp-automation',
    number: '07',
    title: 'WhatsApp & Digital Automation Solutions',
    lead:
      'Intelligent customer engagement and service automation through conversational technologies.',
    body:
      'WhatsApp is the dominant communication channel in South Africa. We build intelligent WhatsApp and digital automation solutions — from customer service bots to operational workflows — that meet your customers where they already are.',
    icon: 'MessageSquare',
  },
  {
    id: 'it-consulting',
    anchor: '#it-consulting',
    number: '08',
    title: 'Strategic IT Consulting',
    lead:
      'IT strategy, enterprise architecture, governance, cloud transformation and project delivery.',
    body:
      'We provide executive-level IT consulting to help organisations align their technology direction with their business strategy — from cloud transformation roadmaps to enterprise architecture, governance and complex project delivery.',
    icon: 'Compass',
  },
  {
    id: 'talent-solutions',
    anchor: '#talent-solutions',
    number: '09',
    title: 'Specialist IT Talent Solutions',
    lead:
      'Connecting organisations with highly skilled IT professionals across data, architecture, cloud, software engineering, governance and agile delivery.',
    body:
      'Through our talent network, we place specialist IT professionals into client environments on permanent, contract and project-based engagements — from senior data engineers and solution architects to agile delivery leads.',
    icon: 'Users',
  },
];
