import React from "react";
import { ArrowUp, Mail, ArrowRight } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/farhanullah221",
    type: "github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/farhan-ullah-10206633b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    type: "linkedin",
  },
  {
    name: "Email",
    href: "mailto:farhansalikh@gmail.com",
    type: "email",
  },
];

function SocialIcon({ type }) {
  if (type === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-[17px] w-[17px]"
        aria-hidden="true"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.84 9.49.5.09.68-.217.68-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0 1 12 6.836a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.335-.012 2.412-.012 2.74 0 .268.18.579.688.481A10.01 10.01 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-[17px] w-[17px]"
        aria-hidden="true"
      >
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
      </svg>
    );
  }

  return <Mail className="h-[17px] w-[17px]" />;
}

export default function Footer() {
  const scrollToTop = (e) => {
    if (e) e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#05070b]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[700px] -translate-x-1/2 rounded-full bg-teal-500/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Main footer */}
        <div className="grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_0.8fr] md:py-20">
          {/* Brand */}
          <div className="max-w-md">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="group flex items-center space-x-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-md select-none animate-[logoEntrance_500ms_ease-out_forwards] transition-all duration-400 ease-out hover:-translate-y-0.5 hover:rotate-0 motion-reduce:animate-none motion-reduce:transform-none"
              aria-label="Farhan Salih Home"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-[#CCFF00] rounded-[2px] shrink-0">
                <span
                  className="text-[#0D0E10] font-black text-lg tracking-tighter leading-none"
                  style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                >
                  FS
                </span>
              </div>
              <div className="flex flex-col justify-center">
                <span
                  className="text-lg sm:text-xl font-[850] tracking-tight text-white leading-none"
                  style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                >
                  Farhan Salih
                </span>
                <span className="mt-[3px] text-[9.5px] sm:text-[10px] font-mono tracking-[0.2em] text-[#8A8F98] font-semibold uppercase leading-none">
                  FRONTEND / WORDPRESS
                </span>
              </div>
            </a>

            <p className="mt-5 max-w-sm text-[15px] leading-7 text-slate-400">
              Frontend & WordPress Developer creating clean, responsive and
              modern digital experiences.
            </p>

            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/[0.07] bg-white/[0.03] px-3.5 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs font-medium text-slate-300">
                Available for new projects
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Navigation
            </p>

            <nav className="grid grid-cols-2 gap-x-8 gap-y-4">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="group flex w-fit items-center gap-1.5 text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  <span>{link.name}</span>

                  <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-teal-400" />
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Let's Connect
            </p>

            <p className="mb-5 text-sm leading-6 text-slate-400">
              Have a project or opportunity in mind? Let's talk.
            </p>

            <div className="flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name === "Email" ? undefined : "_blank"}
                  rel={
                    social.name === "Email" ? undefined : "noopener noreferrer"
                  }
                  aria-label={social.name}
                  title={social.name}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-teal-400/[0.08] hover:text-teal-400"
                >
                  <SocialIcon type={social.type} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/[0.07]" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 py-7 sm:flex-row">
          <p className="text-xs text-slate-500">
            © 2026 <span className="text-slate-400">Farhan Salih</span>. All
            rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span className="text-xs text-slate-600">
              Designed & Built with React
            </span>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
              className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-teal-400/[0.08] hover:text-teal-400"
            >
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
