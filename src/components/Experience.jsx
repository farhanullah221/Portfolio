import React from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Frontend WordPress Developer Intern",
    company: "Intelgency IT Solutions",
    location: "Islamabad, Pakistan",
    period: "Oct 2025 - Dec 2025",
    description:
      "Worked on frontend development and WordPress website implementation, focusing on responsive layouts, UI development and website customization.",
    technologies: ["WordPress", "Elementor", "HTML", "CSS"],
  },
  {
    id: 2,
    role: "Frontend WordPress Developer ",
    company: "FutureLift Marketing Agency",
    location: "Hybrid (Remote + On-site), islamabad, Pakistan",
    period: "March 2026 - August 2026",
    description:
      "Worked on frontend website development and WordPress design, focusing on responsive layouts, UI implementation and website customization.",
    technologies: ["WordPress", "Elementor", "HTML", "CSS"],
  },
  {
    id: 3,
    role: "Frontend / WordPress Developer",
    company: "Mr Web Hub",
    location: "Hybrid (Remote + On-site), islamabad, Pakistan",
    period: "August 2026 - Present",
    description:
      "Worked on frontend development and WordPress websites, focusing on responsive design, website customization and user-friendly interfaces.",
    technologies: ["WordPress", "Elementor", "React", "Tailwind CSS"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 bg-[#090d16] overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            My professional journey
          </h2>
          <p className="text-slate-400 text-base">
            Hands-on experience in building modern web applications and
            responsive WordPress solutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-3 bottom-3 w-0.5 bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute left-4 md:left-1/2 top-1.5 -translate-x-1/2 z-20 flex items-center justify-center">
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-30"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-blue-500 border-2 border-[#090d16]"></span>
                    </span>
                  </div>

                  {/* Content Card Side */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="group relative rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/40 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1">
                      {/* Top Bar: Role & Date */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 inline-flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        {exp.location && (
                          <span className="text-xs text-slate-400 inline-flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-500" />
                            {exp.location}
                          </span>
                        )}
                      </div>

                      {/* Position Title */}
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>

                      {/* Company Name */}
                      <p className="text-sm font-medium text-slate-300 mb-3">
                        {exp.company}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-slate-400 leading-relaxed mb-4 font-normal">
                        {exp.description}
                      </p>

                      {/* Technology Badges */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty Spacer Side for Desktop Symmetry */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
