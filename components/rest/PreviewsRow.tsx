import { useTranslation } from 'components/hooks/useTranslation'

type Props = {
  slug: string
  numPreviews: number
}

export function PreviewsRow({ slug, numPreviews }: Props) {
  const { t } = useTranslation('products')

  return (
    <tr>
      <td>
        <code>accept</code>
      </td>
      <td>string</td>
      <td>header</td>
      <td>
        <p className="m-0">
          Setting to
          <code>application/vnd.github.v3+json</code> is recommended.
          {numPreviews > 0 && (
            <a href={`#${slug}-preview-notices`} className="d-inline">
              {numPreviews > 1
                ? ` ${t('rest.reference.see_preview_notices')}`
                : ` ${t('rest.reference.see_preview_notice')}`}
            </a>
          )}
        </p>
      </td>
    </tr>
  )
}
