import { RepoIcon } from '@primer/octicons-react'
import { CodeExample } from 'components/context/ProductLandingContext'
import { TruncateLines } from 'components/ui/TruncateLines'
import { Label } from '@primer/react'

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
        <h3 className="f4" dangerouslySetInnerHTML={{ __html: example.title }} />
        <p
          className="mt-2 mb-4 color-fg-muted"
          dangerouslySetInnerHTML={{ __html: example.description }}
        />
        <div className="d-flex flex-wrap">
          {example.tags.map((tag) => {
            return (
              <Label key={tag} variant="accent" sx={{ mb: 1, mr: 2 }}>
                {tag}
              </Label>
            )
          })}
        </div>
      </div>
      <footer className="border-top p-4 color-fg-muted d-flex flex-items-center">
        <RepoIcon aria-label="repository URL" className="flex-shrink-0" />
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
