import PageHero from "@/components/PageHero";
import ContactBand from "@/components/ContactBand";
import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { knowledge } from "@/data/site";

export const metadata = {
  title: "Viden om service, bremser og fejlsøgning",
  description: "Praktiske råd fra dit lokale autoværksted i Holbæk om service, bremser, motorlamper, dæk og bilens vedligeholdelse.",
  alternates: { canonical: "/viden" }
};

export default function KnowledgePage() {
  return (
    <>
      <PageHero eyebrow="Viden fra værkstedet" title="Bedre svar. Bedre beslutninger." lead="Korte, praktiske forklaringer på de spørgsmål, der ofte opstår mellem serviceeftersynene." image="/images/diagnostics.png" imageAlt="Mekaniker undersøger bil med diagnosetester" />
      <section className="knowledge-page section">
        <div className="section-marker"><span>BA / VIDEN</span><span>Praktiske råd</span></div>
        <div className="knowledge-grid large">
          {knowledge.map((article, index) => (
            <Link href={`/viden/${article.slug}`} key={article.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{article.title}</h2>
              <p>{article.short}</p>
              <span className="knowledge-read-more">Læs mere <Arrow /></span>
            </Link>
          ))}
        </div>
        <div className="knowledge-note">
          <div><span className="kicker dark">Er du i tvivl?</span><h2>En beskrivelse er et godt sted at starte.</h2></div>
          <div><p>Fortæl hvornår problemet opstår, hvilke lamper der lyser, og om bilen har ændret lyd eller opførsel.</p><Link className="text-link" href="/kontakt">Kontakt værkstedet <Arrow /></Link></div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
