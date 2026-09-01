import { ExternalLink, ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-lg border border-white/10 bg-gray-950/70 px-3 py-1 text-xs font-medium text-gray-200 backdrop-blur-md">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Title */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>

          <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-gray-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-300" />
        </div>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        {project.technologies && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300 transition-colors duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="mt-6 flex items-center gap-3 pt-2">
          {/* Live Demo */}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}

          {/* GitHub */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <ExternalLink className="h-4 w-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
