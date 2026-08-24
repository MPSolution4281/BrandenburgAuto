export const site = {
  name: "Brandenburg Autoservice",
  shortName: "Brandenburg",
  url: "https://www.brandenburgauto.dk",
  phoneDisplay: "47 47 00 11",
  phone: "+4547470011",
  email: "brandenburg.autoservice@gmail.com",
  address: "Bødkervej 9B, 4300 Holbæk",
  street: "Bødkervej 9B",
  postalCode: "4300",
  city: "Holbæk",
  cvr: "44778254",
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
      "Dækskifte, hjulservice og opbevaring af dæk i Holbæk. Vi kontrollerer mønster, dæktryk og dækkenes tilstand, og opbevarer dine dæk mellem sæsonerne.",
    image: "/images/workshop.png",
    imageAlt: "Joachim Brandenburg på autoværkstedet i Holbæk",
    intro:
      "Dækkene er bilens kontakt med vejen. Ved hjulskifte kontrollerer vi synlig slitage, mønster og dæktryk og monterer hjulene korrekt, så du er klar til den kommende sæson. Vi opbevarer også dine sæsondæk mellem skiftene, så du slipper for at finde plads i garage eller kælder.",
    benefits: ["Sommer- og vinterhjul", "Kontrol af mønster og skader", "Korrekt dæktryk", "Opbevaring af dæk mellem sæsonerne"],
    faq: [
      ["Hvornår bør jeg skifte mellem sommer- og vinterdæk?", "Skift efter temperatur og vejr frem for kalenderen alene. Vinterdæk fungerer bedst i den kolde del af året."],
      ["Hvor meget mønster skal et dæk have?", "Lovkravet er minimum 1,6 mm, men vejgrebet forringes tidligere, især på våde og vinterlige veje."],
      ["Hvorfor slides mine dæk skævt?", "Det kan skyldes forkert dæktryk, hjulvinkler eller slid i undervognen. Vi kan hjælpe med at vurdere årsagen."],
      ["Kan I opbevare mine dæk mellem sæsonerne?", "Ja. Vi opbevarer dine sæsondæk hos os, så de er klar til afhentning eller montering, når du skal skifte igen."]
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
  },
  {
    slug: "ac-service",
    number: "07",
    title: "A/C service",
    short: "Kontrol og opfyldning af klimaanlægget, så køling og affugtning virker som den skal.",
    description:
      "A/C service i Holbæk med kontrol af kølemiddel, tæthed og funktion. Vi sikrer, at klimaanlægget køler effektivt og holder ruderne fri for dug.",
    image: "/images/workshop.png",
    imageAlt: "Mekaniker udfører A/C service på bilens klimaanlæg",
    intro:
      "Et klimaanlæg mister kølemiddel over tid, selv uden en synlig utæthed. Vi kontrollerer tryk og mængde, leder efter utætheder og fylder op, så anlægget køler effektivt og affugter ruderne korrekt.",
    benefits: ["Kontrol af kølemiddel og tryk", "Lækagesøgning på anlægget", "Påfyldning efter behov", "Rens på forespørgsel"],
    faq: [
      ["Hvor ofte skal klimaanlægget have service?", "Vi anbefaler kontrol cirka hvert 1.-2. år, da kølemiddel langsomt siver ud, selv uden en fejl på anlægget."],
      ["Hvorfor køler klimaanlægget dårligere om sommeren?", "Oftest skyldes det for lidt kølemiddel. Er niveauet lavt, kan der også være en utæthed, som bør findes, før der fyldes op."],
      ["Kan et dårligt klimaanlæg dugge ruderne indefra?", "Ja. Klimaanlægget affugter kabinen. Virker det ikke optimalt, dugger ruderne lettere i fugtigt vejr."]
    ]
  },
  {
    slug: "4-hjulsudmaaling",
    number: "08",
    title: "4-hjulsudmåling",
    short: "Måling og justering af hjulvinkler, så bilen kører lige og dækkene slides jævnt.",
    description:
      "4-hjulsudmåling i Holbæk med præcis måling af hjulvinkler. Vi retter styretøjet ind, så bilen ikke trækker til siden, og dækkene holder længere.",
    image: "/images/diagnostics.png",
    imageAlt: "4-hjulsudmåling og hjulvinkelmåling på autoværksted",
    intro:
      "Skæve hjulvinkler kan opstå efter et hul i vejen, en kantstensparkering eller almindeligt slid. Vi måler alle fire hjul og justerer vinklerne, så bilen kører lige, og dækkene ikke slides skævt.",
    benefits: ["Måling af alle fire hjul", "Justering af styretøj og vinkler", "Jævnere dækslid", "Bilen kører lige og roligt"],
    faq: [
      ["Hvornår bør jeg få lavet en 4-hjulsudmåling?", "Typiske tegn er, at bilen trækker til den ene side, rattet ikke står lige, eller dækkene slides skævt."],
      ["Kan et hul i vejen påvirke hjulvinklerne?", "Ja, et hårdt slag mod et hjul, fx fra et hul eller en kantsten, kan ændre vinklerne selv uden synlige skader."],
      ["Skal jeg have lavet udmåling efter dækskifte?", "Ikke nødvendigvis ved almindeligt dækskifte, men det er en god idé, hvis bilen trækker til siden eller har fået nye styretøjsdele."]
    ]
  }
];

