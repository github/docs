import cx from 'classnames'
import styles from './Landings.module.scss'
const { hoverShadowLarge } = styles

type Props = {
  repo: {
    repo: string
    description: string
  }
  href?: string
}
export const RepoCard = ({ repo, href }: Props) => {
  return (
    <a
      className={cx(
        'Box d-flex height-full color-shadow-medium no-underline color-fg-default p-4',
        hoverShadowLarge,
      )}
      href={href || `https://github.com/${repo.repo}`}
    >
      <div className="flex-shrink-0 mr-3">
        <img
          src={`https://github.com/${repo.repo.split('/')[0]}.png`}
          alt={repo.repo}
          className="avatar avatar-8"
        />
      </div>
      <div className="flex-auto">
        <h3 className="wb-break-word">{repo.repo}</h3>
        <p className="mt-1 color-fg-muted">{repo.description}</p>
      </div>
    </a>
  )
}
