import path from 'path'

import { productMap, data } from './all-products.js'
import { renderContentWithFallback } from './render-with-fallback.js'
import removeFPTFromPath from './remove-fpt-from-path.js'
import getApplicableVersions from './get-applicable-versions.js'

async function getPage(id, lang, pageMap, context) {
  const productId = id.split('/')[0]
  const product = productMap[productId]
  const external = product.external || false // undefined becomes false
  // Adding external links to a product group here due to accessibility design changes
  // where we removed the sidebar on the homepage - docs-team 2965
  const href = external
    ? product.href
    : removeFPTFromPath(path.posix.join('/', lang, product.versions[0], id))
  let name = product.name
  let versions = getApplicableVersions('*')

  if (!external) {
    const page = pageMap[href]
    if (!page) {
      throw new Error(
        `Unable to find a page by the href '${href}'. Review your 'childGroups' frontmatter maybe.`,
      )
    }
    if (page.rawShortTitle) {
      name = await renderContentWithFallback(page, 'rawShortTitle', context, {
        textOnly: true,
        throwIfEmpty: false,
      })
    }
    // Either the page didn't have a `rawShortTitle` or it was empty when
    // rendered out with Liquid. Either way, have to fall back to `rawTitle`.
    if (!name) {
      name = await renderContentWithFallback(page, 'rawTitle', context, {
        textOnly: true,
      })
    }

    versions = page.applicableVersions
  }
  // Return only the props needed for the ProductSelectionCard, since
  // that's the only place this is ever used.
  return {
    id,
    name,
    href: href.replace(`/${lang}/`, '/'),
    versions,
    external,
  }
}

export async function getProductGroups(pageMap, lang, context) {
  return await Promise.all(
    data.childGroups.map(async (group) => {
      return {
        name: group.name,
        icon: group.icon || null,
        octicon: group.octicon || null,
        // Typically the children are product IDs, but we support deeper page paths too
        children: await Promise.all(
          group.children.map((id) => getPage(id, lang, pageMap, context)),
        ),
      }
    }),
  )
}
