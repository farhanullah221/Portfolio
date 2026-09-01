import React from "react";
import {
  GraduationCap,
  BookOpen,
  School,
  Calendar,
  MapPin,
  Code2,
} from "lucide-react";

const educationData = [
  {
    id: 1,
    title: "Matriculation",
    subtitle: "Science Group",
    institution: "GHSS School Dagai",
    location: null,
    period: null,
    status: "Completed",
    description:
      "Completed secondary education with a focus on science subjects.",
    icon: School,
    technologies: [],
  },
  {
    id: 2,
    title: "F.Sc. Computer Science",
    subtitle: "Intermediate in Computer Science",
    institution: null,
    location: null,
    period: null,
    status: "Completed",
    description:
      "Completed intermediate education with a focus on computer science and foundational technical concepts.",
    icon: BookOpen,
    technologies: [],
  },
  {
    id: 3,
    title: "Diploma in Agricultural Science (DAS)",
    subtitle: null,
    institution: "Amir Muhammad Khan Campus",
    location: "Mardan",
    period: "2023 - 2026",
    status: "In Progress",
    description:
      "Currently pursuing a Diploma in Agricultural Science while continuing to build practical skills in modern web development.",
    icon: GraduationCap,
    technologies: [],
  },
  {
    id: 4,
    title: "Learning Web Development",
    subtitle: "Self-Learning & Practical Projects",
    institution: null,
    location: null,
    period: "2024 - 2025",
    status: "Completed",
    description:
      "Learned and developed practical skills in modern web development through self-learning, hands-on projects and continuous practice.",
    icon: Code2,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "WordPress",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 bg-[#090d16] overflow-hidden"
    >
      {/* Background Ambient Glow (Matching Experience section) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="text-slate-400 text-base">
            My academic background and educational journey.
          </p>
        </div>

        {/* 4-Card Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {educationData.map((item) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/40 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Top Bar: Icon, Period/Status Badges, Location */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-[#090d16] transition-colors duration-300">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 inline-flex items-center gap-1.5">
                        {item.period ? (
                          <>
                            <Calendar className="w-3 h-3" />
                            {item.period}
                          </>
                        ) : (
                          item.status
                        )}
                      </span>
                    </div>

                    {item.location && (
                      <span className="text-xs text-slate-400 inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {item.location}
                      </span>
                    )}
                  </div>

                  {/* Qualification Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  {item.subtitle && (
                    <p className="text-sm font-medium text-slate-300 mt-0.5">
                      {item.subtitle}
                    </p>
                  )}

                  {/* Institution */}
                  {item.institution && (
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                      {item.institution}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mt-3 font-normal">
                    {item.description}
                  </p>

                  {/* Technologies / Focus Badges (if available) */}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-800/60">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Status Footer Divider Tag */}
                <div className="flex items-center justify-between pt-4 mt-6 border-t border-slate-800/60 text-xs font-mono text-slate-400">
                  <span>STATUS</span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50">
                    {item.status}
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
