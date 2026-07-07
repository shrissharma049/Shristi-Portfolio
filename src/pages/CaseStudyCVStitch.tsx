import CaseStudyLayout from '../layouts/CaseStudyLayout';
import CsSection from '../components/case-study/CsSection';
import Callout from '../components/case-study/Callout';
import CsNav from '../components/case-study/CsNav';
import SummaryStats from '../components/case-study/SummaryStats';
import LearningCard from '../components/case-study/LearningCard';

const TOC = [
  { id: 's-summary', num: '01', label: 'Summary' },
  { id: 's-problem', num: '02', label: 'The Problem' },
  { id: 's-persona', num: '03', label: 'User Research' },
  { id: 's-vision', num: '04', label: 'Product Vision' },
  { id: 's-workflow', num: '05', label: 'Core Workflow' },
  { id: 's-contributions', num: '06', label: 'My Contributions' },
  { id: 's-metrics', num: '07', label: 'Success Metrics' },
  { id: 's-learnings', num: '08', label: 'Key Learnings' },
  { id: 's-outcome', num: '09', label: 'Outcome' },
];

const META = [
  { label: 'Role', value: 'Product Management Intern' },
  { label: 'Duration', value: '6–7 weeks' },
  { label: 'Teams', value: 'Product, Engineering, Design, Analytics, Marketing' },
  { label: 'Status', value: 'Live & Deployed' },
];

