import React, { useMemo, useState, useEffect } from "react";
import content from "./data/content.json";
import { Icon } from "./components/icons";
import { cn } from "./hooks/utils";

const Container = ({ children, className = "" }) => (
  <div className={cn("mx-auto w-full max-w-6xl px-4 md:px-8", className)}>{children}</div>
);

const Masthead = ({ data, datestamp, time }) => (
  <header className="border-b border-black/10 bg-white">
    <Container className="py-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
        <div className="space-y-1">
          <h1 className="headline-serif text-3xl font-semibold leading-tight text-black sm:text-4xl">
            {data.info.fullName}
          </h1>
          <p className="text-lg font-medium text-black/70">{data.info.roleTitle}</p>
        </div>
        <div className="text-right text-xs uppercase tracking-[0.32em] text-black/60">
          <span className="block">{datestamp}</span>
          <span className="block text-black/50">{time}</span>
        </div>
      </div>
    </Container>
  </header>
);

const Ticker = ({ phrases }) => (
  <div className="overflow-hidden border-y border-black bg-black">
    <div className="animate-marquee whitespace-nowrap py-3 text-[11px] uppercase tracking-[0.32em] text-white">
      {phrases.map((text, index) => (
        <span key={`${text}-${index}`} className="mx-6 inline-flex items-center gap-3">
          <span className="h-px w-6 bg-white" />
          {text}
        </span>
      ))}
      {phrases.map((text, index) => (
        <span key={`${text}-dup-${index}`} className="mx-6 inline-flex items-center gap-3">
          <span className="h-px w-6 bg-white" />
          {text}
        </span>
      ))}
    </div>
  </div>
);

const SocialLinks = ({ links }) => (
  <div className="mt-5 flex flex-wrap gap-3">
    {links.map((social) => (
      <a
        key={social.name}
        href={social.link}
        target={social.target || "_self"}
        rel={social.target === "_blank" ? "noreferrer" : undefined}
        className="inline-flex items-center gap-2 text-sm font-medium text-black transition-colors hover:text-black/60"
      >
        <Icon iconName={social.name} size={18} color="currentColor" />
        <span className="font-medium">{social.userName}</span>
      </a>
    ))}
  </div>
);

const LeadFeature = ({ data, summary }) => (
  <section className="border-b border-black/10 bg-white" id="feature">
    <div className="grid gap-10 px-1 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
      <div className="space-y-4">
        <p className="text-[11px] uppercase tracking-[0.35em] text-black/60">Featured Work</p>
        <h2 className="headline-serif text-5xl font-semibold leading-[1] text-black sm:text-6xl md:text-7xl">
          Design & Code
        </h2>
        <p className="text-base leading-relaxed text-black/70 sm:text-lg">{summary}</p>
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-black/70">
          <span className="border border-black px-3 py-1">Software</span>
          <span className="border border-black px-3 py-1">Media</span>
          <span className="border border-black px-3 py-1">Digital Transformation</span>
        </div>
      </div>
      <div className="relative">
        <div className="border border-black/10 bg-black/5">
          <img
            src="/medias/hero_image.png"
            alt={data.info.fullName}
            className="h-full w-full object-cover lg:min-h-[420px]"
          />
        </div>
      </div>
    </div>
  </section>
);

const ContactPanel = ({ data }) => (
  <aside className="relative flex flex-col gap-4 border border-black/10 bg-white p-6" id="contact">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-[11px] uppercase tracking-[0.32em] text-black/60">Contact</p>
        <h3 className="headline-serif text-2xl font-semibold text-black">Let&apos;s collaborate</h3>
      </div>
    </div>
    <div className="space-y-3 text-sm text-black/80">
      <div className="flex items-center justify-between border border-black/10 bg-white px-4 py-3">
        <span className="uppercase tracking-[0.22em]">Email</span>
        <a
          href={`mailto:${data.socialLinks[0]?.userName || ""}`}
          className="font-semibold text-black hover:text-black/70"
        >
          {data.socialLinks[0]?.userName}
        </a>
      </div>
      <div className="flex items-center justify-between border border-black/10 bg-white px-4 py-3">
        <span className="uppercase tracking-[0.22em]">LinkedIn</span>
        <a
          href={data.socialLinks.find((link) => link.name === "linkedin")?.link}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-black hover:text-black/70"
        >
          {data.socialLinks.find((link) => link.name === "linkedin")?.userName}
        </a>
      </div>
      <div className="flex items-center justify-between border border-black/10 bg-white px-4 py-3">
        <span className="uppercase tracking-[0.22em]">CV</span>
        <a
          href={data.info.cvLink}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-black hover:text-black/70"
        >
          Download ↗
        </a>
      </div>
    </div>
    <SocialLinks links={data.socialLinks} />
  </aside>
);

