import Reveal from "./Reveal";
import headerImg from "../../assets/images/headerImg.webp"

/** Compact hero banner used at the top of interior pages (About, Products, etc.). */
export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 pt-32 pb-20 text-white md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url(${headerImg})`,
        }}
        aria-hidden="true"
      />
      <div className="container-page relative">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          {subtitle && <p className="text-lg text-white/70">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}
