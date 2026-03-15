"use client";

import { useState, useRef, useEffect } from "react";
import {
  Files,
  Search,
  GitBranch,
  User,
  ChevronDown,
  ChevronRight,
  Github,
  Linkedin,
  Instagram,
  Mail,
  FileText,
  GitCommit,
  ArrowUpRight,
} from "lucide-react";

/* ─── Data ─── */

const fileTree = [
  {
    type: "folder" as const,
    label: "src",
    open: true,
    children: [
      { type: "file" as const, label: "about_me.ts", ext: "ts", section: "about" },
      { type: "file" as const, label: "experience.tsx", ext: "tsx", section: "experience" },
      { type: "file" as const, label: "projects.tsx", ext: "tsx", section: "projects" },
      { type: "file" as const, label: "skills.json", ext: "json", section: "skills" },
      { type: "file" as const, label: "contact.sh", ext: "sh", section: "contact" },
    ],
  },
  {
    type: "folder" as const,
    label: "public",
    open: false,
    children: [
      { type: "file" as const, label: "resume.pdf", ext: "pdf", section: null },
      { type: "file" as const, label: "avatar.jpg", ext: "jpg", section: null },
    ],
  },
  { type: "file" as const, label: ".gitignore", ext: "git", section: null },
  { type: "file" as const, label: "package.json", ext: "json", section: null },
  { type: "file" as const, label: "tsconfig.json", ext: "json", section: null },
  { type: "file" as const, label: "next.config.ts", ext: "ts", section: null },
];

const searchableItems = [
  { label: "About", section: "about", file: "about_me.ts" },
  { label: "Experience / Work", section: "experience", file: "experience.tsx" },
  { label: "Projects", section: "projects", file: "projects.tsx" },
  { label: "Skills / Tech Stack", section: "skills", file: "skills.json" },
  { label: "Contact", section: "contact", file: "contact.sh" },
];

const commits = [
  { hash: "e95c682", message: "Add photography images & tighten spacing", date: "2 days ago", files: 8 },
  { hash: "448b0a9", message: "Build complete developer portfolio", date: "3 days ago", files: 14 },
  { hash: "0c41ea6", message: "Clean slate — rebuild with Next.js", date: "4 days ago", files: 12 },
  { hash: "a79e1cb", message: "Initial portfolio site", date: "1 week ago", files: 5 },
];

const socials = [
  { label: "Email", href: "mailto:aldenongjingyi@gmail.com", icon: Mail, value: "aldenongjingyi@gmail.com" },
  { label: "GitHub", href: "https://github.com/aldenongjingyi", icon: Github, value: "aldenongjingyi" },
  { label: "LinkedIn", href: "https://linkedin.com/in/aldenong123", icon: Linkedin, value: "aldenong123" },
  { label: "Instagram", href: "https://www.instagram.com/aldenojy/", icon: Instagram, value: "@aldenojy" },
];

const extColors: Record<string, string> = {
  ts: "#3178c6",
  tsx: "#3178c6",
  json: "#cbcb41",
  sh: "#89e051",
  pdf: "#e34c26",
  jpg: "#a78bfa",
  git: "#f14e32",
};

/* ─── Shared components ─── */

function FileIcon({ ext }: { ext: string }) {
  const color = extColors[ext] || "#888";
  return (
    <span className="inline-block w-4 h-4 text-[10px] font-bold font-mono leading-4 text-center shrink-0 rounded-sm" style={{ color }}>
      {ext === "tsx" || ext === "ts" ? "TS" : ext === "json" ? "{}" : ext === "sh" ? "$" : ext === "git" ? "•" : "~"}
    </span>
  );
}

