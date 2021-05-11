import { useState } from 'react'
import { ArrowRightIcon } from '@primer/octicons-react'

import { useProductLandingContext } from 'components/context/ProductLandingContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { RepoCard } from 'components/RepoCard'

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
        {productCommunityExamples.slice(0, numVisible).map((repo, i) => {
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
      {/* <div className="js-filter-card-no-results d-none py-4 text-center color-text-secondary font-mktg">
        <div className="mb-3">
          <SearchIcon size={24} />{' '}
        </div>
        <h3 className="text-normal">
          {t('sorry')} <strong className="js-filter-card-value"></strong>
        </h3>
        <p className="my-3 f4">
          {t('no_example')} <br /> {t('try_another')}
        </p>
        <a href="https://github.com/github/docs/blob/main/data/variables/discussions_community_examples.yml">
          {t('add_your_community')} <ArrowRightIcon />
        </a>
      </div> */}
    </div>
  )
}
