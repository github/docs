import { useTranslation } from 'components/hooks/useTranslation'
import { Preview } from './types'

type Props = {
  slug: string
  previews: Array<Preview> | []
}

export function RestPreviewNotice({ slug, previews }: Props) {
  const { t } = useTranslation('products')

  const previewNotices = previews.map((preview, index) => {
    return (
      <div
        className="extended-markdown note border rounded-1 mb-6 p-3 color-border-accent-emphasis color-bg-accent f5"
        dangerouslySetInnerHTML={{ __html: preview.html }}
        key={`${preview.name}-${index}`}
      >
        {preview.required && t('preview_header_is_required')}
      </div>
    )
  })

  return previews.length > 0 ? (
    <>
      <h4 id={`${slug}-preview-notices`}>
        {previews.length > 1
          ? `${t('rest.reference.preview_notices')}`
          : `${t('rest.reference.preview_notice')}`}
      </h4>
      {previewNotices}
    </>
  ) : null
}
