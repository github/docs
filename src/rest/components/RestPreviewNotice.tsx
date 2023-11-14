type Props = {
  slug: string
  previews: Array<string>
  heading: string
}

export function RestPreviewNotice({ slug, previews, heading }: Props) {
  return (
    <>
      <h3 className="h4" id={`${slug}-preview-notices`}>
        <a href={`#${slug}-preview-notices`}>{heading}</a>
      </h3>
      {previews.map((preview, index) => (
        <div
          className="ghd-spotlight ghd-spotlight-accent my-4 pl-3 py-2"
          dangerouslySetInnerHTML={{ __html: preview }}
          key={JSON.stringify(preview) + index}
        />
      ))}
    </>
  )
}
