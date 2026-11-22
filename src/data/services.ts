export interface Service {
  slug: string
  number: string
  title: string
  short: string
  description: string
  includes: Array<string>
  forWho: string
  rhythm: string
}

const services: Array<Service> = [
  {
    slug: 'kontabilitet',
    number: '01',
    title: 'Mbajtja e kontabilitetit',
    short:
      'Regjistrim i faturave, libra shitjesh e blerjesh, rakordim bankar dhe mbyllje mujore.',
    description:
      'Mbajmë librat tuaj kontabël nga dita e parë e muajit deri në mbylljen e tij. Çdo faturë regjistrohet, çdo lëvizje bankare rakordohet dhe në fund të muajit merrni një pasqyrë të qartë të gjendjes së biznesit.',
    includes: [
      'Regjistrimi i faturave të shitjes dhe blerjes',
      'Librat e shitjeve dhe blerjeve',
      'Rakordimi i llogarive bankare dhe arkës',
      'Ndjekja e klientëve dhe furnitorëve',
      'Mbyllja mujore dhe raporti njëfaqësh',
    ],
    forWho: 'Persona fizikë, SHPK dhe organizata jofitimprurëse',
    rhythm: 'Çdo muaj',
  },
  {
    slug: 'tatime',
    number: '02',
    title: 'Deklarime tatimore',
    short:
      'TVSH, tatimi mbi fitimin, parapagimet dhe komunikimi me administratën tatimore.',
    description:
      'Përgatisim dhe dorëzojmë deklaratat tatimore në kohë, kontrollojmë që shifrat të përputhen me librat dhe ju njoftojmë paraprakisht për shumat që duhet të paguani. Nëse administrata tatimore kërkon sqarime, ne përgjigjemi në emrin tuaj.',
    includes: [
      'Deklarata mujore e TVSH-së',
      'Tatimi mbi fitimin dhe parapagimet',
      'Tatimi mbi të ardhurat personale',
      'Njoftim paraprak për çdo detyrim',
      'Përfaqësim në kontrolle dhe kërkesa për sqarime',
    ],
    forWho: 'Çdo biznes i regjistruar në tatime',
    rhythm: 'Mujore dhe vjetore',
  },
  {
    slug: 'pagat',
    number: '03',
    title: 'Pagat dhe sigurimet',
    short:
      'Listëpagesat, kontributet shoqërore e shëndetësore dhe dokumentet e punonjësve.',
    description:
      'Llogarisim pagat neto dhe bruto, kontributet e sigurimeve dhe tatimin mbi pagën. Përgatisim listëpagesat, deklarimet mujore dhe dokumentet kur punësoni ose largoni një punonjës.',
    includes: [
      'Llogaritja e pagave dhe listëpagesat mujore',
      'Kontributet e sigurimeve shoqërore dhe shëndetësore',
      'Deklarimi i punonjësve të rinj dhe largimeve',
      'Vërtetime page për bankat dhe ambasadat',
      'Kontrata pune sipas modelit standard',
    ],
    forWho: 'Biznese me një ose më shumë punonjës',
    rhythm: 'Çdo muaj',
  },
  {
    slug: 'pasqyra-financiare',
    number: '04',
    title: 'Pasqyrat financiare vjetore',
    short:
      'Bilanci, pasqyra e të ardhurave, shënimet shpjeguese dhe depozitimi në QKB.',
    description:
      'Në fund të vitit përgatisim pasqyrat financiare sipas standardeve kombëtare të kontabilitetit, i diskutojmë me ju para dorëzimit dhe kujdesemi për depozitimin e tyre në afat.',
    includes: [
      'Bilanci dhe pasqyra e të ardhurave e shpenzimeve',
      'Pasqyra e fluksit të parasë',
      'Shënimet shpjeguese',
      'Inventari dhe amortizimi i aktiveve',
      'Depozitimi në Qendrën Kombëtare të Biznesit',
    ],
    forWho: 'SHPK, SHA dhe persona fizikë me detyrim depozitimi',
    rhythm: 'Një herë në vit',
  },
  {
    slug: 'hapja-e-biznesit',
    number: '05',
    title: 'Hapja e biznesit',
    short:
      'Zgjedhja e formës ligjore, regjistrimi, fiskalizimi dhe ngritja e kontabilitetit.',
    description:
      'Ju ndihmojmë të zgjidhni formën e duhur për biznesin tuaj – person fizik apo SHPK – dhe kujdesemi për regjistrimin, pajisjen me NIPT, fiskalizimin dhe ngritjen e kontabilitetit që në muajin e parë.',
    includes: [
      'Këshillim për formën ligjore dhe regjimin tatimor',
      'Regjistrimi në QKB dhe pajisja me NIPT',
      'Fiskalizimi dhe pajisjet e faturimit',
      'Hapja e llogarisë bankare të biznesit',
      'Plani kontabël dhe udhëzime për muajin e parë',
    ],
    forWho: 'Sipërmarrës që po nisin një biznes të ri',
    rhythm: 'Një herë, në fillim',
  },
  {
    slug: 'konsulence',
    number: '06',
    title: 'Konsulencë financiare',
    short:
      'Buxhete, analiza kostosh, cash-flow dhe raporte për bankat e investitorët.',
    description:
      'Kur keni një vendim për të marrë – një kredi, një punësim i ri, një investim – ju ndihmojmë të shihni shifrat qartë. Përgatisim buxhete, parashikime të fluksit të parasë dhe raporte për menaxhimin.',
    includes: [
      'Buxheti vjetor dhe ndjekja mujore',
      'Parashikimi i fluksit të parasë',
      'Analiza e kostove dhe marzheve',
      'Dosje financiare për kredi bankare',
      'Raporte për ortakë dhe investitorë',
    ],
    forWho: 'Biznese në rritje dhe ortakë që duan qartësi',
    rhythm: 'Sipas nevojës',
  },
]

