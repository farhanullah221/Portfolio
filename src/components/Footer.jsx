import React, { useEffect, useRef } from "react";
import { ArrowUp, Mail, ArrowRight } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const servicesList = [
  { name: "Frontend Development", href: "#services" },
  { name: "WordPress Development", href: "#services" },
  { name: "Landing Pages", href: "#services" },
  { name: "Website Redesign", href: "#services" },
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

/* ==================================================
   DYNAMIC NETWORK WITH EXCLUSION ZONE & FASTER BOUNCE
   ================================================== */
function NetworkBackground({ mouseRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    let particles = [];
    const getParticleCount = () => {
      if (width < 640) return 38; // Mobile
      if (width < 1024) return 65; // Tablet
      return 90; // Desktop
    };

    // Calculate perpendicular distance from point (mouse) to line segment (p1 -> p2)
    const distToSegment = (p1, p2, mouse) => {
      const l2 = (p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y);
      if (l2 === 0) return Math.hypot(p1.x - mouse.x, p1.y - mouse.y);
      let t =
        ((mouse.x - p1.x) * (p2.x - p1.x) + (mouse.y - p1.y) * (p2.y - p1.y)) /
        l2;
      t = Math.max(0, Math.min(1, t));
      const projX = p1.x + t * (p2.x - p1.x);
      const projY = p1.y + t * (p2.y - p1.y);
      return Math.hypot(mouse.x - projX, mouse.y - projY);
    };

    class Particle {
      constructor() {
        this.baseX = Math.random() * width;
        this.baseY = Math.random() * height;

        this.x = this.baseX;
        this.y = this.baseY;

        // ~1.8x Faster Movement Speed
        this.vx = (Math.random() - 0.5) * 0.58;
        this.vy = (Math.random() - 0.5) * 0.58;

        this.dispX = 0;
        this.dispY = 0;

        this.radius = Math.random() * 1.25 + 0.95;
        this.isTeal = Math.random() < 0.2;
        this.alpha = Math.random() * 0.35 + 0.25;
      }

      update() {
        // Ambient movement
        this.baseX += this.vx;
        this.baseY += this.vy;

        // Invisible wall bounce behavior
        if (this.baseX <= 10) {
          this.baseX = 10;
          this.vx *= -1;
        } else if (this.baseX >= width - 10) {
          this.baseX = width - 10;
          this.vx *= -1;
        }

        if (this.baseY <= 10) {
          this.baseY = 10;
          this.vy *= -1;
        } else if (this.baseY >= height - 10) {
          this.baseY = height - 10;
          this.vy *= -1;
        }

        // Mouse Repulsion & Clear Exclusion Zone
        let targetDispX = 0;
        let targetDispY = 0;

        if (mouseRef.current.active) {
          const dx = this.baseX - mouseRef.current.x;
          const dy = this.baseY - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const exclusionRadius = 38; // Absolute clear zone around cursor
          const influenceRadius = 110;

          if (dist < influenceRadius && dist > 0) {
            const dirX = dx / dist;
            const dirY = dy / dist;

            if (dist < exclusionRadius) {
              // Push particle outside exclusion radius
              const pushForce = exclusionRadius - dist + 5;
              targetDispX = dirX * pushForce;
              targetDispY = dirY * pushForce;
            } else {
              // Controlled surrounding repulsion
              const factor =
                1 -
                (dist - exclusionRadius) / (influenceRadius - exclusionRadius);
              const force = factor * 22;
              targetDispX = dirX * force;
              targetDispY = dirY * force;
            }
          }
        }

        // Smooth Lerp transitions (stable when mouse stops)
        this.dispX += (targetDispX - this.dispX) * 0.12;
        this.dispY += (targetDispY - this.dispY) * 0.12;

        this.x = this.baseX + this.dispX;
        this.y = this.baseY + this.dispY;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.isTeal
          ? `rgba(45, 212, 191, ${this.alpha * 0.9})`
          : `rgba(240, 246, 255, ${this.alpha * 0.85})`;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const count = getParticleCount();
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    // Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      // Network Lines Rendering with Mouse Exclusion Check
      const baseMaxDist = 135;
      const cursorExtraRadius = 120;
      const clearZoneRadius = 32; // No lines allowed inside this radius around mouse

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Check if line segment intersects mouse clear zone
          if (mouseRef.current.active) {
            const lineDistanceToMouse = distToSegment(p1, p2, mouseRef.current);
            if (lineDistanceToMouse < clearZoneRadius) {
              // Exclude line from passing under cursor
              continue;
            }
          }

          // Temporary extra connections near cursor
          let extraBoost = 0;
          if (mouseRef.current.active) {
            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2;
            const distToMouse = Math.hypot(
              midX - mouseRef.current.x,
              midY - mouseRef.current.y,
            );

            if (distToMouse < cursorExtraRadius) {
              extraBoost = (1 - distToMouse / cursorExtraRadius) * 28;
            }
          }

          const effectiveMaxDistance = baseMaxDist + extraBoost;

          if (dist < effectiveMaxDistance) {
            let opacity = (1 - dist / effectiveMaxDistance) * 0.25;

            if (extraBoost > 0) {
              opacity += (extraBoost / 28) * 0.12;
            }

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineWidth = 0.9;

            if (p1.isTeal || p2.isTeal) {
              ctx.strokeStyle = `rgba(45, 212, 191, ${opacity * 0.85})`;
            } else {
              ctx.strokeStyle = `rgba(240, 246, 255, ${opacity})`;
            }

            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseRef]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full z-0 opacity-80"
    />
  );
}

export default function Footer() {
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current.active = false;
  };

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
    <footer
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#05070b] text-white"
    >
      {/* Dynamic connected lines and dots animation */}
      <NetworkBackground mouseRef={mouseRef} />

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[700px] -translate-x-1/2 rounded-full bg-teal-500/[0.06] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Main Footer Grid Layout */}
        <div className="grid gap-10 py-12 md:py-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand / About */}
          <div className="space-y-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="group flex items-center space-x-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-md select-none transition-all duration-300 hover:-translate-y-0.5"
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

            <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
              Frontend & WordPress Developer focused on building modern,
              responsive and user-friendly websites with clean design and
              practical functionality.
            </p>

            <p className="text-xs text-slate-500 italic">
              Turning ideas into fast, responsive and professional web
              experiences.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 font-mono">
              Quick Links
            </p>
            <nav className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="group flex items-center gap-1 text-slate-400 transition-colors duration-200 hover:text-teal-300"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-teal-400" />
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Services */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 font-mono">
              Services
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              {servicesList.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    onClick={(e) => handleNavClick(e, service.href)}
                    className="group flex items-center gap-1.5 text-slate-400 transition-colors duration-200 hover:text-teal-300"
                  >
                    <span className="h-1 w-1 rounded-full bg-teal-400/50 group-hover:bg-teal-400" />
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact / Availability */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 font-mono">
              Get In Touch
            </p>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
              Have a project in mind or looking for a frontend/WordPress
              developer? Feel free to get in touch.
            </p>

            <div className="inline-flex items-center gap-2 rounded-lg border border-teal-500/20 bg-teal-500/10 px-3 py-1.5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
              </span>
              <span className="text-[11px] font-mono text-teal-300">
                Available for onsite, hybrid & Remote Opportunities
              </span>
            </div>

            {/* Social Icons */}
            <div className="pt-1 flex items-center gap-2.5">
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
                  className="group flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-teal-400/[0.08] hover:text-teal-400"
                >
                  <SocialIcon type={social.type} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Compact Bottom CTA Banner */}
        <div className="my-6 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md p-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-4">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Let's Build Something Great
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Have an idea, project, or opportunity? Let's turn it into a modern
              web experience.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="mt-4 sm:mt-0 shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-all duration-200 shadow-md shadow-teal-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
          >
            <span>Let's Work Together</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/[0.07]" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © 2026 <span className="text-slate-400">Farhan Salih</span>. All
            rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-600 font-mono">
              Designed & Built with React
            </span>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
              className="group flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-teal-400/[0.08] hover:text-teal-400"
            >
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
