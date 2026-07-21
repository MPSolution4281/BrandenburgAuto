import Image from "next/image";
import Link from "next/link";
import ContactBand from "@/components/ContactBand";
import { Arrow } from "@/components/Icons";
import { knowledge, services, site } from "@/data/site";

export const metadata = {
  alternates: { canonical: "/" }
};

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <Image className="hero-image" src="/images/hero-workshop.png" fill priority sizes="100vw" alt="Bil på lift hos et moderne autoværksted" />
        <div className="hero-overlay" />
        <div className="hero-grid" />
        <div className="hero-content">
          <span className="kicker">Autoværksted i Holbæk</span>
          <h1>Din bil.<br /><em>Vores ansvar.</em></h1>
          <div className="hero-lead">
            <p>Service, fejlsøgning og reparation med direkte kontakt til mekanikeren, klare aftaler og tid til at gøre arbejdet ordentligt.</p>
            <div>
              <a className="button primary" href={`tel:${site.phone}`}>Ring {site.phoneDisplay}</a>
              <Link className="button ghost" href="/ydelser">Se ydelser</Link>
            </div>
          </div>
        </div>
        <div className="hero-side">LUNDEMARKSVEJ 29 · 4300 HOLBÆK</div>
      </section>

      <section className="trust-strip">
        <div><strong>Lokalt</strong><span>værksted i Holbæk</span></div>
        <div><strong>Personligt</strong><span>direkte kontakt</span></div>
        <div><strong>Grundigt</strong><span>årsagen før løsningen</span></div>
        <div><strong>Klare aftaler</strong><span>du ved, hvad der sker</span></div>
      </section>

      <section className="intro section">
        <div className="section-marker"><span>BA / 01</span><span>Værkstedet</span></div>
        <div className="intro-grid">
          <div>
            <span className="kicker dark">Et værksted med et navn på døren</span>
            <h2>Ordentligt arbejde.<br /><em>Ingen udenomssnak.</em></h2>
          </div>
          <div className="intro-copy">
            <p>Hos Brandenburg Autoservice møder du Joachim. Her er vejen fra din beskrivelse af problemet til den, der undersøger bilen, helt kort.</p>
            <p>Du får en ærlig vurdering, en klar aftale og besked, før opgaven ændrer omfang.</p>
            <Link className="text-link" href="/om">Mød Joachim <Arrow /></Link>
          </div>
        </div>
        <div className="owner-feature">
          <div className="owner-photo">
            <Image className="owner-photo-bg" src="/images/hero-workshop.png" fill sizes="(max-width: 800px) 100vw, 62vw" alt="" aria-hidden="true" />
            <div className="owner-grid" />
            <Image className="owner-photo-cutout" src="/images/workshop-owner.png" fill sizes="(max-width: 800px) 100vw, 62vw" alt="Joachim Brandenburg på værkstedet i Holbæk" />
          </div>
          <div className="owner-card">
            <span>01 / INDEHAVER</span>
            <blockquote>“Jeg vil hellere forklare dig fejlen én gang for meget end skifte en del for meget.”</blockquote>
            <strong>Joachim Brandenburg</strong>
          </div>
        </div>
      </section>

      <section className="services-section section">
        <div className="section-marker light"><span>BA / 02</span><span>Det hjælper vi med</span></div>
        <div className="services-title">
          <span className="kicker">Ydelser</span>
          <h2>Alt det bilen<br /><em>faktisk har brug for.</em></h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <Link className="service-row" href={`/ydelser/${service.slug}`} key={service.slug}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.short}</p>
              <span className="service-arrow"><Arrow diagonal /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="diagnostic-feature">
        <div className="diagnostic-image">
          <Image src="/images/diagnostics.png" fill sizes="(max-width: 850px) 100vw, 55vw" alt="Professionel elektronisk fejlsøgning på bil" />
        </div>
        <div className="diagnostic-copy">
          <span className="kicker dark">Fejlsøgning</span>
          <h2>En fejlkode er kun begyndelsen.</h2>
          <p>Vi kombinerer tester, målinger og mekanisk kontrol. Målet er ikke bare at slukke en lampe, men at finde ud af hvorfor den tændte.</p>
          <Link className="text-link" href="/ydelser/fejlsoegning">Læs om fejlsøgning <Arrow /></Link>
          <div className="diagnostic-number">03</div>
        </div>
      </section>

      <section className="process section">
        <div className="section-marker"><span>BA / 03</span><span>Sådan foregår det</span></div>
        <div className="process-grid">
          <div>
            <span className="kicker dark">Fra første opkald</span>
            <h2>Fire trin.<br />Fuld klarhed.</h2>
          </div>
          <div className="steps">
            {[
              ["01", "Fortæl hvad bilen gør", "Ring eller send en kort beskrivelse og gerne registreringsnummer."],
              ["02", "Vi undersøger bilen", "Vi kontrollerer symptomet og finder det sandsynlige problem."],
              ["03", "Du får en klar aftale", "Vi gennemgår løsning, pris og eventuelle alternativer med dig."],
              ["04", "Bilen bliver klar", "Arbejdet udføres, og du får forklaret, hvad der er lavet."]
            ].map(([number, title, text]) => (
              <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="knowledge-preview section">
        <div className="section-marker"><span>BA / 04</span><span>Godt at vide</span></div>
        <div className="knowledge-heading">
          <h2>Forstå din bil lidt bedre.</h2>
          <Link className="text-link" href="/viden">Se al viden <Arrow /></Link>
        </div>
        <div className="knowledge-grid">
          {knowledge.map((article, index) => (
            <article key={article.title}>
              <span>0{index + 1}</span>
              <h3>{article.title}</h3>
              <p>{article.text}</p>
              <span className="knowledge-read-more">Læs mere <Arrow /></span>
            </article>
          ))}
        </div>
      </section>

      <ContactBand />
    </>
  );
}
