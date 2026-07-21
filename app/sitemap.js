import { knowledge, services, site } from "@/data/site";

export default function sitemap() {
  const routes = ["", "/ydelser", "/om", "/kontakt", "/viden"];
  return [
    ...routes.map((route) => ({ url: `${site.url}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.8 })),
    ...services.map((service) => ({ url: `${site.url}/ydelser/${service.slug}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 })),
    ...knowledge.map((article) => ({ url: `${site.url}/viden/${article.slug}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 }))
  ];
}
