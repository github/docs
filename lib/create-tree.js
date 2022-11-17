import path from 'path'
import fs from 'fs/promises'

import languages from './languages.js'
import Page, { FrontmatterErrorsError } from './page.js'

// If you run `export DEBUG_TRANSLATION_FALLBACKS=true` in your terminal,
// every time a translation file fails to initialize we fall back to English
// and write a warning to stdout.
const DEBUG_TRANSLATION_FALLBACKS = Boolean(
  JSON.parse(process.env.DEBUG_TRANSLATION_FALLBACKS || 'false')
)
// If you don't want to fall back to English automatically on corrupt
// translation files, set `export THROW_TRANSLATION_ERRORS=true`
const THROW_TRANSLATION_ERRORS = Boolean(
  JSON.parse(process.env.THROW_TRANSLATION_ERRORS || 'false')
)

// Module level cache
const _basePaths = new Map()
export function getBasePath(directory) {
  if (!_basePaths.has(directory)) {
    _basePaths.set(directory, path.posix.join(directory, 'content'))
  }
  return _basePaths.get(directory)
}

export default async function createTree(originalPath, langObj) {
  // This basePath definition is needed both here and in lib/page-data.js because this
  // function runs recursively, and the value for originalPath changes on recursive runs.
  const basePath = getBasePath(langObj.dir)

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
  let page
  try {
    page = await Page.init({
      basePath,
      relativePath,
      languageCode: langObj.code,
    })
  } catch (err) {
    if (
      !THROW_TRANSLATION_ERRORS &&
      err instanceof FrontmatterErrorsError &&
      langObj.code !== 'en'
    ) {
      // Something corrupt in the `.md` file caused it to throw an
      // error from reading it in. Let's "gracefully" recover by
      // swapping this one out for the English content and pretend it
      // exists in this other language.
      const englishBasePath = getBasePath(languages.en.dir)
      page = await Page.init({
        basePath: englishBasePath,
        relativePath,
        languageCode: langObj.code,
      })
      if (DEBUG_TRANSLATION_FALLBACKS) {
        console.warn(
          `Unable to initialized ${path.join(basePath, relativePath)} due to frontmatter errors. ` +
            `Will proceed with using ${path.join(englishBasePath, relativePath)} instead.`
        )
      }
    } else {
      throw err
    }
  }

  if (!page) {
    // Do not throw an error if Early Access is not available.
    if (relativePath.startsWith('early-access')) {
      if (langObj.code === 'en') {
        console.warn(
          `${relativePath} could not be turned into a Page, but is ignore because it's early-access`
        )
      }
      return
    }
    // Do not throw an error if translated page is not available.
    if (langObj.code !== 'en') return

    throw Error(`Cannot initialize page for ${filepath} in ${langObj.code}`)
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
          async (child) => await createTree(path.posix.join(originalPath, child), langObj)
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
