import Reveal from "./Reveal";

/**
 * Standard section heading: eyebrow label + title + optional subtitle.
 * `align` controls centering; defaults to centered for hero-adjacent sections.
 */
export default function SectionHeading({ eyebrow, title, subtitle, align = "center", light = false }) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "text-start items-start";

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy-900 dark:text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base leading-relaxed sm:text-lg ${light ? "text-white/75" : "text-slate-500 dark:text-slate-400"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
