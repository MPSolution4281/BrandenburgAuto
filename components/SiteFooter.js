import Image from "next/image";
import Link from "next/link";
import { services, site } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Image src="/images/logo.png" width={348} height={74} alt="" />
          <p>Dit lokale autoværksted i Holbæk med personlig kontakt, grundigt arbejde og klare aftaler.</p>
        </div>
        <div>
          <span className="footer-label">Ydelser</span>
          {services.slice(0, 4).map((service) => <Link href={`/ydelser/${service.slug}`} key={service.slug}>{service.title}</Link>)}
        </div>
        <div>
          <span className="footer-label">Værksted</span>
          <Link href="/om">Om Joachim</Link>
          <Link href="/viden">Viden om bilen</Link>
          <Link href="/kontakt">Kontakt og åbningstider</Link>
        </div>
        <div>
          <span className="footer-label">Kontakt</span>
          <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>{site.street}<br />{site.postalCode} {site.city}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Brandenburg Autoservice · CVR {site.cvr}</span>
        <span>Autoværksted i Holbæk</span>
      </div>
    </footer>
  );
}
