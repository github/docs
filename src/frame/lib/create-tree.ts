import path from 'path'
import fs from 'fs/promises'

import PageClass from './page'
import type { UnversionedTree, Page } from '@/types'

export default async function createTree(
  originalPath: string,
  rootPath?: string,
  previousTree?: UnversionedTree,
): Promise<UnversionedTree | undefined> {
  const basePath = rootPath || originalPath

  // On recursive runs, this is processing page.children items in `/<link>` format.
  // If the path exists as is, assume this is a directory with a child index.md.
  // Otherwise, assume it's a child .md file and add `.md` to the path.
  let filepath: string
  let mtime: number
  // This kills two birds with one stone. We (attempt to) read it as a file,
  // to find out if it's a directory or a file and whence we know that
  // we also collect it's modification time.
  try {
    filepath = `${originalPath}.md`
    mtime = await getMtime(filepath)
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
      throw error
    }
    filepath = `${originalPath}/index.md`
    // Note, if this throws, that's quite fine. It usually means that
    // there's a `index.md` whose `children:` entry lists something that
    // doesn't exist on disk. So the writer who tries to review the
    // page will see the error and it's hopefully clear what's actually
    // wrong.
    try {
      mtime = await getMtime(filepath)
    } catch (innerError) {
      if ((innerError as NodeJS.ErrnoException).code !== 'ENOENT') {
        throw innerError
      }
      // Throw an error if we can't find a content file associated with the children: entry.
      // But don't throw an error if the user is running the site locally and hasn't cloned the Early Access repo.
      if (originalPath === 'content/early-access') {
        return
      }
      throw new Error(
        `Cannot find a content file at ${originalPath}. Fix the children frontmatter entry "/${path.basename(
          originalPath,
        )}" in ${path.dirname(originalPath)}/index.md.\n`,
      )
    }
  }

  const relativePath = filepath.replace(`${basePath}/`, '')

  // Reading in a file from disk is slow and best avoided if we can be
  // certain it isn't necessary. If the previous tree is known and that
  // tree's page node's `mtime` hasn't changed, we can use that instead.
  let page: Page
  if (previousTree && previousTree.page.mtime === mtime) {
    // A save! We can use the same exact Page instance from the previous
    // tree because the assumption is that since the `.md` file it was
    // created from hasn't changed (on disk) the instance object wouldn't
    // change.
    page = previousTree.page
  } else {
    // Either the previous tree doesn't exist yet or the modification time
    // of the file on disk has changed.
    const newPage = await PageClass.init({
      basePath,
      relativePath,
      languageCode: 'en',
      mtime,
      // PageInitOptions doesn't include mtime in its type definition, but PageReadResult uses `& any`
      // which allows additional properties to be passed through to the Page constructor
    } as any)
    if (!newPage) {
      throw Error(`Cannot initialize page for ${filepath}`)
    }
    page = newPage as unknown as Page
  }

  // Create the root tree object on the first run, and create children recursively.
  const item: UnversionedTree = {
    page,
    // This is only here for the sake of reloading the tree later which
    // only happens in development mode.
    // The reloading of the tree compares the list of children (array of
    // strings) with what it might have been in the previous tree.
    // Then it can use the "n'th" access to figure out what the
    // "previous sub tree" was for each child.
    // So if a writer edits the 'children:' frontmatter property
    // this value now will be different from what it was before.
    // It's not enough to rely on *length* of the array before and after
    // because the change could have been to remove one and add another.
    // Page class has dynamic frontmatter properties like 'children' that aren't in the type definition
    children: (page as any).children || [],
    childPages: [],
  }

  // Process frontmatter children recursively.
  // Page class has dynamic frontmatter properties like 'children' that aren't in the type definition
  if ((page as any).children) {
    assertUniqueChildren(page as any)
    item.childPages = (
      await Promise.all(
        // Page class has dynamic frontmatter properties like 'children' that aren't in the type definition
        ((page as any).children as string[]).map(async (child: string, i: number) => {
          let childPreviousTree: UnversionedTree | undefined
          if (previousTree && previousTree.childPages) {
            // Page class has dynamic frontmatter properties like 'children' that aren't in the type definition
            if (equalArray((page as any).children, previousTree.children)) {
              // We can only safely rely on picking the same "n'th" item
              // from the array if we're confident the names are the same
              // as they were before.
              // Otherwise, suppose you add an entry to `children:`
              // and add another, then length would be the same but
              // each position might relate to different child.
              childPreviousTree = previousTree.childPages[i]
            }
          }

          // Handle absolute /content/ paths - allows cross-product directory inclusion
          // e.g., /content/actions/workflows will include the entire actions/workflows tree
          let childPath: string
          if (child.startsWith('/content/')) {
            // Absolute content path - resolve from the content root
            // Strip '/content/' prefix and join with the base content directory
            const absoluteChildPath = child.slice('/content/'.length)
            childPath = path.posix.join(basePath, absoluteChildPath)

            // Security check: ensure the resolved path stays within the content directory
            // This prevents path traversal attacks using sequences like '../'
            const resolvedPath = path.resolve(childPath)
            const resolvedBasePath = path.resolve(basePath)
            if (!resolvedPath.startsWith(resolvedBasePath + path.sep)) {
              throw new Error(
                `Invalid child path "${child}" in ${originalPath}/index.md - path traversal detected. ` +
                  `Resolved path "${resolvedPath}" escapes content directory "${resolvedBasePath}".`,
              )
            }
          } else {
            // Traditional relative path
            childPath = path.posix.join(originalPath, child)
          }

          const subTree = await createTree(childPath, basePath, childPreviousTree)
          if (subTree && child.startsWith('/content/')) {
            // Mark this subtree as a cross-product child so it can be excluded from the sidebar
            subTree.crossProductChild = true
          }
          if (!subTree) {
            // Remove that children.
            // For example, the 'early-access' might have been in the
            // `children:` property but it was decided to be skipped
            // (early exit instead of returning a tree). So let's
            // mutate the `page.children` so we can benefit from the
            // ability to reload the site tree on consecutive requests.
            // Page class has dynamic frontmatter properties like 'children' that aren't in the type definition
            ;(page as any).children = ((page as any).children as string[]).filter(
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
  // Use mtimeMs, which is a regular floating point number, instead of the
  // mtime which is a Date based on that same number.
  // Otherwise, if we use the Date instances, we have to compare
  // them using `oneDate.getTime() === anotherDate.getTime()`.
  const { mtimeMs } = await fs.stat(filePath)
  // The `mtimeMs` is a number like `1669827766942.7954`
  // From the docs:
  // "The timestamp indicating the last time this file was modified expressed
  // in nanoseconds since the POSIX Epoch."
  // But the number isn't actually all that important. We just need it to
  // later be able to know if it changed. We round it to the nearest
  // millisecond.
  return Math.round(mtimeMs)
}

// Page class has dynamic frontmatter properties that aren't in the type definition
function assertUniqueChildren(page: any): void {
  if (page.children.length !== new Set(page.children).size) {
    const count: Record<string, number> = {}
    for (const entry of page.children) {
      count[entry] = 1 + (count[entry] || 0)
    }
    let msg = `${page.relativePath} has duplicates in the 'children' key.`
    for (const [entry, times] of Object.entries(count)) {
      if (times > 1) msg += ` '${entry}' is repeated ${times} times. `
    }
    throw new Error(msg)
  }
}
