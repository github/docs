import React, { useEffect, useState } from 'react'

import { ArticleGuide, useProductGuidesContext } from 'components/context/ProductGuidesContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { ArticleCard } from './ArticleCard'
import { DropdownMenu } from '@primer/components'
import { ItemInput } from '@primer/components/lib/ActionList/List'

const PAGE_SIZE = 9
export const ArticleCards = () => {
  const { t } = useTranslation('product_guides')
  const guideTypes: Record<string, string> = t('guide_types')
  const { allTopics, includeGuides } = useProductGuidesContext()
  const [numVisible, setNumVisible] = useState(PAGE_SIZE)
  const [typeFilter, setTypeFilter] = useState<ItemInput | undefined>()
  const [topicFilter, setTopicFilter] = useState<ItemInput | undefined>()
  const [filteredResults, setFilteredResults] = useState<Array<ArticleGuide>>([])

  useEffect(() => {
    setNumVisible(PAGE_SIZE)
    setFilteredResults(
      (includeGuides || []).filter((card) => {
        const matchesType = card.type === typeFilter?.key
        const matchesTopic = card.topics.some((key) => key === topicFilter?.key)
        return (typeFilter?.key ? matchesType : true) && (topicFilter?.key ? matchesTopic : true)
      })
    )
  }, [typeFilter, topicFilter])

  const isUserFiltering = typeFilter !== undefined || topicFilter !== undefined

  const guides = isUserFiltering ? filteredResults : includeGuides || []

  const types = Object.entries(guideTypes).map(([key, val]) => {
    return { text: val, key: key }
  }) as ItemInput[]

  types.unshift({ text: t('filters.all'), key: undefined })

  const topics = allTopics?.map((topic) => {
    return { text: topic, key: topic }
  }) as ItemInput[]

  topics.unshift({ text: t('filters.all'), key: undefined })

  return (
    <div>
      <label htmlFor="guide-filter-form">{t('filter_instructions')}</label>
      <form name="guide-filter-form" className="mt-2 mb-5 d-flex d-flex">
        <div data-testid="card-filter-types">
          <label htmlFor="type" className="text-uppercase f6 color-fg-muted d-block">
            {t('filters.type')}
          </label>
          <DropdownMenu
            aria-label="guide types"
            data-testid="types-dropdown"
            placeholder={t('filters.all')}
            items={types}
            selectedItem={typeFilter}
            onChange={setTypeFilter}
          />
        </div>

        <div data-testid="card-filter-topics" className="mx-4">
          <label htmlFor="topic" className="text-uppercase f6 color-fg-muted d-block">
            {t('filters.topic')}
          </label>
          <DropdownMenu
            aria-label="guide topics"
            data-testid="topics-dropdown"
            placeholder={t('filters.all')}
            items={topics}
            selectedItem={topicFilter}
            onChange={setTopicFilter}
          />
        </div>
      </form>

      <div role="status" className="color-fg-muted">
        {guides.length === 0
          ? t('guides_found.none')
          : guides.length === 1
          ? t('guides_found.one')
          : t('guides_found.multiple').replace('{n}', guides.length)}
      </div>

      <div className="d-flex flex-wrap mr-0 mr-md-n6 mr-lg-n8">
        {guides.slice(0, numVisible).map((card) => {
          return <ArticleCard key={card.href} card={card} typeLabel={guideTypes[card.type]} />
        })}
      </div>

      {guides.length > numVisible && (
        <button
          className="col-12 mt-5 text-center text-bold color-fg-accent btn-link"
          onClick={() => setNumVisible(numVisible + PAGE_SIZE)}
        >
          {t('load_more')}
        </button>
      )}
    </div>
  )
}
