import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/config/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="new-nav">
      <div className="mx-auto flex h-[82px] max-w-[1500px] items-center justify-between gap-4 px-5 md:px-10">
        <a
          href="#inicio"
          className="flex min-w-0 items-center gap-3"
          aria-label={siteConfig.brandName}
        >
          <img
            src={siteConfig.logo}
            alt={`Logo ${siteConfig.brandName}`}
            width={48}
            height={48}
            className="h-14 w-14 shrink-0 object-contain"
          />
          <span className="truncate font-body text-[12px] leading-tight font-bold uppercase tracking-[0.16em] text-foreground">
            Banda Nueva
            <span className="block text-gold">Generación</span>
          </span>
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-[12px] font-bold uppercase tracking-[0.1em] text-muted-2 transition-colors duration-200 hover:text-gold-light focus-visible:text-gold-light"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton
            packageName="Consulta general de disponibilidad"
            label="Cotizar fecha"
            analyticsId="navbar_whatsapp"
            className="nav-button"
          />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-hairline text-foreground lg:hidden"
        >
          {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline bg-surface lg:hidden">
          <nav
            aria-label="Navegación móvil"
            className="mx-auto flex max-w-[1280px] flex-col px-5 py-3"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center font-body text-base font-medium text-muted-2 transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-3 pb-1">
              <WhatsAppButton
                packageName="Consulta general de disponibilidad"
                label="Consultar disponibilidad"
                analyticsId="navbar_whatsapp"
                fullWidth
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
