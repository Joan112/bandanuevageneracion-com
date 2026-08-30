import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, trackConversion } from "@/lib/whatsapp";

export function StickyWhatsApp() {
  const url = buildWhatsAppUrl("Consulta desde CTA sticky");

  return (
    <>
      {/* Mobile: barra ancha fija */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        data-analytics-id="sticky_mobile_whatsapp"
        onClick={() => trackConversion("sticky_mobile_whatsapp")}
        className="btn-whatsapp fixed inset-x-3 bottom-3 z-[1000] flex h-14 items-center justify-center gap-2.5 rounded-[14px] font-body text-base font-bold tracking-[0.01em] lg:hidden"
      >
        <MessageCircle size={21} strokeWidth={1.75} aria-hidden="true" />
        Consultar fecha por WhatsApp
      </a>

      {/* Desktop: botón flotante secundario */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        data-analytics-id="floating_desktop_whatsapp"
        aria-label="Consultar fecha por WhatsApp"
        onClick={() => trackConversion("floating_desktop_whatsapp")}
        className="btn-whatsapp fixed bottom-6 right-6 z-[1000] hidden h-14 w-14 place-items-center rounded-full lg:grid"
      >
        <MessageCircle size={24} strokeWidth={1.75} aria-hidden="true" />
      </a>
    </>
  );
}
