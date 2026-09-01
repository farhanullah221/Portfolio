import React from "react";
import { ArrowUpRight, Mail, Code2 } from "lucide-react";

// Brand Icon Components (Resolves Lucide export error for brand icons)
const GithubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
);

const codeSnippets = [
  { text: "<React />", top: "15%", left: "8%" },
  { text: 'const developer = "Farhan";', top: "28%", left: "72%" },
  { text: "function App() {}", top: "65%", left: "12%" },
  { text: '<div className="portfolio">', top: "78%", left: "80%" },
  { text: "npm run dev", top: "20%", left: "85%" },
  { text: 'import React from "react";', top: "82%", left: "32%" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-[#090d16]"
    >
      {/* ========================================================================= */}
      {/* HERO BACKGROUND                                                            */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* Ambient Teal Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-teal-500/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-teal-500/5 blur-[100px] rounded-full" />

        {/* Animated Technical Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] animate-[gridScroll_40s_linear_infinite] motion-reduce:animate-none opacity-60" />

        {/* Connecting Lines */}
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/15 to-transparent animate-[linePulse_6s_ease-in-out_infinite] motion-reduce:animate-none" />
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/10 to-transparent animate-[linePulse_8s_ease-in-out_infinite_2s] motion-reduce:animate-none" />

        {/* Floating Code Snippets */}
        {codeSnippets.map((item, index) => (
          <div
            key={index}
            style={{ top: item.top, left: item.left }}
            className={`absolute hidden md:block font-mono text-[11px] lg:text-xs text-teal-400/25 blur-[0.3px] whitespace-nowrap animate-[floatCode_12s_ease-in-out_infinite] motion-reduce:animate-none ${
              index % 2 === 0 ? "animation-delay-2000" : ""
            }`}
          >
            {item.text}
          </div>
        ))}

        {/* Floating Ambient Particles */}
        <div className="absolute top-1/5 left-1/4 w-1.5 h-1.5 rounded-full bg-teal-400/30 blur-[1px] animate-[particleFloat_10s_ease-in-out_infinite] motion-reduce:animate-none" />
        <div className="absolute top-3/4 left-3/4 w-2 h-2 rounded-full bg-teal-400/20 blur-[1px] animate-[particleFloat_14s_ease-in-out_infinite_3s] motion-reduce:animate-none" />
        <div className="absolute top-1/2 left-4/5 w-1 h-1 rounded-full bg-teal-400/40 blur-[0.5px] animate-[particleFloat_8s_ease-in-out_infinite_1s] motion-reduce:animate-none" />
        <div className="absolute top-2/3 left-1/5 w-1.5 h-1.5 rounded-full bg-teal-400/25 blur-[1px] animate-[particleFloat_12s_ease-in-out_infinite_5s] motion-reduce:animate-none" />
      </div>

      {/* CSS Keyframe Animations */}
      <style>{`
        @keyframes gridScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(48px); }
        }
        @keyframes floatCode {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-12px) rotate(0.5deg); opacity: 0.35; }
        }
        @keyframes linePulse {
          0%, 100% { opacity: 0.1; transform: scaleX(0.95); }
          50% { opacity: 0.3; transform: scaleX(1.05); }
        }
        @keyframes particleFloat {
          0%, 100% { transform: translate(0, 0); opacity: 0.2; }
          50% { transform: translate(-10px, -20px); opacity: 0.5; }
        }
      `}</style>
      {/* ========================================================================= */}

      {/* Hero Content */}
      <div className="max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
              </span>
              <span>Available for Onsite, Hybrid & Remote Work</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Building Modern <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-300 to-indigo-300">
                Web Experiences
              </span>
            </h1>

            {/* Subtitle / Intro */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl font-normal leading-relaxed">
              Hi, I'm{" "}
              <span className="text-white font-semibold">Farhan Salih</span>. A
              Frontend & WordPress Developer specializing in building
              high-performance, responsive websites and interactive web
              applications using React, Tailwind CSS, and Elementor.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-indigo-400 hover:from-teal-300 hover:to-indigo-300 px-6 py-3.5 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-teal-500/10 active:translate-y-0"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 bg-slate-900/80 hover:text-white hover:bg-slate-800/80 border border-white/10 px-6 py-3.5 rounded-full transition-all duration-200"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10 w-full max-w-md">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                Connect
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/farhanullah221"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-slate-900/60 border border-white/10 text-slate-400 hover:text-white hover:border-teal-500/40 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/farhan-ullah-10206633b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-slate-900/60 border border-white/10 text-slate-400 hover:text-white hover:border-teal-500/40 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:farhansalikh@gmail.com"
                  className="p-2.5 rounded-full bg-slate-900/60 border border-white/10 text-slate-400 hover:text-white hover:border-teal-500/40 transition-colors"
                  aria-label="Email Contact"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Developer Visual Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Card Ambient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000" />

              <div className="relative rounded-2xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                {/* Code Editor Header Dots */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-teal-400" />
                    developer.config.js
                  </span>
                </div>

                {/* Developer Object Code Display */}
                <div className="font-mono text-xs sm:text-sm space-y-2.5 text-slate-300">
                  <p className="text-slate-500">// Personal Stack & Info</p>
                  <p>
                    <span className="text-teal-400">const</span>{" "}
                    <span className="text-indigo-300">developer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    name: <span className="text-teal-300">'Farhan Salih'</span>,
                  </p>
                  <p className="pl-4">
                    title:{" "}
                    <span className="text-teal-300">'Frontend Developer'</span>,
                  </p>
                  <p className="pl-4">
                    skills: [<span className="text-amber-300">'React'</span>,{" "}
                    <span className="text-amber-300">'WordPress'</span>,{" "}
                    <span className="text-amber-300">'Tailwind'</span>],
                  </p>
                  <p className="pl-4">
                    location: <span className="text-teal-300">'Pakistan'</span>,
                  </p>
                  <p className="pl-4">
                    available: <span className="text-indigo-400">true</span>
                  </p>
                  <p>&#125;;</p>
                </div>

                {/* Stat Highlights Footer */}
                <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-white/10">
                  <div>
                    <span className="text-2xl font-bold text-white block">
                      100%
                    </span>
                    <span className="text-xs text-slate-400">
                      Client Satisfaction
                    </span>
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-white block">
                      Responsive
                    </span>
                    <span className="text-xs text-slate-400">
                      Modern Codebase
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
