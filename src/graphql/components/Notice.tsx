import { Link } from 'src/frame/components/Link'
import { useTranslation } from 'src/languages/components/useTranslation'
import type { GraphqlT } from './types'

type Props = {
  item: GraphqlT
  variant: 'preview' | 'deprecation'
}

export function Notice({ item, variant = 'preview' }: Props) {
  const { t } = useTranslation('graphql')
  const previewTitle =
    variant === 'preview' ? t('reference.preview_notice') : t('reference.deprecation_notice')
  const noticeStyle = variant === 'preview' ? 'ghd-spotlight-accent' : 'ghd-spotlight-attention'
  return (
    <div className={`ghd-spotlight ${noticeStyle} my-4 pl-3 py-2`}>
      <p>
        <b>{previewTitle}</b>
      </p>
      {variant === 'preview' && item.preview ? (
        <p>
          <code>{item.name}</code> is available under the{' '}
          <Link href={item.preview.href} makeAbsolute>
            {item.preview.title}
          </Link>
          . {t('reference.preview_period')}
        </p>
      ) : item.deprecationReason ? (
        <div>
          <p>
            <code>{item.name}</code> is deprecated.
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: item.deprecationReason,
            }}
          />
        </div>
      ) : null}
    </div>
  )
}
