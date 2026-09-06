import React from "react";
import {
  Sparkles,
  Code,
  Globe,
  Smartphone,
  Eye,
  BookOpen,
  MessageSquare,
  Laptop,
  CheckCircle2,
  Briefcase,
  Globe2,
  Send,
  Download,
} from "lucide-react";

const whyWorkWithMeData = [
  {
    id: 1,
    title: "Clean and Responsive UI",
    description:
      "Crafting visually balanced layouts with consistent padding, hierarchy, and mathematical spacing that look great on any screen size.",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "Modern Frontend Technologies",
    description:
      "Using React, modern JavaScript (ES6+), and Tailwind CSS to write maintainable, modular, and performant code.",
    icon: Code,
  },
  {
    id: 3,
    title: "WordPress Experience",
    description:
      "Proficient with popular page builders including Elementor, Elementor Pro, Divi, and WPBakery for fast and flexible launches.",
    icon: Globe,
  },
  {
    id: 4,
    title: "Mobile–First Development",
    description:
      "Designing from 320px screen widths up to high-resolution desktop viewports, avoiding awkward line wrapping and horizontal scrollbars.",
    icon: Smartphone,
  },
  {
    id: 5,
    title: "Attention to Detail",
    description:
      "Strict adherence to design specifications, typography scales, contrast ratios, and tactile button feedback.",
    icon: Eye,
  },
  {
    id: 6,
    title: "Continuous Learning",
    description:
      "Consistently expanding technical depth by exploring Next.js, Node.js fundamentals, and modern web developer practices.",
    icon: BookOpen,
  },
  {
    id: 7,
    title: "Clear Communication",
    description:
      "Transparent status updates, active listening, responsive messaging, and documented code pull requests.",
    icon: MessageSquare,
  },
  {
    id: 8,
    title: "Remote Collaboration",
    description:
      "Well-accustomed to distributed async workflows, Git-based version control, and remote teamwork across international timezones.",
    icon: Laptop,
  },
];

export default function WhyWorkWithMe() {
  return (
    <section
      id="why-me"
      className="relative py-20 sm:py-28 bg-[#090d16] text-white overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase shadow-sm shadow-blue-500/5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>VALUE & ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Work With Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A reliable, growth-driven junior developer dedicated to clean craft,
            responsive standards, and proactive collaboration.
          </p>
        </div>

        {/* 8-Card Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {whyWorkWithMeData.map((item) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/40 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Glowing Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/0 to-transparent transition-all duration-300 group-hover:via-blue-400/60" />

                {/* Card Glow Highlight */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/0 blur-2xl transition-all duration-500 group-hover:bg-blue-500/10" />

                <div>
                  {/* Icon Badge Container */}
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:bg-blue-500 group-hover:text-[#090d16] group-hover:scale-105 transition-all duration-300 shrink-0">
                    <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:rotate-3" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-200 mb-2.5">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Opportunity Banner Section */}
        <div className="relative rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 sm:p-8 lg:p-10 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10">
          {/* Top Glowing Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

          {/* Background Gradient Glow */}
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10 space-y-6 max-w-4xl">
            {/* Status Badges Header */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Opportunities
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-mono">
                <Globe2 className="w-3.5 h-3.5 text-blue-400" />
                Remote / International Roles
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-mono">
                <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                Junior & mid Level
              </span>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Looking for the Next Opportunity
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                I'm currently open to junior and mid level frontend, React and
                WordPress development opportunities, especially remote roles and
                project-based work.
              </p>
            </div>

            {/* Details Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="rounded-xl bg-slate-950/60 border border-slate-800/80 p-3.5 font-mono text-xs">
                <span className="text-slate-500 block mb-1">Availability:</span>
                <span className="text-slate-200 font-semibold">
                  Immediate / Flexible
                </span>
              </div>

              <div className="rounded-xl bg-slate-950/60 border border-slate-800/80 p-3.5 font-mono text-xs">
                <span className="text-slate-500 block mb-1">Focus Areas:</span>
                <span className="text-slate-200 font-semibold">
                  Frontend, React & WordPress
                </span>
              </div>

              <div className="rounded-xl bg-slate-950/60 border border-slate-800/80 p-3.5 font-mono text-xs">
                <span className="text-slate-500 block mb-1">Timezone:</span>
                <span className="text-slate-200 font-semibold">
                  GMT+5 (Adaptable for overlap)
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-slate-950 font-bold text-sm hover:bg-blue-400 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
              >
                <span>Contact Me</span>
                <Send className="w-4 h-4" />
              </a>

              <a
                href="public\Farhan Salih  Front-End & WordPress Developer CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-white font-medium text-sm transition-all active:scale-95"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
