import React, { useEffect, useRef, useState } from 'react'

import { ArticleGuide, useProductGuidesContext } from 'components/context/ProductGuidesContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { ArticleCard } from './ArticleCard'
import { ActionList, ActionMenu } from '@primer/react'
import { ItemInput } from '@primer/react/lib/deprecated/ActionList/List'

const PAGE_SIZE = 9
export const ArticleCards = () => {
  const { t } = useTranslation('product_guides')
  const guideTypes: Record<string, string> = t('guide_types')
  const { allTopics, includeGuides } = useProductGuidesContext()
  const [numVisible, setNumVisible] = useState(PAGE_SIZE)
  const [typeFilter, setTypeFilter] = useState<ItemInput | undefined>()
  const [topicFilter, setTopicFilter] = useState<ItemInput | undefined>()
  const [filteredResults, setFilteredResults] = useState<Array<ArticleGuide>>([])
  const typesRef = useRef<HTMLDivElement>(null)
  const topicsRef = useRef<HTMLDivElement>(null)
  const articleCardRef = useRef<HTMLUListElement>(null)

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

  const clickDropdown = (e: React.RefObject<HTMLDivElement>) => {
    if (e === typesRef && typesRef.current) typesRef.current.focus()
    if (e === topicsRef && topicsRef.current) topicsRef.current.focus()
  }

  const loadMore = () => {
    if (articleCardRef.current) {
      const childListLength = articleCardRef.current.childElementCount
      // Leading semi-colon due to prettier to prevent possible ASI failures
      // Need to explicitly type assert as HTMLDivElement as focus property missing from dom type definitions for Element.
      ;(articleCardRef.current.childNodes.item(childListLength - 1) as HTMLDivElement).focus()
    }
    setNumVisible(numVisible + PAGE_SIZE)
  }

  const isUserFiltering = typeFilter !== undefined || topicFilter !== undefined

  const guides = isUserFiltering ? filteredResults : includeGuides || []

  const types = Object.entries(guideTypes).map(([key, val]) => {
    return { text: val, key }
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
          <div
            onClick={() => clickDropdown(typesRef)}
            onKeyDown={() => clickDropdown(typesRef)}
            role="button"
            tabIndex={-1}
            className="text-uppercase f6 color-fg-muted d-block"
          >
            {t('filters.type')}
          </div>
          <ActionMenu anchorRef={typesRef}>
            <ActionMenu.Button>{typeFilter ? typeFilter.text : t('filters.all')}</ActionMenu.Button>
            <ActionMenu.Overlay aria-label="types" data-testid="types-dropdown">
              <ActionList selectionVariant="single">
                {types.map((type) => {
                  return (
                    <ActionList.Item onSelect={() => setTypeFilter(type)} key={type.text}>
                      {type.text}
                    </ActionList.Item>
                  )
                })}
              </ActionList>
            </ActionMenu.Overlay>
          </ActionMenu>
        </div>

        <div data-testid="card-filter-topics" className="mx-4">
          <div
            onClick={() => clickDropdown(topicsRef)}
            onKeyDown={() => clickDropdown(topicsRef)}
            role="button"
            tabIndex={-1}
            className="text-uppercase f6 color-fg-muted d-block"
          >
            {t('filters.topic')}
          </div>
          <ActionMenu anchorRef={topicsRef}>
            <ActionMenu.Button>
              {topicFilter ? topicFilter.text : t('filters.all')}
            </ActionMenu.Button>
            <ActionMenu.Overlay aria-label="topics" data-testid="topics-dropdown">
              <ActionList selectionVariant="single">
                {topics.map((topic) => {
                  return (
                    <ActionList.Item onSelect={() => setTopicFilter(topic)} key={topic.text}>
                      {topic.text}
                    </ActionList.Item>
                  )
                })}
              </ActionList>
            </ActionMenu.Overlay>
          </ActionMenu>
        </div>
      </form>

      <div role="status" className="color-fg-muted">
        {guides.length === 0
          ? t('guides_found.none')
          : guides.length === 1
          ? t('guides_found.one')
          : t('guides_found.multiple').replace('{n}', guides.length)}
      </div>

      <ul ref={articleCardRef} className="d-flex flex-wrap mr-0 mr-md-n6 mr-lg-n8">
        {guides.slice(0, numVisible).map((card) => {
          return (
            <ArticleCard
              tabIndex={-1}
              key={card.href}
              card={card}
              typeLabel={guideTypes[card.type]}
            />
          )
        })}
      </ul>

      {guides.length > numVisible && (
        <button
          className="col-12 mt-5 text-center text-bold color-fg-accent btn-link"
          onClick={loadMore}
        >
          {t('load_more')}
        </button>
      )}
    </div>
  )
}
