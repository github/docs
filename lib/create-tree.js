const fs = require('fs')
const path = require('path')
const Page = require('./page')
const { sortBy } = require('lodash')

let basePath

module.exports = async function createTree (originalPath, langObj) {
  // Do not reset this value on recursive runs.
  if (!basePath) basePath = originalPath

  // On recursive runs, this is processing page.children items in `/<link>` format.
  // If the path exists as is, assume this is a directory with a child index.md.
  // Otherwise, assume it's a child .md file and add `.md` to the path.
  let filepath
  try {
    await fs.promises.access(originalPath)
    filepath = `${originalPath}/index.md`
  } catch {
    filepath = `${originalPath}.md`
  }

  const relativePath = filepath.replace(`${basePath}/`, '')
  const localizedBasePath = path.join(__dirname, '..', langObj.dir, 'content')

  // Initialize the Page! This is where the file reads happen.
  const page = await Page.init({
    basePath: localizedBasePath,
    relativePath,
    languageCode: langObj.code
  })

  if (!page) {
    // Do not throw an error if Early Access is not available.
    if (relativePath.startsWith('early-access')) return

    throw Error(`Cannot initialize page for ${filepath}`)
  }

  // Create the root tree object on the first run, and create children recursively.
  const item = {
    relativePath,
    title: page.shortTitle || page.title,
    page
  }

  // Process frontmatter children recursively.
  if (item.page.children) {
    item.childPages = sortBy(
      (await Promise.all(item.page.children
        .map(async (child) => await createTree(path.join(originalPath, child), langObj))))
        .filter(Boolean),
      // Sort by the ordered array of `children` in the frontmatter.
      item.page.children
    )
  }

  return item
}
