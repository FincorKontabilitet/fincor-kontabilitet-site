
import { createFileRoute } from '@tanstack/react-router'

const articles = [
  {
    title: 'Rëndësia e kontabilitetit për biznesin',
    category: 'Kontabilitet',
    description: 'Pse menaxhimi i saktë financiar është thelbësor për çdo biznes.',
    date: '22 Nëntor 2026',
  },
  {
    title: 'Çfarë duhet të dini për fiskalizimin?',
    category: 'Fiskalizim',
    description: 'Një përmbledhje e rëndësisë së fiskalizimit për bizneset.',
    date: '22 Nëntor 2026',
  },
  {
    title: 'TVSH dhe detyrimet e biznesit',
    category: 'Tatime dhe TVSH',
    description: 'Njihuni me konceptet bazë të TVSH-së dhe administrimit të saj.',
    date: '22 Nëntor 2026',
  },
]

function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-900 px-6 py-20 text-center text-white">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
          FINCOR
        </p>
        <h1 className="text-4xl font-bold">Blogu FINCOR</h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Informacione, këshilla dhe përditësime për biznesin,
          kontabilitetin, tatimet dhe financat.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.title}
            className="rounded-xl border border-slate-200 p-6 shadow-sm"
          >
            <p className="text-sm font-semibold text-amber-600">
              {article.category}
            </p>
            <h2 className="mt-3 text-xl font-bold text-slate-900">
              {article.title}
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              {article.description}
            </p>
            <p className="mt-5 text-xs text-slate-400">{article.date}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export const Route = createFileRoute('/blog')({
  component: BlogPage,
})
