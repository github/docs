import { useRouter } from 'next/router'

import { Link } from 'components/Link'
import { ArrowRightIcon } from '@primer/octicons-react'
import { useMainContext } from 'components/context/MainContext'

import { useProductLandingContext } from 'components/context/ProductLandingContext'
import { GuideCard } from 'components/landing/GuideCard'

export const GuideCards = () => {
  const router = useRouter()
  const { currentCategory } = useMainContext()
  const { featuredLinks, hasGuidesPage } = useProductLandingContext()

  const routePath = `/${router.locale}${router.asPath.split('?')[0]}` // remove query string

  if (!featuredLinks.guideCards) {
    return null
  }

  return (
    <div>
      <div className="d-lg-flex flex-items-stretch">
        <ul className="d-flex flex-wrap gutter width-full">
          {(featuredLinks.guideCards || []).map((guide) => {
            return <GuideCard key={guide.href} guide={guide} />
          })}
        </ul>
      </div>

      {!currentCategory && hasGuidesPage && (
        <Link href={`${routePath}/guides`} className="btn btn-outline float-right">
          Explore guides <ArrowRightIcon />
        </Link>
      )}
    </div>
  )
}
