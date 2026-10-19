import React, { type JSX } from 'react'
import { Label } from '@primer/react-brand'
import { HeadingLink } from '@/frame/components/article/HeadingLink'
import type { GraphqlT } from './types'
import { Notice } from './Notice'
import type { SchemaKindKey } from '@/graphql/lib/categories'
import { KIND_LABELS, KIND_SLUG_PREFIX } from '@/graphql/lib/categories'
import { RenderedHTML } from '@/frame/components/ui/RenderedHTML/RenderedHTML'

type Props = {
  item: GraphqlT
  heading?: string
  headingLevel?: number
  children?: React.ReactNode
  // Prefix heading IDs so names shared across kinds get distinct anchors.
  // For example, object-repository and query-repository can coexist.
  kind?: SchemaKindKey
}

// Clamp heading tags to h2 through h6 when callers pass odd headingLevel values.
function headingTag(level: number): keyof JSX.IntrinsicElements {
  const clamped = Math.max(2, Math.min(6, level))
  return `h${clamped}` as keyof JSX.IntrinsicElements
}

export function GraphqlItem({ item, heading, children, headingLevel = 2, kind }: Props) {
  const baseSlug = item.name.toLowerCase()
  const slug = kind ? `${KIND_SLUG_PREFIX[kind]}-${baseSlug}` : baseSlug
  const hasNotice = Boolean(item.preview || item.isDeprecated)
  const kindLabel = kind ? KIND_LABELS[kind] : undefined
  // Subheadings sit one level below the item heading to keep category page outlines valid.
  const SubHeading = headingTag(headingLevel + 1)

  return (
    <>
      <HeadingLink as={headingTag(headingLevel)} slug={slug}>
        {item.name}
      </HeadingLink>
      <div className="d-flex flex-items-baseline" style={{ gap: '0.5rem' }}>
        {kindLabel && (
          <Label color="gray" size="small" style={{ flexShrink: 0 }}>
            {kindLabel}
          </Label>
        )}
        <RenderedHTML className="graphql-item-description" html={item.description} />
      </div>
      {hasNotice && (
        <div>
          {item.preview && <Notice item={item} variant="preview" />}
          {item.isDeprecated && <Notice item={item} variant="deprecation" />}
        </div>
      )}
      {heading && <RenderedHTML as={SubHeading} html={heading} />}
      {children}
    </>
  )
}

// Per-kind wrappers share headingTag so Mutation return fields use the same heading clamp.
export { headingTag }
