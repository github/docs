import contextualize from '@/frame/middleware/context/context.js'
import features from '@/versions/middleware/features.js'
import shortVersions from '@/versions/middleware/short-versions.js'

import warmServer from '@/frame/lib/warm-server.js'

export const POSSIBLE_FIELDS = ['title', 'shortTitle', 'intro', 'url']

type Document = {
  title?: string
  shortTitle?: string | null
  intro?: string
  url?: string
}

export type AllDocument = {
  version: string
  language: string
  documents: Document[]
}

type Permalink = {
  languageCode: string
  pageVersion: string
  title: string
  href: string
}

type Page = {
  permalinks: Permalink[]
  fullPath: string
  title: string
  shortTitle?: string
  intro: string
  languageCode: string
  documentType: string
  renderProp: (prop: string, context: any, opts: any) => Promise<string>
}

type Options = {
  languages: string[]
  versions: string[]
  fields: string[]
  filter?: string
}

export async function allDocuments(options: Options): Promise<AllDocument[]> {
  const { filter, versions, languages, fields } = options

  const site = await warmServer(options.languages)
  const pages: Page[] = site.pageList
  const allDocuments: AllDocument[] = []

  type ByVersion = Map<string, Document[]>
  const byLanguage = new Map<string, ByVersion>()

  for (const page of pages) {
    if (!languages.includes(page.languageCode)) {
      continue
    }

    for (const permalink of page.permalinks) {
      if (filter && !permalink.href.includes(filter)) {
        continue
      }
      if (!versions.includes(permalink.pageVersion)) {
        continue
      }

      const next = () => {}
      const res = {}
      const pagePath = permalink.href
      const context: any = {}
      const req = {
        path: pagePath,
        language: permalink.languageCode,
        pagePath,
        cookies: {},
        query: {},
        context,
      }

      await contextualize(req, res, next)
      await shortVersions(req, res, next)
      req.context.page = page
      await features(req, res, next)

      const title = fields.includes('title')
        ? await page.renderProp('title', req.context, { textOnly: true })
        : undefined
      const shortTitle = fields.includes('shortTitle')
        ? page.shortTitle
          ? await page.renderProp('shortTitle', req.context, { textOnly: true })
          : null
        : undefined
      const intro = fields.includes('intro')
        ? await page.renderProp('intro', req.context, { textOnly: true })
        : undefined

      const url = fields.includes('url') ? permalink.href : undefined

      if (!byLanguage.has(permalink.languageCode)) {
        byLanguage.set(permalink.languageCode, new Map())
      }
      const byVersion = byLanguage.get(permalink.languageCode) as ByVersion
      if (!byVersion.has(permalink.pageVersion)) {
        byVersion.set(permalink.pageVersion, [])
      }
      byVersion.get(permalink.pageVersion)?.push({ title, shortTitle, intro, url })
    }
  }
  for (const [language, byVersion] of byLanguage) {
    for (const [version, documents] of byVersion) {
      allDocuments.push({ version, language, documents })
    }
  }
  return allDocuments
}
