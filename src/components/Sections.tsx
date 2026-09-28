import { ArrowDown, ArrowUpRight, Check, Phone } from "lucide-react";
import { packages } from "@/config/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import band from "@/assets/banda-integrantes.webp.asset.json";
import stage from "@/assets/escenario.jpg.asset.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Marquee() {
  return (
    <div
      className="marquee"
      aria-label="Banda sinaloense en vivo para bodas, XV años, fiestas y escenarios"
    >
      <div>
        EL SONIDO DE TU FIESTA <span>✳</span> BANDA EN VIVO <span>✳</span> DE SINALOA PARA TU GENTE{" "}
        <span>✳</span> EL SONIDO DE TU FIESTA <span>✳</span>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experiencia" className="experience-new">
      <div className="wide-wrap experience-heading">
        <p className="kicker">01 / LA BANDA</p>
        <h2>
          No venimos a<br />
          <em>poner música.</em>
          <br />
          Venimos a hacer
          <br />
          que pase algo.
        </h2>
        <div className="experience-aside">
          <p>
            Una banda en vivo cambia todo: el primer baile, el coro que todos cantan, ese momento
            que nadie quiere que termine.
          </p>
          <a className="text-action" href="#escenario">
            Así se vive en el escenario <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
      <div className="wide-wrap experience-gallery">
        <div className="experience-photo">
          <img
            src={band.url}
            alt="La banda reunida para una presentación"
            width={1200}
            height={800}
            loading="lazy"
          />
          <span>01 / LA ENERGÍA</span>
        </div>
        <div className="experience-quote">
          <span className="sparkle">✳</span>
          <blockquote>
            El auténtico sonido sinaloense. <em>La celebración es tuya.</em>
          </blockquote>
          <p>Banda Nueva Generación</p>
        </div>
      </div>
    </section>
  );
}

export function StageSection() {
  return (
    <section id="escenario" className="stage-new">
      <img
        src={stage.url}
        alt="Escenario de Banda Nueva Generación iluminado durante un evento"
        width={1600}
        height={1000}
        loading="lazy"
      />
      <div className="stage-shade" />
      <div className="stage-content">
        <p className="kicker">02 / EN ESCENA</p>
        <h2>
          Cuando suena
          <br />
          la banda,
          <br />
          <em>se siente.</em>
        </h2>
        <p>
          Presencia, ritmo y música regional en vivo para que tu evento tenga su propio momento
          estelar.
        </p>
        <a href="#paquetes" className="round-arrow" aria-label="Explorar formatos">
          <ArrowDown size={26} />
        </a>
      </div>
      <span className="stage-side">BANDA NUEVA GENERACIÓN · EN VIVO</span>
    </section>
  );
}

