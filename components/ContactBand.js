import Link from "next/link";
import { site } from "@/data/site";
import { Arrow } from "./Icons";

export default function ContactBand() {
  return (
    <section className="contact-band">
      <div>
        <span className="kicker dark">Har bilen brug for hjælp?</span>
        <h2>Lad os kigge på det.</h2>
      </div>
      <div className="contact-band-actions">
        <a href={`tel:${site.phone}`}>{site.phoneDisplay}<Arrow /></a>
        <Link href="/kontakt">Send en forespørgsel<Arrow /></Link>
      </div>
    </section>
  );
}
