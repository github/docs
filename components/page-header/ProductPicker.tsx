import { useRouter } from 'next/router'

import { useMainContext } from 'components/context/MainContext'
import { Picker } from 'components/ui/Picker'
import { useTranslation } from 'components/hooks/useTranslation'

export const ProductPicker = () => {
  const router = useRouter()
  const { activeProducts, currentProduct } = useMainContext()
  const { t } = useTranslation('picker')

  return (
    <div data-testid="product-picker">
      <Picker
        variant="inline"
        defaultText={t('product_picker_default_text')}
        options={activeProducts.map((product) => ({
          text: product.name,
          selected: product.name === currentProduct?.name,
          external: product.external,
          href: `${product.external ? '' : `/${router.locale}`}${product.href}`,
        }))}
      />
    </div>
  )
}
