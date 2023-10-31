import { useRouter } from 'next/router'

import { Link } from 'components/Link'
import { useTranslation } from 'src/languages/components/useTranslation'
import type { GraphqlT } from './types'

type Props = {
  item: GraphqlT
  variant: 'preview' | 'deprecation'
}

export function Notice({ item, variant = 'preview' }: Props) {
  const { locale } = useRouter()

  const { t } = useTranslation('graphql')
  const previewTitle =
    variant === 'preview' ? t('reference.preview_notice') : t('reference.deprecation_notice')
  const noticeStyle =
    variant === 'preview'
      ? 'ghd-spotlight-note color-border-accent-emphasis color-bg-accent'
      : 'ghd-spotlight-warning color-border-danger-emphasis color-bg-danger'
  return (
    <div className={`ghd-spotlight ${noticeStyle} border rounded-1 my-3 p-3 f5`}>
      <p>
        <b>{previewTitle}</b>
      </p>
      {variant === 'preview' && item.preview ? (
        <p>
          <code>{item.name}</code> is available under the{' '}
          <Link href={item.preview.href} locale={locale}>
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
