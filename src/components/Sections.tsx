import {
  BadgeCheck,
  Banknote,
  Building2,
  Clock,
  FileSignature,
  Landmark,
  Mic2,
  MapPin,
  Music,
  Music2,
  PartyPopper,
  ShieldCheck,
  Smartphone,
  Star,
  Volume2,
  Check,
  ChevronRight,
} from "lucide-react";
import { packages, type Package } from "@/config/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import bandAsset from "@/assets/banda-integrantes.webp.asset.json";
import stageAsset from "@/assets/escenario.jpg.asset.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function SectionHeading({
  title,
  subtitle,
  highlight,
}: {
  title: string;
  subtitle?: string;
  highlight?: string;
}) {
  return (
    <div className="max-w-[850px]">
      {highlight && <p className="eyebrow text-gold">{highlight}</p>}
      <h2 className="mt-4 font-display text-[clamp(2.7rem,5vw,5rem)] leading-[1.05] font-medium tracking-[-0.04em] text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-[650px] font-body text-lg leading-[1.65] text-muted-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ---------------------------------- Trust strip --------------------------------- */

const trust = [
  { icon: PartyPopper, label: "Eventos privados y masivos" },
  { icon: FileSignature, label: "Contrato formal" },
  { icon: Volume2, label: "Audio profesional" },
  { icon: MapPin, label: "Cobertura según disponibilidad" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-hairline bg-surface-alt">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-7 px-5 py-9 md:px-8 lg:grid-cols-4">
        {trust.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex min-w-0 items-center gap-3 border-l border-gold-soft pl-4"
          >
            <Icon
              size={20}
              strokeWidth={1.5}
              className="hidden shrink-0 text-gold sm:block"
              aria-hidden="true"
            />
            <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-foreground sm:text-sm">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experiencia" className="section overflow-hidden">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
        <div className="relative">
          <img
            src={bandAsset.url}
            alt="Banda Nueva Generación reunida antes de una presentación"
            width={1200}
            height={800}
            loading="lazy"
            className="aspect-[4/4.5] w-full object-cover object-center md:aspect-[4/3] lg:aspect-[4/5]"
          />
          <span className="absolute -bottom-5 right-0 bg-gold-light px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-background md:right-[-20px]">
            El sonido de nuestra tierra
          </span>
        </div>
        <div>
          <p className="eyebrow text-gold">La experiencia</p>
          <h2 className="mt-5 font-display text-[clamp(2.9rem,5vw,5.7rem)] font-medium leading-[1.03] tracking-[-0.045em]">
            Una banda. <em className="text-gold-light">Mil recuerdos.</em>
          </h2>
          <p className="mt-7 text-lg leading-[1.75] text-muted-2">
            Hay momentos que solo se viven una vez. Nosotros llevamos la música, la presencia y la
            energía para que tu celebración tenga una historia que contar.
          </p>
          <div className="mt-9 border-t border-hairline pt-7">
            <p className="font-display text-2xl italic text-foreground">
              Sinaloa en cada nota. Fiesta en cada escenario.
            </p>
          </div>
          <a
            href="#paquetes"
            className="mt-10 inline-flex items-center gap-3 border-b border-gold pb-2 text-sm font-bold uppercase tracking-[0.1em] text-gold-light hover:text-white"
          >
            Encuentra tu formato <ChevronRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- Packages ---------------------------------- */

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <article className="card-experience group flex flex-col !p-0">
      <div className="relative overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.imageAlt}
          width={896}
          height={600}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transform-none"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"
          aria-hidden="true"
        />
        {pkg.badge && <span className="badge-gold absolute left-4 top-4">{pkg.badge}</span>}
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-[32px] leading-[1.15] font-medium text-foreground">
          {pkg.name}
        </h3>
        <p className="mt-3 font-body text-base leading-[1.65] text-muted-2">
          {pkg.shortDescription}
        </p>

        <ul className="mt-6 space-y-3 border-t border-hairline pt-6">
          {pkg.includes.slice(0, 4).map((item) => (
            <li
              key={item}
              className="flex gap-2.5 font-body text-sm font-medium text-foreground/90"
            >
              <Check
                size={17}
                strokeWidth={1.75}
                className="mt-0.5 shrink-0 text-gold"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-7 font-body text-[13px] font-medium text-muted">{pkg.idealFor}</p>
        <p className="mt-auto pt-7 font-body text-sm font-semibold text-gold">{pkg.price}</p>

        <div className="mt-5">
          <WhatsAppButton
            packageName={pkg.name}
            label={pkg.ctaLabel}
            analyticsId={pkg.analyticsId}
            fullWidth
          />
        </div>
      </div>
    </article>
  );
}

export function PackagesSection() {
  return (
    <section id="paquetes" className="section bg-surface-alt">
      <div className="container-site">
        <SectionHeading
          highlight="Vive la música a tu manera"
          title="El formato perfecto para tu gran día."
          subtitle="Cada evento es diferente. Elige el tipo de servicio que necesitas y consulta disponibilidad directamente por WhatsApp."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------ On stage ------------------------------------ */

export function VideoSection() {
  return (
    <section
      id="escenario"
      className="relative min-h-[560px] overflow-hidden py-32 md:min-h-[650px]"
    >
      <img
        src={stageAsset.url}
        alt="Escenario de Banda Nueva Generación durante un evento"
        width={1600}
        height={1000}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/20"
        aria-hidden="true"
      />
      <div className="container-site relative flex min-h-[350px] items-center">
        <div className="max-w-[670px]">
          <p className="eyebrow text-gold-light">En vivo y sin filtros</p>
          <h2 className="mt-5 font-display text-[clamp(3rem,6vw,6rem)] font-medium leading-[1.03] tracking-[-0.045em]">
            El escenario cobra vida contigo.
          </h2>
          <p className="mt-6 max-w-[470px] text-lg leading-relaxed text-foreground/85">
            Del primer acorde al último baile: llevamos la fuerza del sonido sinaloense a cada
            celebración.
          </p>
          <a
            href="#contacto"
            className="mt-8 inline-flex items-center gap-2 border-b border-gold-light pb-2 text-sm font-bold uppercase tracking-[0.1em] text-gold-light hover:text-white"
          >
            Hablemos de tu evento <ChevronRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Repertoire --------------------------------- */

const repertoire = [
  { icon: Music, label: "Corridos clásicos" },
  { icon: Mic2, label: "Rancheras" },
  { icon: PartyPopper, label: "Cumbias" },
  { icon: Star, label: "Románticas" },
  { icon: Music2, label: "Éxitos modernos" },
];

export function RepertoireSection() {
  return (
    <section className="section">
      <div className="container-site">
        <SectionHeading
          highlight="Nuestro repertorio"
          title="Música para cada momento de tu evento"
          subtitle="Adaptamos el repertorio al tipo de celebración y al ambiente que quieras crear."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-5">
          {repertoire.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="border-t border-gold-soft py-5 transition-colors hover:text-gold-light"
            >
              <Icon size={22} strokeWidth={1.75} className="text-gold" aria-hidden="true" />
              <p className="mt-4 font-display text-lg font-bold text-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------ Steps ----------------------------------- */

const steps = [
  {
    n: "01",
    title: "Consulta disponibilidad",
    text: "Selecciona el servicio que necesitas y envíanos por WhatsApp la fecha, ubicación y duración de tu evento.",
    result: "Te confirmamos disponibilidad y cotización.",
  },
  {
    n: "02",
    title: "Aparta tu fecha",
    text: "Una vez aceptada la cotización, realizamos el apartado y establecemos por escrito fecha, horario, ubicación, duración, costo y condiciones del servicio.",
    result: "Recibes tu contrato formal de presentación.",
  },
  {
    n: "03",
    title: "Disfruta el evento",
    text: "Realiza la liquidación según las condiciones acordadas y nosotros nos encargamos del espectáculo.",
    result: "Tú organiza la celebración. Nosotros ponemos el ambiente.",
  },
];

export function StepsSection() {
  return (
    <section id="como-contratar" className="section bg-surface-alt">
      <div className="container-site">
        <SectionHeading
          highlight="Así comienza la fiesta"
          title="Tres pasos. Una noche inolvidable."
        />
        <div className="mt-14 grid grid-cols-1 gap-0 border-t border-gold-soft lg:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="border-b border-hairline px-2 py-9 lg:border-r lg:px-9 lg:first:pl-0 lg:last:border-r-0"
            >
              <span className="font-display text-[56px] leading-none text-gold/60">{s.n}</span>
              <h3 className="mt-5 font-display text-[28px] font-medium text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 font-body text-base leading-[1.65] text-muted-2">{s.text}</p>
              <p className="mt-5 flex items-start gap-2 font-body text-sm font-semibold text-foreground">
                <ChevronRight
                  size={18}
                  strokeWidth={1.75}
                  className="mt-0.5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                {s.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Payments ---------------------------------- */

const payments = [
  {
    icon: Smartphone,
    title: "Transferencia SPEI",
    text: "Transferencia bancaria para apartado o liquidación.",
  },
  {
    icon: Landmark,
    title: "Depósito",
    text: "Depósito bancario o establecimientos autorizados cuando esté disponible.",
  },
  {
    icon: Banknote,
    title: "Efectivo",
    text: "Pago en efectivo contra firma de contrato, según las condiciones acordadas.",
  },
];

export function PaymentMethodsSection() {
  return (
    <section className="section">
      <div className="container-site">
        <SectionHeading title="Métodos de apartado y liquidación" />
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {payments.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-hairline bg-surface p-7">
              <Icon size={22} strokeWidth={1.75} className="text-accent-blue" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 font-body text-base leading-[1.65] text-muted-2">{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 rounded-2xl border border-gold-soft bg-surface-alt px-6 py-5 text-center font-body text-sm font-medium text-foreground">
          Tu fecha queda formalmente reservada una vez confirmado el apartado y emitido el contrato
          correspondiente.
        </p>
      </div>
    </section>
  );
}

/* -------------------------------- Guarantees --------------------------------- */

const guarantees = [
  {
    icon: Clock,
    title: "Puntualidad",
    text: "Horarios establecidos previamente para que la música comience conforme a lo acordado.",
  },
  {
    icon: FileSignature,
    title: "Contrato formal",
    text: "Las condiciones principales del servicio quedan establecidas por escrito.",
  },
  {
    icon: Music2,
    title: "Músicos profesionales",
    text: "Una agrupación preparada para ofrecer una presentación con presencia, energía y calidad musical.",
  },
  {
    icon: Volume2,
    title: "Respaldo técnico",
    text: "Requerimientos de audio y producción definidos previamente según las características del evento.",
  },
];

export function GuaranteesSection() {
  return (
    <section id="garantias" className="section bg-surface-alt">
      <div className="container-site">
        <SectionHeading title="Tu evento merece una banda que sí responda." />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-hairline bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-soft motion-reduce:transform-none"
            >
              <Icon size={24} strokeWidth={1.75} className="text-gold" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-3 font-body text-[15px] leading-[1.65] text-muted-2">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------- FAQ ----------------------------------- */

const faqs = [
  {
    q: "¿Con cuánto tiempo debo reservar?",
    a: "Recomendamos apartar con la mayor anticipación posible, especialmente en temporada alta. Consulta tu fecha por WhatsApp y te confirmamos disponibilidad.",
  },
  {
    q: "¿Se trasladan a otros municipios?",
    a: "Sí, sujeto a disponibilidad y condiciones de traslado. Compártenos la ubicación por WhatsApp para confirmarlo.",
  },
  {
    q: "¿Cuántas horas puedo contratar?",
    a: "La duración se define en la contratación según el tipo de evento. Indícanos las horas que necesitas y te cotizamos.",
  },
  {
    q: "¿Llevan equipo de audio?",
    a: "Los requerimientos de audio se definen previamente según las características del evento y el formato contratado.",
  },
  {
    q: "¿Puedo solicitar canciones especiales?",
    a: "Sí. Las canciones especiales se acuerdan antes del evento para prepararlas con tiempo.",
  },
  {
    q: "¿Cómo aparto mi fecha?",
    a: "Una vez aceptada la cotización se realiza el apartado y se emite el contrato con las condiciones del servicio.",
  },
  {
    q: "¿La contratación incluye contrato?",
    a: "Sí. Fecha, horario, ubicación, duración, costo y condiciones quedan establecidos por escrito.",
  },
];

export function FAQAccordion() {
  return (
    <section className="section bg-surface-alt">
      <div className="container-site">
        <SectionHeading title="Preguntas frecuentes" />
        <div className="mx-auto mt-12 max-w-[880px]">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`} className="border-hairline">
                <AccordionTrigger className="text-left font-display text-base font-bold text-foreground hover:no-underline md:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-base leading-[1.65] text-muted-2">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- Final CTA -------------------------------- */

export function FinalCTA() {
  return (
    <section id="contacto" className="section">
      <div className="container-site">
        <div className="relative overflow-hidden border border-gold-soft bg-[radial-gradient(circle_at_80%_20%,#45402b_0%,#25271f_42%,#171a15_100%)] px-6 py-16 text-center md:px-16 md:py-24">
          <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-gold">
            Fechas sujetas a disponibilidad
          </p>
          <h2 className="mx-auto mt-4 max-w-[820px] font-display text-[clamp(2.9rem,6vw,6.2rem)] leading-[1.05] font-medium tracking-[-0.045em] text-foreground">
            La próxima historia empieza con música.
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] font-body text-base leading-[1.65] text-muted-2">
            Cuéntanos cuándo y dónde será tu evento y recibe una cotización directa.
          </p>
          <div className="mt-9 flex justify-center">
            <WhatsAppButton
              packageName="Consultar mi fecha (CTA final)"
              label="Consultar mi fecha"
              analyticsId="final_cta_whatsapp"
              size="lg"
            />
          </div>
          <p className="mt-4 font-body text-[13px] font-medium text-muted">
            Respuesta directa del equipo de contrataciones.
          </p>
          <div className="mt-10 flex items-center justify-center gap-2 font-body text-[13px] text-muted">
            <ShieldCheck
              size={16}
              strokeWidth={1.75}
              className="text-accent-blue"
              aria-hidden="true"
            />
            Contratación formal y segura
            <BadgeCheck
              size={16}
              strokeWidth={1.75}
              className="ml-4 text-accent-blue"
              aria-hidden="true"
            />
            Sin intermediarios
            <Building2
              size={16}
              strokeWidth={1.75}
              className="ml-4 hidden text-accent-blue sm:block"
              aria-hidden="true"
            />
            <span className="hidden sm:inline">Eventos privados y empresariales</span>
          </div>
        </div>
      </div>
    </section>
  );
}
