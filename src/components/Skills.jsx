import { useState } from "react";
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Wind,
  Layout,
  Hash,
  Globe,
  LayoutGrid,
  Sparkles,
  LayoutTemplate,
  Layers,
  GitBranch,
  Wrench,
  BookOpen,
  Boxes,
  Server,
  Terminal,
  FileCode2,
} from "lucide-react";

const skills = [
  {
    name: "HTML5",
    category: "Frontend",
    tagline: "Semantic & Accessible",
    description:
      "Semantic markup foundation, modern HTML5 elements, and SEO-friendly document structuring.",
    icon: Code2,
    accent: "text-orange-400",
    status: "Applied in Projects",
  },
  {
    name: "CSS3",
    category: "Frontend",
    tagline: "Flexbox & Grid",
    description:
      "Modern styling including Flexbox, CSS Grid, custom properties, animations, and responsive media queries.",
    icon: Palette,
    accent: "text-blue-400",
    status: "Applied in Projects",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    tagline: "ES6+ Modern JS",
    description:
      "ES6+ syntax, DOM manipulation, asynchronous programming (Promises/async-await), and event handling.",
    icon: Braces,
    accent: "text-yellow-400",
    status: "Applied in Projects",
  },
  {
    name: "React",
    category: "Frontend",
    tagline: "Hooks & Components",
    description:
      "Component-driven development, React hooks, props, conditional rendering, and state management.",
    icon: Atom,
    accent: "text-cyan-400",
    status: "Applied in Projects",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    tagline: "Utility-First",
    description:
      "Rapid custom UI design with modular utility classes and responsive configurations.",
    icon: Wind,
    accent: "text-sky-400",
    status: "Applied in Projects",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    tagline: "Responsive Grid",
    description:
      "Responsive grid framework, component patterns, and rapid layout prototyping.",
    icon: Layout,
    accent: "text-purple-400",
    status: "Applied in Projects",
  },
  {
    name: "Sass",
    category: "Frontend",
    tagline: "CSS Preprocessor",
    description:
      "Nestings, variables, mixins, and scalable modular stylesheet architecture.",
    icon: Hash,
    accent: "text-pink-400",
    status: "Applied in Projects",
  },
  {
    name: "WordPress",
    category: "WordPress",
    tagline: "CMS & Dynamic Sites",
    description:
      "Flexible CMS development, custom themes, site structure, and content optimization.",
    icon: Globe,
    accent: "text-blue-500",
    status: "Applied in Projects",
  },
  {
    name: "Elementor",
    category: "WordPress",
    tagline: "Page Builder",
    description:
      "Visual page building, widget customization, and responsive layout assembly.",
    icon: LayoutGrid,
    accent: "text-pink-500",
    status: "Applied in Projects",
  },
  {
    name: "Elementor Pro",
    category: "WordPress",
    tagline: "Advanced Builder",
    description:
      "Advanced dynamic design, theme builder templates, popups, and custom integrations.",
    icon: Sparkles,
    accent: "text-rose-400",
    status: "Applied in Projects",
  },
  {
    name: "Divi",
    category: "WordPress",
    tagline: "Theme Powerhouse",
    description:
      "Theme builder setup, module customization, and multi-layout page structuring.",
    icon: LayoutTemplate,
    accent: "text-violet-400",
    status: "Applied in Projects",
  },
  {
    name: "WPBakery",
    category: "WordPress",
    tagline: "Drag-&-Drop",
    description:
      "Drag-and-drop page design, content row setups, and legacy theme management.",
    icon: Layers,
    accent: "text-teal-400",
    status: "Applied in Projects",
  },
  {
    name: "Git",
    category: "Tools",
    tagline: "Version Control",
    description:
      "Version control workflow, branching strategies, and codebase tracking.",
    icon: GitBranch,
    accent: "text-orange-500",
    status: "Applied in Projects",
  },
  {
    name: "GitHub",
    category: "Tools",
    tagline: "Code Hosting",
    description:
      "Collaborative code hosting, repository management, and deployment workflows.",
    icon: GitBranch,
    accent: "text-gray-300",
    status: "Applied in Projects",
  },
  {
    name: "Figma",
    category: "Tools",
    tagline: "Design Handoff",
    description:
      "Design-to-code handoff, inspecting UI specs, and asset extraction.",
    icon: Palette,
    accent: "text-emerald-400",
    status: "Applied in Projects",
  },
  {
    name: "Node.js",
    category: "Learning",
    tagline: "Backend Runtime",
    description:
      "Asynchronous event-driven JavaScript runtime environment for backend logic.",
    icon: Server,
    accent: "text-green-500",
    status: "In Progress",
  },
  {
    name: "Next.js",
    category: "Learning",
    tagline: "React Framework",
    description:
      "Full-stack React framework featuring SSR, static site generation, and server components.",
    icon: Terminal,
    accent: "text-white",
    status: "In Progress",
  },
  {
    name: "TypeScript",
    category: "Learning",
    tagline: "Typed JavaScript",
    description:
      "Strongly typed programming language built on JavaScript for scalable application development.",
    icon: FileCode2,
    accent: "text-blue-400",
    status: "In Progress",
  },
];

