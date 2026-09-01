import { ArrowUpRight, Code2, Monitor, Layers, Sparkles } from "lucide-react";

const stats = [
  { label: "Year Experience", value: "1+", icon: Code2 },
  { label: "Projects", value: "70+", icon: Layers },
  { label: "React & WordPress", value: "Stack", icon: Monitor },
  { label: "Remote Ready", value: "100%", icon: Sparkles },
];

const skills = [
  "React development",
  "Frontend development",
  "WordPress",
  "Responsive design",
  "UI implementation",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gray-950 py-24 sm:py-32"
    >
      {/* soft background effects */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-2 shadow-2xl transition-all duration-500 hover:border-white/20">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.openai.com/static-rsc-4/dJGcsV-wSLtsEwnDs9FbWqDnKVUAzif43kwsHTQhzoZ-t_2B64O7vWiSHgXD_cOFCtWa4CJO5w3g6mhYLLv104A4eN0mtc1tvuHI8nWL3175Hv7_BCUwgOaubImekDuZxPOvjknM3x_6Bb590fxmT9OJB3aFAOp1Fg9vifrUXyw?purpose=inline"
                  alt="Farhan Salih - Frontend Developer"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-lg border border-white/10 bg-gray-950/60 px-3 py-1.5 backdrop-blur-md">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  <span className="text-xs font-medium text-gray-300">
                    Available for work
                  </span>
                </div>

                {/* bottom info */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-gray-950/70 px-4 py-3 backdrop-blur-md">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Frontend Developer
                    </p>
                    <p className="text-xs text-gray-400">
                      React · WordPress · UI
                    </p>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-blue-500/20 text-xs font-bold text-blue-300">
                      JS
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-cyan-500/20 text-xs font-bold text-cyan-300">
                      TS
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-emerald-500/20 text-xs font-bold text-emerald-300">
                      WP
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* decorative accent line */}
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl border border-white/5" />
          </div>

          {/* Right — content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">
                About Me
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Building modern websites with clean code and thoughtful design.
            </h2>

            <p className="mt-5 text-base leading-relaxed text-gray-400">
              I'm a Frontend and WordPress Developer focused on building
              responsive, user-friendly and visually polished websites. I enjoy
              turning ideas and designs into fast, functional web experiences.
            </p>

            <p className="mt-4 text-base leading-relaxed text-gray-400">
              My work spans React development, frontend development, WordPress
              customization, responsive design, and precise UI implementation
              bridging the gap between design and engineering to ship
              experiences that feel effortless.
            </p>

            {/* skill chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300 transition-colors duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* button */}
            <a href="#contact">
              <button className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10">
                Let's Work Together
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </a>

            {/* statistics */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="group rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-4 transition-all duration-300 hover:border-white/20 hover:from-white/[0.1]"
                  >
                    <Icon className="h-5 w-5 text-blue-400 transition-colors duration-300 group-hover:text-cyan-300" />
                    <p className="mt-3 text-2xl font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-xs text-gray-400">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
