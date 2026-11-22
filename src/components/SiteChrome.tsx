import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { site } from '../data/site'
import services from '../data/services'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label={`${site.name} – ballina`}>
      <span
        className={`grid h-10 w-10 place-items-center rounded-full border-2 font-display text-xl italic ${light ? 'border-paper text-paper' : 'border-navy text-navy'} transition-transform group-hover:rotate-[-8deg]`}
        aria-hidden="true"
      >
        f
      </span>
      <span className="leading-none">
        <span className={`block font-display text-xl font-semibold ${light ? 'text-paper' : 'text-ink'}`}>
          {site.shortName}
        </span>
        <span className={`mt-1 block font-mono text-[10px] uppercase tracking-[0.22em] ${light ? 'text-paper/60' : 'text-muted'}`}>
          Kontabilitet
        </span>
      </span>
    </Link>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Logo />
        <nav aria-label="Navigimi kryesor" className="hidden items-center gap-7 lg:flex xl:gap-8">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-teal"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={site.contact.phoneHref} className="hidden font-mono text-sm text-ink/80 hover:text-teal md:inline lg:hidden xl:inline">
            {site.contact.phone}
          </a>
          <a href="/#kontakt" className="action !px-5 !py-2.5 text-sm">
            Rezervo konsultë
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Mbyll menunë' : 'Hap menunë'}
            onClick={() => setOpen((value) => !value)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav id="menu-mobile" aria-label="Navigimi në celular" className="border-t border-line bg-paper px-5 pb-6 lg:hidden">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line/70 py-4 font-display text-2xl"
            >
              {item.label}
            </a>
          ))}
          <a href={site.contact.phoneHref} className="mt-4 block font-mono text-sm">
            {site.contact.phone}
          </a>
          <a
            href={site.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-sm font-semibold text-teal"
          >
            Na shkruani në WhatsApp
          </a>
        </nav>
      )}
    </header>
  )
}

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-paper/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">{site.tagline}. {site.about.positioning.lead} {site.about.positioning.accent}</p>
        </div>
        <div>
          <p className="eyebrow !text-paper/45">Shërbimet</p>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to="/sherbimet/$serviceId"
                  params={{ serviceId: service.slug }}
                  className="hover:text-paper"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow !text-paper/45">Na gjeni</p>
          <address className="mt-4 space-y-2 text-sm not-italic">
            <p>
              {site.contact.address}
              <br />
              {site.contact.city}
            </p>
            <p>
              <a href={site.contact.phoneHref} className="hover:text-paper">
                {site.contact.phone}
              </a>
            </p>
            <p>
              <a
                href={site.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper"
              >
                WhatsApp
              </a>
            </p>
            <p>
              <a href={`mailto:${site.contact.email}`} className="[overflow-wrap:anywhere] hover:text-paper">
                {site.contact.email}
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <p className="mx-auto max-w-7xl px-5 py-6 font-mono text-xs sm:px-8">
          © {year} {site.name}. Të gjitha të drejtat e rezervuara.
        </p>
      </div>
    </footer>
  )
}
