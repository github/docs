import path from 'path'

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

interface FileSystemError extends Error {
  code?: string
}

// If you run `export DEBUG_TRANSLATION_FALLBACKS=true` in your terminal,
// every time a translation file fails to initialize we fall back to English
// and write a warning to stdout.
const DEBUG_TRANSLATION_FALLBACKS = Boolean(
  JSON.parse(process.env.DEBUG_TRANSLATION_FALLBACKS || 'false'),
)
// If you don't want to fall back to English automatically on corrupt
// translation files, set `export THROW_TRANSLATION_ERRORS=true`
const THROW_TRANSLATION_ERRORS = Boolean(
  JSON.parse(process.env.THROW_TRANSLATION_ERRORS || 'false'),
)

const versions = Object.keys(allVersions)

class FrontmatterParsingError extends Error {}

// Note! As of Nov 2022, the schema says that 'product' is translatable
// which is surprising since only a single page has prose in it.
const translatableFrontmatterKeys = Object.entries(frontmatterSchema.schema.properties)
  .filter(([, value]: [string, any]) => value.translatable)
  .map(([key]) => key)

/**
 * We only need to initialize pages _once per language_ since pages don't change per version. So we do that
 * first since it's the most expensive work. This gets us a nested object with pages attached that we can use
 * as the basis for the siteTree after we do some versioning. We can also use it to derive the pageList.
 */
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

function setCategoryApplicableVersions(tree: UnversionedTree): void {
  // Now that the tree has been fully computed, we can for any node that
  // is a category page, re-set its `.applicableVersions` and `.permalinks`
  // based on the union set of all its immediate children's
  // `.applicableVersions`.
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
        // Some landing pages have no children at all.
        // For example the search/index.md page. With no children,
        // the combined applicableVersions would be [].
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
    const read = await readFileContents(fullPath)
    // If it worked, great!
    content = read.content
    data = read.data

    if (!data) {
      // If the file's frontmatter Yaml is entirely broken,
      // the result of `readFileContents()` is that you just
      // get a `errors` key. E.g.
      //
      //   errors: [
      //     {
      //       reason: 'invalid frontmatter entry',
      //       message: 'YML parsing error!',
      //       filepath: 'translations/ja-JP/content/get-started/index.md'
      //     }
      //   ]
      //
      // If this the case throw error so we can lump this error with
      // how we deal with the file not even being present on disk.
      throw new FrontmatterParsingError(read.errors)
    }

    for (const { property } of read.errors) {
      // If any of the errors happened on keys that are considered
      // translatable, we can't accept that and have to fall back to
      // English.
      // For example, if a Japanese page's frontmatter lacks `title`,
      // (which triggers a 'is required' error) you can't include it
      // because you'd have a Page with `{title: undefined}`.
      // The beauty in this is that if the translated content file
      // has something wrong with, say, the `versions` frontmatter key
      // we don't even care because we won't be using it anyway.
      if (translatableFrontmatterKeys.includes(property)) {
        const message = `frontmatter error on '${property}' (in ${fullPath}) so falling back to English`
        if (DEBUG_TRANSLATION_FALLBACKS) {
          // The object format is so the health report knows which path the issue is on
          console.warn({ message, path: relativePath })
        }
        if (THROW_TRANSLATION_ERRORS) {
          throw new Error(message)
        }
        // Using any because the property is dynamic
        ;(data as any)[property] = (enData as any)[property]
      }
    }
  } catch (error) {
    // If it didn't work because it didn't exist, don't fret,
    // we'll use the English equivalent's data and content.
    if ((error as FileSystemError).code === 'ENOENT' || error instanceof FrontmatterParsingError) {
      data = enData
      content = enPage.markdown
      const message = `Unable to initialize ${fullPath} because translation content file does not exist.`
      if (DEBUG_TRANSLATION_FALLBACKS) {
        // The object format is so the health report knows which path the issue is on
        console.warn({ message, path: relativePath })
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
      return [key, data[key]]
    }),
  )

  // The "content" isn't a frontmatter key
  translatedData.markdown = correctTranslatedContentStrings(content, enPage.markdown, {
    relativePath,
    code: langObj.code,
  })

  translatedData.title = correctTranslatedContentStrings(translatedData.title || '', enPage.title, {
    relativePath,
    code: langObj.code,
  })
  if (translatedData.shortTitle) {
    translatedData.shortTitle = correctTranslatedContentStrings(
      translatedData.shortTitle,
      enPage.shortTitle || '',
      {
        relativePath,
        code: langObj.code,
      },
    )
  }
  if (translatedData.intro) {
    translatedData.intro = correctTranslatedContentStrings(translatedData.intro, enPage.intro, {
      relativePath,
      code: langObj.code,
    })
  }

  // Using any to handle the complex object merging for Page constructor
  ;(item as UnversionedTree).page = new Page(
    Object.assign(
      {},
      // By default, shallow-copy everything from the English equivalent.
      enData,
      // Overlay with the translations core properties.
      {
        basePath,
        relativePath,
        languageCode: langObj.code,
        fullPath,
      },
      // And the translations translated properties.
      translatedData,
    ) as any,
  ) as any

  // Preserve the crossProductChild flag from the English tree
  if (enTree.crossProductChild) {
    ;(item as UnversionedTree).crossProductChild = true
  }

  if (
    ((item as UnversionedTree).page as any).children &&
    ((item as UnversionedTree).page as any).children.length > 0
  ) {
    ;(item as UnversionedTree).childPages = await Promise.all(
      enTree.childPages
        .filter((childTree: UnversionedTree) => {
          // Translations should not get early access pages at all.
          return childTree.page.relativePath.split(path.sep)[0] !== 'early-access'
        })
        .map((childTree: UnversionedTree) => translateTree(dir, langObj, childTree)),
    )
  }

  return item as UnversionedTree
}

