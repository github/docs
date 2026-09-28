import type { ProductT } from '@/frame/components/context/MainContext'
import { Heading } from '@primer/react-brand'

import { useTranslation } from '@/languages/components/useTranslation'
import { ProductSelectionCard } from './ProductSelectionCard'
import styles from './ProductSelections.module.scss'

export type ProductGroupT = {
  name: string
  icon?: string
  octicon: string
  children: Array<ProductT>
}

type Props = {
  productGroups: Array<ProductGroupT>
}

export const ProductSelections = ({ productGroups }: Props) => {
  const { t } = useTranslation('homepage')

  const groups = productGroups.filter((group) => group.children && group.children.length > 0)

  return (
    <section className={styles.section} data-testid="product">
      <Heading as="h2" size="5" className={styles.heading}>
        {t('all_docs')}
      </Heading>
      <div className={styles.grid}>
        {groups.map((group) => (
          <ProductSelectionCard key={group.name} group={group} />
        ))}
      </div>
    </section>
  )
}
