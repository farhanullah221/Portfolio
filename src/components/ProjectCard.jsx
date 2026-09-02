import React from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-500/40 hover:bg-slate-900/70 hover:shadow-xl hover:shadow-teal-500/5">
      {/* Compact Image Container */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/30 to-transparent opacity-80" />

        {/* Category Badge */}
        {project.category && (
          <div className="absolute left-3 top-3">
            <span className="rounded-md border border-teal-500/20 bg-[#090d16]/80 px-2.5 py-0.5 text-[11px] font-mono font-medium text-teal-400 backdrop-blur-md">
              {project.category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title & Top Hover Icon */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-white transition-colors duration-200 group-hover:text-teal-300">
            {project.title}
          </h3>

          <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-400" />
        </div>

        {/* Short Description */}
        <p className="mt-2 text-xs leading-relaxed text-slate-400 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies Tag Badges */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[11px] text-slate-300 transition-colors duration-200 hover:border-teal-500/30 hover:bg-teal-500/10 hover:text-teal-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons Spacer */}
        <div className="mt-auto pt-5">
          <div className="flex items-center gap-2 pt-3 border-t border-white/5">
            {/* Live Demo Link */}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-teal-500/20 bg-teal-500/10 px-3 py-1.5 text-xs font-semibold text-teal-300 transition-all duration-200 hover:border-teal-400/40 hover:bg-teal-500/20 hover:text-white"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Live Demo</span>
              </a>
            )}

            {/* GitHub Repo Link */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <svg
                  className="h-3.5 w-3.5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
