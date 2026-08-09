import Reveal from "../ui/Reveal";

export default function ServiceCard({ icon: Icon, title, desc, delay = 0 }) {
  return (
    <Reveal delay={delay} className="card group flex flex-col gap-2 p-3">
      <div className="flex items-center gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-800 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-900 dark:bg-navy-800">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="font-heading text-lg font-semibold text-navy-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{desc}</p>
    </Reveal>
  );
}
