import path from 'path'
import fs from 'fs/promises'

import PageClass from './page'
import type { UnversionedTree, Page } from '@/types'
import { createLogger } from '@/observability/logger'
const logger = createLogger(import.meta.url)

const isProduction = process.env.NODE_ENV === 'production'

// Development rebuilds the tree on every request, so each missing path warns once until it appears.
const warnedMissingPaths = new Set<string>()

export default async function createTree(
  originalPath: string,
  rootPath?: string,
  previousTree?: UnversionedTree,
): Promise<UnversionedTree | undefined> {
  const basePath = rootPath || originalPath

  // Recursive children arrive as /<link>; <path>.md wins over <path>/index.md.
  let filepath: string
  let mtime: number
  // Reading <path>.md first identifies file versus directory and captures its mtime.
  try {
    filepath = `${originalPath}.md`
    mtime = await getMtime(filepath)
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
      throw error
    }
    filepath = `${originalPath}/index.md`
    // If child index.md is missing, the thrown path points the writer to the bad children entry.
    try {
      mtime = await getMtime(filepath)
    } catch (innerError) {
      if ((innerError as NodeJS.ErrnoException).code !== 'ENOENT') {
        throw innerError
      }
      // Missing early-access content, including an uncloned repo, does not block unrelated PRs.
      const msg = `Cannot find a content file at ${originalPath}. Check the 'children' frontmatter in the parent index.md.`

      if (
        originalPath === 'content/early-access' ||
        originalPath.startsWith('content/early-access/')
      ) {
        if (!warnedMissingPaths.has(originalPath)) {
          warnedMissingPaths.add(originalPath)
          logger.warn(msg, { path: originalPath })
        }
        return
      }
      throw new Error(msg)
    }
  }
  warnedMissingPaths.delete(originalPath)

  const relativePath = filepath.replace(`${basePath}/`, '')

  // Reuse the previous tree when mtime is unchanged because disk reads are slow.
  let page: Page
  if (previousTree && previousTree.page.mtime === mtime) {
    // An unchanged source file keeps the previous Page instance valid.
    page = previousTree.page
  } else {
    // Missing or stale previous trees need a freshly initialized Page.
    const newPage = await PageClass.init({
      basePath,
      relativePath,
      languageCode: 'en',
    })
    if (!newPage) {
      throw Error(`Cannot initialize page for ${filepath}`)
    }
    page = newPage as unknown as Page
  }

  // A reused page has filtered children, so the declared list comes from the previous tree.
  const declaredChildren =
    previousTree && previousTree.page === page ? previousTree.children : page.children || []

  const item: UnversionedTree = {
    page,
    // Declared children stay intact so later reloads retry skipped content that appears on disk.
    children: declaredChildren,
    childPages: [],
  }

  if (declaredChildren.length) {
    assertUniqueChildren(page)
    // The previous page's children line up with its childPages, so cached subtrees match by name.
    const previousChildPages = new Map<string, UnversionedTree>()
    if (previousTree) {
      for (const [i, child] of (previousTree.page.children || []).entries()) {
        previousChildPages.set(child, previousTree.childPages[i])
      }
    }
    const subTrees = await Promise.all(
      declaredChildren.map(async (child: string) => {
        const childPreviousTree = previousChildPages.get(child)

        // Absolute paths such as /content/actions/workflows pull a subtree, even from another product.
        let childPath: string
        if (child.startsWith('/content/')) {
          const absoluteChildPath = child.slice('/content/'.length)
          childPath = path.posix.join(basePath, absoluteChildPath)

          // Reject path traversal by requiring the resolved path to stay under the content root.
          const resolvedPath = path.resolve(childPath)
          const resolvedBasePath = path.resolve(basePath)
          if (!resolvedPath.startsWith(resolvedBasePath + path.sep)) {
            throw new Error(
              `Invalid child path "${child}" in ${originalPath}/index.md - path traversal detected. ` +
                `Resolved path "${resolvedPath}" escapes content directory "${resolvedBasePath}".`,
            )
          }
        } else {
          // Relative child paths resolve from their parent path.
          childPath = path.posix.join(originalPath, child)
        }

        const subTree = await createTree(childPath, basePath, childPreviousTree)
        if (subTree && child.startsWith('/content/')) {
          // Cross-product children stay out of the sidebar.
          subTree.crossProductChild = true
        }
        return subTree
      }),
    )
    // Skipped subtrees, such as missing early-access content, leave the rendered children list.
    page.children = declaredChildren.filter((_, i) => subTrees[i])
    item.childPages = subTrees.filter((tree): tree is UnversionedTree => tree !== undefined)
  }

  return item
}

async function getMtime(filePath: string): Promise<number> {
  if (isProduction) {
    // Production skips the full stat but still verifies existence.
    await fs.access(filePath)
    return 1
  }
  return (await fs.stat(filePath)).mtimeMs
}

function assertUniqueChildren(page: Page): void {
  const children = page.children || []
  if (children.length !== new Set(children).size) {
    const count: Record<string, number> = {}
    for (const entry of children) {
      count[entry] = 1 + (count[entry] || 0)
    }
    let msg = `${page.relativePath} has duplicates in the 'children' key.`
    for (const [entry, times] of Object.entries(count)) {
      if (times > 1) msg += ` '${entry}' is repeated ${times} times. `
    }
    throw new Error(msg)
  }
}
