import BookingForm from "@/components/BookingForm";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata = {
  title: "Kontakt autoværksted i Holbæk",
  description: `Kontakt Brandenburg Autoservice på ${site.phoneDisplay}. Find åbningstider og adresse på ${site.address}.`,
  alternates: { canonical: "/kontakt" }
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Kontakt" title="Fortæl os om bilen." lead="Ring direkte til Joachim eller send oplysningerne på mail. Så finder vi den bedste vej videre." image="/images/joachim.jpg" imageAlt="Joachim Brandenburg ved værkstedet i Holbæk" />
      <section className="contact-page section">
        <div className="contact-info">
          <div><span>Telefon</span><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a><p>Hurtigst til tidsbestilling og akutte spørgsmål.</p></div>
          <div><span>E-mail</span><a href={`mailto:${site.email}`}>{site.email}</a><p>Send gerne registreringsnummer og en kort beskrivelse.</p></div>
          <div><span>Adresse</span><a href="https://www.google.com/maps/search/?api=1&query=Bødkervej+9B+4300+Holbæk" target="_blank" rel="noreferrer">{site.street}<br />{site.postalCode} {site.city}</a><p>Ring gerne, hvis du er i tvivl om vejen.</p></div>
          <div><span>Åbningstider</span>{site.hours.map(([day, time]) => <p className="hours" key={day}><strong>{day}</strong><b>{time}</b></p>)}</div>
        </div>
        <div className="form-panel">
          <span className="kicker dark">Forespørgsel</span>
          <h2>Send en besked til værkstedet.</h2>
          <p>Udfyld formularen, så vender vi tilbage hurtigst muligt.</p>
          <BookingForm />
        </div>
      </section>
      <section className="map-band">
        <div><span className="kicker">Find værkstedet</span><h2>Bødkervej 9B<br />4300 Holbæk</h2></div>
        <a className="button primary" href="https://www.google.com/maps/search/?api=1&query=Bødkervej+9B+4300+Holbæk" target="_blank" rel="noreferrer">Åbn rutevejledning</a>
      </section>
    </>
  );
}
