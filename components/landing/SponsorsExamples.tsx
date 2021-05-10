import Link from 'next/link'
import { ArrowRightIcon } from '@primer/octicons-react'

import { useProductLandingContext } from 'components/context/ProductLandingContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { UserCard } from 'components/UserCard'

export const SponsorsExamples = () => {
  const { productUserExamples } = useProductLandingContext()
  const { t } = useTranslation('product_landing')

  if (!productUserExamples) {
    return null
  }

  return (
    <div>
      <div className="d-flex flex-wrap gutter">
        {productUserExamples.map((user, i) => {
          if (i > 5) {
            return null
          }
          return (
            <div
              key={user.username}
              className="col-12 col-xl-4 col-lg-6 mb-4 js-filter-card"
              data-repo={user.username}
              data-description={user.description}
            >
              <UserCard href={`https://github.com/sponsors/${user.username}`} user={user} />
            </div>
          )
        })}
      </div>
      <Link href={`https://github.com/sponsors/community`}>
        <a className="btn btn-outline float-right">
          {t('explore_people_and_projects')} <ArrowRightIcon />
        </a>
      </Link>
    </div>
  )
}
