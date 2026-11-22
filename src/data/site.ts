// Të dhënat e zyrës. Telefoni/WhatsApp dhe emaili janë realë.
export const site = {
  name: 'Fincor Kontabilitet',
  shortName: 'Fincor',
  tagline: 'Zyrë kontabiliteti dhe konsulence financiare',
  description:
    'Fincor Kontabilitet mban librat, përgatit deklaratat tatimore, pagat dhe pasqyrat financiare për biznese të vogla dhe të mesme. Rezervoni një konsultë falas.',
  contact: {
    address: 'Rruga e Durrësit, Nr. 47',
    city: 'Tiranë, Shqipëri',
    // Numri i vetëm i zyrës – përdoret edhe për WhatsApp.
    phone: '+355 69 881 8556',
    phoneHref: 'tel:+355698818556',
    whatsappHref: 'https://wa.me/355698818556',
    email: 'fincor.kontabilitet@outlook.com',
    hours: [
      { days: 'E hënë – E premte', time: '08:30 – 17:30' },
      { days: 'E shtunë', time: '09:00 – 13:00 (me takim)' },
    ],
  },
  nav: [
    { label: 'Shërbimet', href: '/#sherbimet' },
    { label: 'Rreth nesh', href: '/#rreth-nesh' },
    { label: 'Si punojmë', href: '/#si-punojme' },
    { label: 'Paketat', href: '/#paketat' },
    { label: 'Pyetje', href: '/#pyetje' },
    { label: 'Kontakt', href: '/#kontakt' },
  ],
  // Teksti i dhënë nga zyra – mos e ndryshoni pa miratimin e saj.
  about: {
    positioning: {
      lead: 'Më shumë se kontabilitet.',
      accent: 'Partneritet për biznesin tuaj.',
    },
    mission: [
      'Misioni ynë është të ofrojmë shërbime profesionale kontabël, fiskale dhe financiare, duke ndihmuar bizneset të menaxhojnë me efikasitet aktivitetin e tyre, të përmbushin detyrimet ligjore dhe të marrin vendime të informuara për zhvillimin e tyre.',
      'Ne synojmë të jemi më shumë sesa një ofrues shërbimesh kontabiliteti: një partner i besueshëm për çdo biznes, duke ofruar transparencë, korrektësi, përkushtim dhe zgjidhje të përshtatura sipas nevojave të tij.',
    ],
    vision:
      'Të bëhemi një partner i besuar në fushën e shërbimeve kontabël dhe fiskale në Shqipëri, duke kontribuar në zhvillimin e qëndrueshëm të bizneseve përmes profesionalizmit, teknologjisë dhe cilësisë së shërbimit.',
    values: [
      { title: 'Besueshmëria', description: 'Ndërtojmë marrëdhënie mbi korrektësinë dhe transparencën.' },
      { title: 'Profesionalizmi', description: 'Ofrojmë shërbime me përgjegjësi dhe përkushtim.' },
      { title: 'Integriteti', description: 'Veprojmë me ndershmëri dhe respekt ndaj klientëve.' },
      { title: 'Konfidencialiteti', description: 'Ruajmë informacionin dhe të dhënat e klientëve.' },
      { title: 'Partneriteti', description: 'Suksesin e klientëve e konsiderojmë pjesë të suksesit tonë.' },
    ],
  },
  promises: [
    {
      title: 'Një kontabilist i dedikuar',
      description:
        'E dini gjithmonë kë të telefononi. I njëjti person ndjek llogaritë tuaja nga muaji në muaj.',
    },
    {
      title: 'Afate që nuk humbasin',
      description:
        'Kalendar i brendshëm për çdo klient: TVSH, kontribute, parapagime dhe depozitime vjetore.',
    },
    {
      title: 'Raport i thjeshtë çdo muaj',
      description:
        'Një faqe me të ardhurat, shpenzimet, detyrimet dhe çfarë duhet të paguani – pa zhargon.',
    },
  ],
  steps: [
    {
      title: 'Takim njohës',
      description:
        '30 minuta, falas, në zyrë ose online. Na tregoni për biznesin dhe çfarë ju shqetëson.',
    },
    {
      title: 'Ofertë e qartë',
      description:
        'Brenda dy ditësh pune merrni një ofertë mujore fikse, pa kosto të fshehura.',
    },
    {
      title: 'Marrja në dorëzim',
      description:
        'Kontaktojmë kontabilistin e mëparshëm, mbledhim dokumentet dhe rregullojmë hapat që mungojnë.',
    },
    {
      title: 'Ritëm mujor',
      description:
        'Ju dërgoni faturat, ne regjistrojmë, deklarojmë dhe ju njoftojmë para çdo afati.',
    },
  ],
  faq: [
    {
      q: 'Sa kushton shërbimi i kontabilitetit?',
      a: 'Çmimi varet nga forma e biznesit, numri i faturave në muaj dhe numri i punonjësve. Pas takimit njohës ju japim një ofertë mujore fikse, që nuk ndryshon pa ju njoftuar më parë.',
    },
    {
      q: 'Si i dërgoj dokumentet?',
      a: 'Mund t’i sillni në zyrë, t’i dërgoni me email ose t’i ngarkoni në një dosje të përbashkët online. Shumica e klientëve na dërgojnë faturat një herë në javë.',
    },
    {
      q: 'Kam një kontabilist tjetër. A mund të kaloj te ju gjatë vitit?',
      a: 'Po. Kalimi mund të bëhet në çdo muaj. Ne kontaktojmë kontabilistin e mëparshëm, marrim librat dhe kontrollojmë që deklaratat e kaluara të jenë në rregull.',
    },
    {
      q: 'A punoni me persona fizikë dhe biznese të vogla?',
      a: 'Po. Punojmë me persona fizikë, profesionistë të lirë dhe SHPK. Paketa Start është menduar pikërisht për ta.',
    },
    {
      q: 'Çfarë ndodh nëse administrata tatimore kërkon sqarime?',
      a: 'Ne përgatisim dokumentacionin, komunikojmë me zyrën tatimore në emrin tuaj dhe ju shoqërojmë në takime kur nevojitet.',
    },
    {
      q: 'A ofroni shërbim në gjuhën angleze?',
      a: 'Po. Për bizneset me ortakë të huaj përgatisim raporte dhe komunikojmë edhe në anglisht.',
    },
  ],
}

export const consultationForm = {
  name: 'kerkese-konsulence',
  endpoint: '/__forms.html',
}
