import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactBand from "@/components/ContactBand";
import { Arrow } from "@/components/Icons";
import { getService, services, site } from "@/data/site";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} i Holbæk`,
    description: service.description,
    alternates: { canonical: `/ydelser/${slug}` },
    openGraph: { title: `${service.title} i Holbæk`, description: service.description, images: [service.image] }
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Forside", item: site.url },
      { "@type": "ListItem", position: 2, name: "Ydelser", item: `${site.url}/ydelser` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${site.url}/ydelser/${slug}` }
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer }
    }))
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} i Holbæk`,
    description: service.description,
    areaServed: { "@type": "City", name: "Holbæk" },
    provider: { "@id": `${site.url}/#business` }
  };

  return (
    <>
      <PageHero eyebrow={`Ydelse / ${service.number}`} title={service.title} lead={service.description} image={service.image} imageAlt={service.imageAlt} />
      <section className="service-detail section">
        <div className="section-marker"><span>BA / {service.number}</span><span>{service.title}</span></div>
        <div className="service-detail-grid">
          <div>
            <span className="kicker dark">Grundigt fra start</span>
            <h2>Den rigtige løsning begynder med et godt blik på bilen.</h2>
          </div>
          <div>
            <p className="large-copy">{service.intro}</p>
            <ul className="check-list">
              {service.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
            </ul>
            <a className="button dark-button" href={`tel:${site.phone}`}>Ring og bestil tid</a>
          </div>
        </div>
      </section>
      <section className="faq section">
        <div className="section-marker"><span>BA / FAQ</span><span>Ofte spurgt</span></div>
        <div className="faq-grid">
          <div><span className="kicker dark">Viden før værkstedet</span><h2>Spørgsmål om {service.title.toLowerCase()}.</h2></div>
          <div>
            {service.faq.map(([question, answer]) => (
              <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>
            ))}
          </div>
        </div>
      </section>
      <section className="next-services section">
        <span className="kicker dark">Se også</span>
        <div>
          {services.filter((item) => item.slug !== slug).slice(0, 3).map((item) => (
            <Link href={`/ydelser/${item.slug}`} key={item.slug}>{item.title}<Arrow /></Link>
          ))}
        </div>
      </section>
      <ContactBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  );
}
