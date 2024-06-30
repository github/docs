import React, { useRef } from 'react'

import { useProductGuidesContext } from 'src/landings/components/ProductGuidesContext'
import { useTranslation } from 'src/languages/components/useTranslation'
import { ArticleCard } from './ArticleCard'

export const ArticleCards = () => {
  const { t, tObject } = useTranslation('product_guides')
  const guideTypes = tObject('guide_types')
  const { includeGuides } = useProductGuidesContext()
  const articleCardRef = useRef<HTMLUListElement>(null)

  const guides = includeGuides || []

  return (
    <div>
      <div data-search="hide">
        <div role="status" className="color-fg-muted">
          {guides.length === 0
            ? t('guides_found.none')
            : guides.length === 1
              ? t('guides_found.one')
              : t('guides_found.multiple').replace('{n}', `${guides.length}`)}
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
              typeLabel={guideTypes[card.type] as string}
            />
          )
        })}
      </ul>
    </div>
  )
}
