import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import services from '../data/services'
import { site } from '../data/site'
import { cdn, cdnSrcSet } from '../lib/image'
import { ConsultationForm } from './ConsultationForm'
import { PackageFinder } from './PackageFinder'
import { SiteFooter, SiteHeader } from './SiteChrome'

const closing = [
  'Faturat e shitjes të regjistruara',
  'Rakordimi bankar',
  'Listëpagesat dhe kontributet',
  'Deklarata e TVSH-së – dorëzuar',
  'Raporti mujor – dërguar klientit',
]

export function HomePage() {
  const [serviceSlug, setServiceSlug] = useState('')
  const [packageId, setPackageId] = useState('')

  return (
    <div className="grain">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-20">
            <div>
              <p className="eyebrow rise">
                {site.tagline} · {site.contact.city.split(',')[0]}
              </p>
              <h1 className="rise mt-6 font-display text-[2.9rem] leading-[1.02] tracking-tight text-ink [animation-delay:80ms] sm:text-6xl lg:text-7xl">
                {site.about.positioning.lead}{' '}
                <em className="font-normal text-navy">{site.about.positioning.accent}</em>
              </h1>
              <p className="rise mt-7 max-w-xl text-lg leading-relaxed text-muted [animation-delay:160ms]">
                Mbajmë librat, përgatisim deklaratat tatimore, pagat dhe
                pasqyrat financiare për biznese të vogla dhe të mesme – me një
                kontabilist të dedikuar dhe një ofertë mujore fikse.
              </p>
              <div className="rise mt-9 flex flex-wrap gap-3 [animation-delay:240ms]">
                <a href="#kontakt" className="action">
                  Rezervo konsultë falas <span aria-hidden="true">→</span>
                </a>
                <a href="#sherbimet" className="action-ghost">
                  Shiko shërbimet
                </a>
              </div>
              <ul className="rise mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-wider text-ink/70 [animation-delay:320ms]">
                <li>Përgjigje brenda 1 dite pune</li>
                <li>Ofertë fikse mujore</li>
                <li>Në zyrë ose online</li>
              </ul>
            </div>

            <div className="rise relative [animation-delay:200ms]">
              <div className="absolute -right-24 -top-16 h-72 w-72 rounded-full bg-teal-soft/50 blur-3xl" aria-hidden="true" />
              <img
                src={cdn('/img/hero.png', 900)}
                srcSet={cdnSrcSet('/img/hero.png', [600, 900, 1200])}
                sizes="(min-width: 1024px) 44vw, 100vw"
                alt="Tavolinë pune në zyrën e kontabilitetit me libra llogarish, makinë llogaritëse dhe stilograf"
                width={1200}
                height={896}
                className="relative aspect-[4/3.4] w-full rounded-[2rem] object-cover shadow-[0_40px_80px_-40px_rgb(21_32_51/0.55)] lg:rotate-[1.2deg]"
                fetchPriority="high"
              />
              <div className="relative -mt-24 ml-4 w-[min(22rem,88%)] rounded-2xl border border-line bg-card/95 p-5 shadow-xl backdrop-blur sm:-ml-6 lg:-ml-14 lg:-rotate-[1.5deg]">
                <div className="flex items-baseline justify-between">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    Mbyllja e muajit
                  </p>
                  <p className="font-mono text-sm text-navy">5/5</p>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {closing.map((item, index) => (
                    <li key={item} className="flex items-center gap-3">
                      <span
                        className="tick grid h-5 w-5 shrink-0 place-items-center rounded-full bg-navy text-paper"
                        style={{ animationDelay: `${700 + index * 220}ms` }}
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3.5">
                          <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="sherbimet" aria-labelledby="sherbimet-heading" className="scroll-mt-24 border-t border-line bg-paper-2/60">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-28">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow">Shërbimet</p>
              <h2 id="sherbimet-heading" className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                Gjithçka që i duhet kontabilitetit të biznesit tuaj.
              </h2>
              <p className="mt-5 max-w-md text-lg text-muted">
                Zgjidhni një shërbim të vetëm ose lërini të gjitha në duart tona.
                Çdo shërbim ka një përgjegjës të qartë dhe afate të shkruara.
              </p>
            </div>
            <ol className="border-t border-ink/15">
              {services.map((service) => (
                <li key={service.slug} className="border-b border-ink/15">
                  <Link
                    to="/sherbimet/$serviceId"
                    params={{ serviceId: service.slug }}
                    className="group grid grid-cols-[3rem_1fr_auto] items-start gap-4 py-7 transition-colors hover:bg-card/70 sm:grid-cols-[4rem_1fr_auto] sm:px-4"
                  >
                    <span className="pt-1 font-mono text-sm text-teal">{service.number}</span>
                    <span>
                      <span className="block font-display text-2xl text-ink sm:text-3xl">{service.title}</span>
                      <span className="mt-2 block max-w-lg text-muted">{service.short}</span>
                    </span>
                    <span
                      className="mt-1 grid h-10 w-10 place-items-center rounded-full border border-ink/20 text-ink transition-all group-hover:translate-x-1 group-hover:border-navy group-hover:bg-navy group-hover:text-paper"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* About: mission, vision, values */}
        <section id="rreth-nesh" aria-labelledby="rreth-nesh-heading" className="scroll-mt-24 border-t border-line">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <p className="eyebrow">Rreth nesh</p>
                <h2 id="rreth-nesh-heading" className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                  {site.about.positioning.lead}{' '}
                  <em className="font-normal text-navy">{site.about.positioning.accent}</em>
                </h2>
              </div>
              <div className="space-y-12">
                <div className="grid gap-3 sm:grid-cols-[7rem_1fr] sm:gap-6">
                  <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-teal sm:pt-1.5">Misioni</h3>
                  <div className="space-y-4 text-lg leading-relaxed text-ink/85">
                    {site.about.mission.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                <div className="grid gap-3 border-t border-line pt-10 sm:grid-cols-[7rem_1fr] sm:gap-6">
                  <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-teal sm:pt-1.5">Vizioni</h3>
                  <p className="border-l-2 border-teal pl-5 font-display text-2xl italic leading-snug text-navy">
                    {site.about.vision}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Vlerat tona</h3>
              <ol className="ledger-lines mt-6 border-t border-ink/15">
                {site.about.values.map((value, index) => (
                  <li
                    key={value.title}
                    className="grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 gap-y-1 border-b border-ink/15 py-5 sm:grid-cols-[4rem_16rem_1fr] sm:px-4"
                  >
                    <span className="font-mono text-sm text-teal">{String(index + 1).padStart(2, '0')}</span>
                    <span className="font-display text-2xl text-ink">{value.title}</span>
                    <span className="col-start-2 text-muted sm:col-start-3">{value.description}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Promises */}
        <section aria-labelledby="pse-ne-heading" className="border-t border-line">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
            <figure className="relative order-2 lg:order-1">
              <img
                src={cdn('/img/office.png', 900)}
                srcSet={cdnSrcSet('/img/office.png', [600, 900, 1200])}
                sizes="(min-width: 1024px) 46vw, 100vw"
                alt="Dy kontabilistë shqyrtojnë dokumente bashkë me një klient në zyrë"
                width={1200}
                height={896}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-[2rem] object-cover"
              />
              <figcaption className="absolute -bottom-6 right-6 max-w-[15rem] rounded-xl bg-navy px-5 py-4 text-sm text-paper shadow-xl">
                <span className="font-display text-lg italic">“Shifrat flasin qartë</span>
                <br />
                kur dikush i mban në rregull.”
              </figcaption>
            </figure>
            <div className="order-1 lg:order-2">
              <p className="eyebrow">Pse {site.shortName}</p>
              <h2 id="pse-ne-heading" className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                Një zyrë e vogël, me përgjegjësi të madhe.
              </h2>
              <div className="ledger-lines mt-10 space-y-8">
                {site.promises.map((promise, index) => (
                  <div key={promise.title} className="grid grid-cols-[2.5rem_1fr] gap-4">
                    <span className="font-display text-3xl italic text-teal">{index + 1}.</span>
                    <div>
                      <h3 className="text-lg font-bold">{promise.title}</h3>
                      <p className="mt-1.5 leading-relaxed text-muted">{promise.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="si-punojme" aria-labelledby="si-punojme-heading" className="scroll-mt-24 bg-ink text-paper">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="eyebrow !text-teal-soft">Si punojmë</p>
                <h2 id="si-punojme-heading" className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                  Nga takimi i parë te raporti i parë mujor, në katër hapa.
                </h2>
              </div>
              <a href="#kontakt" className="link-underline font-semibold text-paper">
                Nis me hapin e parë →
              </a>
            </div>
            <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {site.steps.map((step, index) => (
                <li key={step.title} className="relative border-t border-paper/20 pt-8">
                  <span className="absolute -top-[5px] left-0 h-2.5 w-2.5 rounded-full bg-teal" aria-hidden="true" />
                  <p className="font-mono text-sm text-teal-soft">Hapi {String(index + 1).padStart(2, '0')}</p>
                  <h3 className="mt-3 font-display text-2xl">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-paper/70">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <PackageFinder onChoose={setPackageId} />

        {/* FAQ */}
        <section id="pyetje" aria-labelledby="pyetje-heading" className="scroll-mt-24 border-t border-line bg-paper-2/60">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-28">
            <div>
              <p className="eyebrow">Pyetje të shpeshta</p>
              <h2 id="pyetje-heading" className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                Ato që na pyesin më shpesh.
              </h2>
              <p className="mt-5 text-muted">
                Nuk e gjeni përgjigjen?{' '}
                <a href={site.contact.phoneHref} className="link-underline text-ink">
                  Na telefononi
                </a>
                ,{' '}
                <a
                  href={site.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-ink"
                >
                  shkruani në WhatsApp
                </a>{' '}
                ose{' '}
                <a href="#kontakt" className="link-underline text-ink">
                  plotësoni formularin
                </a>
                .
              </p>
            </div>
            <div className="border-t border-ink/15">
              {site.faq.map((item) => (
                <details key={item.q} className="group border-b border-ink/15">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-xl sm:text-2xl">
                    {item.q}
                    <span
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/20 font-sans text-lg transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-7 leading-relaxed text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <ConsultationForm
          serviceSlug={serviceSlug}
          onServiceChange={setServiceSlug}
          packageId={packageId}
          onPackageChange={setPackageId}
        />
      </main>
      <SiteFooter />
    </div>
  )
}
