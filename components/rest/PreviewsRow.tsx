import { xGitHub } from './types'
import { useTranslation } from 'components/hooks/useTranslation'

type Props = {
  slug: string
  xGitHub: xGitHub
}

export function PreviewsRow({ slug, xGitHub }: Props) {
  const { t } = useTranslation('products')
  const hasPreviews = xGitHub.previews && xGitHub.previews.length > 0

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
          {hasPreviews && (
            <a href={`#${slug}-preview-notices`} className="d-inline">
              {xGitHub.previews.length > 1
                ? ` ${t('rest.reference.see_preview_notices')}`
                : ` ${t('rest.reference.see_preview_notice')}`}
            </a>
          )}
        </p>
      </td>
    </tr>
  )
}
