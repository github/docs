import { LinkIcon } from '@primer/octicons-react'

type Props = {
  slug: string
  summary: string
  descriptionHTML: string
}

export function RestOperationHeading({ slug, summary, descriptionHTML }: Props) {
  return (
    <>
      <h3 id={slug}>
        <a href={`#${slug}`}>
          <LinkIcon size={16} className="m-1" />
        </a>
        {summary}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: descriptionHTML }} />
    </>
  )
}
