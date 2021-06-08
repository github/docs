import { createContext, useContext } from 'react'
import pick from 'lodash/pick'

export type ProductSubLandingContextT = {
  title: string,
  intro: string,
}

export const ProductSubLandingContext = createContext<ProductSubLandingContextT | null>(null)

export const useProductSubLandingContext = (): ProductSubLandingContextT => {
  const context = useContext(ProductSubLandingContext)

  if (!context) {
    throw new Error(
      '"useProductSubLandingContext" may only be used inside "ProductSubLandingContext.Provider"'
    )
  }

  return context
}

export const getProductSubLandingContextFromRequest = (req: any): ProductSubLandingContextT => {
  const productTree = req.context.currentProductTree
  const page = req.context.page
  return {
    ...pick(page, [
      'intro',
    ]),
    title: req.context.productMap[req.context.currentProduct].name + ' guides'
  }
}
