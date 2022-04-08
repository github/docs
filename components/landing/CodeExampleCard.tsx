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
            // start if statement here. if label equals one of the tags, bg: 'somecolor.emphasis"
            // make a new label return per tag

            // console.log(tag)

            // Bugs ____________
            // (Fixed) Bug - CodeQL is showing multiple times in the same card, once with the correct color assigned, once with the previous default color.
            // Possible solutions?
            // - Restart the local server?
            //  ^^ Fixed it!
            // Need more color options for the Organization and Scripts color codes. Only 7 colors available and 9 labels in this one
            // added more colors from an accessibility site - http://web-accessibility.carnegiemuseums.org/design/color/

            // **!! Current Bug - none

            if (tag === 'CodeQL') {
              return (
                <Label key={tag} variant="small" sx={{ bg: 'success.emphasis', mb: 1, mr: 2 }}>
                  {tag}
                </Label>
              )
            } else if (tag === 'Code scanning') {
              return (
                <Label key={tag} variant="small" sx={{ bg: '#00a6d2', mb: 1, mr: 2 }}>
                  {tag}
                </Label>
              )
            } else if (tag === 'GitHub Actions') {
              return (
                <Label key={tag} variant="small" sx={{ bg: 'sponsors.emphasis', mb: 1, mr: 2 }}>
                  {tag}
                </Label>
              )
            } else if (tag === 'Security policy') {
              return (
                <Label key={tag} variant="small" sx={{ bg: 'accent.emphasis', mb: 1, mr: 2 }}>
                  {tag}
                </Label>
              )
            } else if (tag === 'Security advisory') {
              return (
                <Label key={tag} variant="small" sx={{ bg: 'danger.emphasis', mb: 1, mr: 2 }}>
                  {tag}
                </Label>
              )
            } else if (tag === 'Dependabot') {
              return (
                <Label key={tag} variant="small" sx={{ bg: 'attention.emphasis', mb: 1, mr: 2 }}>
                  {tag}
                </Label>
              )
            } else if (tag === 'Alerts') {
              return (
                <Label key={tag} variant="small" sx={{ bg: 'severe.emphasis', mb: 1, mr: 2 }}>
                  {tag}
                </Label>
              )
            } else if (tag === 'Security updates') {
              return (
                <Label key={tag} variant="small" sx={{ bg: 'done.emphasis', mb: 1, mr: 2 }}>
                  {tag}
                </Label>
              )
            } else if (tag === 'Organization') {
              return (
                <Label key={tag} variant="small" sx={{ bg: '#5b616b', mb: 1, mr: 2 }}>
                  {tag}
                </Label>
              )
            } else if (tag === 'Scripts') {
              return (
                <Label key={tag} variant="small" sx={{ bg: '#046b99', mb: 1, mr: 2 }}>
                  {tag}
                </Label>
              )
            } else return null
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
