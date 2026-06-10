import React, { type JSX } from 'react'
import { Label } from '@primer/react'
import { HeadingLink } from '@/frame/components/article/HeadingLink'
import type { GraphqlT } from './types'
import { Notice } from './Notice'
import type { SchemaKindKey } from '@/graphql/lib/categories'
import { KIND_LABELS, KIND_SLUG_PREFIX } from '@/graphql/lib/categories'

type Props = {
  item: GraphqlT
  heading?: string
  headingLevel?: number
  children?: React.ReactNode
  // When provided, the heading id is prefixed with the kind so two items
  // with the same case-insensitive name across kinds get distinct anchors
  // on a category page (e.g. `object-repository` vs `query-repository`).
  kind?: SchemaKindKey
}

// Clamp a numeric heading level to the valid HTML range (2–6). Used to
// build heading tag names like `h2`/`h3` from a numeric `headingLevel`
// prop without producing invalid tags if a caller passes something odd.
function headingTag(level: number): keyof JSX.IntrinsicElements {
  const clamped = Math.max(2, Math.min(6, level))
  return `h${clamped}` as keyof JSX.IntrinsicElements
}

export function GraphqlItem({ item, heading, children, headingLevel = 2, kind }: Props) {
  const baseSlug = item.name.toLowerCase()
  const slug = kind ? `${KIND_SLUG_PREFIX[kind]}-${baseSlug}` : baseSlug
  const hasNotice = Boolean(item.preview || item.isDeprecated)
  const kindLabel = kind ? KIND_LABELS[kind] : undefined
  // Sub-headings rendered via the `heading` prop should sit one level below
  // the item's own heading so the document outline stays well-formed when
  // the item itself is nested under a kind section heading on category pages.
  const SubHeading = headingTag(headingLevel + 1)

  return (
    <>
      <HeadingLink as={headingTag(headingLevel)} slug={slug}>
        {item.name}
      </HeadingLink>
      <div className="d-flex flex-items-start" style={{ gap: '0.5rem' }}>
        {kindLabel && (
          <Label variant="secondary" style={{ flexShrink: 0, marginTop: '0.15rem' }}>
            {kindLabel}
          </Label>
        )}
        <div
          className="graphql-item-description"
          dangerouslySetInnerHTML={{
            __html: item.description,
          }}
        />
      </div>
      {hasNotice && (
        <div>
          {item.preview && <Notice item={item} variant="preview" />}
          {item.isDeprecated && <Notice item={item} variant="deprecation" />}
        </div>
      )}
      {heading && <SubHeading dangerouslySetInnerHTML={{ __html: heading }} />}
      {children}
    </>
  )
}

// Re-exported so per-kind wrappers can build matching sub-sub-headings
// (e.g. Mutation's "Return fields" h-tag) without duplicating the clamp logic.
export { headingTag }
