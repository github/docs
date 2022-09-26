import { LinkIconHeading } from 'components/article/LinkIconHeading'
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
      {headingLevel === 2 && (
        <h2 id={lowerCaseName}>
          <LinkIconHeading slug={lowerCaseName} />
          {item.name}
        </h2>
      )}
      {headingLevel === 3 && (
        <h3 id={lowerCaseName}>
          <LinkIconHeading slug={lowerCaseName} />
          {item.name}
        </h3>
      )}
      <p
        dangerouslySetInnerHTML={{
          __html: item.description,
        }}
      />
      <div>
        {item.preview && <Notice item={item} variant="preview" />}
        {item.isDeprecated && <Notice item={item} variant="deprecation" />}
      </div>
      <div>
        {heading && <h4>{heading}</h4>}
        {children}
      </div>
    </div>
  )
}
