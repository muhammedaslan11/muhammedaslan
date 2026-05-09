import Image from "next/image";
import config from "@/data/config.json";
import ExpandableCard from "./components/ExpandableCard";
import ReferenceCard from "./components/ReferenceCard";

/* ── Icons ─────────────────────────────────────────────── */

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function SectionHeader({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <h2 className="flex items-center gap-3 text-zinc-500 text-[11px] tracking-[0.2em] uppercase font-medium mb-4">
      <span className="flex-1 h-px bg-zinc-800" />
      <span className="flex items-center gap-2 shrink-0">
        {icon}
        {label}
      </span>
      <span className="flex-1 h-px bg-zinc-800" />
    </h2>
  );
}

const iconMap: Record<string, () => React.JSX.Element> = {
  mail: MailIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  instagram: InstagramIcon,
};

/* ── Page ───────────────────────────────────────────────── */
export default function Home() {
  const { info, socialLinks, links, overview, experience, collaboratedProjects, works, education, references } = config;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-[600px] mx-auto px-4 pb-20">

        {/* ── Hero ── */}
        <div className="flex flex-col items-center text-center pt-4">

          {/* Hero image with name overlay */}
          <div className="relative w-full rounded-[8px] overflow-hidden">
            <Image
              src="/medias/muhammed-ali-aslan.png"
              alt={info.name + " " + info.surname}
              width={600}
              height={750}
              style={{ width: "100%", height: "auto" }}
              className="object-cover object-top"
              priority
            />
            {/* Gradient + text overlay */}
            <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-6">
              <h1 className="text-[clamp(1.4rem,7vw,2.25rem)] font-black text-white uppercase tracking-wide leading-tight">
                {info.name} <br /> {info.surname}
              </h1>
              <p className="text-zinc-400 text-[11px] tracking-[0.25em] uppercase mt-2">
                {info.roleTitle}
              </p>
              {/* Social icons */}
              <div className="flex gap-3 mt-5">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.name];
                  return Icon ? (
                    <a key={social.name} href={social.link} target={social.target} rel="noopener noreferrer" title={social.userName}
                      className="w-11 h-11 rounded-full bg-[#1a1a1a] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-200">
                      <Icon />
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </div>



          {/* Links */}
          <div className="flex gap-2 mt-3">
            {links.map((link) => (
              <a key={link.label} href={link.href} target={"target" in link ? link.target : undefined} rel="noopener noreferrer"
                className="px-5 py-2 text-xs font-medium rounded-[5px] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-200 tracking-wide">
                {link.label}
              </a>
            ))}
          </div>

          {/* Overview */}
          <div className="mt-5 text-left w-full space-y-2">
            {overview.map((line, i) => (
              <p key={i} className="text-white text-xs leading-relaxed">{line}</p>
            ))}
          </div>
        </div>

        {/* ── Experience ── */}
        <div className="mt-10">
          <SectionHeader icon={<BriefcaseIcon />} label="Experience" />
          {experience.map((item, i) => (
            <ExpandableCard key={i} period={item.period} title={item.role} subtitle={item.company}
              content={item.summary} logo={item.logo} link={item.link} />
          ))}
        </div>

        {/* ── Collaborated Projects ── */}
        <div className="mt-10">
          <SectionHeader icon={<UsersIcon />} label="Collaborated Projects" />
          {collaboratedProjects.map((item, i) => (
            <ExpandableCard key={i} period={item.year} title={item.title} subtitle={item.subtitle}
              content={item.description} logo={item.logo} link={item.link} tags={item.tags} />
          ))}
        </div>

        {/* ── Works ── */}
        {works.length > 0 && (
          <div className="mt-10">
            <SectionHeader icon={<LayersIcon />} label="Works" />
            {works.map((item: Work, i) => (
              <ExpandableCard key={i} period={item.year} title={item.title} subtitle={item.subtitle ?? ""}
                content={item.description} logo={item.logo} link={item.link ?? undefined} tags={item.tags} />
            ))}
          </div>
        )}

        {/* ── Education ── */}
        <div className="mt-10">
          <SectionHeader icon={<GraduationIcon />} label="Education" />
          {education.map((item, i) => (
            <ExpandableCard key={i} period={item.year} title={item.institution}
              subtitle={item.program} content={item.details} />
          ))}
        </div>

        {/* ── References ── */}
        {references.length > 0 && (
          <div className="mt-10">
            <SectionHeader icon={<QuoteIcon />} label="References" />
            {references.map((item: Reference, i) => (
              <ReferenceCard key={i} name={item.name} title={item.title} quote={item.quote} avatar={item.avatar} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

/* ── Section icon components ── */
function BriefcaseIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>;
}
function UsersIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
}
function LayersIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>;
}
function GraduationIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>;
}
function QuoteIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg>;
}

/* ── Local types for empty-array sections ── */
interface Work {
  title: string;
  description: string;
  year: string;
  subtitle?: string;
  logo?: string;
  tags?: string[];
  link?: string | null;
}
interface Reference {
  name: string;
  title: string;
  quote: string;
  avatar?: string | null;
}
