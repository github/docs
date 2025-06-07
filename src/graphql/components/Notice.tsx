import { Link } from '@/frame/components/Link'
import { Alert } from '@/frame/components/ui/Alert'
import { useTranslation } from '@/languages/components/useTranslation'
import type { GraphqlT } from './types'

type Props = {
  item: GraphqlT
  variant: 'preview' | 'deprecation'
}

export function Notice({ item, variant = 'preview' }: Props) {
  const { t } = useTranslation('graphql')
  return (
    <Alert type={variant === 'preview' ? 'NOTE' : 'WARNING'}>
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
    </Alert>
  )
}
