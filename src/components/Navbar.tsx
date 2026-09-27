import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/config/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between gap-4 px-5 md:px-8">
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
            className="h-12 w-12 shrink-0 object-contain"
          />
          <span className="truncate font-body text-[13px] leading-tight font-bold uppercase tracking-[0.08em] text-foreground">
            Banda Nueva
            <span className="block text-gold">Generación</span>
          </span>
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-[13px] font-semibold text-muted-2 transition-colors duration-200 hover:text-gold-light focus-visible:text-gold-light"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton
            packageName="Consulta general de disponibilidad"
            label="Consultar disponibilidad"
            analyticsId="navbar_whatsapp"
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
