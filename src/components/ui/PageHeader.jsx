import Reveal from "./Reveal";

/** Compact hero banner used at the top of interior pages (About, Products, etc.). */
export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-navy-400 pt-32 pb-20 text-white md:pt-40 md:pb-28">
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--color-gold-500) 0%, transparent 45%), radial-gradient(circle at 80% 80%, var(--color-navy-400) 0%, transparent 45%)",
        }}
        aria-hidden="true"
      />
      <div className="container-page relative">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          {/* {eyebrow && <span className="eyebrow bg-white/10 text-gold-300">{eyebrow}</span>} */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          {subtitle && <p className="text-lg text-white/70">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}
