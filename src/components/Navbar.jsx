import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -65% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navLinks.forEach((link) => {
      const sectionId = link.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Prevent scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#090d16]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg shadow-black/40"
          : "bg-[#090d16]/80 sm:bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
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

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-1 bg-slate-900/60 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-[13.5px] lg:text-[14px] font-medium transition-all duration-200 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-white/10 rounded-full -z-10 border border-white/10" />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

           <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-1.5 text-[13.5px] lg:text-[14px] font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-indigo-400 hover:from-teal-300 hover:to-indigo-300 px-4.5 py-2 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 shadow-md shadow-teal-500/10 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

           <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

       <div
        className={`md:hidden fixed inset-x-0 top-[65px] h-[calc(100vh-65px)] bg-[#090d16] border-b border-white/10 transition-all duration-300 ease-in-out origin-top ${
          mobileMenuOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <nav
          className="flex flex-col h-full px-6 pt-6 pb-20 space-y-2 overflow-y-auto"
          aria-label="Mobile Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? "text-teal-400 bg-teal-500/10 border border-teal-500/20"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <div className="pt-6 mt-4 border-t border-white/10">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full inline-flex justify-center items-center gap-2 text-sm font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-indigo-400 px-5 py-3.5 rounded-xl transition-all active:scale-[0.99]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </nav>
      </div>

      {/* Keyframe Definition for Subtle Load Animation */}
      <style>{`
        @keyframes logoEntrance {
          0% {
            opacity: 0;
            transform: translateY(4px) rotate(-1.5deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotate(-1.5deg);
          }
        }
      `}</style>
    </header>
  );
}
