import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactBand from "@/components/ContactBand";
import { Arrow } from "@/components/Icons";
import { knowledge, getKnowledge, getService, site } from "@/data/site";

export function generateStaticParams() {
  return knowledge.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getKnowledge(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.short,
    alternates: { canonical: `/viden/${slug}` },
    openGraph: { title: article.title, description: article.short, images: [article.image] }
  };
}

export default async function KnowledgeArticlePage({ params }) {
  const { slug } = await params;
  const article = getKnowledge(slug);
  if (!article) notFound();
  const relatedService = getService(article.relatedService);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Forside", item: site.url },
      { "@type": "ListItem", position: 2, name: "Viden", item: `${site.url}/viden` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${site.url}/viden/${slug}` }
    ]
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.short,
    image: `${site.url}${article.image}`,
    author: { "@type": "Person", name: site.owner },
    publisher: { "@id": `${site.url}/#business` }
  };

  return (
    <>
      <PageHero eyebrow="Viden fra værkstedet" title={article.title} lead={article.short} image={article.image} imageAlt={article.imageAlt} />
      <section className="service-detail section">
        <div className="section-marker"><span>BA / VIDEN</span><span>{article.title}</span></div>
        <div className="service-detail-grid">
          <div>
            <span className="kicker dark">Godt at vide</span>
            <h2>{article.title}</h2>
          </div>
          <div>
            {article.body.map((paragraph) => <p className="large-copy" key={paragraph.slice(0, 30)}>{paragraph}</p>)}
            {article.tips && (
              <ul className="check-list">
                {article.tips.map((tip) => <li key={tip}>{tip}</li>)}
              </ul>
            )}
            {relatedService && (
              <Link className="text-link" href={`/ydelser/${relatedService.slug}`}>Se {relatedService.title.toLowerCase()} <Arrow /></Link>
            )}
          </div>
        </div>
      </section>
      <section className="next-services section">
        <span className="kicker dark">Mere viden</span>
        <div>
          {knowledge.filter((item) => item.slug !== slug).slice(0, 3).map((item) => (
            <Link href={`/viden/${item.slug}`} key={item.slug}>{item.title}<Arrow /></Link>
          ))}
        </div>
      </section>
      <ContactBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </>
  );
}
