import React, { useRef } from 'react'

import { useProductGuidesContext } from 'src/landings/components/ProductGuidesContext'
import { useTranslation } from 'src/languages/components/useTranslation'
import { ArticleCard } from './ArticleCard'
import { ItemInput } from '@primer/react/lib/deprecated/ActionList/List'

export const ArticleCards = () => {
  const { t } = useTranslation('product_guides')
  const guideTypes: Record<string, string> = t('guide_types')
  const { allTopics, includeGuides } = useProductGuidesContext()
  const articleCardRef = useRef<HTMLUListElement>(null)

  const guides = includeGuides || []

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
      <div data-search="hide">
        <div role="status" className="color-fg-muted">
          {guides.length === 0
            ? t('guides_found.none')
            : guides.length === 1
            ? t('guides_found.one')
            : t('guides_found.multiple').replace('{n}', guides.length)}
        </div>
      </div>

      <ul
        data-testid="article-cards"
        ref={articleCardRef}
        className="d-flex flex-wrap mr-0 mr-md-n6 mr-lg-n8"
      >
        {guides.map((card, i) => {
          return (
            <ArticleCard
              tabIndex={-1}
              key={card.href + i}
              card={card}
              typeLabel={guideTypes[card.type]}
            />
          )
        })}
      </ul>
    </div>
  )
}
