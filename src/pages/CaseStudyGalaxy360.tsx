import CaseStudyLayout from '../layouts/CaseStudyLayout';
import CsSection from '../components/case-study/CsSection';
import Callout from '../components/case-study/Callout';
import ImagePlaceholder from '../components/case-study/ImagePlaceholder';
import CsNav from '../components/case-study/CsNav';
import SummaryStats from '../components/case-study/SummaryStats';
import LearningCard from '../components/case-study/LearningCard';

const TOC = [
  { id: 's-summary', num: '01', label: 'Summary' },
  { id: 's-context', num: '02', label: 'The Context' },
  { id: 's-problem', num: '03', label: 'The Problem' },
  { id: 's-insight', num: '04', label: 'Research Insight' },
  { id: 's-solution', num: '05', label: 'The Solution' },
  { id: 's-ia', num: '06', label: 'IA Structure' },
  { id: 's-dev', num: '07', label: 'Dev Collaboration' },
  { id: 's-outcomes', num: '08', label: 'Outcomes' },
  { id: 's-learnings', num: '09', label: 'Key Learnings' },
];

const META = [
  { label: 'Role', value: 'Freelance Product Designer' },
  { label: 'Duration', value: 'May–Nov 2025 (6 months)' },
  { label: 'Client', value: 'Galaxy 360' },
  { label: 'Sector', value: 'EdTech / International Recruitment' },
];

