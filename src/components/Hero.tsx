import { ArrowDown, ArrowUpRight } from "lucide-react";
import band from "@/assets/banda-integrantes.webp.asset.json";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section id="inicio" className="hero-new">
      <div className="hero-image">
        <img
          src={band.url}
          alt="Integrantes de Banda Nueva Generación"
          width={1200}
          height={900}
          fetchPriority="high"
        />
        <span className="hero-image-caption">BANDA NUEVA GENERACIÓN · EN VIVO</span>
      </div>
      <div className="hero-copy">
        <div className="hero-copy-inner">
          <p className="kicker">
            <span className="kicker-line" /> SINALOA SE ESCUCHA AQUÍ
          </p>
          <h1>
            La fiesta
            <br />
            tiene <em>otro</em>
            <br />
            sonido<span className="period">.</span>
          </h1>
          <p className="hero-intro">
            Banda sinaloense en vivo para noches que se cuentan durante años. Tu gente, tu momento,
            nuestra música.
          </p>
          <div className="hero-actions">
            <WhatsAppButton
              packageName="Consulta de disponibilidad"
              label="Cotiza tu fecha"
              analyticsId="hero_whatsapp"
              size="lg"
            />
            <a href="#paquetes" className="text-action">
              Ver formatos <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-bottom">
          <span>BODAS / XV AÑOS / FIESTAS / ESCENARIOS</span>
          <a href="#experiencia" aria-label="Descubre la banda">
            <ArrowDown size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