/**
 * The siteTree is a nested object with pages for every language and version, useful for nav because it
 * contains parent, child, and sibling relationships:
 *
 * siteTree[languageCode][version].childPages[<array of pages>].childPages[<array of pages>] (etc...)

* Given an unversioned tree of all pages per language, we can walk it for each version and do a couple operations:
 * 1. Add a versioned href to every item, where the href is the relevant permalink for the current version.
 * 2. Drop any child pages that are not available in the current version.
 *
 * Order of languages and versions doesn't matter, but order of child page arrays DOES matter (for navigation).
*/
export async function loadSiteTree(
  unversionedTree?: UnversionLanguageTree,
  languagesOnly: string[] = [],
): Promise<SiteTree> {
  const rawTree = Object.assign({}, unversionedTree || (await loadUnversionedTree(languagesOnly)))
  const siteTree: SiteTree = {}

  const langCodes = (languagesOnly.length && languagesOnly) || Object.keys(languages)
  // For every language...
  await Promise.all(
    langCodes.map(async (langCode) => {
      if (!(langCode in rawTree)) {
        throw new Error(`No tree for language ${langCode}`)
      }
      const treePerVersion: { [version: string]: Tree } = {}
      // in every version...
      await Promise.all(
        versions.map(async (version) => {
          // "version" the pages.
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

export async function versionPages(obj: any, version: string, langCode: string): Promise<Tree> {
  // Add a versioned href as a convenience for use in layouts.
  const permalink = obj.page.permalinks.find(
    (pl: any) =>
      pl.pageVersion === version ||
      (pl.pageVersion === 'homepage' && version === nonEnterpriseDefaultVersion),
  )
  if (!permalink) {
    throw new Error(
      `No permalink for ${obj.page.fullPath} in language ${langCode} for version ${version}`,
    )
  }
  obj.href = permalink.href

  if (!obj.childPages) return obj
  const versionedChildPages = await Promise.all(
    obj.childPages
      // Drop child pages that do not apply to the current version
      .filter((childPage: any) => childPage.page.applicableVersions.includes(version))
      // Version the child pages recursively.
      .map((childPage: any) => versionPages(Object.assign({}, childPage), version, langCode)),
  )

  obj.childPages = [...versionedChildPages]

  return obj
}

// Derive a flat array of Page objects in all languages.
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
    collection.push(item.page as any)

    if (!item.childPages) return
    await Promise.all(
      item.childPages.map(
        async (childPage: UnversionedTree) => await addToCollection(childPage, collection),
      ),
    )
  }

  return pageList
}

export const loadPages = loadPageList

// Create an object from the list of all pages with permalinks as keys for fast lookup.
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
