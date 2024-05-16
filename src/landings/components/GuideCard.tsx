import type { FeaturedLink } from 'src/landings/components/ProductLandingContext'
import cx from 'classnames'
import styles from './Landings.module.scss'

const { hoverShadowLarge } = styles

type Props = {
  guide: FeaturedLink
}
export const GuideCard = ({ guide }: Props) => {
  const authors = guide.authors && guide.authors.length > 0 ? guide.authors : ['GitHub']
  const authorString = `@${authors.join(', @')}`

  return (
    <li className="col-lg-4 col-12 mb-4 list-style-none">
      <a
        className={cx(
          'Box color-shadow-medium height-full d-block no-underline color-fg-default p-5',
          hoverShadowLarge,
        )}
        href={guide.href}
      >
        <h3 className="f2">{guide.title}</h3>
        <p className="mt-2 mb-4 color-fg-muted">{guide.intro || ''}</p>

        <footer className="d-flex">
          <div>{authorString}</div>
        </footer>
      </a>
    </li>
  )
}
