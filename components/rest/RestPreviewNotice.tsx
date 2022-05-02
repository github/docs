import { useTranslation } from 'components/hooks/useTranslation'

type Props = {
  slug: string
  previews: Array<string>
}

export function RestPreviewNotice({ slug, previews }: Props) {
  const { t } = useTranslation('products')
  return (
    <>
      <h3 className="h4" id={`${slug}-preview-notices`}>
        <a href={`${slug}-preview-notices`}>
          {previews.length > 1
            ? `${t('rest.reference.preview_notices')}`
            : `${t('rest.reference.preview_notice')}`}
        </a>
      </h3>
      {previews.map((preview, index) => (
        <div
          className="extended-markdown note border rounded-1 mb-6 p-3 color-border-accent-emphasis color-bg-accent f5"
          dangerouslySetInnerHTML={{ __html: preview }}
          key={JSON.stringify(preview) + index}
        />
      ))}
    </>
  )
}
