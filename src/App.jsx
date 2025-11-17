import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <a href="#home" className="text-lg font-semibold tracking-wide">
            <span className="text-sky-400">Stoney</span> Reed
          </a>
          <nav className="flex items-center gap-6 text-sm text-slate-300">
            <a href="#projects" className="hover:text-sky-400">
              Projects
            </a>
            <a href="#experience" className="hover:text-sky-400">
              Experience
            </a>
            <a href="#skills" className="hover:text-sky-400">
              Skills
            </a>
            <a href="#contact" className="hover:text-sky-400">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-20 pt-10">
        {/* HERO */}
        <section id="home" className="flex flex-col gap-6 py-12 md:flex-row md:items-center">
          <div className="flex-1 space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-400">
              Software Engineer · JavaScript-first
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Building clean, modern frontends{" "}
              <span className="text-sky-400">that actually ship.</span>
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              I’m <span className="font-medium text-slate-100">Stoney Reed</span>, a
              JavaScript-focused Software Engineer with experience in Vue, React, TypeScript,
              and PHP/Laravel. I’ve shipped production features for high-traffic marketplaces
              and built real estate and automation tools on the side.
            </p>
            <p className="text-xs text-slate-400">
              Based in Rochester, NY · Open to remote Software Engineer roles
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 shadow hover:bg-sky-400 transition"
              >
                View My Projects
              </a>
              <a
                href="/Stoney-Reed-Resume.pdf"
                className="rounded-full border border-slate-600 px-5 py-2 text-sm font-medium text-slate-100 hover:border-sky-400 hover:text-sky-400 transition"
              >
                Download Resume
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400">
              <a
                href="mailto:stoneyreed25@gmail.com"
                className="hover:text-sky-400"
              >
                stoneyreed25@gmail.com
              </a>
              <a
                href="https://github.com/stoney-reed"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/stoney-reed/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="py-4">
          <div className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 sm:grid-cols-2 md:grid-cols-4">
            <Highlight
              label="Experience"
              value="5+ years"
              desc="Shipping production features"
            />
            <Highlight
              label="Stack"
              value="JS-first"
              desc="Vue, React, TypeScript, PHP"
            />
            <Highlight
              label="Domain"
              value="Marketplaces"
              desc="High-traffic listing platforms"
            />
            <Highlight
              label="Bonus"
              value="Real estate"
              desc="Building tools for landlords"
            />
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="space-y-6 py-12">
          <SectionHeader
            title="Projects"
            subtitle="A mix of professional work and personal tools that solve real problems."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="Marketplace Search & Filters Enhancements"
              type="Professional · Trader Interactive"
              tech="Vue 3 · TypeScript · PHP/Laravel · REST APIs · Docker · Jenkins"
              description="Improved search and listing experiences for high-traffic marketplaces, focusing on advanced filters, UX refinements, and robust error handling."
              bullets={[
                "Implemented new filtering components and reusable UI patterns to help users discover relevant inventory.",
                "Integrated new API endpoints and reduced noisy error logging around edge cases.",
                "Contributed to a shared design system, improving consistency across multiple marketplace properties.",
              ]}
            />

            <ProjectCard
              title="Rochester Real Estate Deal Analyzer"
              type="Personal Project"
              tech="React/Vue · Node.js/Laravel · Map API · SQL/NoSQL"
              description="A map-based tool for real estate investors to quickly evaluate deals based on rents, expenses, and financing assumptions."
              bullets={[
                "Visualized properties with deal scores, estimated cash flow, and projected returns.",
                "Encapsulated deal analysis logic (cash-on-cash, cap rate, DSCR) into reusable backend modules.",
                "Designed a responsive UI that non-technical users can understand within minutes.",
              ]}
            />

            <ProjectCard
              title="Landlord Ops Dashboard"
              type="Personal · Real use"
              tech="React/Vue · Node.js/Laravel · Scheduling"
              description="Internal tools to track rent, leases, inspections, and maintenance tasks across multiple units."
              bullets={[
                "Created a dashboard for upcoming inspections, lease milestones, and recurring tasks.",
                "Implemented status tags like 'On-time', 'Late', and 'In Progress' to highlight priorities.",
                "Structured the system for future automation of reminders and notifications.",
              ]}
            />

            <ProjectCard
              title="JavaScript Adventure Game"
              type="Personal · Educational"
              tech="JavaScript · React/Vanilla"
              description="A pixel-style, choose-your-own-adventure game that teaches basic JavaScript concepts through interactive story choices."
              bullets={[
                "Designed branching storylines introducing variables, functions, and conditionals.",
                "Implemented simple state management to track player progress.",
                "Kept the UX approachable for complete beginners.",
              ]}
            />
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="space-y-6 py-12">
          <SectionHeader
            title="Experience"
            subtitle="Recent roles and what I focused on."
          />

          <ExperienceItem
            company="Trader Interactive"
            role="Software Engineer"
            dates="2023 – Present · Rochester, NY / Remote"
            bullets={[
              "Build and maintain front-end features for marketplace platforms using Vue 3, TypeScript, and a shared design system.",
              "Implement and refine backend endpoints with PHP/Laravel, integrating with Docker and Jenkins-based CI/CD pipelines.",
              "Collaborate with product, design, and QA to ship features that balance UX, performance, and maintainability.",
              "Improve logging and error handling around complex user flows to reduce noisy alerts and speed up debugging.",
            ]}
          />

          <ExperienceItem
            company="Real Estate Investor & Landlord"
            role="Self-Employed"
            dates="2019 – Present · Rochester, NY"
            bullets={[
              "Manage multiple rental units, including leasing, maintenance, and tenant communication.",
              "Use data to evaluate deals, track expenses, and prioritize property improvements.",
              "Build internal tools like the Landlord Ops Dashboard to reduce manual overhead in property management.",
            ]}
          />
        </section>

        {/* SKILLS */}
        <section id="skills" className="space-y-6 py-12">
          <SectionHeader
            title="Skills & Tech"
            subtitle="The tools I use most often."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <SkillGroup
              title="Languages"
              items={["JavaScript", "TypeScript", "PHP"]}
            />
            <SkillGroup
              title="Frontend"
              items={["Vue 3", "React", "HTML5", "CSS3"]}
            />
            <SkillGroup
              title="Backend & DB"
              items={["Laravel", "Node.js/Express", "MySQL", "PostgreSQL"]}
            />
            <SkillGroup
              title="Tooling"
              items={["Git", "Docker", "Jenkins", "REST APIs"]}
            />
            <SkillGroup
              title="Other"
              items={["Testing basics (Jest/PHPUnit)", "Agile collaboration"]}
            />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="space-y-6 py-12">
          <SectionHeader
            title="Contact"
            subtitle="Interested in working together? Let’s talk."
          />

          <div className="grid gap-8 md:grid-cols-[1.1fr,1fr]">
            <div className="space-y-4">
              <p className="text-sm text-slate-300">
                If you’re hiring for a JavaScript / front-end / full-stack role, I’d love to chat.
              </p>
              <div className="space-y-2 text-sm text-slate-300">
                <p>
                  <span className="text-slate-400">Email:</span>{" "}
                  <a
                    href="mailto:stoneyreed25@gmail.com"
                    className="font-medium text-sky-400 hover:underline"
                  >
                    stoneyreed25@gmail.com
                  </a>
                </p>
                <p>
                  <span className="text-slate-400">GitHub:</span>{" "}
                  <a
                    href="https://github.com/stoney-reed"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-sky-400 hover:underline"
                  >
                    github.com/stoney-reed
                  </a>
                </p>
                <p>
                  <span className="text-slate-400">LinkedIn:</span>{" "}
                  <a
                    href="https://www.linkedin.com/in/stoney-reed/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-sky-400 hover:underline"
                  >
                    linkedin.com/in/stoney-reed
                  </a>
                </p>
              </div>
            </div>

            <form
              className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-1">
                <label htmlFor="name" className="text-xs text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="text-xs text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400"
                  placeholder="jane@example.com"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="message" className="text-xs text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400"
                  placeholder="Tell me a bit about the role…"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400 transition"
              >
                Send (will wire this up later)
              </button>
              <p className="text-[11px] text-slate-500">
                This form is currently frontend-only. I will be hooking this up to a small backend endpoint to recieve messages soon.
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

