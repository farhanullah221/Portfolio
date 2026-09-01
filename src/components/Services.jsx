import {
  Code2,
  Globe,
  LayoutTemplate,
  RefreshCw,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Modern, responsive interfaces built with React, JavaScript, HTML, CSS and Tailwind CSS.",
    featured: true,
  },
  {
    icon: Globe,
    title: "WordPress Development",
    description:
      "Professional WordPress websites using Elementor, Elementor Pro, Divi and WPBakery.",
    featured: false,
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    description:
      "High-quality responsive landing pages designed to communicate clearly and convert visitors.",
    featured: false,
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description:
      "Transform outdated websites into modern, responsive and professional digital experiences.",
    featured: false,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gray-950 py-24 sm:py-32"
    >
      {/* soft background effects */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">
              What I Do
            </span>
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Services I can help you with
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-400">
            From concept to launch, I deliver tailored web solutions that blend
            clean engineering with thoughtful design.
          </p>
        </div>

        {/* grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-1 ${
                  service.featured
                    ? "border-blue-400/30 bg-gradient-to-br from-blue-500/[0.12] via-white/[0.04] to-transparent hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10"
                    : "border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent hover:border-white/20 hover:from-white/[0.1]"
                }`}
              >
                {/* hover glow */}
                <div
                  className={`pointer-events-none absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full blur-3xl transition-all duration-500 ${
                    service.featured
                      ? "bg-blue-500/15 group-hover:bg-blue-500/25"
                      : "bg-blue-500/0 group-hover:bg-blue-500/10"
                  }`}
                />

                {/* featured badge */}
                {service.featured && (
                  <span className="absolute right-4 top-4 rounded-full border border-blue-400/30 bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-blue-300">
                    Popular
                  </span>
                )}

                <div className="relative flex flex-col items-start">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110 ${
                      service.featured
                        ? "border-blue-400/30 bg-blue-500/15"
                        : "border-white/10 bg-white/5 group-hover:border-white/20 group-hover:bg-white/10"
                    }`}
                  >
                    <Icon
                      className={`h-7 w-7 transition-all duration-300 group-hover:scale-110 ${
                        service.featured
                          ? "text-blue-300"
                          : "text-blue-400 group-hover:text-cyan-300"
                      }`}
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {service.description}
                  </p>
                </div>

                {/* arrow */}
                <div className="relative mt-6 flex items-center gap-1.5 pt-4">
                  <span className="text-xs font-medium text-gray-500 transition-colors duration-300 group-hover:text-gray-300">
                    Learn more
                  </span>
                  <ArrowUpRight
                    className={`h-4 w-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      service.featured
                        ? "text-blue-300"
                        : "text-gray-500 group-hover:text-blue-300"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
