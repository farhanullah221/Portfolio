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
} from "lucide-react";

const skills = [
  {
    name: "HTML5",
    description: "Semantic markup foundation",
    icon: Code2,
    accent: "text-orange-400",
  },
  {
    name: "CSS3",
    description: "Modern styling and layouts",
    icon: Palette,
    accent: "text-blue-400",
  },
  {
    name: "JavaScript",
    description: "Interactive client-side logic",
    icon: Braces,
    accent: "text-yellow-400",
  },
  {
    name: "React",
    description: "Component-driven UIs",
    icon: Atom,
    accent: "text-cyan-400",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first styling",
    icon: Wind,
    accent: "text-sky-400",
  },
  {
    name: "Bootstrap",
    description: "Responsive grid framework",
    icon: Layout,
    accent: "text-purple-400",
  },
  {
    name: "Sass",
    description: "Powerful CSS preprocessor",
    icon: Hash,
    accent: "text-pink-400",
  },
  {
    name: "WordPress",
    description: "Flexible CMS development",
    icon: Globe,
    accent: "text-blue-500",
  },
  {
    name: "Elementor",
    description: "Visual page building",
    icon: LayoutGrid,
    accent: "text-pink-500",
  },
  {
    name: "Elementor Pro",
    description: "Advanced dynamic design",
    icon: Sparkles,
    accent: "text-rose-400",
  },
  {
    name: "Divi",
    description: "Theme builder powerhouse",
    icon: LayoutTemplate,
    accent: "text-violet-400",
  },
  {
    name: "WPBakery",
    description: "Drag-and-drop page design",
    icon: Layers,
    accent: "text-teal-400",
  },
  {
    name: "Git",
    description: "Version control workflow",
    icon: GitBranch,
    accent: "text-orange-500",
  },
  {
    name: "GitHub",
    description: "Collaborative code hosting",
    icon: GitBranch,
    accent: "text-gray-300",
  },
  {
    name: "Figma",
    description: "Design-to-code handoff",
    icon: Palette,
    accent: "text-emerald-400",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gray-950 py-24 sm:py-32"
    >
      {/* soft background effects */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* header */}
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

        {/* grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-5 transition-all duration-300 hover:border-white/20 hover:from-white/[0.1] hover:shadow-lg hover:shadow-blue-500/5"
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute -top-12 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-blue-500/0 blur-2xl transition-all duration-500 group-hover:bg-blue-500/15" />

                <div className="relative flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:scale-110 group-hover:border-white/20 group-hover:bg-white/10">
                    <Icon
                      className={`h-6 w-6 ${skill.accent} transition-transform duration-300 group-hover:scale-110`}
                    />
                  </div>

                  <h3 className="mt-4 text-sm font-semibold text-white">
                    {skill.name}
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-gray-400">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
