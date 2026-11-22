import { useState } from 'react'
import { packages, recommendPackage, type Package } from '../data/services'

export function PackageFinder({
  onChoose,
}: {
  onChoose: (id: Package['id']) => void
}) {
  const [isCompany, setIsCompany] = useState(false)
  const [invoices, setInvoices] = useState(25)
  const [employees, setEmployees] = useState(1)
  const recommended = recommendPackage({ invoices, employees, isCompany })

  return (
    <section id="paketat" aria-labelledby="paketat-heading" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">Paketat</p>
          <h2 id="paketat-heading" className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Gjeni paketën që i përshtatet biznesit tuaj.
          </h2>
          <p className="mt-5 text-lg text-muted">
            Lëvizni shiritat dhe shikoni cilën paketë rekomandojmë. Çmimi përcaktohet pas takimit njohës, si ofertë mujore fikse.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="ledger-lines rounded-2xl border border-line bg-card p-6 sm:p-8 lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Biznesi juaj</p>

            <div role="radiogroup" aria-label="Forma e biznesit" className="mt-5 grid grid-cols-2 rounded-full border border-line bg-paper p-1">
              {[
                { value: false, label: 'Person fizik' },
                { value: true, label: 'SHPK / SHA' },
              ].map((option) => (
                <button
                  key={option.label}
                  type="button"
                  role="radio"
                  aria-checked={isCompany === option.value}
                  onClick={() => setIsCompany(option.value)}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${isCompany === option.value ? 'bg-navy text-paper' : 'text-ink/70 hover:text-ink'}`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <div className="flex items-baseline justify-between">
                <label htmlFor="finder-invoices" className="text-sm font-semibold">
                  Fatura në muaj
                </label>
                <output htmlFor="finder-invoices" className="font-mono text-2xl text-navy">
                  {invoices >= 300 ? '300+' : invoices}
                </output>
              </div>
              <input
                id="finder-invoices"
                type="range"
                min={0}
                max={300}
                step={5}
                value={invoices}
                onChange={(event) => setInvoices(Number(event.target.value))}
                className="mt-3 w-full accent-navy"
              />
            </div>

            <div className="mt-7">
              <div className="flex items-baseline justify-between">
                <label htmlFor="finder-employees" className="text-sm font-semibold">
                  Punonjës
                </label>
                <output htmlFor="finder-employees" className="font-mono text-2xl text-navy">
                  {employees >= 40 ? '40+' : employees}
                </output>
              </div>
              <input
                id="finder-employees"
                type="range"
                min={0}
                max={40}
                step={1}
                value={employees}
                onChange={(event) => setEmployees(Number(event.target.value))}
                className="mt-3 w-full accent-navy"
              />
            </div>

            <p className="mt-8 border-t border-dashed border-line pt-6 text-sm text-muted" aria-live="polite">
              Rekomandimi ynë:{' '}
              <strong className="font-display text-xl text-ink">
                {packages.find((item) => item.id === recommended)?.name}
              </strong>
            </p>
          </div>

          <ol className="space-y-5">
            {packages.map((item) => {
              const active = item.id === recommended
              return (
                <li
                  key={item.id}
                  className={`relative rounded-2xl border p-6 transition-all duration-300 sm:p-8 ${active ? 'border-teal bg-card shadow-[0_20px_50px_-30px_rgb(11_122_116/0.6)]' : 'border-line bg-transparent opacity-80 hover:opacity-100'}`}
                >
                  {active && (
                    <span className="absolute -top-3 right-6 rounded-full bg-teal px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-paper">
                      Rekomandohet për ju
                    </span>
                  )}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-3xl">{item.name}</h3>
                      <p className="mt-1 text-muted">{item.lead}</p>
                    </div>
                    <p className="font-mono text-xs text-navy sm:text-right">{item.fits}</p>
                  </div>
                  <ul className="mt-6 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#kontakt"
                    onClick={() => onChoose(item.id)}
                    className={`mt-7 ${active ? 'action' : 'action-ghost'}`}
                  >
                    Kërko ofertë për {item.name}
                    <span aria-hidden="true">→</span>
                  </a>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