const SectionTitle = ({ kicker, title, description }) => (
  <div className="flex flex-col gap-2 border-b border-black/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <p className="text-[11px] uppercase tracking-[0.32em] text-black/60">{kicker}</p>
      <h3 className="headline-serif text-2xl font-semibold text-black sm:text-3xl">{title}</h3>
    </div>
    {description ? <p className="max-w-xl text-sm text-black/60">{description}</p> : null}
  </div>
);

const ExperienceSection = ({ data }) => (
  <section className="border border-black/10 bg-white p-6 sm:p-8" id="experience">
    <SectionTitle kicker="Experience" title="Latest Assignments" description="Selected roles shaping digital products, media, and civic technology." />
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {data.items?.map((experience, idx) => (
        <article
          key={`${experience.company}-${experience.period}`}
          className="relative border border-black/10 bg-white p-5 transition-colors duration-200 hover:bg-[#f7f7f7]"
        >
          <div className="relative flex flex-col gap-2">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.32em] text-black/60">{experience.period}</p>
                <h4 className="headline-serif text-xl font-semibold text-black">{experience.role}</h4>
                <p className="text-sm text-black/60">{experience.company}</p>
              </div>
              <span className="border border-black/15 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-black/60">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-black/70">{experience.summary}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const EducationSection = ({ data }) => (
  <section className="border border-black/10 bg-white p-6 sm:p-8" id="education">
    <SectionTitle kicker="Education" title="Learning Trail" description="A path through schools and programs that sharpened craft and curiosity." />
    <div className="mt-6 space-y-4">
      {data.items?.map((education, idx) => (
        <article
          key={`${education.institution}-${education.year}`}
          className="relative border border-black/10 bg-white p-5"
        >
          <div className="absolute left-3 top-3 h-2 w-2 bg-black/70" />
          <div className="flex flex-wrap items-start justify-between gap-3 pl-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-black/60">{education.year}</p>
              <h4 className="headline-serif text-xl font-semibold text-black">{education.institution}</h4>
              <p className="text-sm text-black/60">{education.program}</p>
            </div>
            <span className="border border-black/15 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-black/60">
              {String(idx + 1).padStart(2, "0")}
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-black/70">{education.details}</p>
        </article>
      ))}
    </div>
  </section>
);

const Footer = ({ data }) => (
  <footer className="bg-black py-12 text-sm text-white">
    <Container className="space-y-10">
      <div className="grid gap-8 sm:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">{data.info.fullName}</p>
          <p className="text-white/60">Building thoughtful interfaces and systems from Istanbul.</p>
        </div>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Sections</p>
          <div className="flex flex-col gap-1 text-white/80">
            <a href="#experience" className="hover:text-white/60">Work</a>
            <a href="#education" className="hover:text-white/60">Education</a>
            <a href="#contact" className="hover:text-white/60">Media</a>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Contact</p>
          <div className="flex flex-col gap-2 text-white/80">
            <a href={`mailto:${data.socialLinks[0]?.userName || ""}`} className="hover:text-white/60">{data.socialLinks[0]?.userName}</a>
            <a href={data.socialLinks.find((link) => link.name === "linkedin")?.link} target="_blank" rel="noreferrer" className="hover:text-white/60">LinkedIn</a>
            <a href={data.info.cvLink} target="_blank" rel="noreferrer" className="hover:text-white/60">Download CV</a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.25em] text-white/50">
        <span>© {new Date().getFullYear()} {data.info.fullName}</span>
        <span>Istanbul</span>
        <span>Crafted with intent</span>
      </div>
    </Container>
  </footer>
);

const App = () => {
  const data = content;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  const datestamp = useMemo(
    () => new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" }).format(new Date()),
    []
  );
  const timeLabel = useMemo(
    () => new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit" }).format(new Date()),
    []
  );

  const Loader = () => (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="loader w-fit text-2xl font-bold uppercase text-[#0000] md:text-[40px]" />
    </div>
  );

  if (loading) return <Loader />;

  const overview = data.tabs.overview || {};
  const leadSummary = overview.description?.[0] ?? data.translations.slogan;

  return (
    <div className="relative min-h-screen bg-white text-black">
      <Masthead data={data} datestamp={datestamp} time={timeLabel} />
      <Ticker
        phrases={[data.translations.slogan, data.info.roleTitle, "Istanbul", "Interfaces with character"]}
      />
      <main className="pb-16">
        <Container className="space-y-10 pt-10 sm:space-y-14">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
            <LeadFeature data={data} summary={leadSummary} />
            <ContactPanel data={data} />
          </div>
          <ExperienceSection data={data.tabs.experience} />
          <EducationSection data={data.tabs.education} />
        </Container>
      </main>
      <Footer data={data} />
    </div>
  );
};

export default App;
