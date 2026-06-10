export const site = {
  name: "Brandenburg Autoservice",
  shortName: "Brandenburg",
  url: "https://www.brandenburgauto.dk",
  phoneDisplay: "47 47 00 11",
  phone: "+4547470011",
  email: "Joachim@brandenburgauto.dk",
  address: "Lundemarksvej 29, 4300 Holbæk",
  street: "Lundemarksvej 29",
  postalCode: "4300",
  city: "Holbæk",
  cvr: "42221424",
  owner: "Joachim Brandenburg",
  hours: [
    ["Mandag - torsdag", "07.30 - 16.00"],
    ["Fredag", "07.30 - 15.00"],
    ["Lørdag - søndag", "Lukket"]
  ]
};

export const services = [
  {
    slug: "autoservice",
    number: "01",
    title: "Autoservice",
    short: "Serviceeftersyn efter bilens behov og fabrikantens forskrifter.",
    description:
      "Få udført et grundigt serviceeftersyn i Holbæk med kontrol af olie, filtre, væsker, bremser og bilens vigtigste sikkerhedspunkter.",
    image: "/images/hero-workshop.png",
    imageAlt: "Bil til service på et moderne autoværksted",
    intro:
      "Et godt serviceeftersyn handler om mere end et olieskift. Vi gennemgår bilen systematisk, vurderer sliddelene og giver dig et klart overblik over, hvad der bør laves nu, og hvad der kan vente.",
    benefits: ["Service efter bilens behov", "Olie- og filterskift", "Kontrol af væsker og sliddele", "Tydelig aftale før ekstraarbejde"],
    faq: [
      ["Hvor ofte skal bilen til service?", "Intervallet afhænger af bilmærke, model, alder og kørselsmønster. Servicebogen eller bilens display viser normalt intervallet."],
      ["Bevarer jeg fabriksgarantien?", "Service kan udføres på et frit værksted, når fabrikantens forskrifter og korrekte reservedele følges."],
      ["Kontakter I mig før ekstra reparationer?", "Ja. Du får en vurdering og pris, før vi udfører arbejde ud over det aftalte."]
    ]
  },
  {
    slug: "bremser",
    number: "02",
    title: "Bremser",
    short: "Kontrol og reparation af bremser med sikkerheden først.",
    description:
      "Bremsekontrol og bremsereparation i Holbæk. Vi undersøger klodser, skiver, kalibre og bremsevæske og forklarer, hvad bilen har brug for.",
    image: "/images/brakes.png",
    imageAlt: "Mekaniker kontrollerer bremseskive og bremsekaliber",
    intro:
      "Pibelyde, vibrationer eller længere bremselængde bør undersøges hurtigt. Vi måler slitagen og finder årsagen, så du får den rigtige løsning frem for automatisk at skifte mere end nødvendigt.",
    benefits: ["Kontrol af skiver og klodser", "Fejlfinding på bremsekalibre", "Skift af bremsevæske", "Vurdering før udskiftning"],
    faq: [
      ["Hvordan mærker jeg slidte bremser?", "Typiske tegn er mislyde, vibrationer, en blød pedal eller at bilen trækker til siden under bremsning."],
      ["Skal skiver og klodser altid skiftes sammen?", "Ikke altid. Det afhænger af mål, slitage og overflade. Vi kontrollerer delene, før vi anbefaler udskiftning."],
      ["Kan jeg køre med en advarselslampe?", "En bremselampe bør tages alvorligt. Kontakt værkstedet, så vi kan vurdere, om bilen bør køres videre."]
    ]
  },
  {
    slug: "fejlsoegning",
    number: "03",
    title: "Fejlsøgning",
    short: "Systematisk diagnose, når bilen opfører sig anderledes.",
    description:
      "Professionel fejlsøgning og bildiagnose i Holbæk ved motorlampe, mislyde, startproblemer eller ujævn motorgang.",
    image: "/images/diagnostics.png",
    imageAlt: "Mekaniker udfører elektronisk fejlsøgning på en bil",
    intro:
      "En fejlkode er et spor, ikke altid selve løsningen. Vi kombinerer elektronisk diagnose med målinger og mekanisk kontrol for at finde den sandsynlige årsag, før der bestilles dyre dele.",
    benefits: ["Udlæsning af fejlkoder", "Kontrol af livedata og målinger", "Mekanisk og elektrisk diagnose", "Klar forklaring af næste skridt"],
    faq: [
      ["Hvad betyder motorlampen?", "Den kan skyldes mange forskellige fejl. Lyser den konstant, bør bilen undersøges. Blinker den, bør du standse og kontakte værkstedet."],
      ["Kan I nulstille fejlkoden?", "Vi kan slette fejlkoder, men anbefaler først at finde årsagen, så lampen ikke blot vender tilbage."],
      ["Hvor lang tid tager fejlsøgning?", "Det afhænger af fejlen. Nogle problemer findes hurtigt, mens periodiske eller elektriske fejl kræver mere måling."]
    ]
  },
  {
    slug: "daek-og-hjul",
    number: "04",
    title: "Dæk & hjul",
    short: "Dækskifte, kontrol og korrekt montering til sæsonen.",
    description:
      "Dækskifte og hjulservice i Holbæk. Vi kontrollerer mønster, dæktryk og dækkenes tilstand, så bilen står sikkert på vejen.",
    image: "/images/workshop.png",
    imageAlt: "Joachim Brandenburg på autoværkstedet i Holbæk",
    intro:
      "Dækkene er bilens kontakt med vejen. Ved hjulskifte kontrollerer vi synlig slitage, mønster og dæktryk og monterer hjulene korrekt, så du er klar til den kommende sæson.",
    benefits: ["Sommer- og vinterhjul", "Kontrol af mønster og skader", "Korrekt dæktryk", "Efterspænding efter aftale"],
    faq: [
      ["Hvornår bør jeg skifte mellem sommer- og vinterdæk?", "Skift efter temperatur og vejr frem for kalenderen alene. Vinterdæk fungerer bedst i den kolde del af året."],
      ["Hvor meget mønster skal et dæk have?", "Lovkravet er minimum 1,6 mm, men vejgrebet forringes tidligere, især på våde og vinterlige veje."],
      ["Hvorfor slides mine dæk skævt?", "Det kan skyldes forkert dæktryk, hjulvinkler eller slid i undervognen. Vi kan hjælpe med at vurdere årsagen."]
    ]
  },
  {
    slug: "klargoring-til-syn",
    number: "05",
    title: "Klargøring til syn",
    short: "Et praktisk synstjek, før bilen skal gennem hallen.",
    description:
      "Få bilen kontrolleret før syn i Holbæk. Vi gennemgår typiske fejlpunkter og hjælper med nødvendige reparationer før bilsyn.",
    image: "/images/hero-workshop.png",
    imageAlt: "Bil på lift klar til kontrol før syn",
    intro:
      "Et synstjek kan opdage oplagte fejl, før bilen står i synshallen. Vi kontrollerer blandt andet lys, bremser, dæk, styretøj og synlige fejl i undervognen.",
    benefits: ["Kontrol af lys og lygter", "Bremser og dæk", "Undervogn og styretøj", "Udbedring efter aftale"],
    faq: [
      ["Garanterer et synstjek, at bilen går gennem syn?", "Nej, den endelige afgørelse træffes af synshallen. Et grundigt tjek reducerer dog risikoen for oplagte fejl og omsyn."],
      ["Kan I reparere fejlene inden syn?", "Ja, vi aftaler pris og omfang med dig, før eventuelle reparationer udføres."],
      ["Hvad skal jeg selv kontrollere?", "Tjek gerne alle lygter, viskere, sprinklervæske og at nummerpladerne er læselige."]
    ]
  },
  {
    slug: "reparation",
    number: "06",
    title: "Reparation",
    short: "Mekaniske reparationer med en ærlig vurdering først.",
    description:
      "Bilreparation i Holbæk for de fleste bilmærker. Få en klar vurdering af fejlen, mulighederne og prisen, før arbejdet går i gang.",
    image: "/images/diagnostics.png",
    imageAlt: "Mekaniker arbejder ved åben motorhjelm",
    intro:
      "Når bilen skal repareres, begynder vi med at forstå symptomet og kontrollere årsagen. Du får en forklaring på mulighederne, så reparationen passer til bilens stand og dit behov.",
    benefits: ["Reparation af de fleste bilmærker", "Faglig vurdering først", "Reservedele efter aftale", "Ingen uventet ekstraregning"],
    faq: [
      ["Hvilke bilmærker reparerer I?", "Vi arbejder med de fleste almindelige personbiler. Kontakt os gerne med registreringsnummer og problem, så vi kan vurdere opgaven."],
      ["Kan jeg få et prisoverslag?", "Ja, når vi har de nødvendige oplysninger eller har undersøgt bilen. Ved skjulte fejl kan endelig pris afhænge af diagnosen."],
      ["Bestiller I dele på forhånd?", "Når fejlen og løsningen er aftalt, finder vi passende reservedele og aftaler pris og levering med dig."]
    ]
  }
];

export const knowledge = [
  {
    title: "Hvornår skal bilen til service?",
    text: "Serviceintervallet afhænger både af kilometer, tid og bilens brug. Mange korte ture kan belaste olie, batteri og bremser mere end forventet."
  },
  {
    title: "5 tegn på slidte bremser",
    text: "Pibelyde, vibrationer, en blød pedal, længere bremselængde eller en advarselslampe er gode grunde til at få bilen kontrolleret."
  },
  {
    title: "Hvad gør du, når motorlampen lyser?",
    text: "En konstant lampe kræver typisk snarlig diagnose. En blinkende motorlampe kan indikere en alvorlig fejl, hvor bilen bør standses."
  }
];

export function getService(slug) {
  return services.find((service) => service.slug === slug);
}
