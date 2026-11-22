import { Link } from '@tanstack/react-router'

export function NotFoundPage() {
  return (
    <main className="ledger-lines grid min-h-screen place-items-center px-5">
      <div className="max-w-lg text-center">
        <p className="font-mono text-sm text-teal">Gabim 404</p>
        <h1 className="mt-4 font-display text-5xl">Kjo faqe nuk u gjet.</h1>
        <p className="mt-5 text-muted">
          Faqja ose shërbimi që kërkoni nuk ekziston, ose është zhvendosur.
        </p>
        <Link to="/" className="action mt-8">
          Kthehu në ballinë
        </Link>
      </div>
    </main>
  )
}
