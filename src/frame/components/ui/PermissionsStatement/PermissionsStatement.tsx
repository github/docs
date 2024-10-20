import { Box } from '@primer/react'
import { PersonIcon, BriefcaseIcon } from '@primer/octicons-react'

import { useTranslation } from 'src/languages/components/useTranslation'

type Props = {
  product?: string
  permissions?: string
}

export function PermissionsStatement({ product, permissions }: Props) {
  const { t } = useTranslation('pages')
  if (!permissions && !product) return null
  return (
    <Box sx={{ borderRadius: 10, borderStyle: 'solid', borderColor: 'border.default', p: 3 }}>
      <div data-search="hide" data-testid="permissions-callout">
        <div className="mb-3 d-inline-block">
          <h2 className="f4">{t('permissions_callout_title')}</h2>
        </div>
        {permissions && (
          <div className="d-flex" data-testid="permissions-statement">
            <PersonIcon className="mt-1" />
            <div className="pl-2" dangerouslySetInnerHTML={{ __html: permissions }} />
          </div>
        )}
        {product && (
          <div className="d-flex" data-testid="product-statement">
            <BriefcaseIcon className="mt-1" />
            <div className="pl-2" dangerouslySetInnerHTML={{ __html: product }} />
          </div>
        )}
      </div>
    </Box>
  )
}
