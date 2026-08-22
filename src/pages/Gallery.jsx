import { useState } from "react";
import { useTranslation } from "react-i18next";
import { X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import { galleryImages } from "../data/images";

export default function Gallery() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);

  return (
    <>
      <PageHeader eyebrow={t("gallery.eyebrow")} title={t("gallery.title")} subtitle={t("gallery.subtitle")} />

      <section className="section-y">
        <div className="container-page columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryImages.map((src, index) => (
            <Reveal key={src} delay={(index % 6) * 0.06} className="mb-5 break-inside-avoid">
              <button
                type="button"
                onClick={() => setSelected(src)}
                className="group relative block w-full overflow-hidden rounded-2xl"
                aria-label="Open image in full size"
              >
                <img
                  src={src}
                  alt={`Paghman trading operations, photo ${index + 1}`}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-navy-950/0 transition-colors duration-300 group-hover:bg-navy-950/50">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 flex items-center justify-center bg-navy-950/90 p-6"
            role="dialog"
            aria-modal="true"
            onClick={() => setSelected(null)}
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selected}
              alt="Expanded gallery view"
              className="max-h-[85vh] max-w-full rounded-2xl object-contain"
            />
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close image"
              className="absolute inset-e-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
