import { createContext, useContext } from 'react'
import type { IncomingMessage } from 'http'
import type { JSX } from 'react'
import type { MiniTocItem } from '@/frame/components/context/ArticleContext'
import type { Context } from '@/types'

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

type AutomatedPageContextRequest = { context?: Partial<Context> } | IncomingMessage

type AutomatedPage = {
  title: string
  intro: string
  product?: string
  permissions?: string
  rawPermissions?: string
}

export const getAutomatedPageContextFromRequest = (
  req: AutomatedPageContextRequest,
): AutomatedPageContextT => {
  const context = 'context' in req ? ((req.context as Partial<Context> | undefined) ?? {}) : {}
  const page = context.page as AutomatedPage | undefined

  if (!page) {
    throw new Error('"getAutomatedPageContextFromRequest" requires req.context.page')
  }

  const renderedPage = context.renderedPage ?? ''
  const miniTocItems = context.miniTocItems ?? []

  return {
    title: page.title,
    intro: page.intro,
    renderedPage,
    miniTocItems,
    product: page.product ?? '',
    permissions: page.permissions ?? page.rawPermissions ?? '',
  }
}