export function PackagesSection() {
  return (
    <section id="paquetes" className="packages-new">
      <div className="wide-wrap">
        <div className="section-top">
          <div>
            <p className="kicker">03 / TU CELEBRACIÓN</p>
            <h2>
              Una banda.
              <br />
              <em>Muchas formas</em>
              <br />
              de celebrar.
            </h2>
          </div>
          <p>
            Cuéntanos qué tienes en mente. Elegimos contigo el formato y la duración que mejor le
            quedan a tu evento. Cada fecha se cotiza de manera personalizada.
          </p>
        </div>
        <div className="package-list">
          {packages.map((pkg, i) => (
            <article className="package-row" key={pkg.id}>
              <div className="package-num">
                0{i + 1} <span>/ 03</span>
              </div>
              <div className="package-main">
                {pkg.badge && <span className="package-badge">{pkg.badge}</span>}
                <h3>{pkg.name}</h3>
                <p>{pkg.shortDescription}</p>
                <p className="package-ideal">{pkg.idealFor}</p>
              </div>
              <div className="package-details">
                <p>INCLUYE</p>
                <ul>
                  {pkg.includes.slice(0, 4).map((item) => (
                    <li key={item}>
                      <Check size={16} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <WhatsAppButton
                  packageName={pkg.name}
                  label="Solicitar cotización"
                  analyticsId={pkg.analyticsId}
                  className="package-button"
                />
              </div>
            </article>
          ))}
        </div>
        <p className="package-note">
          Todos los servicios dependen de la fecha, ubicación y condiciones de contratación. Te
          confirmamos el presupuesto antes de reservar.
        </p>
      </div>
    </section>
  );
}

export function StepsSection() {
  const steps = [
    {
      n: "01",
      title: "Dinos cuándo",
      text: "Comparte fecha, lugar, horario y el tipo de evento por WhatsApp.",
    },
    {
      n: "02",
      title: "Armamos tu plan",
      text: "Confirmamos disponibilidad, formato, duración y cotización para tu celebración.",
    },
    {
      n: "03",
      title: "Que empiece la fiesta",
      text: "Aparta tu fecha con las condiciones por escrito y prepárate para vivir la música.",
    },
  ];
  return (
    <section id="como-contratar" className="steps-new">
      <div className="wide-wrap">
        <div className="steps-header">
          <p className="kicker">04 / ASÍ DE FÁCIL</p>
          <h2>
            De una idea
            <br />a <em>una gran noche.</em>
          </h2>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step" key={step.n}>
              <span>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
        <div className="steps-bottom">
          <span>CONTRATACIÓN DIRECTA · CONDICIONES POR ESCRITO</span>
          <a href="#contacto" className="text-action">
            Hablemos de tu evento <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "¿Con cuánto tiempo debo reservar?",
    a: "Conviene consultar tu fecha con anticipación, especialmente en temporada alta. Escríbenos y te confirmamos disponibilidad.",
  },
  {
    q: "¿Se trasladan a otros municipios?",
    a: "Sí, sujeto a disponibilidad y condiciones de traslado. Envíanos la ubicación de tu evento para confirmarlo.",
  },
  {
    q: "¿Cuántas horas puedo contratar?",
    a: "La duración se acuerda según el evento. Cuéntanos cuántas horas necesitas y te preparamos una cotización.",
  },
  {
    q: "¿Llevan equipo de audio?",
    a: "Los requerimientos de audio se definen previamente según el formato y las características del evento.",
  },
  {
    q: "¿Puedo pedir canciones especiales?",
    a: "Sí. Acordamos las canciones especiales antes del evento para prepararlas con tiempo.",
  },
  {
    q: "¿Cómo aparto mi fecha?",
    a: "Una vez aceptada la cotización, acordamos el apartado y dejamos por escrito fecha, horario, duración, costo y condiciones.",
  },
];
export function FAQSection() {
  return (
    <section id="preguntas" className="faq-new">
      <div className="wide-wrap faq-layout">
        <div>
          <p className="kicker">05 / RESOLVEMOS TUS DUDAS</p>
          <h2>
            Lo que quieres
            <br />
            <em>saber antes</em>
            <br />
            de la fiesta.
          </h2>
          <p>¿Te queda otra pregunta? Estamos a un mensaje.</p>
          <a href="#contacto" className="text-action">
            Contáctanos <ArrowUpRight size={18} />
          </a>
        </div>
        <Accordion type="single" collapsible className="faq-list">
          {faqs.map((faq, i) => (
            <AccordionItem value={`faq-${i}`} key={faq.q} className="faq-item">
              <AccordionTrigger className="faq-trigger">{faq.q}</AccordionTrigger>
              <AccordionContent className="faq-answer">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section id="contacto" className="contact-new">
      <div className="wide-wrap contact-inner">
        <div>
          <p className="kicker">06 / TU FECHA EMPIEZA AQUÍ</p>
          <h2>
            Haz que
            <br />
            <em>suene en grande.</em>
          </h2>
          <p className="contact-lead">
            Dinos cuándo y dónde será tu evento. Nosotros ponemos la banda.
          </p>
          <WhatsAppButton
            packageName="Consulta de disponibilidad"
            label="Consultar mi fecha"
            analyticsId="final_cta_whatsapp"
            size="lg"
            className="contact-button"
          />
        </div>
        <div className="contact-side">
          <span className="contact-star">✳</span>
          <p>PARA CONTRATACIONES</p>
          <a href="tel:+526672992461">
            <Phone size={19} /> 667 299 2461
          </a>
          <a href="tel:+526728540913">
            <Phone size={19} /> 672 854 0913
          </a>
          <span>Disponibilidad sujeta a fecha y ubicación.</span>
        </div>
      </div>
    </section>
  );
}
