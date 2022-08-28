import { useEffect, useState } from 'react'

import {
  ArticleGuide,
  useProductSubLandingContext,
} from 'components/context/ProductSubLandingContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { ArticleCard } from './ArticleCard'

const PAGE_SIZE = 9
export const ArticleCards = () => {
  const { t } = useTranslation('product_sublanding')
  const guideTypes: Record<string, string> = t('guide_types')
  const { allTopics, includeGuides } = useProductSubLandingContext()
  const [numVisible, setNumVisible] = useState(PAGE_SIZE)
  const [typeFilter, setTypeFilter] = useState('')
  const [topicFilter, setTopicFilter] = useState('')
  const [filteredResults, setFilteredResults] = useState<Array<ArticleGuide>>([])

  useEffect(() => {
    setNumVisible(PAGE_SIZE)
    setFilteredResults(
      (includeGuides || []).filter((card) => {
        const matchesType = card.type === typeFilter
        const matchesTopic = card.topics.some((key) => key === topicFilter)
        return (typeFilter ? matchesType : true) && (topicFilter ? matchesTopic : true)
      })
    )
  }, [typeFilter, topicFilter])

  const isUserFiltering = typeFilter !== '' || topicFilter !== ''
  const onChangeTypeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeFilter(e.target.value)
  }
  const onChangeTopicFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTopicFilter(e.target.value)
  }

  const guides = isUserFiltering ? filteredResults : includeGuides || []

  return (
    <div>
      <form className="mt-2 mb-5 d-flex d-flex">
        <div>
          <label htmlFor="type" className="text-uppercase f6 color-text-secondary d-block">
            {t('filters.type')}
          </label>
          <select
            value={typeFilter}
            className="form-select f4 text-bold border-0 rounded-0 border-top box-shadow-none pl-0"
            name="type"
            aria-label="guide types"
            data-testid="card-filter-dropdown"
            onChange={onChangeTypeFilter}
          >
            <option value="">{t('filters.all')}</option>
            {Object.entries(guideTypes).map(([key, val]) => {
              return (
                <option key={key} value={key}>
                  {val}
                </option>
              )
            })}
          </select>
        </div>
        <div className="mx-4">
          <label htmlFor="topic" className="text-uppercase f6 color-text-secondary d-block">
            {t('filters.topic')}
          </label>
          <select
            value={topicFilter}
            className="form-select f4 text-bold border-0 rounded-0 border-top box-shadow-none pl-0"
            name="topics"
            data-testid="card-filter-dropdown"
            aria-label="guide topics"
            onChange={onChangeTopicFilter}
          >
            <option value="">{t('filters.all')}</option>
            {allTopics?.map((topic) => {
              return (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              )
            })}
          </select>
        </div>
      </form>

      <div className="d-flex flex-wrap mr-0 mr-md-n6 mr-lg-n8">
        {guides.slice(0, numVisible).map((card) => {
          return <ArticleCard key={card.href} card={card} typeLabel={guideTypes[card.type]} />
        })}
      </div>

      {guides.length > numVisible && (
        <button
          className="col-12 mt-5 text-center text-bold color-text-link btn-link"
          onClick={() => setNumVisible(numVisible + PAGE_SIZE)}
        >
          {t('load_more')}
        </button>
      )}

      {guides.length === 0 && (
        <div className="py-4 text-center color-text-secondary">
          <h4 className="text-normal">{t('no_result')}</h4>
        </div>
      )}
    </div>
  )
}
