import { HeadingLink } from 'components/article/HeadingLink'
import type { GraphqlT } from './types'
import { Notice } from './Notice'

type Props = {
  item: GraphqlT
  heading?: string
  headingLevel?: number
  children?: React.ReactNode
}

export function GraphqlItem({ item, heading, children, headingLevel = 2 }: Props) {
  const lowerCaseName = item.name.toLowerCase()
  return (
    <div>
      <HeadingLink
        as={headingLevel === 2 ? 'h2' : headingLevel === 3 ? 'h3' : 'h6'}
        slug={lowerCaseName}
      >
        {item.name}
      </HeadingLink>
      <div
        dangerouslySetInnerHTML={{
          __html: item.description,
        }}
      />
      <div>
        {item.preview && <Notice item={item} variant="preview" />}
        {item.isDeprecated && <Notice item={item} variant="deprecation" />}
      </div>
      <div>
        {heading && <h4 dangerouslySetInnerHTML={{ __html: heading }} />}
        {children}
      </div>
    </div>
  )
}
