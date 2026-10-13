import path from 'path'

import { createLogger } from '@/observability/logger'
import languages from '@/languages/lib/languages-server'
import type { Language } from '@/languages/lib/languages'
import type { UnversionedTree, UnversionLanguageTree, SiteTree, Tree } from '@/types'

import { allVersions } from '@/versions/lib/all-versions'
import createTree from './create-tree'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'
import readFileContents from './read-file-contents'
import Page from './page'
import Permalink from './permalink'
import frontmatterSchema from './frontmatter'
import { correctTranslatedContentStrings } from '@/languages/lib/correct-translation-content'

const logger = createLogger(import.meta.url)

interface FileSystemError extends Error {
  code?: string
}

// DEBUG_TRANSLATION_FALLBACKS logs each translation file that falls back to English.
const DEBUG_TRANSLATION_FALLBACKS = Boolean(
  JSON.parse(process.env.DEBUG_TRANSLATION_FALLBACKS || 'false'),
)
// THROW_TRANSLATION_ERRORS throws on missing files, corrupt files, and translatable-key fallbacks.
const THROW_TRANSLATION_ERRORS = Boolean(
  JSON.parse(process.env.THROW_TRANSLATION_ERRORS || 'false'),
)

const versions = Object.keys(allVersions)

class FrontmatterParsingError extends Error {
  isYmlError: boolean
  constructor(message: string, isYmlError = false) {
    super(message)
    this.isYmlError = isYmlError
  }
}

// product stays translatable because product frontmatter can contain prose.
const translatableFrontmatterKeys = Object.entries(frontmatterSchema.schema.properties)
  .filter(([, value]: [string, { translatable?: boolean }]) => value.translatable)
  .map(([key]) => key)

// Initialize pages once per language because pages do not change per version.
// The unversioned tree is the expensive base for siteTree and pageList.
export async function loadUnversionedTree(
  languagesOnly: string[] = [],
): Promise<UnversionLanguageTree> {
  if (languagesOnly && !Array.isArray(languagesOnly)) {
    throw new Error("'languagesOnly' has to be an array")
  }
  const unversionedTree: UnversionLanguageTree = {} as UnversionLanguageTree
  const enTree = await createTree(path.join(languages.en.dir, 'content'))
  if (enTree) {
    unversionedTree.en = enTree
    setCategoryApplicableVersions(unversionedTree.en)
  }

  const languagesValues = Object.entries(languages)
    .filter(([language]) => {
      return !languagesOnly.length || languagesOnly.includes(language)
    })
    .map(([, data]) => {
      return data
    })

  await Promise.all(
    languagesValues
      .filter((langObj) => langObj.code !== 'en')
      .map(async (langObj) => {
        const localizedContentPath = path.join(langObj.dir, 'content')
        unversionedTree[langObj.code] = await translateTree(
          localizedContentPath,
          langObj,
          unversionedTree.en,
        )
        setCategoryApplicableVersions(unversionedTree[langObj.code])
      }),
  )

  return unversionedTree
}

// Category pages inherit applicable versions from immediate children.
function setCategoryApplicableVersions(tree: UnversionedTree): void {
  for (const childPage of tree.childPages) {
    if (childPage.page.relativePath.endsWith('index.md')) {
      const combinedApplicableVersions: string[] = []
      let moreThanOneChild = false
      for (const childChildPage of childPage.childPages || []) {
        for (const version of childChildPage.page.applicableVersions) {
          if (!combinedApplicableVersions.includes(version)) {
            combinedApplicableVersions.push(version)
          }
        }
        setCategoryApplicableVersions(childPage)
        moreThanOneChild = true
      }
      if (
        // Landing pages with no children keep their original applicable versions.
        moreThanOneChild &&
        !equalSets(
          new Set(childPage.page.applicableVersions),
          new Set(combinedApplicableVersions),
        ) &&
        !childPage.page.relativePath.startsWith('early-access')
      ) {
        const newPermalinks = Permalink.derive(
          childPage.page.languageCode,
          childPage.page.relativePath,
          childPage.page.title,
          combinedApplicableVersions,
        )
        childPage.page.permalinks = newPermalinks
        childPage.page.applicableVersions = combinedApplicableVersions
      }
    }
  }
}

function equalSets(setA: Set<string>, setB: Set<string>): boolean {
  return setA.size === setB.size && [...setA].every((x) => setB.has(x))
}

