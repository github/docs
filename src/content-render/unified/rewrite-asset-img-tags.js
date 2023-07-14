import { visit, SKIP } from 'unist-util-visit'

/**
 * `structuredClone` was added in Node 17 and onwards.
 * https://developer.mozilla.org/en-US/docs/Web/API/structuredClone#browser_compatibility
 *
 * At the time of writing, we use Node 18 in CI and in production, but
 * someone might be previewing locally with an older version so
 * let's make a quick polyfill.
 * We could add a specific (`js-core`) package for this polyfill, but it's
 * fortunately not necessary in this context because it's safe enough
 * clone by turning into a string and back again.
 */
function structuredClonePolyfill(obj) {
  if (typeof structuredClone !== 'undefined') {
    return structuredClone(obj)
  } else {
    // Note, that this naive clone would turn Date objects into strings.
    // So don't use this polyfill if certain values aren't primitives
    // that JSON.parse can handle.
    return JSON.parse(JSON.stringify(obj))
  }
}

// This number must match a width we're willing to accept in a dynamic
// asset URL.
// (note this is exported for the sake of end-to-end tests' assertions)
export const MAX_WIDTH = 1440

// Matches any <img> tags with an href that starts with `/assets/`
const matcher = (node) =>
  node.type === 'element' &&
  node.tagName === 'img' &&
  node.properties &&
  node.properties.src &&
  node.properties.src.startsWith('/assets/')

/**
 * Where it can mutate the AST to swap from:
 *
 *   <img src="/assets/help.png" alt="Alternative text">
 *
 * To:
 *
 *   <picture>
 *     <source srcset="/assets/help.web" format="image/webp">
 *     <img src="/assets/help.png" alt="Alternative text">
 *   </picture>
 *
 * */
export default function rewriteAssetImgTags() {
  return (tree) => {
    visit(tree, matcher, (node) => {
      if (node.properties.src.endsWith('.png')) {
        const copyPNG = structuredClonePolyfill(node)

        const sourceWEBP = {
          type: 'element',
          tagName: 'source',
          properties: {
            srcset: injectMaxWidth(node.properties.src.replace(/\.png$/, '.webp'), MAX_WIDTH),
            type: 'image/webp',
          },
          children: [],
        }
        node.children.push(sourceWEBP)

        node.children.push(copyPNG)
        node.tagName = 'picture'
        delete node.properties.alt
        delete node.properties.src
        // Don't go further or else you end up in an infinite recursion
        return SKIP
      }
    })
  }
}

/**
 * Given a pathname, insert the `/_mw-DDDD/`.
 *
 * For example, if the pathname is `/assets/cb-1234/images/foo.png`
 * return `/assets/cb-1234/_mw-1440/images/foo.png`
 */
function injectMaxWidth(pathname, maxWidth) {
  const split = pathname.split('/')
  // This prefix needs to match what's possibly expected in dynamic-assets.js
  const inject = `mw-${maxWidth}`
  if (split.includes(inject)) {
    throw new Error(`pathname already includes '${inject}'`)
  }
  split.splice(3, 0, inject)
  return split.join('/')
}
