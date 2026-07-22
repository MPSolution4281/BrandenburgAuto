import "./globals.css";
import { Inter, Roboto_Condensed } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Analytics from "@/components/Analytics";
import CookieConsent from "@/components/CookieConsent";
import { site } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-display",
  display: "swap"
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Autoværksted i Holbæk | Brandenburg Autoservice",
    template: "%s | Brandenburg Autoservice"
  },
  description:
    "Lokalt autoværksted i Holbæk. Få hjælp til autoservice, bremser, fejlsøgning, dæk, A/C service, 4-hjulsudmåling og reparation med personlig kontakt og klare aftaler.",
  keywords: ["autoværksted Holbæk", "bilservice Holbæk", "bremser Holbæk", "fejlsøgning bil", "dækskifte Holbæk", "opbevaring af dæk Holbæk", "dækhotel Holbæk", "A/C service Holbæk", "klimaanlæg bil Holbæk", "4-hjulsudmåling Holbæk", "hjulvinkler Holbæk", "Brandenburg Autoservice", "bilreparation Holbæk", "syn klargøring"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "da_DK",
    siteName: site.name,
    title: "Brandenburg Autoservice - autoværksted i Holbæk",
    description: "Service og reparation af din bil med personlig kontakt og klare aftaler.",
    images: [{ url: "/images/hero-workshop.png", width: 1792, height: 896 }]
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0d0c"
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": `${site.url}/#business`,
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}/images/joachim.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    postalCode: site.postalCode,
    addressLocality: site.city,
    addressCountry: "DK"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.696126,
    longitude: 11.711696
  },
  areaServed: ["Holbæk", "Tuse", "Vipperød", "Jyderup", "Svinninge"],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "07:30", closes: "16:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "07:30", closes: "15:00" }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className={`${inter.variable} ${robotoCondensed.variable}`}>
      <head>
        <meta name="geo.region" content="DK-085" />
        <meta name="geo.placename" content="Holbæk" />
        <meta name="geo.position" content="55.696126;11.711696" />
        <meta name="ICBM" content="55.696126, 11.711696" />
      </head>
      <body>
        <a className="skip-link" href="#main">Gå til indhold</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <CookieConsent />
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </body>
    </html>
  );
}
