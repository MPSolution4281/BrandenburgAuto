import Image from "next/image";

export default function PageHero({ eyebrow, title, lead, image, imageAlt }) {
  return (
    <section className="page-hero">
      {image && <Image className="page-hero-image" src={image} fill priority alt={imageAlt || ""} sizes="100vw" />}
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <span className="kicker">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
      <div className="page-hero-index">BRANDENBURG / HOLBÆK</div>
    </section>
  );
}
