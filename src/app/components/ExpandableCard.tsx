"use client";

import { useState } from "react";

interface ExpandableCardProps {
  period: string;
  title: string;
  subtitle: string;
  content: string;
  logo?: string | null;
  link?: string;
  tags?: string[];
}

export default function ExpandableCard({
  period,
  title,
  subtitle,
  content,
  logo,
  link,
  tags,
}: ExpandableCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-zinc-800 rounded-[8px] overflow-hidden mb-3 bg-[#111111]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 py-4 text-left cursor-pointer"
      >
        {/* Logo */}
        {logo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logo}
            alt=""
            className="shrink-0 w-16 h-16 object-contain"
          />
        )}

        {/* Title + Subtitle */}
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm leading-snug">{title}</p>
          <p className="text-zinc-500 text-xs mt-1 truncate">{subtitle}</p>
        </div>

        {/* Period + Chevron */}
        <div className="shrink-0 flex items-center gap-2.5 pl-2">
          <span className="text-zinc-600 text-[10px] tracking-wide whitespace-nowrap">
            {period}
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`text-zinc-600 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>

      {/* Expanded content */}
      {open && (
        <div className="px-4 pb-4 border-t border-zinc-800 pt-4">
          <p className="text-zinc-400 text-xs leading-relaxed">{content}</p>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {tags.map((tag, i) => (
                <span key={i} className="px-2.5 py-1 bg-zinc-800 text-zinc-400 text-[10px] rounded-[5px]">
                  {tag}
                </span>
              ))}
            </div>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-xs text-zinc-400 hover:text-white transition-colors"
            >
              {link.substring(8)}
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