export const knowledge = [
  {
    slug: "hvornaar-skal-bilen-til-service",
    title: "Hvornår skal bilen til service?",
    short: "Serviceintervallet afhænger både af kilometer, tid og bilens brug. Mange korte ture kan belaste olie, batteri og bremser mere end forventet.",
    image: "/images/hero-workshop.png",
    imageAlt: "Bil på lift til service på autoværksted",
    bodyImage: "/images/workshop-owner.png",
    bodyImageAlt: "Joachim Brandenburg klargør service",
    relatedService: "autoservice",
    body: [
      "De fleste bilproducenter angiver et serviceinterval i servicebogen eller i bilens display, som regel en kombination af kilometer og tid, for eksempel hver 15.000 km eller én gang om året, alt efter hvad der kommer først. Det tal er et udgangspunkt, ikke en garanti for at bilen er fejlfri lige til næste service.",
      "Kørselsmønster betyder mere, end de fleste tror. Mange korte ture i byen er faktisk hårdere ved bilen end lange ture på motorvejen. Motoren når sjældent op på normal driftstemperatur, olien renser sig selv dårligere, og batteriet bliver ikke ladet ordentligt op mellem hver tur. Har du mest kort kørsel, kan det derfor være en god idé at holde dig i den lave ende af serviceintervallet frem for den høje.",
      "Alder på bilen spiller også ind. Gummidele, slanger og pakninger bliver med tiden skøre af varme og sollys, uanset hvor få kilometer bilen har kørt. En ældre bil med lav kilometerstand kan derfor sagtens have brug for et grundigere kig, end kilometertallet alene antyder.",
      "Du behøver ikke vente på næste planlagte service, hvis bilen ændrer sig undervejs. Nye lyde, en blødere bremsepedal, øget olieforbrug eller en advarselslampe der lyser, er alle gode grunde til at få bilen set efter, uanset hvor langt der er til den fastsatte dato."
    ],
    tips: [
      "Følg servicebogens interval som udgangspunkt, ikke som facitliste",
      "Kør du mest korte ture, så hold dig i den lave ende af intervallet",
      "Reager på ændringer i lyd, følelse eller forbrug med det samme",
      "En ældre bil kan have brug for service oftere end kilometertallet foreslår"
    ]
  },
  {
    slug: "5-tegn-paa-slidte-bremser",
    title: "5 tegn på slidte bremser",
    short: "Pibelyde, vibrationer, en blød pedal, længere bremselængde eller en advarselslampe er gode grunde til at få bilen kontrolleret.",
    image: "/images/brakes.png",
    imageAlt: "Nærbillede af bremseskive og bremsekaliber",
    bodyImage: "/images/hero-workshop.png",
    bodyImageAlt: "Bil på lift under bremsekontrol",
    relatedService: "bremser",
    body: [
      "Bremser slides gradvist, og fordi det sker langsomt, vænner de fleste sig til den lidt dårligere følelse uden at lægge mærke til det. Her er de fem tegn, der oftest betyder, at bremserne trænger til et kig."
    ],
    tips: [
      "Pibende eller skrattende lyd under opbremsning, ofte fra en slidindikator eller metal mod metal",
      "Vibrationer i pedal eller rat, som typisk skyldes skæve eller ujævne bremseskiver",
      "En blød eller \"lang\" pedal, hvor bilen bremser senere end normalt",
      "Længere bremselængde, eller en fornemmelse af at bilen ikke reagerer lige så hurtigt som før",
      "Bilen trækker til den ene side under opbremsning, hvilket kan pege på en bremsekaliber der sidder fast"
    ]
  },
  {
    slug: "motorlampen-lyser-hvad-goer-du",
    title: "Hvad gør du, når motorlampen lyser?",
    short: "En konstant lampe kræver typisk snarlig diagnose. En blinkende motorlampe kan indikere en alvorlig fejl, hvor bilen bør standses.",
    image: "/images/diagnostics.png",
    imageAlt: "Elektronisk fejlsøgning med diagnosetester på bil",
    bodyImage: "/images/workshop-owner.png",
    bodyImageAlt: "Joachim Brandenburg foretager fejlsøgning",
    relatedService: "fejlsoegning",
    body: [
      "Motorlampen er en samlebetegnelse for en række forskellige fejl, og hvordan den opfører sig, siger noget om, hvor akut situationen er.",
      "Lyser lampen konstant, betyder det som regel, at motorstyringen har registreret en fejl, den ikke selv kan rette. Det kan være alt fra en løs benzindæksel til en sensor, der giver forkerte målinger. Bilen kan som regel køres videre i en kort periode, men bør undersøges inden for de nærmeste dage.",
      "Blinker lampen derimod, er det typisk et tegn på en alvorligere fejl, ofte relateret til fejltænding, som kan skade katalysatoren hvis bilen bliver ved med at køre. Her er rådet at sætte farten ned, finde et sikkert sted at stoppe, og kontakte et værksted, før du kører videre.",
      "Uanset hvilken slags lampe der lyser, starter en fejlsøgning altid med at læse fejlkoden ud af bilens computer. Fejlkoden peger på et system eller en komponent, men den fortæller sjældent hele historien alene. Derfor kombinerer vi udlæsningen med målinger og en mekanisk kontrol, så vi finder den faktiske årsag, i stedet for at gætte os frem til en dyr reservedel, der måske slet ikke er problemet."
    ],
    tips: [
      "Lyser lampen konstant: kør videre med omtanke, men få bilen tjekket snarest",
      "Blinker lampen: sæt farten ned og stands et sikkert sted",
      "Undgå at slette fejlkoden selv, før årsagen er fundet, lampen vender ofte bare tilbage",
      "Beskriv gerne, hvornår lampen tændte, og om bilen samtidig opførte sig anderledes"
    ]
  },
  {
    slug: "sommerdaek-eller-vinterdaek",
    title: "Sommerdæk eller vinterdæk – hvornår skal du skifte?",
    short: "Temperatur, vejr og kørselsbehov afgør, hvornår det er tid til at skifte. Kontroller samtidig mønster og dækkenes alder.",
    image: "/images/workshop.png",
    imageAlt: "Dækskifte og hjulkontrol på autoværksted",
    bodyImage: "/images/hero-workshop.png",
    bodyImageAlt: "Bil klar til dækskifte på værkstedet",
    relatedService: "daek-og-hjul",
    body: [
      "Der findes ikke en fast dato for dækskifte i Danmark, kun en regel om at dækkene til enhver tid skal passe til føret. I praksis er det gummiblandingen, der afgør, hvornår det er tid til at skifte.",
      "Sommerdæk er lavet af en hårdere gummiblanding, der holder formen og giver godt grip ved varme, men bliver stiv og mister grebet, når temperaturen falder til omkring 7 grader eller derunder. Vinterdæk bruger en blødere blanding, der bliver ved med at yde grib i kulde, men til gengæld slides hurtigere og bremser dårligere på varm asfalt.",
      "En simpel tommelfingerregel er at skifte til vinterdæk, når temperaturen konsekvent ligger under 7 grader, typisk i løbet af oktober eller november, og skifte tilbage til sommerdæk igen i april, når frostnætterne er forbi. Vejrudsigten er en bedre guide end kalenderen alene.",
      "Uanset årstid bør du kontrollere mønsterdybde og synlige skader ved hvert dækskifte. Lovkravet er minimum 1,6 mm, men vejgrebet forringes mærkbart længe før det, især på våde og vinterlige veje. Dæk over seks til otte år bør også kontrolleres for aldring i gummiet, selv med pænt mønster tilbage."
    ],
    tips: [
      "Skift til vinterdæk, når temperaturen konsekvent er under 7 grader",
      "Skift tilbage til sommerdæk, når frostnætterne er forbi",
      "Tjek mønsterdybde og synlige skader ved hvert skifte",
      "Mangler du plads til dækkene, opbevarer vi dine sæsondæk mellem skiftene"
    ]
  },
  {
    slug: "forbered-bilen-til-syn",
    title: "Sådan forbereder du bilen til syn",
    short: "Lys, viskere, dæk og advarselslamper er gode steder at begynde. Et synstjek kan finde flere oplagte fejl.",
    image: "/images/hero-workshop.png",
    imageAlt: "Bil klar til kontrol før bilsyn",
    bodyImage: "/images/diagnostics.png",
    bodyImageAlt: "Gennemgang af bil før synstjek",
    relatedService: "klargoring-til-syn",
    body: [
      "En stor del af de fejl, der giver omsyn, er enkle at opdage og udbedre på forhånd. En halv time med en tjekliste kan spare dig for en tur til synshallen mere end nødvendigt.",
      "Synsfolkene kigger blandt andet på lys og lygter, dæk og fælge, bremser, styretøj, rudens tilstand og synlig rust i undervognen. De fleste af disse punkter kan du selv kaste et blik på, før bilen overhovedet kører ind i hallen."
    ],
    tips: [
      "Tjek alle lygter: forlygter, baglygter, blinklys og nummerpladelys",
      "Skift viskerblade, hvis de strimler, og fyld sprinklervæske på",
      "Kontroller dækkenes mønster og lufttryk, og se efter revner i siderne",
      "Sørg for at nummerpladerne er hele og læselige",
      "Se efter om advarselslamper i instrumentbrættet lyser konstant"
    ]
  },
  {
    slug: "hvorfor-siger-bilen-en-ny-lyd",
    title: "Hvorfor siger bilen en ny lyd?",
    short: "Nye lyde ved bremsning, sving eller acceleration bør beskrives så præcist som muligt. Det gør den første fejlsøgning hurtigere.",
    image: "/images/diagnostics.png",
    imageAlt: "Mekaniker lytter efter lyde under bilen",
    bodyImage: "/images/brakes.png",
    bodyImageAlt: "Kontrol af bremse- og hjulophæng",
    relatedService: "fejlsoegning",
    body: [
      "En ny lyd er sjældent tilfældig, og hvor og hvornår den opstår, giver ofte det første spor til, hvad der er galt.",
      "Et metallisk bank eller klunk, når bilen kører hen over huller eller ujævnheder, peger typisk mod styretøj eller affjedring, for eksempel et slidt kuglelej eller en løs stabilisatorstang. En hvinende eller skrattende lyd ved opbremsning kommer som regel fra bremserne, ofte en slidindikator der gør præcis det, den skal.",
      "En lyd der ændrer sig med hastigheden, uanset om du bremser, accelererer eller frikører, peger ofte mod et hjullejer eller et led i drivlinjen. En rallende eller klaprende lyd i tomgang, som forsvinder ved let gas, kan komme fra en løs varmeskærm eller et udstødningsophæng.",
      "Jo mere præcist du kan beskrive lyden, jo hurtigere kan vi indsnævre årsagen. Beskriv gerne, om lyden kommer ved opbremsning, sving, gearskift eller på ujævnt underlag, om den ændrer sig med hastigheden, og om den kommer fra en bestemt side af bilen."
    ],
    tips: [
      "Bank eller klunk over huller: ofte styretøj eller affjedring",
      "Hvin ved opbremsning: som regel bremserne",
      "Lyd der følger hastigheden: kig mod hjullejer eller drivline",
      "Rallen i tomgang: tjek varmeskjolde og udstødningsophæng"
    ]
  }
];

export function getKnowledge(slug) {
  return knowledge.find((article) => article.slug === slug);
}

export function getService(slug) {
  return services.find((service) => service.slug === slug);
}
