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
        <div className="map-band-copy">
          <div><span className="kicker">Find værkstedet</span><h2>Bødkervej 9B<br />4300 Holbæk</h2></div>
          <a className="button primary" href="https://www.google.com/maps/search/?api=1&query=Bødkervej+9B+4300+Holbæk" target="_blank" rel="noreferrer">Åbn rutevejledning</a>
        </div>
        <div className="map-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.5890715341116!2d11.70911207674198!3d55.69613177306327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc70cd05b641895d%3A0x3d86d174b41913c8!2sBrandenburg%20Autoservice%20-%20Autov%C3%A6rksted%20-%20Holb%C3%A6k!5e0!3m2!1sda!2sdk!4v1787556321884!5m2!1sda!2sdk"
            title="Brandenburg Autoservice – Autoværksted i Holbæk på Google Maps"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </section>
    </>
  );
}
