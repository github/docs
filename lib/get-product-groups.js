import path from 'path'

import { productMap, data } from './all-products.js'
import { renderContentWithFallback } from './render-with-fallback.js'
import removeFPTFromPath from '#src/versions/lib/remove-fpt-from-path.js'

async function getPage(id, lang, pageMap, context) {
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

  if (!external) {
    // First we have to find it as a page object based on its ID.
    href = removeFPTFromPath(path.posix.join('/', lang, context.currentVersion, id))
    if (!pageMap[href]) {
      // If the page is not available in the *current* version, we
      // fall back it its default version, which is `product.versions[0]`.
      // For example, you're on `/en/enterprise-server@3.1` and you're
      // but a `/foo/bar` is only available in `enterprise-cloud@latest`.
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
    if (!name) {
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

export async function getProductGroups(pageMap, lang, context) {
  return await Promise.all(
    data.childGroups.map(async (group) => {
      return {
        name: group.name,
        icon: group.icon || null,
        octicon: group.octicon || null,
        // Typically the children are product IDs, but we support deeper page paths too
        children: (
          await Promise.all(group.children.map((id) => getPage(id, lang, pageMap, context)))
        ).filter(Boolean),
      }
    }),
  )
}
