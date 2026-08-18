import type { ProductGroupT } from '@/landings/components/ProductSelections'

import { Link } from '@/frame/components/Link'
import { LinkExternalIcon } from '@primer/octicons-react'

import styles from './ProductSelectionCard.module.scss'

type ProductSelectionCardProps = {
  group: ProductGroupT
}

export const ProductSelectionCard = ({ group }: ProductSelectionCardProps) => {
  // Don't display the group if it has no children due to versioning
  if (!group.children || group.children.length === 0) {
    return null
  }

  return (
    <div className={styles.cell}>
      <h3 className={styles.groupName}>{group.name}</h3>

      <ul role="list" className={styles.linkList}>
        {group.children.map((product) => {
          return (
            <li key={product.name} role="listitem">
              <Link
                className={styles.link}
                href={product.href}
                title={product.name}
                target={product.external ? '_blank' : undefined}
              >
                {product.name}
                {product.external && (
                  <span className="ml-1">
                    <LinkExternalIcon aria-label="(external site)" size="small" />
                  </span>
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
