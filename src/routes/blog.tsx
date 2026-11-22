
import { createFileRoute } from '@tanstack/react-router'
import { blogArticles } from '../data/blog'

function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="bg-slate-900 px-6 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Blogu FINCOR</h1>
        <p className="mt-4 text-slate-300">
          Informacione dhe këshilla për biznesin, financat dhe kontabilitetin.
        </p>
      </header>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-3">
        {blogArticles.length === 0 ? (
          <p className="col-span-full text-center text-slate-600">
            Artikujt e rinj do të publikohen së shpejti.
          </p>
        ) : (
          blogArticles.map((article, index) => (
            <article key={index} className="rounded-xl border p-6 shadow-sm">
              {article.title}
            </article>
          ))
        )}
      </section>
    </main>
  )
}

export const Route = createFileRoute('/blog')({
  component: BlogPage,
})
