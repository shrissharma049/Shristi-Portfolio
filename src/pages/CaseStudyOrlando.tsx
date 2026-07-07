import CaseStudyLayout from '../layouts/CaseStudyLayout';
import CsSection from '../components/case-study/CsSection';
import Callout from '../components/case-study/Callout';
import CsNav from '../components/case-study/CsNav';
import SummaryStats from '../components/case-study/SummaryStats';
import LearningCard from '../components/case-study/LearningCard';

const TOC = [
  { id: 's-summary', num: '01', label: 'Summary' },
  { id: 's-problem', num: '02', label: 'The Problem' },
  { id: 's-users', num: '03', label: 'Understanding Users' },
  { id: 's-research', num: '04', label: 'Competitor Research' },
  { id: 's-decisions', num: '05', label: 'Key Decisions' },
  { id: 's-solution', num: '06', label: 'The Solution' },
  { id: 's-challenges', num: '07', label: 'Challenges' },
  { id: 's-outcome', num: '08', label: 'Outcome' },
  { id: 's-learnings', num: '09', label: 'Key Learnings' },
];

const META = [
  { label: 'Role', value: 'Lead UX Designer' },
  { label: 'Company', value: 'Varosa Technology' },
  { label: 'Client', value: 'Genese Solution' },
  { label: 'Outcome', value: '90% efficiency gain' },
];

