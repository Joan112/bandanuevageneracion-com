import { Facebook, Instagram, Music2, Youtube } from "lucide-react";
import { navLinks, siteConfig } from "@/config/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const socials = [
  { icon: Facebook, label: "Facebook", url: siteConfig.facebookUrl },
  { icon: Instagram, label: "Instagram", url: siteConfig.instagramUrl },
  { icon: Music2, label: "TikTok", url: siteConfig.tiktokUrl },
  { icon: Youtube, label: "YouTube", url: siteConfig.youtubeUrl },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface-alt">
      <div className="container-site grid grid-cols-1 gap-12 py-16 lg:grid-cols-3">
        <div>
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={siteConfig.logo}
              alt={`Logo ${siteConfig.brandName}`}
              width={56}
              height={56}
              loading="lazy"
              className="h-14 w-14 shrink-0 object-contain"
            />
            <span className="font-display text-base font-extrabold uppercase leading-tight tracking-tight text-foreground">
              Banda Nueva
              <span className="block text-gold">Generación</span>
            </span>
          </div>
          <p className="mt-5 max-w-[380px] font-body text-[15px] leading-[1.65] text-muted-2">
            Banda sinaloense en vivo para eventos privados, bodas, XV años, jaripeos, ferias y
            celebraciones especiales.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ icon: Icon, label, url }) => (
              <a
                key={label}
                href={url || "#contacto"}
                aria-label={label}
                target={url ? "_blank" : undefined}
                rel={url ? "noopener noreferrer" : undefined}
                className="grid h-11 w-11 place-items-center rounded-xl border border-hairline text-muted-2 transition-colors hover:border-gold-soft hover:text-gold"
              >
                <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Enlaces del sitio">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-foreground">
            Navegación
          </h2>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-body text-[15px] font-medium text-muted-2 transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-foreground">
            Contrataciones
          </h2>
          <p className="mt-5 font-body text-[15px] leading-[1.65] text-muted-2">
            Atención directa por WhatsApp con el equipo de contrataciones.
          </p>
          <div className="mt-5">
            <WhatsAppButton
              packageName="Consulta desde el footer"
              label="Escribir por WhatsApp"
              analyticsId="footer_whatsapp"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="container-site flex flex-col gap-3 py-7 font-body text-[13px] text-muted md:flex-row md:items-center md:justify-between">
          <p>
            Todos los servicios están sujetos a disponibilidad, ubicación y condiciones de contratación.
          </p>
          <p>© {new Date().getFullYear()} Banda Nueva Generación.</p>
        </div>
      </div>
    </footer>
  );
}