function Folder({ label, defaultOpen, children }: { label: string; defaultOpen: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-1.5 py-1 px-2 text-[13px] font-mono text-[#ccc] hover:bg-[#1a1a1a] transition-colors duration-100"
      >
        {open ? <ChevronDown size={14} className="text-[#555] shrink-0" /> : <ChevronRight size={14} className="text-[#555] shrink-0" />}
        <span className="truncate">{label}</span>
      </button>
      {open && <div className="pl-3">{children}</div>}
    </div>
  );
}

function FileItem({ label, ext, section, active, onClick }: { label: string; ext: string; section: string | null; active: boolean; onClick: () => void }) {
  const handleClick = () => {
    if (section) {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    onClick();
  };
  return (
    <button
      onClick={handleClick}
      className={`w-full flex items-center gap-2 py-1 px-2 text-[13px] font-mono transition-colors duration-100 ${
        active ? "bg-[#1a1a1a] text-[#f5f5f5]" : "text-[#888] hover:text-[#ccc] hover:bg-[#141414]"
      }`}
    >
      <FileIcon ext={ext} />
      <span className="truncate">{label}</span>
    </button>
  );
}

/* ─── Panel: Explorer ─── */

function ExplorerPanel({ activeFile, setActiveFile }: { activeFile: string; setActiveFile: (f: string) => void }) {
  return (
    <>
      <div className="px-4 py-2.5 border-b border-[#1a1a1a]">
        <p className="text-[11px] font-mono text-[#555] uppercase tracking-widest">Explorer</p>
      </div>
      <div className="flex-1 overflow-y-auto py-2">
        {fileTree.map((item, i) => {
          if (item.type === "folder" && "children" in item) {
            return (
              <Folder key={i} label={item.label} defaultOpen={item.open}>
                {item.children.map((child) => (
                  <FileItem key={child.label} label={child.label} ext={child.ext} section={child.section} active={activeFile === child.label} onClick={() => setActiveFile(child.label)} />
                ))}
              </Folder>
            );
          }
          return <FileItem key={item.label} label={item.label} ext={item.ext} section={item.section} active={activeFile === item.label} onClick={() => setActiveFile(item.label)} />;
        })}
      </div>
    </>
  );
}

/* ─── Panel: Search ─── */

function SearchPanel() {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const filtered = query.trim()
    ? searchableItems.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()))
    : searchableItems;

  return (
    <>
      <div className="px-3 py-2.5 border-b border-[#1a1a1a]">
        <p className="text-[11px] font-mono text-[#555] uppercase tracking-widest mb-2">Search</p>
        <div className="relative">
          <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#444]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to section..."
            className="w-full bg-[#141414] border border-[#1f1f1f] text-[13px] font-mono text-[#ccc] placeholder:text-[#444] pl-8 pr-3 py-1.5 focus:outline-none focus:border-[#a78bfa] transition-colors"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto py-1">
        {filtered.map((item) => (
          <button
            key={item.section}
            onClick={() => {
              const el = document.getElementById(item.section);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-[#141414] transition-colors duration-100 group"
          >
            <span className="text-[11px] font-mono text-[#555] shrink-0 w-16 truncate">{item.file}</span>
            <span className="text-[13px] font-mono text-[#888] group-hover:text-[#f5f5f5] transition-colors truncate">{item.label}</span>
          </button>
        ))}
        {filtered.length === 0 && (
          <p className="px-3 py-4 text-[12px] font-mono text-[#444] text-center">No results found</p>
        )}
      </div>
    </>
  );
}

/* ─── Panel: Source Control (Git) ─── */

function GitPanel() {
  return (
    <>
      <div className="px-4 py-2.5 border-b border-[#1a1a1a]">
        <p className="text-[11px] font-mono text-[#555] uppercase tracking-widest">Source Control</p>
      </div>
      <div className="px-3 py-3 border-b border-[#1a1a1a]">
        <div className="flex items-center gap-2 mb-1">
          <GitBranch size={13} className="text-[#22c55e]" />
          <span className="text-[13px] font-mono text-[#ccc]">main</span>
        </div>
        <p className="text-[11px] font-mono text-[#444]">0 pending changes</p>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="px-3 py-2">
          <p className="text-[11px] font-mono text-[#555] uppercase tracking-widest mb-2">Recent Commits</p>
        </div>
        {commits.map((commit) => (
          <div key={commit.hash} className="px-3 py-2.5 hover:bg-[#141414] transition-colors duration-100 border-b border-[#111]">
            <div className="flex items-start gap-2">
              <GitCommit size={14} className="text-[#a78bfa] mt-0.5 shrink-0" />
              <div className="min-w-0">
                <p className="text-[13px] font-mono text-[#ccc] leading-snug truncate">{commit.message}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-mono text-[#a78bfa] bg-[#a78bfa]/10 px-1.5 py-0.5 rounded">{commit.hash}</span>
                  <span className="text-[10px] font-mono text-[#555]">{commit.date}</span>
                  <span className="text-[10px] font-mono text-[#444]">{commit.files} files</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ─── Panel: Account / Profile ─── */

function AccountPanel() {
  return (
    <>
      <div className="px-4 py-2.5 border-b border-[#1a1a1a]">
        <p className="text-[11px] font-mono text-[#555] uppercase tracking-widest">Profile</p>
      </div>
      <div className="flex-1 overflow-y-auto">
        {/* Profile card */}
        <div className="px-4 py-5 border-b border-[#1a1a1a]">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#60a5fa] p-[2px] mb-3">
            <div className="w-full h-full rounded-full bg-[#0c0c0c] flex items-center justify-center text-[13px] font-mono font-bold text-[#a78bfa]">
              AO
            </div>
          </div>
          <p className="text-[15px] font-mono font-bold text-[#f5f5f5] mb-0.5">Alden Ong</p>
          <p className="text-[12px] font-mono text-[#a78bfa] mb-2">Fullstack Developer</p>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
            <span className="text-[11px] font-mono text-[#888]">Kuala Lumpur, MY</span>
          </div>
          <p className="text-[11px] font-mono text-[#555]">Software Dev @ Map72</p>
        </div>

        {/* Quick links */}
        <div className="px-3 py-2">
          <p className="text-[11px] font-mono text-[#555] uppercase tracking-widest mb-2 px-1">Links</p>
          {socials.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-2 py-2 hover:bg-[#141414] transition-colors duration-100 group"
            >
              <link.icon size={14} className="text-[#555] group-hover:text-[#f5f5f5] transition-colors shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-[12px] font-mono text-[#888] group-hover:text-[#ccc] transition-colors truncate">{link.value}</p>
              </div>
              <ArrowUpRight size={10} className="text-[#333] group-hover:text-[#888] transition-colors shrink-0" />
            </a>
          ))}
        </div>

        {/* Resume button */}
        <div className="px-4 py-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 bg-[#141414] border border-[#1f1f1f] text-[12px] font-mono text-[#ccc] hover:border-[#333] hover:text-[#f5f5f5] transition-all duration-200"
          >
            <FileText size={13} />
            View Resume
          </a>
        </div>
      </div>
    </>
  );
}

/* ─── Main Sidebar ─── */

export function Sidebar() {
  const [activeFile, setActiveFile] = useState("about_me.ts");
  const [activeTab, setActiveTab] = useState(0);

  const activityItems = [
    { icon: Files, label: "Explorer" },
    { icon: Search, label: "Search" },
    { icon: GitBranch, label: "Source Control" },
    { icon: User, label: "Account" },
  ];

  return (
    <aside className="sidebar-enter hidden lg:flex fixed left-0 top-0 bottom-0 z-40">
      {/* Activity bar */}
      <div className="w-12 bg-[#080808] border-r border-[#1a1a1a] flex flex-col items-center py-3 gap-1">
        {activityItems.map((item, i) => (
          <button
            key={item.label}
            onClick={() => setActiveTab(i)}
            className={`w-10 h-10 flex items-center justify-center transition-colors duration-150 relative ${
              activeTab === i ? "text-[#f5f5f5]" : "text-[#555] hover:text-[#888]"
            }`}
            title={item.label}
          >
            <item.icon size={20} />
            {activeTab === i && (
              <span className="absolute left-0 top-1.5 bottom-1.5 w-[2px] bg-[#a78bfa] rounded-r" />
            )}
          </button>
        ))}
      </div>

      {/* Panel content — swaps based on active tab */}
      <div className="w-52 bg-[#0c0c0c] border-r border-[#1a1a1a] flex flex-col overflow-hidden">
        {activeTab === 0 && <ExplorerPanel activeFile={activeFile} setActiveFile={setActiveFile} />}
        {activeTab === 1 && <SearchPanel />}
        {activeTab === 2 && <GitPanel />}
        {activeTab === 3 && <AccountPanel />}

        {/* Bottom status */}
        <div className="px-3 py-2 border-t border-[#1a1a1a] flex items-center gap-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
          <span className="text-[11px] font-mono text-[#555] truncate">main</span>
        </div>
      </div>
    </aside>
  );
}
