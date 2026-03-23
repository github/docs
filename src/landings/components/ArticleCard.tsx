import { ArticleGuide } from '@/landings/components/ProductGuidesContext'
import { Link } from '@/frame/components/Link'

type Props = {
  card: ArticleGuide
  typeLabel: string
}

export const ArticleCard = ({ card, typeLabel }: Props) => {
  return (
    <li data-testid="article-card" className="d-flex col-12 col-md-4 pr-0 pr-md-6 pr-lg-8">
      <Link className="no-underline d-flex flex-column py-3 border-bottom" href={card.href}>
        <h3 className="h4 color-fg-default mb-1">{card.title}</h3>
        <div className="h6 text-uppercase" data-testid="article-card-type">
          {typeLabel}
        </div>
        <p className="color-fg-muted my-3">{card.intro}</p>
      </Link>
    </li>
  )
}
