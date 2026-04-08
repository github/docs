import { createContext, useContext } from 'react'

export type ProductGuidesContextT = {
  title: string
  intro: string
}

export const ProductGuidesContext = createContext<ProductGuidesContextT | null>(null)

export const useProductGuidesContext = (): ProductGuidesContextT => {
  const context = useContext(ProductGuidesContext)

  if (!context) {
    throw new Error(
      '"useProductGuidesContext" may only be used inside "ProductGuidesContext.Provider"',
    )
  }

  return context
}