export default services

export function findService(slug: string) {
  return services.find((service) => service.slug === slug)
}

export interface Package {
  id: 'start' | 'rritje' | 'korporate'
  name: string
  lead: string
  fits: string
  features: Array<string>
}

export const packages: Array<Package> = [
  {
    id: 'start',
    name: 'Start',
    lead: 'Për persona fizikë dhe profesionistë të lirë',
    fits: 'Deri në 40 fatura në muaj · 0–2 punonjës',
    features: [
      'Mbajtja e kontabilitetit',
      'Deklarimet tatimore mujore',
      'Pagat për deri në 2 punonjës',
      'Raport mujor njëfaqësh',
    ],
  },
  {
    id: 'rritje',
    name: 'Rritje',
    lead: 'Për SHPK që po zgjerohen',
    fits: 'Deri në 150 fatura në muaj · deri në 15 punonjës',
    features: [
      'Gjithçka te paketa Start',
      'Pagat për deri në 15 punonjës',
      'Pasqyrat financiare vjetore',
      'Takim tremujor për rezultatet',
    ],
  },
  {
    id: 'korporate',
    name: 'Korporatë',
    lead: 'Për kompani me volum të lartë',
    fits: 'Mbi 150 fatura në muaj · mbi 15 punonjës',
    features: [
      'Gjithçka te paketa Rritje',
      'Buxhet dhe parashikim fluksi parash',
      'Raporte për menaxhimin çdo muaj',
      'Kontabilist i dedikuar + zëvendës',
    ],
  },
]

export function recommendPackage({
  invoices,
  employees,
  isCompany,
}: {
  invoices: number
  employees: number
  isCompany: boolean
}): Package['id'] {
  if (invoices > 150 || employees > 15) return 'korporate'
  if (isCompany || invoices > 40 || employees > 2) return 'rritje'
  return 'start'
}
