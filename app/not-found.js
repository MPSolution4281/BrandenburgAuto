import Link from "next/link";
import ContactBand from "@/components/ContactBand";

export const metadata = {
  title: "Siden blev ikke fundet",
  robots: { index: false, follow: true }
};

export default function NotFound() {
  return (
    <>
      <section className="not-found section">
        <span className="not-found-number">404</span>
        <span className="kicker">Forkert drejning</span>
        <h1>Siden findes ikke.</h1>
        <p>Siden du leder efter er enten flyttet, omdøbt, eller findes ikke længere. Prøv forsiden, eller find den ydelse du søgte.</p>
        <div className="not-found-actions">
          <Link className="button primary" href="/">Til forsiden</Link>
          <Link className="button ghost" href="/ydelser">Se ydelser</Link>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
