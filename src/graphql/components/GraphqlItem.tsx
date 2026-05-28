import React from 'react'
import { HeadingLink } from '@/frame/components/article/HeadingLink'
import type { GraphqlT } from './types'
import { Notice } from './Notice'

type Props = {
  item: GraphqlT
  heading?: string
  headingLevel?: number
  children?: React.ReactNode
}

export function GraphqlItem({ item, heading, children, headingLevel = 2 }: Props) {
  const slug = item.name.toLowerCase()
  const hasNotice = Boolean(item.preview || item.isDeprecated)

  return (
    <>
      <HeadingLink as={headingLevel === 2 ? 'h2' : headingLevel === 3 ? 'h3' : 'h6'} slug={slug}>
        {item.name}
      </HeadingLink>
      <div
        className="graphql-item-description"
        dangerouslySetInnerHTML={{
          __html: item.description,
        }}
      />
      {hasNotice && (
        <div>
          {item.preview && <Notice item={item} variant="preview" />}
          {item.isDeprecated && <Notice item={item} variant="deprecation" />}
        </div>
      )}
      {heading && <h4 dangerouslySetInnerHTML={{ __html: heading }} />}
      {children}
    </>
  )
}
