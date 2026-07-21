"use client";

import { useState } from "react";
import { services, site } from "@/data/site";

export default function BookingForm() {
  const [status, setStatus] = useState("idle");

  async function submit(event) {
    event.preventDefault();
    setStatus("sending");
    const data = new FormData(event.currentTarget);
    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      car: data.get("car"),
      service: data.get("service"),
      message: data.get("message")
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
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
      <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sender..." : "Send forespørgsel"}</button>
      {status === "sent" && <p className="form-note">Tak! Vi vender tilbage hurtigst muligt.</p>}
      {status === "error" && <p className="form-note">Der gik noget galt. Prøv igen eller ring på <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>.</p>}
    </form>
  );
}