async function translateTree(
  dir: string,
  langObj: Language,
  enTree: UnversionedTree,
): Promise<UnversionedTree> {
  const item: Partial<UnversionedTree> = {}
  const enPage = enTree.page
  const { ...enData } = enPage

  const basePath = dir
  const relativePath = enPage.relativePath
  const fullPath = path.join(basePath, relativePath)

  let data
  let content
  try {
    // Known-broken translations for code-security/concepts fall back to English.
    if (fullPath.includes('translations/') && relativePath === 'code-security/concepts/index.md') {
      throw new FrontmatterParsingError('Skipping known-broken translation file')
    }

    const read = await readFileContents(fullPath)
    content = read.content
    data = read.data as Record<string, unknown>

    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      // Errors-only frontmatter and fullwidth-colon scalars both need whole-file English fallback.
      throw new FrontmatterParsingError(JSON.stringify(read.errors), true)
    }

    for (const { property } of read.errors) {
      // Translatable key errors fall back to English; untranslated key errors do not.
      if (property && translatableFrontmatterKeys.includes(property)) {
        const message = `frontmatter error on '${property}' (in ${fullPath}) so falling back to English`
        if (DEBUG_TRANSLATION_FALLBACKS) {
          // Object context lets the health report attribute the fallback to this path.
          logger.warn(message, { path: relativePath })
        }
        if (THROW_TRANSLATION_ERRORS) {
          throw new Error(message)
        }
        // Dynamic property names need a string-indexed record.
        ;(data as Record<string, unknown>)[property] = (enData as Record<string, unknown>)[property]
      }
    }
  } catch (error) {
    // Missing or corrupt translations use the English page data and content.
    if ((error as FileSystemError).code === 'ENOENT' || error instanceof FrontmatterParsingError) {
      data = enData
      content = enPage.markdown
      const message =
        error instanceof FrontmatterParsingError && error.isYmlError
          ? `Unable to parse YAML frontmatter in ${fullPath}, falling back to English. Details: ${error.message}`
          : `Unable to initialize ${fullPath} because translation content file does not exist.`
      if (error instanceof FrontmatterParsingError && error.isYmlError) {
        // YAML parse failures always warn, then either serve English or throw.
        logger.warn(message, { path: relativePath })
      } else if (DEBUG_TRANSLATION_FALLBACKS) {
        // Expected high-volume missing translations log only when opted in.
        logger.warn(message, { path: relativePath })
      }
      if (THROW_TRANSLATION_ERRORS) {
        throw new Error(message)
      }
    } else {
      throw error
    }
  }

  const translatedData = Object.fromEntries(
    translatableFrontmatterKeys.map((key) => {
      return [key, (data as Record<string, unknown>)[key]]
    }),
  )

  // Content needs the same translation correction as frontmatter prose.
  translatedData.markdown = correctTranslatedContentStrings(content || '', enPage.markdown, {
    relativePath,
    code: langObj.code,
  })

  translatedData.title = correctTranslatedContentStrings(
    (translatedData.title as string) || '',
    enPage.title,
    {
      relativePath,
      code: langObj.code,
    },
  )
  if (translatedData.shortTitle) {
    translatedData.shortTitle = correctTranslatedContentStrings(
      translatedData.shortTitle as string,
      enPage.shortTitle || '',
      {
        relativePath,
        code: langObj.code,
      },
    )
  }
  if (translatedData.intro) {
    translatedData.intro = correctTranslatedContentStrings(
      translatedData.intro as string,
      enPage.intro,
      {
        relativePath,
        code: langObj.code,
      },
    )
  }

  // Page construction merges dynamic frontmatter fields with translated fields.
  ;(item as UnversionedTree).page = new Page(
    Object.assign(
      {},
      // English fields supply defaults for untranslated frontmatter.
      enData,
      // Core properties must point to the translated file.
      {
        basePath,
        relativePath,
        languageCode: langObj.code,
        fullPath,
      },
      // Translated properties replace their English defaults.
      translatedData,
    ) as unknown as ConstructorParameters<typeof Page>[0],
  ) as unknown as UnversionedTree['page']

  if (enTree.crossProductChild) {
    ;(item as UnversionedTree).crossProductChild = true
  }

  if (
    (item as UnversionedTree).page.children &&
    (item as UnversionedTree).page.children!.length > 0
  ) {
    ;(item as UnversionedTree).childPages = await Promise.all(
      enTree.childPages
        .filter((childTree: UnversionedTree) => {
          // Translations exclude early access pages.
          return childTree.page.relativePath.split(path.sep)[0] !== 'early-access'
        })
        .map((childTree: UnversionedTree) => translateTree(dir, langObj, childTree)),
    )
  }

  return item as UnversionedTree
}

