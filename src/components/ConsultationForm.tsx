import { useEffect, useRef, useState, type FormEvent } from 'react'
import services, { packages } from '../data/services'
import { consultationForm, site } from '../data/site'

type Submission = { status: 'idle' | 'pending' | 'error' | 'success' }

export function ConsultationForm({
  serviceSlug,
  onServiceChange,
  packageId,
  onPackageChange,
}: {
  serviceSlug: string
  onServiceChange: (slug: string) => void
  packageId: string
  onPackageChange: (id: string) => void
}) {
  const [submission, setSubmission] = useState<Submission>({ status: 'idle' })
  const submitting = useRef(false)
  const service = services.find((item) => item.slug === serviceSlug)

  useEffect(() => {
    if (!submitting.current) setSubmission({ status: 'idle' })
  }, [serviceSlug, packageId])

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting.current || submission.status === 'success') return
    const body = new URLSearchParams()
    new FormData(event.currentTarget).forEach((value, key) =>
      body.append(key, String(value)),
    )
    submitting.current = true
    setSubmission({ status: 'pending' })
    try {
      const response = await fetch(consultationForm.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok || /\bdata-netlify\s*=/i.test(await response.text()))
        throw new Error('Kërkesa nuk u pranua')
      setSubmission({ status: 'success' })
    } catch {
      setSubmission({ status: 'error' })
    } finally {
      submitting.current = false
    }
  }

  const locked =
    submission.status === 'pending' || submission.status === 'success'

  return (
    <section
      id="kontakt"
      tabIndex={-1}
      aria-labelledby="kontakt-heading"
      className="scroll-mt-24 bg-navy text-paper"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-28">
        <div>
          <p className="eyebrow !text-teal-soft">Kontakt</p>
          <h2
            id="kontakt-heading"
            className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl"
          >
            Rezervoni një takim njohës, <em className="text-teal-soft">falas</em>.
          </h2>
          <p className="mt-6 max-w-md text-lg text-paper/75">
            Plotësoni formularin dhe ju kontaktojmë brenda një dite pune për të
            caktuar takimin – në zyrë ose online.
          </p>
          <dl className="mt-10 space-y-6 border-t border-paper/15 pt-8 text-paper/85">
            <div>
              <dt className="eyebrow !text-paper/50">Adresa</dt>
              <dd className="mt-1">
                {site.contact.address}
                <br />
                {site.contact.city}
              </dd>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="eyebrow !text-paper/50">Telefon</dt>
                <dd className="mt-1">
                  <a href={site.contact.phoneHref} className="link-underline">
                    {site.contact.phone}
                  </a>
                </dd>
                <dd className="mt-2">
                  <a
                    href={site.contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-teal-soft hover:text-paper"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19.1L4 20z" strokeLinejoin="round" />
                    </svg>
                    Shkruani në WhatsApp
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow !text-paper/50">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="link-underline [overflow-wrap:anywhere]"
                  >
                    {site.contact.email}
                  </a>
                </dd>
              </div>
            </div>
            <div>
              <dt className="eyebrow !text-paper/50">Orari</dt>
              {site.contact.hours.map((row) => (
                <dd key={row.days} className="mt-1 flex justify-between gap-4 sm:max-w-sm">
                  <span>{row.days}</span>
                  <span className="font-mono text-sm">{row.time}</span>
                </dd>
              ))}
            </div>
          </dl>
        </div>

        <form
          name={consultationForm.name}
          method="POST"
          action={consultationForm.endpoint}
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={submit}
          aria-busy={submission.status === 'pending'}
          onChange={() => {
            if (!submitting.current && submission.status === 'error')
              setSubmission({ status: 'idle' })
          }}
          className="rounded-2xl bg-paper p-6 text-ink shadow-[0_30px_80px_-30px_rgb(0_0_0/0.5)] sm:p-10"
        >
          <input type="hidden" name="form-name" value={consultationForm.name} />
          <input
            type="hidden"
            name="subject"
            value={`Kërkesë për konsultë: ${service?.title ?? 'E përgjithshme'}`}
          />
          <p hidden>
            <label>
              Lëreni bosh
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          {submission.status === 'success' ? (
            <div role="status" className="flex min-h-[420px] flex-col items-start justify-center">
              <span className="tick grid h-14 w-14 place-items-center rounded-full bg-navy text-paper">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="mt-6 font-display text-3xl">Faleminderit!</h3>
              <p className="mt-3 max-w-md text-muted">
                Kërkesa juaj u pranua. Një nga kontabilistët tanë do t’ju
                kontaktojë brenda një dite pune për të caktuar takimin.
              </p>
              <button
                type="button"
                className="mt-8 link-underline font-semibold"
                onClick={() => setSubmission({ status: 'idle' })}
              >
                Dërgo një kërkesë tjetër
              </button>
            </div>
          ) : (
            <fieldset disabled={locked} className="grid gap-5 sm:grid-cols-2">
              <legend className="sr-only">Kërkesa juaj për konsultë</legend>
              <div>
                <label htmlFor="k-name" className="form-label">
                  Emri dhe mbiemri
                </label>
                <input
                  id="k-name"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="k-company" className="form-label">
                  Biznesi <span className="font-normal text-muted">(opsionale)</span>
                </label>
                <input
                  id="k-company"
                  name="company"
                  autoComplete="organization"
                  maxLength={120}
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="k-email" className="form-label">
                  Email
                </label>
                <input
                  id="k-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="k-phone" className="form-label">
                  Telefon
                </label>
                <input
                  id="k-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  maxLength={30}
                  placeholder="+355 6X XXX XXXX"
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="k-service" className="form-label">
                  Shërbimi
                </label>
                <select
                  id="k-service"
                  name="service"
                  value={serviceSlug}
                  onChange={(event) => onServiceChange(event.target.value)}
                  className="form-input"
                >
                  <option value="">Nuk jam i sigurt ende</option>
                  {services.map((item) => (
                    <option key={item.slug} value={item.slug}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="k-package" className="form-label">
                  Paketa
                </label>
                <select
                  id="k-package"
                  name="package"
                  value={packageId}
                  onChange={(event) => onPackageChange(event.target.value)}
                  className="form-input"
                >
                  <option value="">Pa preferencë</option>
                  {packages.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="k-message" className="form-label">
                  Na tregoni shkurt për biznesin tuaj
                </label>
                <textarea
                  id="k-message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={4}
                  placeholder="P.sh. SHPK në tregti, rreth 60 fatura në muaj, 4 punonjës."
                  className="form-input resize-y"
                />
              </div>
              <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                <button type="submit" className="action">
                  {submission.status === 'pending'
                    ? 'Duke dërguar…'
                    : 'Dërgo kërkesën'}
                  <span aria-hidden="true">→</span>
                </button>
                <p className="text-sm text-muted">
                  Të dhënat tuaja përdoren vetëm për t’ju kontaktuar.
                </p>
              </div>
            </fieldset>
          )}
          <p role="status" className="sr-only">
            {submission.status === 'pending' ? 'Duke dërguar kërkesën…' : ''}
          </p>
          {submission.status === 'error' && (
            <p
              role="alert"
              className="mt-5 rounded-md border border-teal/40 bg-teal/10 px-4 py-3 text-sm"
            >
              Nuk arritëm ta konfirmojmë dërgimin. Të dhënat tuaja janë ende këtu
              – provoni sërish, na telefononi në {site.contact.phone} ose{' '}
              <a
                href={site.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                na shkruani në WhatsApp
              </a>
              .
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
