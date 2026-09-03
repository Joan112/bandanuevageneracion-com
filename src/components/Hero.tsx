import { BadgeCheck, Clock, MessageCircle, Volume2 } from "lucide-react";
import heroAsset from "@/assets/escenario.jpg.asset.json";
import bandaAsset from "@/assets/banda-integrantes.webp.asset.json";

import { WhatsAppButton } from "@/components/WhatsAppButton";

const badges = [
  { icon: BadgeCheck, label: "Contratación formal" },
  { icon: Clock, label: "Puntualidad" },
  { icon: Volume2, label: "Audio profesional" },
  { icon: MessageCircle, label: "Atención directa" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[85vh] items-center overflow-hidden pt-[72px]">
      <img
        src={heroAsset.url}
        alt="Escenario de Banda Nueva Generación con luces de colores y audio profesional de noche"
        width={1920}
        height={1440}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="max-w-[700px]">

          <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-gold">
            Banda sinaloense en vivo
          </p>
          <h1 className="mt-5 font-display text-[40px] leading-[1.05] font-extrabold tracking-[-0.03em] text-foreground md:text-[52px] lg:text-[64px]">
            Haz de tu evento una{" "}
            <span className="text-gold">fiesta que nadie quiera que termine.</span>
          </h1>
          <p className="mt-6 font-body text-base leading-[1.65] text-muted-2">
            Vive el auténtico sonido de Banda Nueva Generación con música en vivo, ambiente, energía y un
            repertorio preparado para poner a cantar y bailar a todos tus invitados.
          </p>

          <p className="mt-7 font-body text-sm font-medium text-foreground/90">
            Bodas · XV Años · Aniversarios · Jaripeos · Ferias · Eventos Privados
          </p>
          <p className="mt-2 font-body text-sm font-medium text-accent-blue">
            Corridos clásicos · Rancheras · Cumbias · Románticas · Éxitos modernos
          </p>

          <ul className="mt-7 flex flex-wrap gap-2.5">
            {badges.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-surface/70 px-3.5 py-2 font-body text-[13px] font-medium text-foreground backdrop-blur-sm"
              >
                <Icon size={16} strokeWidth={1.75} className="text-gold" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton
              packageName="Consulta de disponibilidad (Hero)"
              label="Consultar disponibilidad en WhatsApp"
              analyticsId="hero_whatsapp"
              size="lg"
            />
            <a
              href="#paquetes"
              className="inline-flex h-[60px] items-center justify-center rounded-[14px] border border-hairline-strong bg-surface-elevated px-8 font-body text-base font-bold text-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:border-gold-soft"
            >
              Ver paquetes
            </a>
          </div>
          <p className="mt-4 font-body text-[13px] font-medium text-muted">
            Respuesta directa del equipo de contrataciones · Sin intermediarios
          </p>
        </div>

        <div className="rounded-[20px] border border-hairline bg-surface/70 p-3 backdrop-blur-sm">
          <img
            src={bandaAsset.url}
            alt="Integrantes de Banda Nueva Generación con trajes dorados"
            width={1920}
            height={1280}
            className="w-full rounded-[14px] object-contain"
          />
        </div>
      </div>

    </section>
  );
}
