import { createContext, useContext } from 'react'
import type { MiniTocItem } from 'src/frame/components/context/ArticleContext'

export type AutomatedPageContextT = {
  title: string
  intro: string
  renderedPage: string | JSX.Element[]
  miniTocItems: Array<MiniTocItem>
  product?: string
  permissions?: string
}

export const AutomatedPageContext = createContext<AutomatedPageContextT | null>(null)

export const useAutomatedPageContext = (): AutomatedPageContextT => {
  const context = useContext(AutomatedPageContext)

  if (!context) {
    throw new Error(
      '"useAutomatedPageContext" may only be used inside "AutomatedPageContext.Provider"',
    )
  }

  return context
}

export const getAutomatedPageContextFromRequest = (req: any): AutomatedPageContextT => {
  const page = req.context.page

  return {
    title: page.title,
    intro: page.intro,
    renderedPage: req.context.renderedPage || '',
    miniTocItems: req.context.miniTocItems || [],
    product: page.product || '',
    permissions: page.permissions || '',
  }
}
