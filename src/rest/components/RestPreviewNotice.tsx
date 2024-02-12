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
          className="ghd-spotlight ghd-spotlight-note border rounded-1 mb-6 p-3 color-border-accent-emphasis color-bg-accent f5"
          dangerouslySetInnerHTML={{ __html: preview }}
          key={JSON.stringify(preview) + index}
        />
      ))}
    </>
  )
}
