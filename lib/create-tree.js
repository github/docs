import path from 'path'
import fs from 'fs/promises'

import Page from './page.js'

export default async function createTree(originalPath, rootPath) {
  const basePath = rootPath || originalPath

  // On recursive runs, this is processing page.children items in `/<link>` format.
  // If the path exists as is, assume this is a directory with a child index.md.
  // Otherwise, assume it's a child .md file and add `.md` to the path.
  let filepath
  try {
    await fs.access(originalPath)
    filepath = `${originalPath}/index.md`
  } catch {
    filepath = `${originalPath}.md`
  }

  const relativePath = filepath.replace(`${basePath}/`, '')

  // Initialize the Page! This is where the file reads happen.
  const page = await Page.init({
    basePath,
    relativePath,
    languageCode: 'en',
  })

  if (!page) {
    // Do not throw an error if Early Access is not available.
    if (relativePath.startsWith('early-access')) {
      console.warn(
        `${relativePath} could not be turned into a Page, but is ignore because it's early-access`
      )
      return
    }

    throw Error(`Cannot initialize page for ${filepath}`)
  }

  // Create the root tree object on the first run, and create children recursively.
  const item = {
    page,
  }

  // Process frontmatter children recursively.
  if (item.page.children) {
    assertUniqueChildren(item.page)
    item.childPages = (
      await Promise.all(
        item.page.children.map(
          async (child) => await createTree(path.posix.join(originalPath, child), basePath)
        )
      )
    ).filter(Boolean)
  }

  return item
}

function assertUniqueChildren(page) {
  if (page.children.length !== new Set(page.children).size) {
    const count = {}
    page.children.forEach((entry) => (count[entry] = 1 + (count[entry] || 0)))
    let msg = `${page.relativePath} has duplicates in the 'children' key.`
    for (const [entry, times] of Object.entries(count)) {
      if (times > 1) msg += ` '${entry}' is repeated ${times} times. `
    }
    throw new Error(msg)
  }
}
