import { ArrowDown, ArrowUpRight } from "lucide-react";
import heroAsset from "@/assets/banda-integrantes.webp.asset.json";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section
      id="inicio"
      className="hero-stage relative isolate flex min-h-[760px] items-end overflow-hidden pt-[72px] lg:min-h-screen"
    >
      <img
        src={heroAsset.url}
        alt="Integrantes de Banda Nueva Generación con vestuario negro y dorado"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center]"
      />
      <div className="hero-overlay absolute inset-0 -z-10" aria-hidden="true" />
      <div className="container-site relative w-full pb-16 pt-36 md:pb-24 lg:pb-28">
        <div className="max-w-[850px]">
          <p className="eyebrow flex items-center gap-3 text-gold-light">
            <span className="h-px w-9 bg-gold" aria-hidden="true" />
            Desde Sinaloa para tu celebración
          </p>
          <h1 className="mt-6 font-display text-[clamp(3.8rem,9vw,8.7rem)] font-medium leading-[0.92] tracking-[-0.055em] text-foreground">
            Que la fiesta <em className="font-normal text-gold-light">se sienta.</em>
          </h1>
          <p className="mt-8 max-w-[565px] text-lg leading-relaxed text-foreground/85 md:text-[21px]">
            Música sinaloense en vivo para momentos que merecen sonar en grande. Presencia, energía
            y una banda que hace cantar a todos.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton
              packageName="Consulta de disponibilidad"
              label="Cotiza tu fecha"
              analyticsId="hero_whatsapp"
              size="lg"
              className="sm:w-auto"
            />
            <a
              href="#experiencia"
              className="inline-flex h-[60px] items-center justify-center gap-2 rounded-full border border-white/40 px-8 text-base font-semibold text-white transition-colors hover:bg-white hover:text-background"
            >
              Conoce la banda <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <p className="mt-5 text-sm text-white/65">
            Bodas · XV años · Fiestas privadas · Jaripeos · Ferias
          </p>
        </div>
        <a
          href="#paquetes"
          className="mt-16 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/75 hover:text-white md:mt-24"
        >
          Explora nuestros formatos <ArrowDown size={17} aria-hidden="true" />
        </a>
      </div>
      <span className="pointer-events-none absolute bottom-16 right-8 hidden rotate-90 origin-right text-xs font-bold uppercase tracking-[0.3em] text-white/60 lg:block">
        Banda Nueva Generación · Sinaloa
      </span>
    </section>
  );
}
