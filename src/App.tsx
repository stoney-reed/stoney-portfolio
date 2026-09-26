import { useEffect, useState, type ReactNode } from "react";
import Architecture from "./components/Architecture";
import {
  ArrowDown,
  ArrowUpRight,
  DocIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  Reveal,
  SectionHeading,
  TagList,
} from "./components/ui";
import { earlier, education, experience, profile, projects, propscore, skills, stats } from "./data";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-ink-950"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Featured />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/* ------------------------------------------------------------------ Header */

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors ${
        scrolled || open ? "border-ink-800 bg-ink-950/85" : "border-transparent bg-ink-950/40"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Stoney Reed, back to top">
          <span className="grid h-8 w-8 place-items-center rounded-md border border-ink-700 bg-ink-850 font-mono text-xs font-semibold text-accent transition group-hover:border-accent/60">
            SR
          </span>
          <span className="text-sm font-semibold tracking-tight text-white">Stoney Reed</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-slate-400 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resume}
            {...EXTERNAL}
            className="ml-3 inline-flex items-center gap-1.5 rounded-md border border-ink-700 bg-ink-850 px-3 py-1.5 text-sm font-medium text-white transition hover:border-accent/60"
          >
            Resume <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-ink-700 text-slate-300 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            {open ? (
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-ink-800 px-5 pb-5 pt-2 md:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-ink-800 py-3 text-base text-slate-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resume}
            {...EXTERNAL}
            className="mt-4 flex items-center justify-center gap-1.5 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-ink-950"
          >
            View resume <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>
      )}
    </header>
  );
}

/* -------------------------------------------------------------------- Hero */

