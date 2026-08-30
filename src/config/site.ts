import logoAsset from "@/assets/logo.png.asset.json";
const logo = logoAsset.url;
import pkgPrivate from "@/assets/pkg-private.jpg";
import pkgWedding from "@/assets/pkg-wedding.jpg";
import pkgMassive from "@/assets/pkg-massive.jpg";

/**
 * CONFIGURACIÓN CENTRALIZADA
 * Edita únicamente este archivo para actualizar teléfono, redes y paquetes.
 */
export const siteConfig = {
  brandName: "Banda Nueva Generación",
  // Reemplaza por el número real (formato internacional sin +, ni espacios).
  whatsappNumber: "52XXXXXXXXXX",
  facebookUrl: "",
  instagramUrl: "",
  tiktokUrl: "",
  youtubeUrl: "",
  email: "",
  location: "",
  logo,
};

export type Package = {
  id: string;
  name: string;
  badge?: string;
  shortDescription: string;
  includes: string[];
  idealFor: string;
  price: string;
  ctaLabel: string;
  analyticsId: string;
  image: string;
  imageAlt: string;
};

export const packages: Package[] = [
  {
    id: "private",
    name: "Fiesta Privada",
    shortDescription:
      "Una opción versátil para cumpleaños, aniversarios, reuniones familiares y celebraciones privadas.",
    includes: [
      "Banda sinaloense en vivo",
      "Plantilla profesional de músicos",
      "Repertorio variado",
      "Duración contratada",
      "Coordinación previa del evento",
      "Presentación formal y puntual",
    ],
    idealFor: "Cumpleaños · Aniversarios · Reuniones · Eventos privados",
    price: "Cotización personalizada por fecha",
    ctaLabel: "Cotizar Fiesta Privada",
    analyticsId: "package_private_whatsapp",
    image: pkgPrivate,
    imageAlt: "Invitados bailando en una fiesta privada nocturna con música en vivo",
  },
  {
    id: "wedding",
    name: "Boda / XV Años",
    badge: "Más solicitado",
    shortDescription:
      "Una experiencia completa para celebrar en grande con música, ambiente y producción profesional.",
    includes: [
      "Banda completa en vivo",
      "Audio profesional",
      "Plantilla completa de músicos",
      "Repertorio adaptable al evento",
      "Coordinación de horarios",
      "Canciones especiales previamente acordadas",
      "Presentación por horas contratadas",
      "Contrato formal",
    ],
    idealFor: "Bodas · XV años · Aniversarios especiales",
    price: "Cotización personalizada por fecha",
    ctaLabel: "Cotizar Boda / XV Años",
    analyticsId: "package_wedding_whatsapp",
    image: pkgWedding,
    imageAlt: "Primer baile de una boda elegante de noche con banda en vivo al fondo",
  },
  {
    id: "massive",
    name: "Evento Especial / Masivo",
    shortDescription:
      "Servicio diseñado para escenarios, ferias, jaripeos, eventos empresariales y producciones de mayor formato.",
    includes: [
      "Banda completa",
      "Presentación extendida",
      "Repertorio para evento masivo",
      "Coordinación técnica",
      "Requerimientos de audio definidos previamente",
      "Coordinación con producción",
      "Contrato formal",
      "Horarios establecidos",
    ],
    idealFor: "Jaripeos · Ferias · Eventos empresariales · Eventos masivos",
    price: "Cotización personalizada por producción",
    ctaLabel: "Cotizar Evento Especial",
    analyticsId: "package_massive_whatsapp",
    image: pkgMassive,
    imageAlt: "Escenario de feria con luces y público multitudinario de noche",
  },
];

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Paquetes", href: "#paquetes" },
  { label: "Videos", href: "#videos" },
  { label: "Cómo contratar", href: "#como-contratar" },
  { label: "Garantías", href: "#garantias" },
  { label: "Contacto", href: "#contacto" },
];
