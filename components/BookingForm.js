"use client";

import { useState } from "react";
import { services, site } from "@/data/site";

export default function BookingForm() {
  const [sent, setSent] = useState(false);

  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Forespørgsel: ${data.get("service")}`);
    const body = encodeURIComponent(
      `Navn: ${data.get("name")}\nTelefon: ${data.get("phone")}\nBil/reg.nr.: ${data.get("car")}\n\n${data.get("message")}`
    );
    setSent(true);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="booking-form" onSubmit={submit}>
      <label>Navn<input name="name" required autoComplete="name" /></label>
      <label>Telefon<input name="phone" required autoComplete="tel" inputMode="tel" /></label>
      <label>Bil eller registreringsnummer<input name="car" autoComplete="off" /></label>
      <label>Hvad drejer det sig om?
        <select name="service" defaultValue="Autoservice">
          {services.map((service) => <option key={service.slug}>{service.title}</option>)}
          <option>Andet</option>
        </select>
      </label>
      <label className="wide">Beskriv kort problemet eller dit ønske<textarea name="message" rows="5" required /></label>
      <button type="submit">Klargør e-mail</button>
      {sent && <p className="form-note">Din mail-app åbner nu med oplysningerne udfyldt.</p>}
    </form>
  );
}
