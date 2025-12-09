import React, { useMemo, useState, useEffect } from "react";
import content from "./data/content.json";
import { Icon } from "./components/icons";
import { cn } from "./hooks/utils";

const tabOrder = [
  "overview",
  "education",
  "experience",
  // "projects"
];



const Container = ({ children, className = "" }) => (
  <div className={cn("mx-auto w-full max-w-6xl px-4 md:px-8", className)}>{children}</div>
);

const Header = ({ data }) => (
  <header className="border-b border-white/10 bg-black/80">
    <Container className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <div className="flex flex-col leading-tight text-white">
          <span className="text-lg font-semibold uppercase tracking-[0.25em] sm:text-xl">
            {data.info.fullName}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        {data.links?.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.target || "_self"}
            rel={item.target === "_blank" ? "noreferrer" : undefined}
            className="rounded-lg border border-white/30 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:border-white/80 hover:bg-white/10 sm:px-4 sm:text-xs sm:tracking-[0.25em]"
          >
            {item.label}
            <span aria-hidden>↗</span>
          </a>
        ))}
      </div>
    </Container>
  </header>
);

const SocialLinks = ({ links }) => (
  <div className="mt-6 flex flex-wrap gap-3">
    {links.map((social) => (
      <a
        key={social.name}
        href={social.link}
        target={social.target || "_self"}
        rel={social.target === "_blank" ? "noreferrer" : undefined}
        className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
      >
        <Icon iconName={social.name} size={18} color="currentColor" />
        <span className="font-medium">{social.userName}</span>
      </a>
    ))}
  </div>
);

const OverviewTab = ({ data }) => {
  const overview = data.tabs.overview;
  const introText = useMemo(() => overview.description?.[0] ?? "", [overview.description]);

  return (
   <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(220px,0.95fr)] lg:items-center">
  <div className="relative flex justify-center order-1 lg:order-2">
    <div className="w-full max-w-[400px] rounded-lg border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-4 shadow-xl shadow-black/30">
      <div className="relative overflow-hidden rounded-lg border border-white/20 bg-black">
        <img
          src="/medias/hero_image.png"
          alt={data.info.fullName}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </div>

  <div className="order-2 lg:order-1">
    <p className="text-xs uppercase tracking-[0.35em] text-white/40">{data.translations.hello}</p>
    <h1 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[42px]">
      {data.translations.iAm} <span className="text-white/80">{data.info.fullName}</span>
    </h1>
    <p className="mt-3 text-base font-semibold text-white/80 md:text-lg">{data.info.roleTitle}</p>
    <p className="mt-4 text-base text-white/60 md:text-lg">{data.translations.slogan}</p>
    {introText && (
      <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">{introText}</p>
    )}
    {overview.location && (
      <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/40">{overview.location}</p>
    )}
    <SocialLinks links={data.socialLinks} />
  </div>
</div>

  );
};

const ExperienceTab = ({ data }) => (
  <div className="space-y-5">
    {data.items?.map((experience) => (
      <article
        key={`${experience.company}-${experience.period}`}
        className="rounded-lg border border-white/10 bg-white/[0.06] p-5"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h4 className="text-xl font-semibold text-white">{experience.role}</h4>
            <p className="text-sm text-white/60">{experience.company}</p>
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">{experience.period}</span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">{experience.summary}</p>
      </article>
    ))}
  </div>
);

const ProjectsTab = ({ data }) => (
  <div className="grid gap-5">
    {data.items?.map((project) => (
      <article
        key={project.title}
        className="rounded-lg border border-white/10 bg-white/[0.06] p-5 transition-all hover:border-white/30 hover:bg-white/[0.09]"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            <p className="text-sm leading-relaxed text-white/70 md:text-base">{project.description}</p>
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">{project.year}</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-white/10 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-white/80"
          >
            View project
            <span aria-hidden>↗</span>
          </a>
        )}
      </article>
    ))}
  </div>
);

const EducationTab = ({ data }) => (
  <div className="space-y-6">
    {data.items?.map((education) => (
      <article
        key={`${education.institution}-${education.year}`}
        className="rounded-lg border border-white/10 bg-white/[0.06] p-5"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h4 className="text-xl font-semibold text-white">{education.institution}</h4>
            <p className="text-sm text-white/60">{education.program}</p>
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">{education.year}</span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">{education.details}</p>
      </article>
    ))}
  </div>
);

const Footer = ({ data }) => (
  <footer className="border-t border-white/10 bg-black/80 py-6 text-sm text-white/60">
    <Container className="flex flex-col items-start justify-between gap-4 text-sm text-white/50 sm:flex-row sm:items-center">
      <div className="flex flex-col leading-tight text-white">
        <span className="text-base font-semibold uppercase tracking-[0.25em] sm:text-lg">
          {data.info.fullName}
        </span>
        <span className="text-xs uppercase tracking-[0.3em] text-white/50">{data.info.roleTitle}</span>
      </div>
      <p>
        © {new Date().getFullYear()} {data.info.fullName} · Powered by{" "}
        <a
          href={data.alphaAslan.link}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-white transition-colors hover:text-white/80"
        >
          {data.alphaAslan.name}
        </a>
      </p>
    </Container>
  </footer>
);

const TabNavigation = ({ active, onSelect, translations }) => (
  <div className="sticky top-0 z-30 border-b border-white/10 bg-black">
    <Container className="grid grid-cols-2 gap-2 py-3 sm:flex sm:flex-wrap sm:gap-3">
      {tabOrder.map((tab) => (
        <button
          key={tab}
          onClick={() => onSelect(tab)}
          className={cn(
            "rounded-lg border border-white/20 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 transition-all sm:px-4 sm:text-xs sm:tracking-[0.25em]",
            active === tab
              ? "border-white bg-white text-black shadow-sm shadow-white/20"
              : "hover:border-white/40 hover:text-white"
          )}
        >
          {translations[tab]}
        </button>
      ))}
    </Container>
  </div>
);

const TabContent = ({ activeTab, data }) => {
  const content = data.tabs[activeTab];

  if (!content) {
    return null;
  }

  switch (activeTab) {
    case "experience":
      return <ExperienceTab data={content} />;
    // case "projects":
    //   return <ProjectsTab data={content} />;
    case "education":
      return <EducationTab data={content} />;
    case "overview":
    default:
      return <OverviewTab data={data} />;
  }
};

const App = () => {
  const data = content;
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  const Loader = () => (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="loader w-fit text-2xl md:text-[40px] font-bold uppercase text-[#0000]" />
    </div>
  );

  if (loading) return <Loader />;

  return (
    <div className="flex h-screen flex-col bg-black text-white">
      <Header data={data} />
      <main className="flex-1 overflow-y-auto bg-black">
        <TabNavigation active={activeTab} onSelect={setActiveTab} translations={data.translations} />
        <div className="pb-24 pt-6 sm:pb-16 sm:pt-8">
          <Container>
            <TabContent activeTab={activeTab} data={data} />
          </Container>
        </div>
      </main>
      <Footer data={data} />
    </div>
  );
};

export default App;
