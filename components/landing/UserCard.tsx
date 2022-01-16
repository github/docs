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
      className="Box d-flex height-full color-shadow-medium hover-shadow-large no-underline color-text-primary p-4"
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
        <h4>{user.username}</h4>
        <p className="mt-1 color-text-tertiary">{user.description}</p>
      </div>
    </a>
  )
}
