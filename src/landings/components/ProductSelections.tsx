import React from 'react'

import type { ProductT } from 'src/frame/components/context/MainContext'
import { ProductSelectionCard } from './ProductSelectionCard'

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
  return (
    <section className="container-xl pb-lg-4 mt-6 px-3 px-md-6" data-testid="product">
      <div className="">
        <div className="d-flex flex-wrap gutter gutter-xl-spacious">
          {productGroups.map((group) => {
            return <ProductSelectionCard key={group.name} group={group} />
          })}
        </div>
      </div>
    </section>
  )
}