export default function CaseStudyOrlando() {
  return (
    <CaseStudyLayout
      pageTitle="Orlando — Shristi Sharma"
      metaDescription="Case study: Replacing fragmented Excel workflows with a centralised SaaS platform, delivering a 90% improvement in operational efficiency."
      eyebrow="B2B SaaS · Lead Designer · Varosa Technology · 2022–2024"
      title="Orlando: Subscription Management Platform"
      summary="Replaced fragmented Excel workflows across Finance, Sales, and Product teams at Genese Solution with a centralised SaaS platform, delivering a 90% improvement in operational efficiency."
      heroBg="var(--ice)"
      meta={META}
      toc={TOC}
    >
      <img src="/orlando/orlando-hero.png" alt="Orlando main dashboard" className="cs-full-img" />

      <CsSection id="s-summary" title="Summary">
        <p>Genese Solution, a SaaS reseller operating across multiple countries, managed software subscriptions (Zoom, AWS, KnowBe4, Zoho) across three departments maintaining separate Excel files. None of these files talked to each other.</p>
        <p>Orlando is the centralised SaaS platform I designed to replace that fragmented system. It is now the operational backbone for subscription management at Genese Solution, used daily by Finance, Sales, and Product teams across multiple countries.</p>
        <SummaryStats stats={[
          { label: 'Efficiency gain', value: '90%' },
          { label: 'User groups', value: '3' },
          { label: 'Deployment', value: 'Multi-country' },
          { label: 'Product type', value: 'B2B SaaS' },
        ]} />
      </CsSection>

      <CsSection id="s-problem" title="The Problem">
        <ul>
          <li><strong>Product team:</strong> which products were sold to which customers</li>
          <li><strong>Sales team:</strong> customer relationships, renewals, and pitch context</li>
          <li><strong>Finance team:</strong> invoices, billing, and MRR calculations</li>
        </ul>
        <Callout>
          <p>A single customer lookup required visiting multiple files and could take <strong>5+ minutes</strong>. At scale, this was causing billing errors and missed renewals with direct revenue consequences.</p>
        </Callout>
      </CsSection>

      <CsSection id="s-users" title="Understanding Users">
        <p>I conducted primary research across all three departments, not to understand what they wanted, but to understand how they worked and where the system was actively failing them.</p>
        <div className="persona-grid">
          {[
            { name: 'Isha Pokhrel', age: '24 · Product Associate', goal: 'Single platform to view all products, customers, and subscriptions.', pain: '"It takes 5+ minutes to find the right file."' },
            { name: 'Biraj Adhikari', age: '40 · Finance Manager', goal: 'Manage subscriptions and invoices, view MRR in one place.', pain: '"Multiple files to find the exact amount subscribed."' },
            { name: 'Kabita Gautam', age: '30 · Sales Manager', goal: 'See all subscription details during client calls without searching.', pain: 'Mid-call searching across files — no single view.' },
          ].map((p) => (
            <div className="persona-card" key={p.name}>
              <p className="persona-card__name">{p.name}</p>
              <p className="persona-card__age">{p.age}</p>
              <p className="persona-card__lbl">Goal</p>
              <p>{p.goal}</p>
              <p className="persona-card__lbl">Pain point</p>
              <p style={{ fontStyle: 'italic' }}>{p.pain}</p>
            </div>
          ))}
        </div>
        <img src="/orlando/orlando-research.png" alt="Orlando user research artefacts" className="cs-full-img" style={{ marginTop: 24 }} />
      </CsSection>

      <CsSection id="s-research" title="Competitor Research">
        <ul>
          <li><strong>Chargebee:</strong> Strong analytics, but steep learning curve for non-technical users</li>
          <li><strong>Recurly:</strong> Good reporting, but complexity overwhelms mid-sized teams</li>
          <li><strong>Stripe Billing:</strong> Built for developers. Sales and Finance users would struggle</li>
        </ul>
        <Callout teal>
          <p>All three were built for technical teams or large enterprises. Genese Solution needed a platform their Sales, Finance, and Product professionals could use without technical expertise. That gap defined Orlando's design direction.</p>
        </Callout>
        <img src="/orlando/orlando-wireframes.png" alt="Orlando early wireframes" className="cs-full-img" style={{ marginTop: 20 }} />
      </CsSection>

      <CsSection id="s-decisions" title="Key Design Decisions">
        {[
          { n: '1', title: 'One platform, not three', body: 'A shared data model where all three teams access what they need from the same source of truth, rather than separate tools per department, which would recreate the fragmentation problem.' },
          { n: '2', title: 'Non-technical usability is non-negotiable', body: 'The platform had to work without training. Advanced analytics and automation were deferred to v2 to protect v1 usability.' },
          { n: '3', title: 'The customer record is the core unit', body: 'Every product, invoice, subscription, and communication, all accessible from one customer profile. No cross-referencing. One customer, one place.' },
        ].map((d) => (
          <div className="decision-item" key={d.n}>
            <span className="decision-num">{d.n}</span>
            <div className="decision-body"><h4>{d.title}</h4><p>{d.body}</p></div>
          </div>
        ))}
      </CsSection>

      <CsSection id="s-solution" title="The Solution">
        <h3>Customer Management</h3>
        <img src="/orlando/orlando-customers.png" alt="Orlando customer management view" className="cs-full-img" />
        <h3>Subscription Tracking</h3>
        <img src="/orlando/orlando-subscriptions.png" alt="Orlando subscription tracking" className="cs-full-img" />
        <h3>Invoice Generation</h3>
        <p>Finance team members generate invoices directly from the subscription record, with product details and billing periods pre-populated. The manual cross-referencing step, along with the errors it caused, was eliminated.</p>
        <img src="/orlando/orlando-invoice.png" alt="Orlando invoice generation" className="cs-full-img" />
        <h3>Revenue Analytics &amp; MRR</h3>
        <img src="/orlando/orlando-revenue.png" alt="Orlando revenue analytics and MRR dashboard" className="cs-full-img" />
      </CsSection>

      <CsSection id="s-challenges" title="Challenges">
        <Callout teal style={{ marginBottom: 12 }}><p><strong>Making complex data accessible without oversimplifying it</strong> — Finance needed granular data. Sales needed high-level context. Both within the same customer record, without clutter.</p></Callout>
        <Callout teal style={{ marginBottom: 12 }}><p><strong>Designing for different levels of technical comfort</strong> — Usability testing across both user groups revealed complexity the design had defaulted to, which was iterated out before launch.</p></Callout>
        <Callout teal><p><strong>Defining v1 scope under delivery pressure:</strong> Automation, advanced reporting, and API integrations were all logged and deferred rather than included half-finished.</p></Callout>
      </CsSection>

      <CsSection id="s-outcome" title="Outcome">
        <div className="outcome-big">
          <div className="outcome-big__num">90%</div>
          <div className="outcome-big__label">improvement in operational efficiency</div>
        </div>
        <p>Lookup times that took 5+ minutes dropped to seconds. Cross-file reconciliation errors causing billing mistakes were eliminated. Orlando is now used daily by Finance, Sales, and Product teams across multiple countries.</p>
      </CsSection>

      <CsSection id="s-learnings" title="Key Learnings">
        <LearningCard title="Multiple user groups require a shared foundation, not separate solutions" body="One data model served three departments. Separate tools would have recreated the fragmentation in a different form." />
        <LearningCard title="Non-technical usability is a product requirement, not a design preference" body="If your Sales Manager can't use it on a client call, the feature doesn't exist." />
        <LearningCard title="Scope discipline determines product quality" body="The features not built in v1 were as important as the ones that were." />
        <LearningCard title="Continuous user feedback is the design process" body="The 90% metric was the result of sustained iteration, not a single design decision." />
      </CsSection>

      <CsNav prev={{ label: 'Galaxy 360', to: '/case-study/galaxy360' }} next={{ label: 'Home', to: '/' }} />
    </CaseStudyLayout>
  );
}
