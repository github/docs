import { ArticleGuide } from 'components/context/ProductSubLandingContext'

type Props = {
  card: ArticleGuide
  typeLabel: string
}

export const ArticleCard = ({ card, typeLabel }: Props) => {
  return (
    <div className="d-flex col-12 col-md-4 pr-0 pr-md-6 pr-lg-8">
      <a className="no-underline d-flex flex-column py-3 border-bottom" href={card.href}>
        <h4 className="h4 color-text-primary mb-1">{card.title}</h4>
        <div className="h6 text-uppercase">{typeLabel}</div>
        <p className="color-text-secondary my-3">{card.intro}</p>
        {card.topics.length > 0 && (
          <div>
            {card.topics.map((topic) => {
              return (
                <span
                  key={topic}
                  className="IssueLabel bg-gradient--pink-blue color-text-inverse mr-1"
                >
                  {topic}
                </span>
              )
            })}
          </div>
        )}
      </a>
    </div>
  )
}
