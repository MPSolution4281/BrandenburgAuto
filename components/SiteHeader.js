"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/data/site";
import { PhoneIcon } from "./Icons";

const nav = [
  ["/ydelser", "Ydelser"],
  ["/om", "Om værkstedet"],
  ["/viden", "Viden"],
  ["/kontakt", "Kontakt"]
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Brandenburg Autoservice - forside" onClick={() => setOpen(false)}>
        <Image src="/images/logo.png" width={348} height={74} alt="Brandenburg Autoservice" priority />
      </Link>
      <nav className={open ? "nav open" : "nav"} aria-label="Primær navigation">
        {nav.map(([href, label]) => (
          <Link className={pathname.startsWith(href) ? "active" : ""} href={href} key={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>
      <a className="header-phone" href={`tel:${site.phone}`}>
        <PhoneIcon />
        <span>{site.phoneDisplay}</span>
      </a>
      <button
        className={open ? "menu-button open" : "menu-button"}
        type="button"
        aria-label={open ? "Luk menu" : "Åbn menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className="bar bar-1" />
        <span className="bar bar-2" />
        <span className="bar bar-3" />
      </button>
    </header>
  );
}
