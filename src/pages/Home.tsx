import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import RevealWrapper from '../components/RevealWrapper';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Shristi Sharma — Product Manager</title>
        <meta name="description" content="Product Manager with 3+ years embedded in product teams, doing user research, shaping requirements, and shipping software across SaaS, EdTech, and enterprise." />
      </Helmet>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="wrap">
          <div className="hero__avail-pill">
            <span className="avail-dot" />
            Open to New Opportunities
          </div>
          <h1 className="hero__name">Product Manager<br /><em>Specialising</em> in Digital Products.</h1>
          <p className="hero__body">3+ years embedded in product teams, doing user research, shaping requirements, collaborating with engineers, and shipping software across SaaS, EdTech, and enterprise. I'm not transitioning into product. I've always been doing it.</p>
          <div className="hero__ctas">
            <Link to="/contact" className="btn-primary">Get in Touch</Link>
            <a href="#recent-work" className="btn-ghost"><span className="btn-ghost__dot" /> View My Work</a>
          </div>
        </div>
      </section>

      {/* WHAT I BRING */}
      <section className="section">
        <div className="wrap">
          <RevealWrapper className="section__head">
            <span className="section__label">What I Bring</span>
            <h2 className="section__title">A combination most PM candidates don't have.</h2>
          </RevealWrapper>
          <RevealWrapper className="wib__grid">
            <div className="wib-item">
              <div className="wib-item__num">01</div>
              <h4>CS Foundation + Design Execution</h4>
              <p>I have a CS and Software Engineering degree, so I understand how products are built, not just how they look. Combined with 3+ years of hands-on design execution, I close the gap between brief and build faster than most PMs.</p>
            </div>
            <div className="wib-item">
              <div className="wib-item__num">02</div>
              <h4>PM Delivery Experience</h4>
              <p>I've written user stories and acceptance criteria, contributed to MVP scoping, worked within Agile sprint cycles, collaborated directly with engineers, and shipped live products, on real cross-functional teams.</p>
            </div>
            <div className="wib-item">
              <div className="wib-item__num">03</div>
              <h4>Stakeholder Communication</h4>
              <p>I've worked as the bridge between business stakeholders, users, and technical teams across multiple industries. I translate complexity into actionable guidance without losing the detail that engineers need.</p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="section" id="recent-work">
        <div className="wrap">
          <RevealWrapper className="section__head">
            <span className="section__label">My Recent Work</span>
            <h2 className="section__title">Projects that shipped.</h2>
          </RevealWrapper>
          <div className="projects">

            <Link to="/case-study/cvstitch" className="project-card card--sage">
              <div className="project-card__visual">
                <div className="project-card__img">[CVStitch: landing page screenshot<br />Replace with &lt;img&gt; tag · 600×380px]</div>
              </div>
              <div className="project-card__content">
                <div className="project-card__tags">
                  <span className="project-card__tag">AI SaaS</span>
                  <span className="project-card__tag">PM Internship</span>
                  <span className="project-card__tag">Jan–Feb 2026</span>
                </div>
                <h2 className="project-card__title">CVStitch</h2>
                <p className="project-card__desc">Scoped and shipped a live AI SaaS tool in 6 weeks by writing user stories, collaborating with engineering, and identifying a critical UX failure that broke the core user loop.</p>
                <div className="project-card__meta">
                  <span className="project-card__badge">PM Intern</span>
                  <span className="project-card__badge project-card__badge--accent">Live &amp; Deployed</span>
                </div>
                <span className="project-card__cta">Read case study →</span>
              </div>
            </Link>

            <Link to="/case-study/galaxy360" className="project-card card--amber">
              <div className="project-card__visual">
                <div className="project-card__img">[Galaxy 360: Kanban board screenshot<br />Replace with &lt;img&gt; tag · 600×380px]</div>
              </div>
              <div className="project-card__content">
                <div className="project-card__tags">
                  <span className="project-card__tag">EdTech</span>
                  <span className="project-card__tag">Freelance</span>
                  <span className="project-card__tag">May–Nov 2025</span>
                </div>
                <h2 className="project-card__title">Galaxy 360</h2>
                <p className="project-card__desc">Identified a workflow paradigm mismatch in a complex admissions system and introduced a dual-view architecture based on user research, changing how teams track thousands of applications.</p>
                <div className="project-card__meta">
                  <span className="project-card__badge">Product Designer</span>
                  <span className="project-card__badge project-card__badge--accent">Architectural decision owner</span>
                </div>
                <span className="project-card__cta">Read case study →</span>
              </div>
            </Link>

            <Link to="/case-study/orlando" className="project-card card--ice">
              <div className="project-card__visual">
                <div className="project-card__img">[Orlando: dashboard screenshot<br />Replace with &lt;img&gt; tag · 600×380px]</div>
              </div>
              <div className="project-card__content">
                <div className="project-card__tags">
                  <span className="project-card__tag">B2B SaaS</span>
                  <span className="project-card__tag">Lead Designer</span>
                  <span className="project-card__tag">2022–2024</span>
                </div>
                <h2 className="project-card__title">Orlando</h2>
                <p className="project-card__desc">Replaced fragmented Excel workflows across Finance, Sales, and Product teams with a centralised SaaS platform, delivering a 90% improvement in operational efficiency.</p>
                <div className="project-card__meta">
                  <span className="project-card__badge">Lead UX Designer</span>
                  <span className="project-card__badge project-card__badge--accent">90% efficiency gain</span>
                </div>
                <span className="project-card__cta">Read case study →</span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ACADEMIC */}
      <section className="section">
        <div className="wrap">
          <RevealWrapper className="section__head">
            <span className="section__label">Academic Projects · MSc IT Project Management · UWS · 2025–26</span>
            <h2 className="section__title">Academic Projects</h2>
          </RevealWrapper>
          <div className="ac-cards">

            <RevealWrapper className="ac-card">
              <div className="ac-card__badges">
                <span className="ac-badge">MSc IT Project Management</span>
                <span className="ac-badge">UWS · 2025–26</span>
                <span className="ac-badge ac-badge--role">Project Manager · Team of 6</span>
              </div>
              <h3 className="ac-card__title">Lost &amp; Found Portal: IT Project Management</h3>
              <p className="ac-card__oneliner">Led a team of 6 to plan, schedule, and fully manage a campus digital platform project from initiation to delivery using structured PM methodologies.</p>
              <div className="ac-card__divider" />
              <span className="ac-card__led-label">What I led</span>
              <ul className="ac-card__list">
                <li>Defined the project scope, objectives, and stakeholder map, establishing clear boundaries on what was in and out of scope before any work began</li>
                <li>Built and owned the RACI matrix across all workstreams, ensuring every team member had a clearly assigned role and accountability at each project stage</li>
                <li>Developed a full Monitoring and Control Plan including Earned Value Analysis, tracking EV, PV, AC, SPI, and CPI metrics to measure schedule and cost performance throughout</li>
                <li>Constructed a Work Breakdown Structure (WBS) and critical path to identify project dependencies and protect the delivery timeline</li>
                <li>Created and maintained a Risk Register with mitigation strategies, reviewing it at each sprint checkpoint to proactively manage emerging issues</li>
                <li>Coordinated team contributions across documentation, system design, and planning deliverables, ensuring consistency and quality across the final submission</li>
                <li>Facilitated team retrospectives and drove resolution on scope disputes within the group</li>
              </ul>
              <div className="ac-card__tools">
                <strong>Tools &amp; methods:</strong> ProjectLibre · WBS · Critical Path Method · Earned Value Management · Risk Register · Gantt Scheduling · RACI · Stakeholder Analysis
              </div>
            </RevealWrapper>

            <RevealWrapper className="ac-card">
              <div className="ac-card__badges">
                <span className="ac-badge">MSc IT Strategy &amp; Management</span>
                <span className="ac-badge">UWS · 2025–26</span>
                <span className="ac-badge ac-badge--role">Team Lead · Team of 5</span>
              </div>
              <h3 className="ac-card__title">Specsavers: 3-Year Strategic IT Transformation Plan</h3>
              <p className="ac-card__oneliner">Led a team of 5 to analyse Specsavers' current IT landscape and develop a structured 3-year digital transformation strategy using industry-standard frameworks.</p>
              <div className="ac-card__divider" />
              <span className="ac-card__led-label">What I led</span>
              <ul className="ac-card__list">
                <li>Applied the Strategic Alignment Model (Henderson &amp; Venkatraman) to evaluate the current fit between Specsavers' business strategy and IT capabilities, identifying four key misalignment areas</li>
                <li>Proposed and structured four strategic IT initiatives with a phased roadmap spanning 0–36 months: Digital Appointment &amp; Queue Management, AI-Assisted Diagnostics Integration, Unified Patient Data Platform, and Cloud Infrastructure Modernisation</li>
                <li>Applied the TELOS feasibility framework across all four initiatives to assess Technical, Economic, Legal, Operational, and Schedule viability</li>
                <li>Conducted a full PESTLE and SWOT analysis of Specsavers' external and internal environment to ground the strategy in real market context</li>
                <li>Developed a risk register for the transformation programme using COBIT 2019 governance principles, mapping risks across IT operations, data security, and change management</li>
                <li>Coordinated the team across five workstreams, managed document ownership, and produced the final integrated strategy presentation</li>
              </ul>
              <div className="ac-card__tools">
                <strong>Frameworks:</strong> Strategic Alignment Model · COBIT 2019 · TELOS Feasibility Framework · PESTLE · SWOT · RACI · Phased Roadmapping
              </div>
            </RevealWrapper>

          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section className="connect">
        <div className="wrap">
          <h2>Let's connect</h2>
          <p>Get in touch for PM and BA opportunities, or just to say hi.</p>
          <div className="connect__links">
            <a href="https://www.linkedin.com/in/shristi-sharma-0a191a224/" target="_blank" rel="noopener noreferrer" className="connect-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
              LinkedIn
            </a>
            <a href="mailto:shrissharma049@gmail.com" className="connect-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 7 10-7" /></svg>
              Email
            </a>
            <a href="https://dribbble.com/shristyyyy" target="_blank" rel="noopener noreferrer" className="connect-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" /></svg>
              Dribbble
            </a>
            <a href="https://www.behance.net/shristisharma6" target="_blank" rel="noopener noreferrer" className="connect-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zm-7.177-4h3.354c-.031-.749-.274-2.06-1.446-2.06-1.283 0-1.854 1.1-1.908 2.06zM5.918 13.957c.033 1.048-.834 1.662-2.039 1.662H2V8.631h2.103c1.201 0 1.73.637 1.73 1.615 0 .676-.407 1.226-.916 1.37v.029c.699.163 1.001.809 1.001 1.312zM2 9.736v1.616h1.462c.503 0 .857-.298.857-.837 0-.576-.354-.779-.857-.779H2zm0 2.598v1.729h1.615c.524 0 .9-.327.9-.873 0-.561-.376-.856-.9-.856H2z" /></svg>
              Behance
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
