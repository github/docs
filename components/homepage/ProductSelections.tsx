import { useMainContext } from 'components/context/MainContext'

import React from 'react'
import { ProductSelectionCard } from './ProductSelectionCard'

export const ProductSelections = () => {
  const { productGroups } = useMainContext()

  return (
    <section className="container-xl pb-lg-4 mt-6 px-3 px-md-6" data-testid="product">
      <div className="">
        <div className="d-flex flex-wrap gutter gutter-xl-spacious">
          {productGroups.map((group) => {
            return <ProductSelectionCard key={group.name} name={group.name} group={group} />
          })}
        </div>
      </div>
    </section>
  )
}
