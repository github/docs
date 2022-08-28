import React, { createContext, useContext, useState } from 'react'
import { CodeLanguage, PlaygroundArticleT } from 'components/playground/types'
import { useRouter } from 'next/router'

import jsArticle from 'components/playground/content/building-and-testing/nodejs'
import pyArticle from 'components/playground/content/building-and-testing/python'

const articles = [jsArticle, pyArticle]
const articlesByLangId = articles.reduce((obj, item) => {
  obj[item.codeLanguageId] = item
  return obj
}, {} as Record<string, PlaygroundArticleT | undefined>)

const codeLanguages: Array<CodeLanguage> = [
  {
    id: 'nodejs',
    label: 'Node.js',
  },
  {
    id: 'py',
    label: 'Python',
  },
]

type PlaygroundContextT = {
  activeSectionIndex: number
  setActiveSectionIndex: (sectionIndex: number) => void
  scrollToSection: number | undefined
  setScrollToSection: (sectionIndex?: number) => void
  codeLanguages: Array<CodeLanguage>
  currentLanguage: CodeLanguage
  article: PlaygroundArticleT | undefined
}

export const PlaygroundContext = createContext<PlaygroundContextT | null>(null)

export const usePlaygroundContext = (): PlaygroundContextT => {
  const context = useContext(PlaygroundContext)

  if (!context) {
    throw new Error('"usePlaygroundContext" may only be used inside "PlaygroundContext.Provider"')
  }

  return context
}

export const PlaygroundContextProvider = (props: { children: React.ReactNode }) => {
  const router = useRouter()
  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  const [scrollToSection, setScrollToSection] = useState<number>()
  const { langId } = router.query
  const currentLanguage = codeLanguages.find(({ id }) => id === langId) || codeLanguages[0]
  const availableLanguages = codeLanguages.filter(({ id }) => !!articlesByLangId[id])

  const article = articlesByLangId[currentLanguage.id]

  const context = {
    activeSectionIndex,
    setActiveSectionIndex,
    scrollToSection,
    setScrollToSection,
    currentLanguage,
    codeLanguages: availableLanguages,
    article,
  }

  return <PlaygroundContext.Provider value={context}>{props.children}</PlaygroundContext.Provider>
}
