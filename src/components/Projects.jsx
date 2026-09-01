import { useState } from "react";
import { projects, filters } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : activeFilter === "Frontend"
        ? projects.filter((p) => p.filter === "React")
        : projects.filter((p) => p.filter === activeFilter);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gray-950 py-24 sm:py-32"
    >
      {/* soft background effects */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">
              My Work
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Selected Projects
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-400">
            A selection of websites and interfaces I've built.
          </p>
        </div>

        {/* filter buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-xl border px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "border-blue-400/40 bg-blue-500/15 text-blue-200"
                  : "border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:bg-white/10 hover:text-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
