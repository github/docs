import { RepoIcon } from '@primer/octicons-react'
import { CodeExample } from 'components/context/ProductLandingContext'

type Props = {
  example: CodeExample
}
export const CodeExampleCard = ({ example }: Props) => {
  return (
    <a
      className="Box d-flex flex-column flex-justify-between height-full color-shadow-medium hover-shadow-large no-underline color-text-primary"
      href={`https://github.com/${example.href}`}
    >
      <div className="p-4">
        <h4>{example.title}</h4>
        <p className="mt-2 mb-4 color-text-tertiary">{example.description}</p>
        <div className="d-flex flex-wrap">
          {example.tags.map((tag) => {
            return (
              <span
                key={tag}
                className="IssueLabel color-text-inverse color-bg-info-inverse mr-2 mb-1"
              >
                {tag}
              </span>
            )
          })}
        </div>
      </div>
      <footer className="border-top p-4 color-text-secondary d-flex flex-items-center">
        <RepoIcon className="flex-shrink-0" />
        <span className="ml-2 text-mono text-small color-text-link">{example.href}</span>
      </footer>
    </a>
  )
}