export default function CaseStudyCVStitch() {
  return (
    <CaseStudyLayout
      pageTitle="CVStitch — Shristi Sharma"
      metaDescription="Case study: AI CV-tailoring tool built in 7 weeks across a cross-functional internship team."
      eyebrow="AI SaaS · PM Internship · Jan–Feb 2026"
      title="CVStitch: AI CV-Tailoring Tool"
      summary="An AI-powered web tool that helps job seekers tailor their CVs to specific job descriptions, built in 7 weeks across a cross-functional internship team and deployed publicly as a live product."
      heroBg="var(--sage)"
      ctaHref="https://ai-cv-tailoring-tool-89cy.vercel.app/"
      meta={META}
      toc={TOC}
    >
      <img src="/cvstitch/cvstitch-hero.png" alt="CVStitch landing page" className="cs-full-img" />

      <CsSection id="s-summary" title="Summary">
        <p>CVStitch provides fast, accessible, AI-assisted CV tailoring for early-career job seekers, without requiring them to understand prompt engineering or manually parse job descriptions.</p>
        <p>I joined as a Product Management Intern within a cross-functional team of six working streams. In 6–7 weeks we scoped, built, and publicly deployed an MVP. My focus was on requirements, scope decisions, engineering collaboration, and product testing.</p>
        <SummaryStats stats={[
          { label: 'Teams involved', value: '6' },
          { label: 'Timeline', value: '7 wks' },
          { label: 'Status', value: 'MVP' },
          { label: 'Industry', value: 'AI SaaS' },
        ]} />
      </CsSection>

      <CsSection id="s-problem" title="The Problem">
        <p>Job seekers, particularly students, graduates, and early-career switchers, apply to many roles at once. Each role requires different emphasis: different keywords, different experiences surfaced, different framing of the same skills.</p>
        <p>Manually tailoring a CV for every application is time-consuming, repetitive, and easy to get wrong. Most applicants end up reusing the same generic CV, or spending hours editing. Often they are unsure whether they're emphasising the right things for that specific role.</p>
        <Callout>
          <p>The result: a friction-heavy, low-confidence application process that slows people down exactly when they need to move fast.</p>
        </Callout>
      </CsSection>

      <CsSection id="s-persona" title="User Research">
        <p>We defined our primary user to align the team on what the MVP needed to do.</p>
        <div className="persona">
          <p className="persona__name">Alex · Age 22–30</p>
          <p className="persona__sub">Student, recent graduate, or early-career switcher</p>
          <div className="persona__cols">
            <div>
              <p className="persona__col-label">Goals</p>
              <ul>
                <li className="persona-li"><span>—</span>Apply to multiple roles faster</li>
                <li className="persona-li"><span>—</span>Increase application relevance</li>
                <li className="persona-li"><span>—</span>Improve interview conversion</li>
              </ul>
            </div>
            <div>
              <p className="persona__col-label">Pain Points</p>
              <ul>
                <li className="persona-li"><span>—</span>Unsure what recruiters prioritise</li>
                <li className="persona-li"><span>—</span>Difficulty finding keywords</li>
                <li className="persona-li"><span>—</span>CV editing is repetitive</li>
              </ul>
            </div>
          </div>
          <Callout style={{ marginTop: 16, marginBottom: 0 }}>
            <p style={{ fontStyle: 'italic', fontFamily: 'var(--font-h)' }}>"When I'm applying to multiple roles at once, I want my CV to match each job description quickly — so I can apply with confidence without spending hours editing."</p>
          </Callout>
        </div>
      </CsSection>

      <CsSection id="s-vision" title="Product Vision">
        <Callout teal>
          <p style={{ fontFamily: 'var(--font-h)', fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--teal)' }}>"Fewer steps. Faster result. No expertise required."</p>
        </Callout>
        <p>CVStitch provides fast, accessible, AI-assisted CV tailoring without requiring users to understand prompt engineering. The guiding principle for the MVP: one clear action per step: no settings, no configuration, no decisions beyond your CV and the job description.</p>
      </CsSection>

      <CsSection id="s-workflow" title="Core Workflow">
        <img src="/cvstitch/cvstitch-upload.png" alt="CVStitch upload and job description screen" className="cs-full-img" />
        <div style={{ marginTop: 24 }}>
          {[
            { n: '1', title: 'Landing Page', desc: 'User arrives and immediately understands the value proposition.' },
            { n: '2', title: 'Upload CV', desc: 'User uploads existing CV (PDF or DOCX, max 10MB).' },
            { n: '3', title: 'Paste Job Description', desc: 'User pastes the target job description into the provided field.' },
            { n: '4', title: 'Generate', desc: 'AI analyses both documents and generates a role-aligned CV version.' },
            { n: '5', title: 'Preview & Download', desc: 'User reviews inline and downloads the tailored CV.' },
          ].map((step) => (
            <div className="flow-step" key={step.n}>
              <span className="flow-num">{step.n}</span>
              <div className="flow-content">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </CsSection>

      <CsSection id="s-contributions" title="My Contributions">
        <div style={{ marginTop: 28 }}>
          <div className="contribution">
            <div className="contribution__num">1</div>
            <div className="contribution__body">
              <h4>User Stories &amp; Acceptance Criteria</h4>
              <p>Wrote user stories and acceptance criteria for the Upload → Generate → Download workflow. Translated the product vision into defined, testable requirements, including edge cases for wrong file formats and generation states.</p>
            </div>
          </div>
          <div className="contribution">
            <div className="contribution__num">2</div>
            <div className="contribution__body">
              <h4>MVP Scope Definition</h4>
              <p>Contributed to scoping decisions defining what the MVP would and wouldn't include. Deferred user accounts and saved history to protect the core single-session workflow. It was a deliberate product trade-off.</p>
            </div>
          </div>
          <div className="contribution">
            <div className="contribution__num">3</div>
            <div className="contribution__body">
              <h4>UX Wireframe Reviews</h4>
              <p>Reviewed wireframes from a product requirements perspective, checking that the interface reflected the intended workflow and that edge cases were handled rather than left undefined.</p>
            </div>
          </div>
          <div className="contribution">
            <div className="contribution__num">4</div>
            <div className="contribution__body">
              <h4>Engineering Collaboration</h4>
              <p>Collaborated with engineering during development discussions, ensuring product requirements translated correctly into what was being built and flagging misalignments before they became rework.</p>
            </div>
          </div>
          <div className="contribution">
            <div className="contribution__num">5</div>
            <div className="contribution__body">
              <h4>Critical Finding: The Preview Bug</h4>
              <p>During testing of the deployed prototype, I identified a critical failure: after generating a CV, clicking "Open" forced users to download and open the file externally, breaking the core interaction loop that AI tools depend on.</p>
              <Callout style={{ marginTop: 12 }}>
                <p style={{ fontSize: '.88rem', marginBottom: 8 }}><strong>Broken loop:</strong> Generate → Download (blind) → Open file → Decide → Go back</p>
                <p style={{ fontSize: '.88rem', marginBottom: 0 }}><strong style={{ color: 'var(--teal)' }}>Correct loop:</strong> Generate → Review inline → Regenerate if needed → Download</p>
              </Callout>
              <p style={{ marginTop: 8 }}>This fix would have been a P0 priority for the next sprint.</p>
            </div>
          </div>
          <div className="contribution">
            <div className="contribution__num">6</div>
            <div className="contribution__body">
              <h4>AI Sustainability Observation</h4>
              <p>When the free generation quota was exhausted mid-testing, I flagged that inference costs are a product sustainability problem, not just a technical one. Any AI-powered product must plan for generation costs from day one, through usage limits, rate limiting, or paid tiers.</p>
            </div>
          </div>
        </div>
      </CsSection>

      <CsSection id="s-metrics" title="Success Metrics">
        <div className="metrics-grid">
          {[
            { title: 'CV Generation Rate', why: '% of users who complete the full workflow.', accent: 'Core activation metric.' },
            { title: 'Preview-to-Download Rate', why: '% of generated CVs that users download.', accent: 'Measures output quality.' },
            { title: 'Regeneration Frequency', why: 'How often users regenerate.', accent: 'High = output quality needs work.' },
            { title: 'Time to First CV', why: 'Landing to first generated CV.', accent: 'Speed is the core promise.' },
          ].map((m) => (
            <div className="metric-card" key={m.title}>
              <p className="metric-card__title">{m.title}</p>
              <p className="metric-card__why">{m.why} <strong>{m.accent}</strong></p>
            </div>
          ))}
        </div>
      </CsSection>

      <CsSection id="s-learnings" title="Key Learnings">
        <LearningCard title="Writing requirements is a product skill, not admin" body="User stories forced clarity. Edge cases that seemed minor in discussion became critical in testing." />
        <LearningCard title="Timeline constraints are scope decisions in disguise" body="Every feature not built was a conscious decision about what the MVP needed to prove." />
        <LearningCard title="Test the deployed product, not the prototype" body="The preview bug only appeared in the deployed version, not in any earlier testing environment." />
        <LearningCard title="AI products have hidden operational costs" body="Inference costs must be budgeted from day one, not discovered post-launch." />
      </CsSection>

      <CsSection id="s-outcome" title="Outcome">
        <p>The CVStitch MVP was successfully deployed and publicly accessible. Built in 6–7 weeks with a cross-functional team, the product delivers on its core promise: upload a CV, paste a job description, receive a tailored output.</p>
        <a href="https://ai-cv-tailoring-tool-89cy.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: 16, padding: '11px 24px', borderRadius: 3, background: 'var(--terra)', color: '#fff', fontFamily: 'var(--font-b)', fontWeight: 500, fontSize: '.88rem' }}>
          View Live Product →
        </a>
      </CsSection>

      <CsNav next={{ label: 'Galaxy 360', to: '/case-study/galaxy360' }} />
    </CaseStudyLayout>
  );
}
