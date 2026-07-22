"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setVisible(true);
  }, []);

  function choose(value) {
    localStorage.setItem("cookie-consent", value);
    setVisible(false);
    if (value === "accepted") window.dispatchEvent(new Event("cookie-consent-accepted"));
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>
        Vi bruger cookies til at forstå, hvordan siden bliver brugt. Læs mere i vores{" "}
        <Link href="/privatliv">privatlivspolitik</Link>.
      </p>
      <div className="cookie-banner-actions">
        <button type="button" className="button ghost" onClick={() => choose("rejected")}>Kun nødvendige</button>
        <button type="button" className="button primary" onClick={() => choose("accepted")}>Accepter</button>
      </div>
    </div>
  );
}
