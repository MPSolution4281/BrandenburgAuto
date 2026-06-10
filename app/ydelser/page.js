import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactBand from "@/components/ContactBand";
import { Arrow } from "@/components/Icons";
import { services } from "@/data/site";

export const metadata = {
  title: "Autoservice og bilreparation i Holbæk",
  description: "Se ydelser hos Brandenburg Autoservice i Holbæk: serviceeftersyn, bremser, fejlsøgning, dæk, synstjek og reparation.",
  alternates: { canonical: "/ydelser" }
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Ydelser i Holbæk" title="Vi holder dig kørende." lead="Fra det planlagte serviceeftersyn til den fejl, der kom ud af det blå. Vi undersøger bilen og aftaler løsningen med dig." image="/images/hero-workshop.png" imageAlt="Bil til service på autoværksted" />
      <section className="listing section">
        <div className="section-marker"><span>BA / YDELSER</span><span>Vælg opgave</span></div>
        <div className="listing-grid">
          {services.map((service) => (
            <Link href={`/ydelser/${service.slug}`} className="listing-card" key={service.slug}>
              <span>{service.number}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <strong>Læs mere <Arrow /></strong>
            </Link>
          ))}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
