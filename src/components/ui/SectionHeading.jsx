import React from "react";

export default function SectionHeading({
  icon: Icon,
  badge,
  title,
  subtitle,
  className = "",
}) {
  return (
    <div
      className={`text-center space-y-3 max-w-2xl mx-auto mb-14 sm:mb-20 ${className}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold tracking-wider uppercase">
          {Icon && <Icon className="w-3.5 h-3.5" />}
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
