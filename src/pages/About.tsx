import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import RevealWrapper from '../components/RevealWrapper';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Shristi Sharma</title>
        <meta name="description" content="CS graduate turned product designer turned PM candidate. 3+ years of design execution and PM delivery experience on live shipped products." />
      </Helmet>

      {/* ABOUT HERO */}
      <section className="about-hero">
        <div className="wrap">
          <div className="about-hero__grid">
            <RevealWrapper>
              <span className="about-hero__eyebrow">About Me</span>
              <h1>The journey<br />so far, <mark>Shristi.</mark></h1>
              <p className="about-hero__statement">"I started in UI/UX design and spent 3+ years doing product work. Now I'm making that official."</p>
              <p className="about-hero__body">I have a Computer Science and Software Engineering degree, 3+ years of design execution, and PM delivery experience on live shipped products. That combination is genuinely rare.</p>
              <Link to="/contact" className="btn-primary--sharp">Get in touch →</Link>
            </RevealWrapper>
            <RevealWrapper>
              <div className="about-photo" role="img" aria-label="Profile photo placeholder">[Your photo<br />200×200px]</div>
              <div className="quick-facts">
                <div className="quick-fact"><p className="quick-fact__label">Location</p><p className="quick-fact__value">Watford, UK · Open to relocation</p></div>
                <div className="quick-fact"><p className="quick-fact__label">Studying</p><p className="quick-fact__value">MSc IT Project Management · UWS</p></div>
                <div className="quick-fact"><p className="quick-fact__label">Looking for</p><p className="quick-fact__value">PM &amp; BA roles in the UK</p></div>
                <div className="quick-fact"><p className="quick-fact__label">Availability</p><p className="quick-fact__value quick-fact__value--accent">Immediate start</p></div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="journey">
        <div className="wrap">
          <div className="journey__grid">
            <div className="journey__sticky">
              <h2>My Journey</h2>
              <p>From CS graduate to product designer to PM candidate.</p>
            </div>
            <RevealWrapper className="journey__prose">
              <p>I studied Computer Science and Software Engineering, which gave me a foundation that most designers don't have. I understood how software is built, not just how it looks. That technical grounding shaped everything that came after.</p>
              <p>My first commercial role was at Fusemachines in Kathmandu, where I supported product delivery through design documentation, user research, and cross-team coordination. It was a short role, three months, but it showed me that the part of product work I found most interesting wasn't the visual craft. It was the problem framing. Why are we building this? Who is it actually for? What does success look like?</p>
              <p>I moved to Varosa Technology, where I spent over two years as a Product Designer working on multiple digital products simultaneously. On paper, I was a designer. In practice, I was doing product work: conducting user research that shaped roadmap priorities, writing requirements that informed sprint planning, working directly with business stakeholders, and tracking KPIs after launch. I designed Orlando, a subscription management platform now used daily at Genese Solution, and GUMP, a multi-channel marketing platform in active production use at top commercial banks in Nepal.</p>
              <p>Alongside Varosa, I took on a six-month freelance engagement with Galaxy 360, an EdTech platform for international student recruitment. There I worked directly with developers, made key architectural decisions about the product's interface structure, and saw firsthand what happens when design thinking and engineering collaboration are genuinely integrated.</p>
              <p>In early 2026, I completed a product management internship through Weeply Internships, working on CVStitch, a live AI SaaS tool, within a cross-functional team. I wrote user stories, contributed to MVP scoping, collaborated with engineering, and conducted product testing. It confirmed what I had suspected for a while: the PM role is where my skills are most naturally directed.</p>
              <p>I'm now completing an MSc in IT Project Management at the University of the West of Scotland. It is not a pivot. It is a formalisation of what I've been building towards since I started.</p>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* HOW I THINK */}
      <section className="thinking">
        <div className="wrap">
          <RevealWrapper className="thinking__head">
            <h2>How I Think</h2>
            <p>Product thinking in practice: five principles from real shipped work.</p>
          </RevealWrapper>
          <div className="principles">
            {[
              { num: '01', title: 'Start with the problem, not the solution', body: 'Before wireframing anything for Orlando, I spent time understanding why three departments were maintaining separate Excel files for the same data. The answer changed the entire product architecture.' },
              { num: '02', title: 'Users always know what\'s frustrating them', body: 'During Galaxy 360 research, no user asked for a Kanban view. They told me they couldn\'t see which applications were stuck. The Kanban view was my response to what I heard, not what I was asked for.' },
              { num: '03', title: 'Constraints are information, not obstacles', body: 'A 6–7 week timeline on CVStitch forced real prioritisation decisions. Time, cost, and technical limitations are not problems that appear at the end. They are inputs to the product decision from day one.' },
              { num: '04', title: 'Shipping is the goal, not perfection', body: 'GUMP is live at top commercial banks in Nepal. Orlando is used daily across three departments. Neither was perfect at launch. Both were right-sized for what users needed at the time.' },
              { num: '05', title: 'The product doesn\'t exist until it\'s built', body: 'A design that can\'t be implemented is not a design. It is a sketch. I bring engineers in early, validate feasibility before committing to patterns, and treat implementation constraints as product requirements.' },
            ].map((p) => (
              <RevealWrapper key={p.num} className="principle">
                <p className="principle__num">{p.num}</p>
                <div><h4>{p.title}</h4><p>{p.body}</p></div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENTLY */}
      <section className="currently">
        <div className="wrap">
          <span style={{ fontSize: '.72rem', fontWeight: 500, letterSpacing: '.14em', textTransform: 'uppercase' as const, color: 'var(--ink-muted)', display: 'block', marginBottom: 8 }}>Right now</span>
          <h2 style={{ fontSize: '1.75rem', marginBottom: 0 }}>Currently</h2>
          <RevealWrapper className="currently__grid">
            <div className="currently-card">
              <h4>Studying</h4>
              <p className="currently-card__sub">MSc IT Project Management · University of the West of Scotland</p>
              <p>Enterprise Architecture · IT Strategy · Information System Analysis · Business Data Communication · IT Project Management</p>
            </div>
            <div className="currently-card">
              <h4>Looking for</h4>
              <p className="currently-card__sub">Product Management &amp; Business Analysis roles · UK</p>
              <p>Open to relocation across the UK.</p>
              <p className="avail">Available for immediate start</p>
              <Link to="/contact" style={{ display: 'inline-block', marginTop: 14 }} className="btn-primary--sharp">Get in touch →</Link>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  );
}
