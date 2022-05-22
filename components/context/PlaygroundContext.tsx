import React, { createContext, useContext, useState } from 'react'
import { CodeLanguage, PlaygroundArticleT } from 'components/playground/types'
import { useRouter } from 'next/router'

import actionsJsArticle from 'components/playground/content/actions/guides/building-and-testing-nodejs-or-python/nodejs'
import actionsPyArticle from 'components/playground/content/actions/guides/building-and-testing-nodejs-or-python/python'
import codespacesJsArticle from 'components/playground/content/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces/nodejs'
import codespacesPyArticle from 'components/playground/content/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces/python'
import codespacesNetArticle from 'components/playground/content/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces/dotnet'
import codespacesJavaArticle from 'components/playground/content/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces/java'

const articles = [
  actionsJsArticle,
  actionsPyArticle,
  codespacesJsArticle,
  codespacesPyArticle,
  codespacesJavaArticle,
  codespacesNetArticle,
]

const codeLanguages: Array<CodeLanguage> = [
  {
    id: 'nodejs',
    label: 'Node.js',
  },
  {
    id: 'py',
    label: 'Python',
  },
  {
    id: 'dotnet',
    label: 'C#',
  },
  {
    id: 'java',
    label: 'Java',
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
  const path = router.asPath.split('?')[0]
  const relevantArticles = articles.filter(({ slug }) => slug === path)

  const { langId } = router.query
  const availableLanguageIds = relevantArticles.map(({ codeLanguageId }) => codeLanguageId)
  const currentLanguage =
    codeLanguages.find(({ id }) => id === langId) ||
    (codeLanguages.find(({ id }) => id === availableLanguageIds[0]) as CodeLanguage)

  const article = relevantArticles.find(
    ({ codeLanguageId }) => codeLanguageId === currentLanguage?.id
  )

  const context = {
    activeSectionIndex,
    setActiveSectionIndex,
    scrollToSection,
    setScrollToSection,
    currentLanguage,
    codeLanguages: codeLanguages.filter(({ id }) => availableLanguageIds.includes(id)),
    article,
  }

  return <PlaygroundContext.Provider value={context}>{props.children}</PlaygroundContext.Provider>
}
