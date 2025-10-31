import path from 'path'
import fs from 'fs/promises'

import type { Page, ProductGroup, ProductGroupChild, Context } from '@/types'
import { productMap, data } from '@/products/lib/all-products'
import { renderContentWithFallback } from '@/languages/lib/render-with-fallback'
import removeFPTFromPath from '@/versions/lib/remove-fpt-from-path'
import frontmatter from '@/frame/lib/read-frontmatter'
import languages from '@/languages/lib/languages-server'

type PageMap = Record<string, Page>

async function getPage(
  id: string,
  lang: string,
  pageMap: PageMap,
  context: Context,
): Promise<ProductGroupChild | undefined> {
  const productId = id.split('/')[0]
  const product = productMap[productId]

  const external = product.external || false // undefined becomes false

  // The href depends. Initially all we have is an `id` which might be
  // something like 'code-security/dependabot'.
  // To get from that to a Page instance, we have to "guess" what the
  // href might be.
  // If URL currently is `/fr/enterprise-server@3.9`,
  // we're going to try `/fr/enterprise-server@3.9/code-security/dependabot`
  // first. And if the URL is `/en` we'll try `/en/code-security/dependabot`.
  // But some pages are not available in all versions.
  // So we have to try `product.versions[0]` which comes from the `productMap`
  // (not be confused with the `pageMap`!)
  // Once we have a page, we can get to its `.applicableVersions`.
  // This way, we get the best of both worlds. We use the `currentVersion`
  // if it's applicable, but we fall back to the first version if it's not.
  let href = product.href

  let name = product.name

  if (!context.currentVersion) throw new Error('context.currentVersion is not set')

  if (!external) {
    // First we have to find it as a page object based on its ID.
    href = removeFPTFromPath(path.posix.join('/', lang, context.currentVersion, id))
    if (!pageMap[href]) {
      // If the page is not available in the *current* version, we
      // fall back it its default version, which is `product.versions[0]`.
      // For example, you're on `/en/enterprise-server@3.1` and you're
      // but a `/foo/bar` is only available in `enterprise-cloud@latest`.
      if (!product.versions) throw new Error(`Product ${productId} has no versions`)
      href = removeFPTFromPath(path.posix.join('/', lang, product.versions[0], id))
    }
    const page = pageMap[href]
    if (!page) {
      throw new Error(
        `Unable to find a page by the href '${href}'. Review your 'childGroups' front matter.`,
      )
    }

    // Some should not be included for the current version, and returning
    // undefined here means this entry will be filtered out by the caller.
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
    // Either the page didn't have a `rawShortTitle` or it was empty when
    // rendered out with Liquid. Either way, have to fall back to `rawTitle`.
    if (!name || !page.rawShortTitle) {
      name = await renderContentWithFallback(page, 'rawTitle', context, {
        textOnly: true,
      })
    }
  }
  // Return only the props needed for the ProductSelectionCard, since
  // that's the only place this is ever used.
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
    // If localized file doesn't exist or can't be read, return empty map
    return {}
  }
}

export function createOcticonToNameMap(childGroups: ProductGroupData[]): { [key: string]: string } {
  const octiconToName: { [key: string]: string } = {}

  childGroups.forEach((group: ProductGroupData) => {
    if (group.octicon && group.name) {
      octiconToName[group.octicon] = group.name
    }
  })

  return octiconToName
}

export function mapEnglishToLocalizedNames(
  englishGroups: ProductGroupData[],
  localizedByOcticon: { [key: string]: string },
): { [key: string]: string } {
  const nameMap: { [key: string]: string } = {}

  englishGroups.forEach((englishGroup: ProductGroupData) => {
    if (englishGroup.octicon && localizedByOcticon[englishGroup.octicon]) {
      nameMap[englishGroup.name] = localizedByOcticon[englishGroup.octicon]
    }
  })

  return nameMap
}

export async function getProductGroups(
  pageMap: PageMap,
  lang: string,
  context: Context,
): Promise<ProductGroup[]> {
  // Always use English version for structure (octicon, children)
  const englishChildGroups = data?.childGroups || []

  // Get localized names if available
  const localizedByOcticon = await getLocalizedGroupNames(lang)
  const localizedNames = mapEnglishToLocalizedNames(englishChildGroups, localizedByOcticon)

  return await Promise.all(
    englishChildGroups.map(async (group: ProductGroupData) => {
      const localizedName = localizedNames[group.name] || group.name
      return {
        name: localizedName,
        icon: group.icon || null,
        octicon: group.octicon || null,
        // Typically the children are product IDs, but we support deeper page paths too
        children: (
          await Promise.all(group.children.map((id: string) => getPage(id, lang, pageMap, context)))
        ).filter(Boolean) as ProductGroupChild[],
      }
    }),
  )
}
