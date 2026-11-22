import { createFileRoute, notFound } from '@tanstack/react-router'
import { findService } from '../../data/services'
import { site } from '../../data/site'
import { ServicePage } from '../../components/ServicePage'

export const Route = createFileRoute('/sherbimet/$serviceId')({
  loader: ({ params }) => {
    const service = findService(params.serviceId)
    if (!service) throw notFound()
    return service
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.title} | ${site.name}` },
            { name: 'description', content: loaderData.short },
            {
              property: 'og:title',
              content: `${loaderData.title} | ${site.name}`,
            },
            { property: 'og:description', content: loaderData.short },
          ],
        }
      : {},
  component: ServiceRoute,
})

function ServiceRoute() {
  const service = Route.useLoaderData()
  return <ServicePage key={service.slug} service={service} />
}
