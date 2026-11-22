import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import services, { type Service } from '../data/services'
import { ConsultationForm } from './ConsultationForm'
import { SiteFooter, SiteHeader } from './SiteChrome'

export function ServicePage({ service }: { service: Service }) {
  const [serviceSlug, setServiceSlug] = useState(service.slug)
  const [packageId, setPackageId] = useState('')
  const others = services.filter((item) => item.slug !== service.slug)

  return (
    <div className="grain">
      <SiteHeader />
      <main>
        <section className="border-b border-line">
          <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 lg:pb-24 lg:pt-14">
            <Link to="/" hash="sherbimet" className="link-underline text-sm font-semibold">
              ← Të gjitha shërbimet
            </Link>
            <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="eyebrow rise">Shërbimi {service.number}</p>
                <h1 className="rise mt-5 font-display text-5xl leading-[1.04] tracking-tight [animation-delay:80ms] sm:text-6xl lg:text-7xl">
                  {service.title}
                </h1>
                <p className="rise mt-7 max-w-2xl text-lg leading-relaxed text-muted [animation-delay:160ms]">
                  {service.description}
                </p>
                <a href="#kontakt" className="rise action mt-9 [animation-delay:240ms]">
                  Kërko ofertë për këtë shërbim <span aria-hidden="true">→</span>
                </a>
              </div>
              <aside className="rise ledger-lines self-start rounded-2xl border border-line bg-card p-6 [animation-delay:200ms] sm:p-8">
                <dl className="space-y-6">
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Për kë është</dt>
                    <dd className="mt-1.5 font-display text-xl">{service.forWho}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Ritmi</dt>
                    <dd className="mt-1.5 font-display text-xl">{service.rhythm}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Çmimi</dt>
                    <dd className="mt-1.5 font-display text-xl">Ofertë fikse pas takimit njohës</dd>
                  </div>
                </dl>
              </aside>
            </div>
          </div>
        </section>

        <section aria-labelledby="perfshin-heading" className="bg-paper-2/60">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 id="perfshin-heading" className="font-display text-4xl">
              Çfarë përfshin
            </h2>
            <ul className="border-t border-ink/15">
              {service.includes.map((item, index) => (
                <li key={item} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-ink/15 py-5 text-lg">
                  <span className="font-mono text-sm leading-7 text-teal">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="te-tjera-heading" className="border-t border-line">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <h2 id="te-tjera-heading" className="font-display text-3xl">
              Shërbime të tjera
            </h2>
            <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4">
              {others.map((item) => (
                <Link
                  key={item.slug}
                  to="/sherbimet/$serviceId"
                  params={{ serviceId: item.slug }}
                  className="group w-72 shrink-0 snap-start rounded-2xl border border-line bg-card p-6 transition-all hover:-translate-y-1 hover:border-navy"
                >
                  <span className="font-mono text-sm text-teal">{item.number}</span>
                  <span className="mt-3 block font-display text-2xl">{item.title}</span>
                  <span className="mt-2 block text-sm text-muted">{item.short}</span>
                  <span className="mt-5 inline-block text-sm font-semibold text-navy transition-transform group-hover:translate-x-1">
                    Lexo më shumë →
                  </span>
                </Link>
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