// Navigation needs child page order preserved while each language and version gets its own tree.
// Versioned trees add the version permalink and drop child pages unavailable in that version.
export async function loadSiteTree(
  unversionedTree?: UnversionLanguageTree,
  languagesOnly: string[] = [],
): Promise<SiteTree> {
  const rawTree = Object.assign({}, unversionedTree || (await loadUnversionedTree(languagesOnly)))
  const siteTree: SiteTree = {}

  const langCodes = (languagesOnly.length && languagesOnly) || Object.keys(languages)
  await Promise.all(
    langCodes.map(async (langCode) => {
      if (!(langCode in rawTree)) {
        throw new Error(`No tree for language ${langCode}`)
      }
      const treePerVersion: { [version: string]: Tree } = {}
      await Promise.all(
        versions.map(async (version) => {
          treePerVersion[version] = await versionPages(
            Object.assign({}, rawTree[langCode]),
            version,
            langCode,
          )
        }),
      )

      siteTree[langCode] = treePerVersion
    }),
  )

  return siteTree
}

export async function versionPages(
  obj: UnversionedTree,
  version: string,
  langCode: string,
): Promise<Tree> {
  const tree = obj as unknown as Tree
  // Layouts read the versioned href directly from each tree node.
  const permalink = tree.page.permalinks.find(
    (pl) =>
      pl.pageVersion === version ||
      (pl.pageVersion === 'homepage' && version === nonEnterpriseDefaultVersion),
  )
  if (!permalink) {
    throw new Error(
      `No permalink for ${tree.page.fullPath} in language ${langCode} for version ${version}`,
    )
  }
  tree.href = permalink.href

  if (!tree.childPages) return tree
  const versionedChildPages = await Promise.all(
    tree.childPages
      .filter((childPage) => childPage.page.applicableVersions.includes(version))
      .map((childPage) =>
        versionPages(Object.assign({}, childPage) as unknown as UnversionedTree, version, langCode),
      ),
  )

  tree.childPages = [...versionedChildPages]

  return tree
}

// Page list consumers need a flat collection across languages.
export async function loadPageList(
  unversionedTree?: UnversionLanguageTree,
  languagesOnly: string[] = [],
): Promise<Page[]> {
  if (languagesOnly && !Array.isArray(languagesOnly)) {
    throw new Error("'languagesOnly' has to be an array")
  }
  const rawTree = unversionedTree || (await loadUnversionedTree(languagesOnly))
  const pageList: Page[] = []

  const langCodes = (languagesOnly.length && languagesOnly) || Object.keys(languages)
  await Promise.all(
    langCodes.map(async (langCode) => {
      if (!(langCode in rawTree)) {
        throw new Error(`No tree for language ${langCode}`)
      }
      await addToCollection(rawTree[langCode], pageList)
    }),
  )

  async function addToCollection(item: UnversionedTree, collection: Page[]): Promise<void> {
    if (!item.page) return
    collection.push(item.page as unknown as Page)

    if (!item.childPages) return
    await Promise.all(
      item.childPages
        // Cross-product children already exist at their original path, so duplicates violate search-index uniqueness.
        .filter((childPage: UnversionedTree) => !childPage.crossProductChild)
        .map(async (childPage: UnversionedTree) => await addToCollection(childPage, collection)),
    )
  }

  return pageList
}

export const loadPages = loadPageList

// Permalink keys make page lookup constant time.
export function createMapFromArray(pageList: Page[]): Record<string, Page> {
  const pageMap = pageList.reduce(
    (accumulatedMap: Record<string, Page>, page: Page) => {
      for (const permalink of page.permalinks) {
        accumulatedMap[permalink.href] = page
      }
      return accumulatedMap
    },
    {} as Record<string, Page>,
  )

  return pageMap
}

export async function loadPageMap(
  pageList?: Page[],
  languagesOnly: string[] = [],
): Promise<Record<string, Page>> {
  const pages = pageList || (await loadPageList(undefined, languagesOnly))
  const pageMap = createMapFromArray(pages)
  return pageMap
}

export default {
  loadUnversionedTree,
  loadSiteTree,
  loadPages: loadPageList,
  loadPageMap,
}
