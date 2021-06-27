import type { FeaturedLink } from 'components/context/ProductLandingContext'

type Props = {
  guide: FeaturedLink
}
export const GuideCard = ({ guide }: Props) => {
  const authors = guide.authors && guide.authors.length > 0 ? guide.authors : ['GitHub']
  const authorString = `@${authors.join(', @')}`

  return (
    <div className="col-lg-4 col-12 mb-4">
      <a
        className="Box color-shadow-medium height-full d-block hover-shadow-large no-underline color-text-primary p-5"
        href={guide.href}
      >
        <h2>{guide.title}</h2>
        <p className="mt-2 mb-4 color-text-tertiary">{guide.intro}</p>

        <footer className="d-flex">
          <div className="mr-1">
            {authors.length === 1 ? (
              <img
                className="avatar avatar-2 circle mr-1"
                src={`https://github.com/${authors[0]}.png`}
                alt={`@${authors[0]}`}
              />
            ) : (
              <div className="AvatarStack AvatarStack--three-plus">
                <div
                  className="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1"
                  aria-label={authorString}
                >
                  {authors.map((author) => {
                    return (
                      <img
                        className="avatar circle"
                        alt={`@${author}`}
                        src={`https://github.com/${author}.png`}
                      />
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          <div>{authorString}</div>
        </footer>
      </a>
    </div>
  )
}
