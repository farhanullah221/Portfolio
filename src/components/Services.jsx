import React, { useState, useEffect } from "react";
import {
  Code,
  Globe,
  Layout,
  RefreshCw,
  CheckCircle2,
  X,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const servicesData = [
  {
    id: "frontend",
    title: "Frontend Development",
    shortDesc:
      "Modern, responsive interfaces built with React, JavaScript, HTML, CSS and Tailwind CSS.",
    icon: Code,
    intro:
      "I build modern, responsive and user-friendly interfaces focused on clean design, performance and usability.",
    whatIOffer: [
      "Responsive website development",
      "React.js development",
      "JavaScript functionality",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Component-based UI development",
      "Cross-browser compatibility",
      "Mobile-first responsive design",
    ],
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "Git & GitHub",
    ],
    whatYouCanExpect: [
      "Clean and maintainable code",
      "Responsive layouts",
      "Modern UI",
      "Fast performance",
      "Reusable components",
      "Professional user experience",
    ],
  },
  {
    id: "wordpress",
    title: "WordPress Development",
    shortDesc:
      "Professional WordPress websites using Elementor, Elementor Pro, Divi and WPBakery.",
    icon: Globe,
    intro:
      "I craft high-performing WordPress solutions tailored to business goals, ensuring full responsiveness, custom page layouts, and scalable structure.",
    whatIOffer: [
      "Custom WordPress websites",
      "Elementor / Elementor Pro",
      "Divi",
      "WPBakery",
      "Responsive design",
      "Theme customization",
      "Plugin integration",
      "Website maintenance",
      "WooCommerce basics",
      "Performance optimization",
    ],
    technologies: [
      "WordPress",
      "Elementor Pro",
      "Divi",
      "WPBakery",
      "PHP Basics",
      "CSS3 / HTML5",
      "MySQL",
    ],
    whatYouCanExpect: [
      "Easy-to-manage content",
      "Pixel-perfect visual design",
      "Optimized loading speed",
      "Mobile & tablet compatibility",
      "Secure structure & updates",
      "Custom theme adjustments",
    ],
  },
  {
    id: "landing-pages",
    title: "Landing Page Development",
    shortDesc:
      "High-quality responsive landing pages designed to communicate clearly and convert visitors.",
    icon: Layout,
    intro:
      "I design and build high-converting landing pages structured specifically to present offer clarity, build trust, and drive user action.",
    whatIOffer: [
      "Modern landing page design",
      "Responsive layouts",
      "Conversion-focused sections",
      "Hero sections",
      "Call-to-action sections",
      "Contact forms",
      "Mobile optimization",
      "Fast-loading pages",
      "Clean UI implementation",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "HTML5/CSS3",
      "JavaScript",
      "WordPress / Elementor",
      "Figma to Code",
    ],
    whatYouCanExpect: [
      "Engaging visual hierarchy",
      "Fast page load speed",
      "Optimized mobile display",
      "Seamless call-to-action flow",
      "Clear user messaging",
      "Cross-device rendering",
    ],
  },
  {
    id: "redesign",
    title: "Website Redesign",
    shortDesc:
      "Transform outdated websites into modern, responsive and professional digital experiences.",
    icon: RefreshCw,
    intro:
      "I revamp legacy websites with fresh design, improved user flows, and optimized mobile interfaces to elevate brand credibility.",
    whatIOffer: [
      "Modernize outdated websites",
      "Improve responsive behavior",
      "Improve visual hierarchy",
      "Better typography",
      "Better spacing and layout",
      "Mobile optimization",
      "UI improvements",
      "Performance improvements",
      "Modern frontend implementation",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "WordPress",
      "Elementor Pro",
      "CSS Grid / Flexbox",
    ],
    whatYouCanExpect: [
      "Refreshed visual aesthetics",
      "Higher audience engagement",
      "Mobile-friendly responsiveness",
      "Faster load benchmarks",
      "Intuitive site navigation",
      "Modern code architecture",
    ],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Open modal handler
  const handleOpenModal = (service) => {
    setSelectedService(service);
    // Slight tick to allow DOM mount before applying active scale/opacity state
    setTimeout(() => {
      setIsAnimating(true);
    }, 10);
  };

  // Close modal handler
  const handleCloseModal = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setSelectedService(null);
    }, 250); // Matches transition duration
  };

  // Close on Escape key press & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedService) {
        handleCloseModal();
      }
    };

    if (selectedService) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedService]);

  // CTA Click inside Modal handler
  const handleCTAClick = (e) => {
    e.preventDefault();
    handleCloseModal();

    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = "#contact";
      }
    }, 260);
  };

  return (
    <section
      id="services"
      className="relative py-20 sm:py-28 bg-[#090d16] text-white overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block px-3.5 py-1.5 text-xs font-mono font-semibold tracking-widest text-teal-400 uppercase bg-teal-500/10 border border-teal-500/20 rounded-full mb-4">
            WHAT I DO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Services I can help you with
          </h2>
        </div>

        {/* 4 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-slate-900/40 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-teal-500/40 hover:bg-slate-900/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-teal-500/5"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenModal(service)}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-teal-400 uppercase group/btn hover:text-teal-300 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-md py-1 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {selectedService && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 lg:p-8 transition-opacity duration-300 ease-out ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
        >
          {/* Dark Transparent Overlay with Backdrop Blur */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
            onClick={handleCloseModal}
          />

          {/* Modal Container */}
          <div
            className={`relative w-[95%] sm:w-[90%] md:w-[85%] max-w-4xl max-h-[88vh] sm:max-h-[85vh] bg-[#0b0f19] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/80 flex flex-col overflow-hidden transform transition-all duration-300 ease-out ${
              isAnimating
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-4"
            }`}
          >
            {/* Modal Header (Fixed at top of panel) */}
            <div className="relative p-6 sm:p-8 border-b border-white/10 bg-slate-900/50 flex items-start justify-between shrink-0">
              <div className="flex items-start gap-4 sm:gap-5 pr-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 mt-0.5">
                  {React.createElement(selectedService.icon, {
                    className: "w-6 h-6 sm:w-7 sm:h-7",
                  })}
                </div>
                <div>
                  <h3
                    id="modal-title"
                    className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                  >
                    {selectedService.title}
                  </h3>
                  <p className="mt-1.5 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {selectedService.intro}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseModal}
                className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 shrink-0"
                aria-label="Close details modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 custom-scrollbar">
              <div>
                <h4 className="text-xs font-mono font-bold tracking-widest text-teal-400 uppercase mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  What I Offer
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.whatIOffer.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span className="text-slate-200 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 2: Technologies */}
              <div>
                <h4 className="text-xs font-mono font-bold tracking-widest text-teal-400 uppercase mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {selectedService.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-medium text-slate-200 bg-teal-500/10 border border-teal-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Section 3: What You Can Expect */}
              <div>
                <h4 className="text-xs font-mono font-bold tracking-widest text-teal-400 uppercase mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  What You Can Expect
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.whatYouCanExpect.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-white/5"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-2" />
                      <span className="text-slate-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer CTA (Fixed at bottom of panel) */}
            <div className="p-5 sm:p-6 border-t border-white/10 bg-slate-900/60 flex items-center justify-between gap-4 shrink-0">
              <span className="hidden sm:inline-block text-xs text-slate-400 font-mono">
                Ready to take your project to the next level?
              </span>
              <a
                href="#contact"
                onClick={handleCTAClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-indigo-400 hover:from-teal-300 hover:to-indigo-300 px-6 py-3 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-teal-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                <span>Let's Work Together</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
