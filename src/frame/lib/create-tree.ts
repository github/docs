import path from 'path'
import fs from 'fs/promises'

import PageClass from './page'
import type { UnversionedTree, Page } from '@/types'
import { createLogger } from '@/observability/logger'
const logger = createLogger(import.meta.url)

const isProduction = process.env.NODE_ENV === 'production'

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
        logger.warn(msg, { path: originalPath })
        return
      }
      throw new Error(msg)
    }
  }

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

  const item: UnversionedTree = {
    page,
    // Development reloads reuse subtrees only when the ordered children list matches.
    children: page.children || [],
    childPages: [],
  }

  if (page.children) {
    assertUniqueChildren(page)
    item.childPages = (
      await Promise.all(
        (page.children as string[]).map(async (child: string, i: number) => {
          let childPreviousTree: UnversionedTree | undefined
          if (previousTree && previousTree.childPages) {
            if (equalArray(page.children as string[], previousTree.children)) {
              // Matching child names and order keep indexes tied to the same previous subtree.
              childPreviousTree = previousTree.childPages[i]
            }
          }

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
          if (!subTree) {
            // Remove skipped subtrees so development reloads compare against the rendered child list.
            ;(page.children as string[]) = (page.children as string[]).filter(
              (c: string) => c !== child,
            )
          }
          return subTree
        }),
      )
    ).filter((tree): tree is UnversionedTree => tree !== undefined)
  }

  return item
}

function equalArray(arr1: string[], arr2: string[]): boolean {
  return arr1.length === arr2.length && arr1.every((value, i) => value === arr2[i])
}

async function getMtime(filePath: string): Promise<number> {
  if (isProduction) {
    // Production skips the full stat but still verifies existence.
    await fs.access(filePath)
    return 1
  }
  return Math.round((await fs.stat(filePath)).mtimeMs)
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
