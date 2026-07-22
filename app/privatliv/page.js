import PageHero from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata = {
  title: "Privatlivspolitik",
  description: "Læs hvordan Brandenburg Autoservice behandler personoplysninger og bruger cookies.",
  alternates: { canonical: "/privatliv" },
  robots: { index: false, follow: true }
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privatliv" title="Privatlivspolitik." lead="Sådan behandler vi de oplysninger, du giver os, og hvilke cookies siden bruger." />
      <section className="legal section">
        <div>
          <h2>Dataansvarlig</h2>
          <p>{site.name}, CVR {site.cvr}, {site.address}, er dataansvarlig for de personoplysninger, der behandles i forbindelse med brug af denne hjemmeside. Har du spørgsmål, kan du kontakte os på <a href={`mailto:${site.email}`}>{site.email}</a> eller {site.phoneDisplay}.</p>
        </div>
        <div>
          <h2>Oplysninger vi indsamler</h2>
          <p>Når du bruger kontaktformularen, indsamler vi de oplysninger, du selv skriver: navn, telefonnummer, eventuelt bil/registreringsnummer og din besked. Oplysningerne bruges udelukkende til at besvare din henvendelse og til at kunne kontakte dig om din bil.</p>
          <p>Vi videregiver ikke dine oplysninger til tredjepart, ud over den e-mailudbyder (Resend) der teknisk sender beskeden videre til os.</p>
        </div>
        <div>
          <h2>Opbevaring</h2>
          <p>Vi opbevarer oplysninger fra kontaktformularen, så længe det er nødvendigt for at besvare din henvendelse og eventuelt udføre det arbejde, du har rettet henvendelse om. Oplysninger slettes, når de ikke længere er relevante.</p>
        </div>
        <div>
          <h2>Cookies og statistik</h2>
          <p>Siden bruger Google Analytics til at forstå, hvordan besøgende bruger hjemmesiden. Det sker kun, hvis du aktivt har accepteret cookies i den banner, der vises ved dit første besøg. Google Analytics sætter cookies, der indsamler anonymiseret information om din brug af siden, fx hvilke sider du besøger.</p>
          <p>Du kan til enhver tid ændre dit valg ved at slette cookies i din browser og genindlæse siden, hvorefter cookie-banneret vises igen.</p>
        </div>
        <div>
          <h2>Dine rettigheder</h2>
          <p>Du har efter databeskyttelsesforordningen ret til at få indsigt i, få rettet eller få slettet de oplysninger, vi har om dig, samt ret til at gøre indsigelse mod behandlingen. Kontakt os på <a href={`mailto:${site.email}`}>{site.email}</a>, hvis du vil gøre brug af dine rettigheder. Du kan også klage til Datatilsynet, se <a href="https://www.datatilsynet.dk" target="_blank" rel="noreferrer">datatilsynet.dk</a>.</p>
        </div>
      </section>
    </>
  );
}
