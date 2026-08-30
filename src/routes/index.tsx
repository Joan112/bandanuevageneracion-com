import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import {
  FAQAccordion,
  FinalCTA,
  GuaranteesSection,
  PackagesSection,
  PaymentMethodsSection,
  RepertoireSection,
  StepsSection,
  TestimonialsSection,
  TrustStrip,
  VideoSection,
} from "@/components/Sections";

const title = "Banda Nueva Generación | Banda Sinaloense para Eventos";
const description =
  "Contrata a Banda Nueva Generación para bodas, XV años, jaripeos, ferias, aniversarios y eventos privados. Consulta disponibilidad y cotiza directamente por WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const schema = {
  "@context": "https://schema.org",
  "@type": "PerformingGroup",
  name: "Banda Nueva Generación",
  genre: ["Banda Sinaloense", "Música Regional Mexicana"],
  description,
  slogan: "El auténtico sonido sinaloense que convierte tu evento en una gran fiesta.",
};

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <PackagesSection />
        <VideoSection />
        <RepertoireSection />
        <StepsSection />
        <PaymentMethodsSection />
        <GuaranteesSection />
        <TestimonialsSection />
        <FAQAccordion />
        <FinalCTA />
      </main>
      <Footer />
      <StickyWhatsApp />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
