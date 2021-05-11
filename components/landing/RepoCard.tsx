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
      className="Box d-flex height-full color-shadow-medium hover-shadow-large no-underline color-text-primary p-4"
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
        <h4>{repo.repo}</h4>
        <p className="mt-1 color-text-tertiary">{repo.description}</p>
      </div>
    </a>
  )
}
