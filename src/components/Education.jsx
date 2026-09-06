import React from "react";
import {
  GraduationCap,
  BookOpen,
  School,
  Calendar,
  MapPin,
  CheckCircle2,
  Clock,
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
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-20 sm:py-28 bg-[#090d16] text-white overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase shadow-sm shadow-blue-500/5">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            My academic background and educational journey.
          </p>
        </div>

        {/* 3-Card Balanced Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {educationData.map((item) => {
            const IconComponent = item.icon;
            const isInProgress = item.status === "In Progress";

            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/40 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 flex flex-col justify-between h-full overflow-hidden"
              >
                {/* Top Glowing Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/0 to-transparent transition-all duration-300 group-hover:via-blue-400/60" />

                <div>
                  {/* Top Header: Icon & Metadata */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-[#090d16] group-hover:scale-105 transition-all duration-300 shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Period or Location Badges */}
                    <div className="flex flex-col items-end gap-1.5">
                      {item.period && (
                        <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 inline-flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                      )}

                      {item.location && (
                        <span className="text-[11px] text-slate-400 inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {item.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Qualification Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  {item.subtitle && (
                    <p className="text-xs font-semibold text-blue-400/90 mt-1">
                      {item.subtitle}
                    </p>
                  )}

                  {/* Institution */}
                  {item.institution && (
                    <p className="text-xs text-slate-300 font-medium mt-1.5">
                      {item.institution}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-3 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Status Footer */}
                <div className="flex items-center justify-between pt-4 mt-6 border-t border-slate-800/80 text-xs font-mono text-slate-400">
                  <span className="text-[11px] tracking-wider uppercase text-slate-500">
                    STATUS
                  </span>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5 border ${
                      isInProgress
                        ? "bg-teal-500/10 text-teal-300 border-teal-500/30"
                        : "bg-blue-500/10 text-blue-300 border-blue-500/20"
                    }`}
                  >
                    {isInProgress ? (
                      <Clock className="w-3 h-3 text-teal-400" />
                    ) : (
                      <CheckCircle2 className="w-3 h-3 text-blue-400" />
                    )}
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
