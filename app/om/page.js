import Image from "next/image";
import PageHero from "@/components/PageHero";
import ContactBand from "@/components/ContactBand";

export const metadata = {
  title: "Om Joachim og værkstedet i Holbæk",
  description: "Mød Joachim Brandenburg og læs om Brandenburg Autoservice på Bødkervej i Holbæk.",
  alternates: { canonical: "/om" }
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Om Brandenburg Autoservice" title="Personen bag værkstedet." lead="Et lokalt autoværksted, hvor du taler direkte med den mekaniker, der arbejder på bilen." image="/images/joachim.jpg" imageAlt="Joachim Brandenburg foran Brandenburg Autoservice i Holbæk" />
      <section className="about section">
        <div className="section-marker"><span>BA / OM</span><span>Joachim Brandenburg</span></div>
        <div className="about-grid">
          <div className="portrait-panel">
            <div className="portrait-number">01</div>
            <Image src="/images/workshop-owner.png" fill sizes="(max-width: 800px) 100vw, 48vw" alt="Joachim Brandenburg på værkstedet" />
          </div>
          <article>
            <span className="kicker dark">Faglighed i øjenhøjde</span>
            <h2>Din bil behøver ikke en salgstale.</h2>
            <p>Den behøver en mekaniker, der lytter til symptomet, undersøger årsagen og forklarer løsningen, så den er til at forstå.</p>
            <p>Brandenburg Autoservice er bygget op omkring personlig kontakt og gennemsigtige aftaler. Det betyder, at du ved, hvem der har bilen, hvad der bliver lavet, og hvorfor.</p>
            <blockquote>“Tillid opstår, når aftalen er lige så solid som arbejdet.”</blockquote>
          </article>
        </div>
      </section>
      <section className="values section">
        {[
          ["01", "Personlig kontakt", "Du taler direkte med værkstedet og får en forklaring uden teknisk tågesnak."],
          ["02", "Fornuftige valg", "Vi vurderer reparationen i forhold til bilens alder, stand og dit reelle behov."],
          ["03", "Aftalen holder", "Hvis vi finder noget uventet, kontakter vi dig, før arbejdet fortsætter."]
        ].map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
      </section>
      <ContactBand />
    </>
  );
}