const categories = [
  { id: "all", name: "All Technologies", icon: Boxes },
  { id: "Frontend", name: "Frontend", icon: Code2 },
  { id: "WordPress", name: "WordPress", icon: Globe },
  { id: "Tools", name: "Tools", icon: Wrench },
  { id: "Learning", name: "Learning", icon: BookOpen },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  const getCategoryCount = (categoryId) => {
    if (categoryId === "all") return skills.length;
    return skills.filter((s) => s.category === categoryId).length;
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gray-950 py-24 sm:py-32"
    >
      {/* Soft background effects */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">
              My Skills
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technologies I work with
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-400">
            A versatile toolkit spanning modern frontend frameworks, WordPress
            ecosystems, and design tools built to deliver polished,
            production-ready experiences.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const count = getCategoryCount(cat.id);
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`group flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 sm:text-sm ${
                  isActive
                    ? "border-blue-500/50 bg-blue-500/10 text-white shadow-lg shadow-blue-500/10"
                    : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                <Icon
                  className={`h-4 w-4 transition-colors ${
                    isActive
                      ? "text-blue-400"
                      : "text-gray-400 group-hover:text-gray-200"
                  }`}
                />
                <span>{cat.name}</span>
                <span
                  className={`ml-1 flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[11px] font-semibold transition-colors ${
                    isActive
                      ? "bg-blue-500/20 text-blue-300"
                      : "bg-white/10 text-gray-400 group-hover:bg-white/15 group-hover:text-gray-300"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:from-white/[0.08] hover:shadow-xl hover:shadow-blue-500/5"
              >
                {/* Radial Glow Effect */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-500/0 blur-2xl transition-all duration-500 group-hover:bg-blue-500/15" />

                {/* Card Top: Icon & Tag */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:scale-105 group-hover:border-white/20 group-hover:bg-white/10">
                    <Icon className={`h-6 w-6 ${skill.accent}`} />
                  </div>

                  {skill.tagline && (
                    <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium tracking-wide text-gray-300">
                      {skill.tagline}
                    </span>
                  )}
                </div>

                {/* Card Main Info */}
                <div className="mt-5">
                  <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-blue-300">
                    {skill.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                    {skill.category}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-gray-400 sm:text-sm">
                    {skill.description}
                  </p>
                </div>

                {/* Card Footer Indicator */}
                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-[11px] text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        skill.category === "Learning"
                          ? "bg-amber-400 animate-pulse"
                          : "bg-emerald-400 animate-pulse"
                      }`}
                    />
                    {skill.status}
                  </span>
                  <span className="font-mono text-[10px] text-gray-500">
                    ID: {skill.name.toLowerCase().replace(/[\s.-]+/g, "")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