/* SMALL COMPONENTS */

function SectionHeader({ title, subtitle }) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
      {subtitle && (
        <p className="max-w-xl text-sm text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Highlight({ label, value, desc }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-3">
      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">{label}</p>
      <p className="mt-1 text-lg font-semibold text-sky-400">{value}</p>
      <p className="mt-1 text-xs text-slate-300">{desc}</p>
    </div>
  );
}

function ProjectCard({ title, type, tech, description, bullets }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-4 shadow-sm transition hover:-translate-y-1 hover:border-sky-400/70 hover:shadow-md">
      <div className="space-y-1">
        <h3 className="text-sm font-semibold text-slate-100 sm:text-base">
          {title}
        </h3>
        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
          {type}
        </p>
        <p className="text-[11px] text-sky-300">{tech}</p>
      </div>
      <p className="mt-3 text-xs text-slate-300">{description}</p>
      <ul className="mt-3 space-y-2 text-xs text-slate-300">
        {bullets.map((b, idx) => (
          <li key={idx} className="flex gap-2">
            <span className="mt-[5px] h-[3px] w-[3px] flex-none rounded-full bg-sky-400" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ExperienceItem({ company, role, dates, bullets }) {
  return (
    <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-slate-100 sm:text-base">
            {company}
          </h3>
          <p className="text-xs text-slate-400">{role}</p>
        </div>
        <p className="text-[11px] text-slate-500">{dates}</p>
      </div>
      <ul className="mt-2 space-y-2 text-xs text-slate-300">
        {bullets.map((b, idx) => (
          <li key={idx} className="flex gap-2">
            <span className="mt-[5px] h-[3px] w-[3px] flex-none rounded-full bg-sky-400" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
      <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
      <ul className="mt-1 space-y-1 text-xs text-slate-300">
        {items.map((item, idx) => (
          <li key={idx}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
