import { createContext, useContext } from 'react'

export type TocItem = {
  fullPath: string
  title: string
  intro?: string
}

export type TocLandingContextT = {
  title: string
  introPlainText: string
  tocItems: Array<TocItem>
}

export const TocLandingContext = createContext<TocLandingContextT | null>(null)

export const useTocLandingContext = (): TocLandingContextT => {
  const context = useContext(TocLandingContext)

  if (!context) {
    throw new Error('"useTocLandingContext" may only be used inside "TocLandingContext.Provider"')
  }

  return context
}

export const getTocLandingContextFromRequest = (req: any): TocLandingContextT => {
  return {
    title: req.context.page.title,
    introPlainText: req.context.page.introPlainText,
    tocItems: req.context.tocItems || [],
  }
}
