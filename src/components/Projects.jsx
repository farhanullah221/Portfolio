import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { projects, filters } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Filter project data based on category selection
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : activeFilter === "Frontend"
        ? projects.filter(
            (p) => p.filter === "React" || p.filter === "Frontend",
          )
        : projects.filter((p) => p.filter === activeFilter);

  // Determine initial display slice (3 items max initially)
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setShowAll(false); // Reset to collapsed view on category switch
  };

  return (
    <section
      id="projects"
      className="relative bg-[#090d16] py-20 sm:py-28 overflow-hidden text-white"
    >
      {/* Background Decorative Accents */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/3 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-block px-3.5 py-1.5 text-xs font-mono font-semibold tracking-widest text-teal-400 uppercase bg-teal-500/10 border border-teal-500/20 rounded-full mb-4">
            MY WORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Selected Projects
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            A selection of modern web applications, responsive interfaces, and
            custom client platforms I have designed and built.
          </p>
        </div>

        {/* Category Filter Tabs */}
        {filters && filters.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-12">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 ${
                    isActive
                      ? "bg-teal-500/10 border border-teal-500/30 text-teal-300 font-semibold shadow-sm"
                      : "bg-slate-900/40 border border-white/10 text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        )}

        {/* Compact Responsive Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* "View All Projects" / "Show Less" Expand Toggle */}
        {filteredProjects.length > 3 && (
          <div className="mt-12 sm:mt-16 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-indigo-400 hover:from-teal-300 hover:to-indigo-300 rounded-xl transition-all duration-200 shadow-md shadow-teal-500/10 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              <span>{showAll ? "Show Less" : "View All Projects"}</span>
              {showAll ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
