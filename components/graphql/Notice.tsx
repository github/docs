import { useRouter } from 'next/router'

import { Link } from 'components/Link'
import { useTranslation } from 'components/hooks/useTranslation'
import type { GraphqlT } from './types'

type Props = {
  item: GraphqlT
  variant: 'preview' | 'deprecation'
}

export function Notice({ item, variant = 'preview' }: Props) {
  const { locale } = useRouter()

  const { t } = useTranslation('products')
  const previewTitle =
    variant === 'preview'
      ? t('graphql.reference.preview_notice')
      : t('graphql.reference.deprecation_notice')
  const noticeStyle =
    variant === 'preview'
      ? 'note color-border-accent-emphasis color-bg-accent'
      : 'warning color-border-danger color-bg-danger'
  return (
    <div className={`${noticeStyle} extended-markdown border rounded-1 my-3 p-3 f5`}>
      <p>
        <b>{previewTitle}</b>
      </p>
      {variant === 'preview' && item.preview ? (
        <p>
          <code>{item.name}</code> is available under the{' '}
          <Link href={item.preview.href} locale={locale}>
            {item.preview.title}
          </Link>
          . {t('graphql.reference.preview_period')}
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
