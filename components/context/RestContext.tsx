import { createContext, useContext } from 'react'

export type MiniTocItem = {
  platform: string
  contents: string & { title: string; href: string }
  items?: MiniTocItem[]
}

export type RestContextT = {
  title: string
  intro: string
  renderedPage: string | JSX.Element[]
  miniTocItems: Array<MiniTocItem>
}

export const RestContext = createContext<RestContextT | null>(null)

export const useRestContext = (): RestContextT => {
  const context = useContext(RestContext)

  if (!context) {
    throw new Error('"useRestContext" may only be used inside "RestContext.Provider"')
  }

  return context
}

export const getRestContextFromRequest = (req: any): RestContextT => {
  const page = req.context.page

  return {
    title: page.titlePlainText,
    intro: page.intro,
    renderedPage: req.context.renderedPage || '',
    miniTocItems: req.context.miniTocItems || [],
  }
}
