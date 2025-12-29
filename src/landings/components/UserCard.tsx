import cx from 'classnames'
import styles from './Landings.module.scss'
const { hoverShadowLarge } = styles

type Props = {
  user: {
    username: string
    description: string
  }
  href?: string
}
export const UserCard = ({ user, href }: Props) => {
  return (
    <a
      className={cx(
        'Box d-flex height-full color-shadow-medium no-underline color-fg-default p-4',
        hoverShadowLarge,
      )}
      href={href || `https://github.com/${user.username}`}
    >
      <div className="flex-shrink-0 mr-3">
        <img
          src={`https://github.com/${user.username}.png`}
          alt={user.username}
          className="avatar avatar-8 circle"
        />
      </div>
      <div className="flex-auto">
        <h3 className="wb-break-word">{user.username}</h3>
        <p className="mt-1 color-fg-muted">{user.description}</p>
      </div>
    </a>
  )
}