export default function CaseStudyGalaxy360() {
  return (
    <CaseStudyLayout
      pageTitle="Galaxy 360 — Shristi Sharma"
      metaDescription="Case study: Revamping the application management interface of an international student recruitment platform with a dual-view architecture."
      eyebrow="EdTech · Freelance · May–Nov 2025"
      title="Galaxy 360: Admissions Platform"
      summary="Revamped the application management interface of an international student recruitment platform, identifying a workflow paradigm mismatch and introducing a dual-view architecture that changed how admissions teams track thousands of applications."
      heroBg="var(--amber)"
      meta={META}
      toc={TOC}
    >
      <ImagePlaceholder height={360} label="[Galaxy 360 overall interface — applications overview or Kanban board · 1200×675px]" />

      <CsSection id="s-summary" title="Summary">
        <p>Galaxy 360 is a digital platform for international student recruitment and application management. I was brought in as a freelance product designer to revamp the design system and application management interface, working directly and continuously with the engineering team throughout.</p>
        <p>The most significant decision I made on this project, introducing a Kanban view, was not a client request. It was a product decision I made based on research and proposed to the client.</p>
        <SummaryStats stats={[
          { label: 'Applications managed', value: '1,000+' },
          { label: 'Project duration', value: '6 mo' },
          { label: 'Architecture decision', value: 'Dual view' },
          { label: 'Sector', value: 'EdTech' },
        ]} />
      </CsSection>

      <CsSection id="s-context" title="The Context">
        <p>Universities and education agents handle thousands of applications simultaneously, each involving documents, communications, payment steps, university offers, and visa tracking. The existing platform was struggling to support the operational reality of admissions teams working at scale.</p>
      </CsSection>

      <CsSection id="s-problem" title="The Problem">
        <p>The platform's existing interface was built around a fundamental mismatch with how admissions teams actually work.</p>
        <ul>
          <li>Fragmented information: student data, documents, and communications stored in disconnected sections</li>
          <li>Poor pipeline visibility: no way to see application stage distribution at a glance</li>
          <li>Manual overhead: staff maintaining parallel spreadsheets alongside the platform</li>
          <li>Difficult collaboration: no shared view for team members working the same caseload</li>
          <li>Scaling breakdown: at thousands of applications, the structure was increasingly unmanageable</li>
        </ul>
        <Callout>
          <p><strong>The deeper problem was architectural:</strong> the platform was designed around individual student records as the primary unit of work. But admissions teams don't work record by record.</p>
        </Callout>
        <ImagePlaceholder height={300} label="[Before / original interface showing the fragmentation problem · 900×550px]" />
      </CsSection>

      <CsSection id="s-insight" title="Research Insight">
        <p>Through user interviews and workflow analysis, I identified the mismatch driving most of the frustration.</p>
        <Callout teal>
          <p style={{ fontFamily: 'var(--font-h)', fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--teal)' }}>"Admissions teams don't think about individual student records. They think about their pipeline."</p>
        </Callout>
        <p>Their daily questions are: "How many applications are stuck at document verification?" "Who's been waiting for an offer for more than a week?" "What's bottlenecked this week?" The existing interface answered none of these. It was a record system trying to serve a workflow team.</p>
      </CsSection>

      <CsSection id="s-solution" title="The Solution: Dual-View Architecture">
        <p>Two genuinely different user needs required two interfaces. Designing one without the other would leave half the problem unsolved.</p>

        <h3>View 1: List View (restructured)</h3>
        <p>Purpose: structured data, filtering, bulk operations, reporting.</p>
        <ImagePlaceholder height={300} label="[List View — applications with filters, sorting, document status indicators · 1100×650px]" />
        <ul>
          <li>Advanced filtering by stage, university, document status, assigned member</li>
          <li>Sorting and full-text search</li>
          <li>Document status indicators without opening individual records</li>
          <li>Designed for bulk tracking, auditing, and data-heavy operations</li>
        </ul>

        <h3>View 2: Kanban View (newly introduced)</h3>
        <p>Purpose: pipeline visualisation and workflow management. This was not in the original brief. I proposed it based on research.</p>
        <ImagePlaceholder height={300} label="[Kanban View — application cards across pipeline stages · 1100×650px]" />
        <p style={{ fontSize: '.82rem', color: 'var(--ink-muted)', marginTop: -8 }}>Pipeline: Profile Created → Documents Pending → Application Submitted → Offer Received → Payment Pending → Visa Process → Completed</p>
        <ul>
          <li>Drag applications between stages</li>
          <li>Instantly identify bottlenecked stages</li>
          <li>Track workload distribution across the team</li>
          <li>Gave admissions teams a shared mental model for their pipeline</li>
        </ul>
      </CsSection>

      <CsSection id="s-ia" title="IA Structure">
        <div className="ia-layer"><div className="ia-layer__lbl">Layer 1: Applications Overview</div><div className="ia-layer__val">List View · Kanban View</div></div>
        <div className="ia-layer"><div className="ia-layer__lbl">Layer 2: Student Application Detail</div><div className="ia-layer__val">Profile · Documents · Communication · Offers · Tasks</div></div>
        <div className="ia-layer"><div className="ia-layer__lbl">Layer 3: Operational Actions</div><div className="ia-layer__val">Document verification · Offer updates · Payment tracking</div></div>
        <ImagePlaceholder height={280} label="[Student Application Detail view — centralised student profile · 900×600px]" />
      </CsSection>

      <CsSection id="s-dev" title="Working with Developers">
        <p>Rather than designing in isolation and handing over finished screens, I maintained ongoing conversations with developers throughout the project.</p>
        <ul>
          <li><strong>Validating feasibility early</strong>: interaction patterns were discussed with engineers before committing to high-fidelity</li>
          <li><strong>Adjusting for constraints</strong>: where a proposed interaction required significant backend work, I redesigned around a simpler pattern achieving the same outcome</li>
          <li><strong>Ensuring alignment</strong>: designs were implementable as specified because they'd been stress-tested against real technical constraints throughout</li>
        </ul>
        <Callout teal>
          <p style={{ fontStyle: 'italic' }}>A design that can't be built isn't a design. Good product work closes the gap between intention and reality through collaboration, not handoff.</p>
        </Callout>
      </CsSection>

      <CsSection id="s-outcomes" title="Outcomes">
        <div className="two-col">
          <div className="outcome-card">
            <h4>Operational</h4>
            <ul>
              <li>Faster tracking: pipeline status visible at a glance</li>
              <li>Reduced manual overhead: Kanban replaced supplementary spreadsheets</li>
              <li>Improved team collaboration: shared pipeline view</li>
              <li>Bottlenecks immediately apparent</li>
            </ul>
          </div>
          <div className="outcome-card">
            <h4>Architectural</h4>
            <ul>
              <li>Centralised student profiles eliminated cross-tool navigation</li>
              <li>Three-layer IA reduced navigation complexity</li>
              <li>Dual-view provided both detail and pipeline from one system</li>
            </ul>
          </div>
        </div>
      </CsSection>

      <CsSection id="s-learnings" title="Key Learnings">
        <LearningCard title="Information architecture matters more than visual design in complex systems" body="The structure of the interface was the product decision. Visual polish came after the architecture was right." />
        <LearningCard title="A single research insight can change the product's direction entirely" body="The Kanban view wasn't in scope. It came from listening to what users couldn't do, not what they asked for." />
        <LearningCard title="Continuous developer collaboration prevents rework" body="Closing the gap between specification and implementation is a product responsibility." />
        <LearningCard title="Designing for operational teams requires understanding the operation" body="You can't design a workflow tool without understanding the workflow first." />
      </CsSection>

      <CsNav prev={{ label: 'CVStitch', to: '/case-study/cvstitch' }} next={{ label: 'Orlando', to: '/case-study/orlando' }} />
    </CaseStudyLayout>
  );
}
