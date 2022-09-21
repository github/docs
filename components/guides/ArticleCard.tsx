import { ArticleGuide } from 'components/context/ProductGuidesContext'
import { Label } from '@primer/react'

type Props = {
  card: ArticleGuide
  typeLabel: string
  tabIndex?: number
}

export const ArticleCard = ({ tabIndex, card, typeLabel }: Props) => {
  return (
    <li
      tabIndex={tabIndex}
      data-testid="article-card"
      className="d-flex col-12 col-md-4 pr-0 pr-md-6 pr-lg-8"
    >
      <a className="no-underline d-flex flex-column py-3 border-bottom" href={card.href}>
        <h3 className="h4 color-fg-default mb-1" dangerouslySetInnerHTML={{ __html: card.title }} />
        <div className="h6 text-uppercase" data-testid="article-card-type">
          {typeLabel}
        </div>
        <p className="color-fg-muted my-3" dangerouslySetInnerHTML={{ __html: card.intro }} />
        {card.topics.length > 0 && (
          <ul style={{ listStyleType: 'none' }}>
            {card.topics.map((topic) => {
              return (
                <li className="d-inline-block" key={topic}>
                  <Label
                    data-testid="article-card-topic"
                    size="small"
                    variant="accent"
                    sx={{ mr: 1 }}
                  >
                    {topic}
                  </Label>
                </li>
              )
            })}
          </ul>
        )}
      </a>
    </li>
  )
}
