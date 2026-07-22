"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = "G-MEZC11HDEZ";

export default function Analytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookie-consent") === "accepted") setEnabled(true);
    const onAccept = () => setEnabled(true);
    window.addEventListener("cookie-consent-accepted", onAccept);
    return () => window.removeEventListener("cookie-consent-accepted", onAccept);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