function Hero() {
  return (
    <section id="top" className="hero-bg relative overflow-hidden">
      <div className="mx-auto max-w-page px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="grid items-end gap-12 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/80 px-3 py-1 font-mono text-[11px] text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {profile.availability}
            </p>

            <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
              Stoney Reed
              <span className="mt-2 block text-slate-400">
                Full-stack engineer who ships <span className="text-accent">whole products.</span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Six years building production software across the stack, from React and Vue interfaces to Node,
              Laravel, Rails, and .NET services, Postgres, and AWS. Most recently I designed and built{" "}
              <a href="#propscore" className="font-medium text-white underline decoration-accent/50 underline-offset-4 hover:decoration-accent">
                PropScore
              </a>
              , a live real estate investment platform, from the database schema to Stripe billing.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-accent-soft"
              >
                See my work <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href={profile.resume}
                {...EXTERNAL}
                className="inline-flex items-center gap-2 rounded-md border border-ink-600 px-5 py-2.5 text-sm font-medium text-white transition hover:border-accent/60"
              >
                <DocIcon /> Resume
              </a>
              <div className="flex items-center gap-1 sm:ml-2">
                <IconLink href={profile.github} label="GitHub">
                  <GitHubIcon className="h-5 w-5" />
                </IconLink>
                <IconLink href={profile.linkedin} label="LinkedIn">
                  <LinkedInIcon className="h-5 w-5" />
                </IconLink>
                <IconLink href={`mailto:${profile.email}`} label="Email" external={false}>
                  <MailIcon className="h-5 w-5" />
                </IconLink>
              </div>
            </div>
          </div>

          <AtAGlance />
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-ink-800 bg-ink-800 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-900 p-5 sm:p-6">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-2xl font-semibold tracking-tight text-white sm:text-3xl">{s.value}</span>
                <span className="mt-1 block text-xs leading-snug text-slate-400 sm:text-sm">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function AtAGlance() {
  const rows = [
    { k: "Now", v: "Building PropScore", sub: "Web, API, data, billing, mobile" },
    { k: "Before", v: "Trader Interactive", sub: "SharpNotions · Xerox" },
    { k: "Stack", v: "TypeScript end to end", sub: "Plus PHP, Ruby, Python, C#" },
    { k: "School", v: "RIT", sub: "B.S. Game Design and Development" },
    { k: "Base", v: profile.location, sub: "Remote or relocation" },
  ];
  return (
    <aside aria-label="At a glance" className="rounded-xl border border-ink-700 bg-ink-900/80 p-1 shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 border-b border-ink-800 px-4 py-3" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
        <span className="ml-3 font-mono text-[11px] text-slate-500">stoney.json</span>
      </div>
      <dl className="divide-y divide-ink-800">
        {rows.map((r) => (
          <div key={r.k} className="grid grid-cols-[5.5rem_1fr] gap-3 px-4 py-3">
            <dt className="font-mono text-xs text-slate-500">{r.k}</dt>
            <dd>
              <span className="block text-sm font-medium text-white">{r.v}</span>
              <span className="block text-xs text-slate-400">{r.sub}</span>
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

function IconLink({
  href,
  label,
  children,
  external = true,
}: {
  href: string;
  label: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external ? EXTERNAL : {})}
      className="grid h-10 w-10 place-items-center rounded-md text-slate-400 transition hover:bg-ink-850 hover:text-white"
    >
      {children}
    </a>
  );
}

/* ---------------------------------------------------------------- Featured */

function Featured() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-ink-800 py-20 sm:py-28">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <Reveal>
          <SectionHeading index="01" title="Featured project" lede="A production SaaS, designed and built end to end." />
        </Reveal>

        <Reveal>
          <article
            id="propscore"
            className="scroll-mt-24 overflow-hidden rounded-2xl border border-ink-700 bg-gradient-to-b from-ink-850 to-ink-900"
          >
            <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-3xl font-semibold tracking-tight text-white">{propscore.name}</h3>
                  <span className="font-mono text-xs text-slate-400">
                    {propscore.role} · {propscore.dates}
                  </span>
                </div>
                <p className="mt-1 text-accent">{propscore.tagline}</p>
                <p className="mt-5 leading-relaxed text-slate-300">{propscore.summary}</p>

                <ul className="mt-6 space-y-3">
                  {propscore.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                      <span className="mt-2 h-1 w-3 flex-none rounded-full bg-accent/70" aria-hidden="true" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <TagList items={propscore.stack} label="PropScore tech stack" />
                </div>

                <a
                  href={propscore.href}
                  {...EXTERNAL}
                  className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-accent-soft"
                >
                  Open the live app <ArrowUpRight />
                </a>
              </div>

              <div className="flex flex-col gap-4">
                <Architecture />
                <div className="rounded-xl border border-ink-700 bg-ink-950/60 p-4 sm:p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">What users get</p>
                  <div className="mt-3 flex items-center gap-1.5" aria-label="Properties are graded A through F">
                    {["A", "B", "C", "D", "F"].map((g, i) => (
                      <span
                        key={g}
                        className="grid h-8 w-8 place-items-center rounded-md font-mono text-sm font-semibold text-ink-950"
                        style={{ backgroundColor: ["#5eead4", "#a7f3d0", "#fde68a", "#fdba74", "#fca5a5"][i] }}
                        aria-hidden="true"
                      >
                        {g}
                      </span>
                    ))}
                    <span className="ml-2 text-xs text-slate-400">Every property graded at a glance</span>
                  </div>
                  <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-300 sm:grid-cols-3">
                    {propscore.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-slate-500" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------- Work */

function Work() {
  return (
    <section aria-labelledby="more-work" className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <Reveal>
          <h3 id="more-work" className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
            More selected work
          </h3>
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((p) => (
            <Reveal key={p.title}>
              <article className="group flex h-full flex-col rounded-xl border border-ink-800 bg-ink-900 p-6 transition hover:border-ink-600">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">{p.context}</p>
                <h4 className="mt-2 text-lg font-semibold tracking-tight text-white">{p.title}</h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{p.summary}</p>
                <div className="mt-5">
                  <TagList items={p.stack} label={`${p.title} tech stack`} />
                </div>
                {p.link && (
                  <a href={p.link.href} {...EXTERNAL} className="mt-4 inline-flex items-center gap-1 text-sm text-accent hover:underline">
                    {p.link.label} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Experience */

function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-ink-800 bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <Reveal>
          <SectionHeading index="02" title="Experience" lede="Six years across marketplaces, agencies, and enterprise." />
        </Reveal>

        <ol className="relative space-y-4">
          {experience.map((job) => (
            <li key={job.company}>
              <Reveal>
                <article className="grid gap-4 rounded-xl border border-ink-800 bg-ink-900 p-6 md:grid-cols-[14rem_1fr] md:gap-8 sm:p-8">
                  <header>
                    <h3 className="text-lg font-semibold tracking-tight text-white">{job.company}</h3>
                    <p className="text-sm text-slate-300">{job.role}</p>
                    <p className="mt-2 font-mono text-xs text-slate-500">{job.dates}</p>
                    {job.location && <p className="font-mono text-xs text-slate-500">{job.location}</p>}
                  </header>
                  <div>
                    <ul className="space-y-2.5">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                          <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" aria-hidden="true" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5">
                      <TagList items={job.stack} label={`${job.company} tech stack`} />
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">Earlier</h3>
              <ul className="mt-4 divide-y divide-ink-800 border-y border-ink-800">
                {earlier.map((e) => (
                  <li key={e.company} className="flex flex-wrap items-baseline justify-between gap-x-4 py-3 text-sm">
                    <span className="text-white">
                      {e.company} <span className="text-slate-400">· {e.role}</span>
                    </span>
                    <span className="font-mono text-xs text-slate-500">{e.dates}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">Education</h3>
              <ul className="mt-4 divide-y divide-ink-800 border-y border-ink-800">
                {education.map((e) => (
                  <li key={e.school} className="py-3 text-sm">
                    <span className="block text-white">{e.school}</span>
                    <span className="text-slate-400">{e.degree}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Skills */

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-ink-800 py-20 sm:py-28">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <Reveal>
          <SectionHeading index="03" title="Skills" lede="Comfortable anywhere in the stack." />
        </Reveal>
        <Reveal>
          <dl className="grid gap-px overflow-hidden rounded-xl border border-ink-800 bg-ink-800 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div key={s.group} className="bg-ink-900 p-6">
                <dt className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{s.group}</dt>
                <dd className="mt-3 text-sm leading-7 text-slate-300">{s.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- Contact */

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 border-t border-ink-800 py-20 sm:py-28">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <Reveal>
          <div className="contact-bg relative overflow-hidden rounded-2xl border border-ink-700 p-8 sm:p-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              <span className="text-slate-500">04 /</span> Contact
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Hiring for a full-stack role? I'd love to hear about it.
            </h2>
            <p className="mt-4 max-w-xl text-slate-300">
              Email is the fastest way to reach me, and my resume has the full details.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-accent-soft"
              >
                <MailIcon /> {profile.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="rounded-md border border-ink-600 px-4 py-3 text-sm text-slate-200 transition hover:border-accent/60"
                aria-live="polite"
              >
                {copied ? "Copied" : "Copy email"}
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <a href={profile.linkedin} {...EXTERNAL} className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
                <LinkedInIcon /> linkedin.com/in/stoney-reed
              </a>
              <a href={profile.github} {...EXTERNAL} className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
                <GitHubIcon /> github.com/stoney-reed
              </a>
              <a href={profile.resume} {...EXTERNAL} className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
                <DocIcon /> Resume (PDF)
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Footer */

function Footer() {
  return (
    <footer className="border-t border-ink-800">
      <div className="mx-auto flex max-w-page flex-col gap-2 px-5 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Stoney Reed · {profile.location}</p>
        <p>
          Built with React, TypeScript, and Tailwind.{" "}
          <a href={`${profile.github}/stoney-portfolio`} {...EXTERNAL} className="text-slate-400 underline-offset-4 hover:text-white hover:underline">
            View source
          </a>
        </p>
      </div>
    </footer>
  );
}
