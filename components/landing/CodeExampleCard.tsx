import { RepoIcon } from '@primer/octicons-react'
import { CodeExample } from 'components/context/ProductLandingContext'
import { TruncateLines } from 'components/ui/TruncateLines'

type Props = {
  example: CodeExample
}
export const CodeExampleCard = ({ example }: Props) => {
  return (
    <a
      className="Box d-flex flex-column flex-justify-between height-full color-shadow-medium hover-shadow-large no-underline color-fg-default"
      data-testid="code-example-card"
      href={`https://github.com/${example.href}`}
    >
      <div className="p-4">
        <h4 dangerouslySetInnerHTML={{ __html: example.title }} />
        <p
          className="mt-2 mb-4 color-fg-muted"
          dangerouslySetInnerHTML={{ __html: example.description }}
        />
        <div className="d-flex flex-wrap">
          {example.tags.map((tag) => {
            return (
              <span
                key={tag}
                className="IssueLabel color-fg-on-emphasis color-bg-accent-emphasis mr-2 mb-1"
              >
                {tag}
              </span>
            )
          })}
        </div>
      </div>
      <footer className="border-top p-4 color-fg-muted d-flex flex-items-center">
        <RepoIcon className="flex-shrink-0" />
        <TruncateLines
          as="span"
          maxLines={1}
          className="ml-2 text-mono text-small color-fg-accent line-break-anywhere"
        >
          {example.href}
        </TruncateLines>
      </footer>
    </a>
  )
}
