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
  Play,
  Quote,
  ShieldCheck,
  Smartphone,
  Star,
  Volume2,
  Check,
  ChevronRight,
} from "lucide-react";
import logoAsset from "@/assets/logo-ng.png.asset.json";
import { packages, type Package } from "@/config/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";
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
    <div className="mx-auto max-w-[760px] text-center">
      {highlight && (
        <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-gold">{highlight}</p>
      )}
      <h2 className="mt-3 font-display text-[32px] leading-[1.15] font-bold tracking-tight text-foreground md:text-[42px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 font-body text-base leading-[1.65] text-muted-2">{subtitle}</p>
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
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-4 px-5 py-10 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
        {trust.map(({ icon: Icon, label }) => (
          <div key={label} className="flex min-w-0 items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold-soft bg-surface">
              <Icon size={20} strokeWidth={1.75} className="text-gold" aria-hidden="true" />
            </span>
            <p className="font-body text-sm font-semibold text-foreground">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------- Packages ---------------------------------- */

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <article className="card-experience group flex flex-col">
      <div className="relative overflow-hidden rounded-[14px]">
        <img
          src={pkg.image}
          alt={pkg.imageAlt}
          width={896}
          height={1120}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
        />
        {pkg.badge && <span className="badge-gold absolute left-3 top-3">{pkg.badge}</span>}
      </div>

      <h3 className="mt-6 font-display text-[22px] leading-[1.2] font-bold text-foreground md:text-2xl">
        {pkg.name}
      </h3>
      <p className="mt-3 font-body text-base leading-[1.65] text-muted-2">{pkg.shortDescription}</p>

      <ul className="mt-5 space-y-2.5">
        {pkg.includes.map((item) => (
          <li key={item} className="flex gap-2.5 font-body text-sm font-medium text-foreground/90">
            <Check size={17} strokeWidth={1.75} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-5 font-body text-[13px] font-medium text-muted">Ideal para: {pkg.idealFor}</p>

      <div className="separator-gold my-6" aria-hidden="true" />

      <p className="mt-auto font-body text-[18px] font-semibold text-gold">{pkg.price}</p>

      <div className="mt-5">
        <WhatsAppButton
          packageName={pkg.name}
          label={pkg.ctaLabel}
          analyticsId={pkg.analyticsId}
          fullWidth
        />
      </div>
    </article>
  );
}

export function PackagesSection() {
  return (
    <section id="paquetes" className="section">
      <div className="container-site">
        <SectionHeading
          title="Encuentra el formato ideal para tu evento"
          subtitle="Cada evento es diferente. Elige el tipo de servicio que necesitas y consulta disponibilidad directamente por WhatsApp."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------ Video ------------------------------------ */

export function VideoSection() {
  return (
    <section id="videos" className="section bg-surface-alt">
      <div className="container-site">
        <SectionHeading
          title="Así suena Nueva Generación en vivo"
          subtitle="No solo queremos decirte cómo suena. Queremos que lo escuches."
        />
        <div className="relative mt-12 overflow-hidden rounded-[20px] border border-hairline">
          <img
            src={logoAsset.url}
            alt="Logotipo de Banda Nueva Generación"
            width={1920}
            height={1512}
            loading="lazy"
            className="aspect-video w-full bg-surface object-contain p-6"
          />
          <div className="absolute inset-0 grid place-items-center">
            <button
              type="button"
              aria-label="Reproducir video de presentación"
              className="grid h-[72px] w-[72px] place-items-center rounded-full border border-gold-soft bg-background/70 text-gold transition-transform duration-200 hover:-translate-y-0.5 hover:bg-background/85 motion-reduce:transform-none"
            >
              <Play size={30} strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {["Boda", "XV Años", "Jaripeo", "Feria"].map((label) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-[14px] border border-hairline bg-surface px-4 py-3"
            >
              <span className="font-body text-sm font-medium text-muted-2">{label}</span>
              <Play size={16} strokeWidth={1.75} className="text-gold" aria-hidden="true" />
            </div>
          ))}
        </div>
        <p className="mt-4 font-body text-[13px] text-muted">
          Material de video pendiente de sustituir por grabaciones oficiales de la agrupación.
        </p>
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
          title="Música para cada momento de tu evento"
          subtitle="Adaptamos el repertorio al tipo de celebración y al ambiente que quieras crear."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {repertoire.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-hairline bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-soft motion-reduce:transform-none"
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
        <SectionHeading title="Contratar es muy sencillo" />
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-[20px] border border-hairline bg-surface p-7">
              <span className="font-display text-[44px] leading-none font-extrabold text-gold/35">{s.n}</span>
              <h3 className="mt-4 font-display text-[22px] font-bold text-foreground">{s.title}</h3>
              <p className="mt-3 font-body text-base leading-[1.65] text-muted-2">{s.text}</p>
              <p className="mt-5 flex items-start gap-2 font-body text-sm font-semibold text-foreground">
                <ChevronRight size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
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
  { icon: Smartphone, title: "Transferencia SPEI", text: "Transferencia bancaria para apartado o liquidación." },
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

/* -------------------------------- Testimonials ------------------------------- */

const testimonials = [
  { name: "Testimonio pendiente 01", event: "Boda · Placeholder" },
  { name: "Testimonio pendiente 02", event: "XV Años · Placeholder" },
  { name: "Testimonio pendiente 03", event: "Jaripeo · Placeholder" },
];

export function TestimonialsSection() {
  return (
    <section className="section">
      <div className="container-site">
        <SectionHeading title="Lo que dicen quienes ya vivieron la experiencia" />
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-hairline bg-surface p-7">
              <Quote size={22} strokeWidth={1.75} className="text-gold" aria-hidden="true" />
              <blockquote className="mt-4 font-body text-base leading-[1.65] text-muted-2">
                Espacio reservado para el testimonio real de un cliente. Sustituir este texto por el
                comentario auténtico una vez recibido.
              </blockquote>
              <figcaption className="mt-5 font-body text-sm font-semibold text-foreground">
                {t.name}
                <span className="mt-1 block font-medium text-muted">{t.event}</span>
              </figcaption>
            </figure>
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
        <div className="relative overflow-hidden rounded-[24px] border border-gold-soft bg-surface px-6 py-14 text-center md:px-16 md:py-20">
          <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-gold">
            Fechas sujetas a disponibilidad
          </p>
          <h2 className="mx-auto mt-4 max-w-[720px] font-display text-[32px] leading-[1.15] font-bold tracking-tight text-foreground md:text-[42px]">
            Tu próxima gran fiesta puede empezar aquí.
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
            <ShieldCheck size={16} strokeWidth={1.75} className="text-accent-blue" aria-hidden="true" />
            Contratación formal y segura
            <BadgeCheck size={16} strokeWidth={1.75} className="ml-4 text-accent-blue" aria-hidden="true" />
            Sin intermediarios
            <Building2 size={16} strokeWidth={1.75} className="ml-4 hidden text-accent-blue sm:block" aria-hidden="true" />
            <span className="hidden sm:inline">Eventos privados y empresariales</span>
          </div>
        </div>
      </div>
    </section>
  );
}
