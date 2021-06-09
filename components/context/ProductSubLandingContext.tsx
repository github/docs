import { createContext, useContext } from 'react'
import pick from 'lodash/pick'

export type ProductSubLandingContextT = {
  title: string,
  intro: string,
  featuredTrack?: {
    trackName: string,
    title: string,
    description: string
    guides?: Array<{ href: string; page: { type: string}; title: string; intro: string }>;
  }
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
  console.log(page.featuredTrack)
  console.log(req.context.productMap[req.context.currentProduct].name)
  return {
    ...pick(page, [
      'intro',
    ]),
    title: req.context.productMap[req.context.currentProduct].name + ' guides',
    // https://github.com/vercel/next.js/issues/11993
    featuredTrack: page.featuredTrack === undefined ? null : JSON.parse(JSON.stringify(page.featuredTrack))
  }
}
