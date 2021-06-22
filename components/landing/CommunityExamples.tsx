import { useState } from 'react'
import { ArrowRightIcon } from '@primer/octicons-react'

import { useProductLandingContext } from 'components/context/ProductLandingContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { RepoCard } from 'components/landing/RepoCard'

export const CommunityExamples = () => {
  const { productCommunityExamples } = useProductLandingContext()
  const { t } = useTranslation('product_landing')
  const [numVisible, setNumVisible] = useState(6)

  if (!productCommunityExamples) {
    return null
  }

  return (
    <div>
      <div className="d-flex flex-wrap gutter">
        {productCommunityExamples.slice(0, numVisible).map((repo) => {
          return (
            <div key={repo.repo} className="col-12 col-xl-4 col-lg-6 mb-4">
              <RepoCard repo={repo} />
            </div>
          )
        })}
      </div>
      {numVisible < productCommunityExamples.length && (
        <button
          className="btn btn-outline float-right"
          onClick={() => setNumVisible(productCommunityExamples.length)}
        >
          {t('show_more')} <ArrowRightIcon />
        </button>
      )}
    </div>
  )
}
