import path from 'path'
import fs from 'fs/promises'

import type { Page, ProductGroup, ProductGroupChild, Context } from '@/types'
import { productMap, data } from '@/products/lib/all-products'
import { renderContentWithFallback } from '@/languages/lib/render-with-fallback'
import removeFPTFromPath from '@/versions/lib/remove-fpt-from-path'
import frontmatter from '@/frame/lib/read-frontmatter'
import languages from '@/languages/lib/languages-server'

type PageMap = Record<string, Page>

// childGroups stores ids such as code-security/dependabot, not localized, versioned hrefs.
// Try the localized current-version href first, then fall back to product.versions[0]
// from productMap.
async function getPage(
  id: string,
  lang: string,
  pageMap: PageMap,
  context: Context,
): Promise<ProductGroupChild | undefined> {
  const productId = id.split('/')[0]
  const product = productMap[productId]

  const external = product.external || false

  let href = product.href

  let name = product.name

  if (!context.currentVersion) throw new Error('context.currentVersion is not set')

  if (!external) {
    href = removeFPTFromPath(path.posix.join('/', lang, context.currentVersion, id))
    if (!pageMap[href]) {
      if (!product.versions) throw new Error(`Product ${productId} has no versions`)
      href = removeFPTFromPath(path.posix.join('/', lang, product.versions[0], id))
    }
    const page = pageMap[href]
    if (!page) {
      throw new Error(
        `Unable to find a page by the href '${href}'. Review your 'childGroups' front matter.`,
      )
    }

    // Returning undefined lets the caller filter products unavailable in the current version.
    const isFPT = context.currentVersion === 'free-pro-team@latest'
    if (!isFPT && !page.applicableVersions.includes(context.currentVersion)) {
      return
    }

    if (page.rawShortTitle) {
      name = await renderContentWithFallback(page, 'rawShortTitle', context, {
        textOnly: true,
        throwIfEmpty: false,
      })
    }
    // Fall back to rawTitle when rawShortTitle is missing or Liquid renders it empty.
    if (!name || !page.rawShortTitle) {
      name = await renderContentWithFallback(page, 'rawTitle', context, {
        textOnly: true,
      })
    }
  }
  // ProductSelectionCard only needs these props.
  return {
    id,
    name,
    href,
    external,
  }
}

interface ProductGroupData {
  name: string
  icon?: string
  octicon?: string
  children: string[]
}

export async function getLocalizedGroupNames(lang: string): Promise<{ [key: string]: string }> {
  if (lang === 'en') {
    return {}
  }

  const translationRoot = languages[lang as keyof typeof languages]?.dir
  if (!translationRoot) {
    return {}
  }

  try {
    const localizedHomepage = path.join(translationRoot, 'content', 'index.md')
    const localizedContent = await fs.readFile(localizedHomepage, 'utf8')
    const { data: localizedData } = frontmatter(localizedContent)

    if (!localizedData?.childGroups) {
      return {}
    }

    return createOcticonToNameMap(localizedData.childGroups)
  } catch {
    return {}
  }
}

export function createOcticonToNameMap(childGroups: ProductGroupData[]): { [key: string]: string } {
  const octiconToName: { [key: string]: string } = {}

  for (const group of childGroups) {
    if (group.octicon && group.name) {
      octiconToName[group.octicon] = group.name
    }
  }

  return octiconToName
}

export function mapEnglishToLocalizedNames(
  englishGroups: ProductGroupData[],
  localizedByOcticon: { [key: string]: string },
): { [key: string]: string } {
  const nameMap: { [key: string]: string } = {}

  for (const englishGroup of englishGroups) {
    if (englishGroup.octicon && localizedByOcticon[englishGroup.octicon]) {
      nameMap[englishGroup.name] = localizedByOcticon[englishGroup.octicon]
    }
  }

  return nameMap
}

export async function getProductGroups(
  pageMap: PageMap,
  lang: string,
  context: Context,
): Promise<ProductGroup[]> {
  // Use English childGroups for octicons and children; localized files supply names only.
  const englishChildGroups = data?.childGroups || []

  const localizedByOcticon = await getLocalizedGroupNames(lang)
  const localizedNames = mapEnglishToLocalizedNames(englishChildGroups, localizedByOcticon)

  return await Promise.all(
    englishChildGroups.map(async (group: ProductGroupData) => {
      const localizedName = localizedNames[group.name] || group.name
      return {
        name: localizedName,
        icon: group.icon || null,
        octicon: group.octicon || null,
        // Children are usually product IDs, but deeper page paths are also valid.
        children: (
          await Promise.all(group.children.map((id: string) => getPage(id, lang, pageMap, context)))
        ).filter(Boolean) as ProductGroupChild[],
      }
    }),
  )
}
