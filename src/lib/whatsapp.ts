import { siteConfig } from "@/config/site";

/** Analítica preparada: conecta aquí GA4 / Meta Pixel más adelante. */
export function trackConversion(eventId: string, payload?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event: "whatsapp_click", event_id: eventId, ...payload });
}

export function buildWhatsAppMessage(packageName: string) {
  return `Hola 👋 Me interesa contratar a ${siteConfig.brandName}.

Paquete: ${packageName}

Quisiera consultar disponibilidad y recibir una cotización.

👤 Nombre:
📅 Fecha del evento:
📍 Municipio / ubicación:
⏱️ Número de horas:

¿Tienen disponibilidad para esa fecha?`;
}

export function buildWhatsAppUrl(packageName: string) {
  const message = buildWhatsAppMessage(packageName);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
