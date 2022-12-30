import { useRouter } from 'next/router'
import { LinkExternalIcon } from '@primer/octicons-react'

import { useMainContext } from 'components/context/MainContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { Picker } from 'components/ui/Picker'

export const ProductPicker = () => {
  const router = useRouter()
  const { activeProducts, currentProduct } = useMainContext()
  const { t } = useTranslation('picker')

  return (
    <div data-testid="product-picker">
      <Picker
        variant="inline"
        defaultText={t('product_picker_default_text')}
        items={activeProducts.map((product) => ({
          text: product.name,
          selected: product.name === currentProduct?.name,
          href: `${product.external ? '' : `/${router.locale}`}${product.href}`,
          extra: {
            external: product.external,
          },
        }))}
        alignment="end"
        dataTestId="field"
        ariaLabel="Select field type"
        renderItem={(item) => {
          return item.extra?.external ? (
            <>
              {item.text}
              <LinkExternalIcon size="small" className="ml-1" />
            </>
          ) : (
            item.text
          )
        }}
      />
    </div>
  )
}
