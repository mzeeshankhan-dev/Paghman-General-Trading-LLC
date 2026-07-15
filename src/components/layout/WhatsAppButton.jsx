import { useTranslation } from "react-i18next";
import { MessageCircle } from "lucide-react";

/** Persistent floating WhatsApp CTA — update the phone number for production use. */
export default function WhatsAppButton() {
  const { t } = useTranslation();
  const phone = "971500000000";

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("contact.whatsapp")}
      className="fixed bottom-5 end-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
