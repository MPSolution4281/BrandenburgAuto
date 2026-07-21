import { Resend } from "resend";
import { site } from "@/data/site";

const FROM = "Brandenburg Auto Website <kontakt@mpsolution.dk>";

export async function POST(request) {
  const data = await request.json();
  const { name, phone, car, service, message } = data;

  if (!name || !phone || !message) {
    return Response.json({ error: "Udfyld venligst navn, telefon og besked." }, { status: 400 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: FROM,
      to: site.email,
      replyTo: site.email,
      subject: `Forespørgsel: ${service || "Andet"} — ${name}`,
      text: `Navn: ${name}\nTelefon: ${phone}\nBil/reg.nr.: ${car || "-"}\nYdelse: ${service || "Andet"}\n\n${message}`
    });
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Resend error:", error);
    return Response.json({ error: "Der gik noget galt. Prøv igen eller ring til os." }, { status: 500 });
  }
}
