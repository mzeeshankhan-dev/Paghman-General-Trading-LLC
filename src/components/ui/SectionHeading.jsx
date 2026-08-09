import Reveal from "./Reveal";

/**
 * Standard section heading: eyebrow label + title + optional subtitle.
 * `align` controls centering; defaults to centered for hero-adjacent sections.
 */
export default function SectionHeading({ eyebrow, title, subtitle, align = "center", light = false }) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "text-start items-start";

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <h2
        className={`text-2xl font-semibold tracking-tight sm:text-3xl ${light ? "text-white" : "text-navy-900 dark:text-white"
          }`}
      >
        {title}
      </h2>
    </Reveal>
  );
}
