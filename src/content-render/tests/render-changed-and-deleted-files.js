/**
 * To "debug" this test locally, you need to set at least one of these
 * environment variables:
 *
 *   - CHANGED_FILES
 *   - DELETED_FILES
 *
 * They both need to a whitespace-separated list of paths to content files.
 * For example:
 *
 *    export CHANGED_FILES="content/get-started/index.md content/get-started/quickstart/hello-world.md"
 *
 * If any of the paths in there, split by ' ', don't match real files, the
 * test will fail before it even starts. Meaning, it will throw an error
 * rather than failing an `expect(...)` assertion.
 *
 * Technically, the value is any whitespace. So you can actually use:
 *
 *     export DELETED_FILES=`git diff --name-only main...`
 *
 * which will make the environment variable be newline-separated and that
 * works too.
 *
 * So, for example, if you've made some deletions and some edits the
 * staged files:
 *
 *    export DELETED_FILES=`git diff --name-only --diff-filter=D main...`
 *    export CHANGED_FILES=`git diff --name-only --diff-filter=M main...`
 *    npm run test -- src/content-render/tests/render-changed-and-deleted-files.js
 */

import path from 'path'

import { jest } from '@jest/globals'

import { head, get } from '../../../tests/helpers/e2etest.js'
import { loadPages } from '../../../lib/page-data.js'

const EMPTY = Symbol('EMPTY')

const pageList = await loadPages(undefined, ['en'])

function getChangedContentFiles() {
  return getContentFiles(process.env.CHANGED_FILES)
}
function getDeletedContentFiles() {
  return getContentFiles(process.env.DELETED_FILES)
}

function getContentFiles(spaceSeparatedList) {
  return (spaceSeparatedList || '').split(/\s+/g).filter((filePath) => {
    // This filters out things like '', or `data/foo.md` or `content/something/README.md`
    return (
      filePath.endsWith('.md') &&
      filePath.split(path.sep)[0] === 'content' &&
      path.basename(filePath) !== 'README.md'
    )
  })
}

// If the list of changed pages is very large, this test can take a long time.
// It can also happen if some of the pages involves are infamously slow.
// For example guide pages because they involved a lot of processing
// to gather and preview linked data.
jest.setTimeout(60 * 1000)

describe('changed-content', () => {
  const changedContentFiles = getChangedContentFiles()

  // `jest.each` will throw if the array is empty, so we need to add a dummy
  // when there are no changed files in the environment.
  if (!changedContentFiles.length) changedContentFiles.push(EMPTY)

  test.each(changedContentFiles)('changed-content: %s', async (file) => {
    // Necessary because `jest.each` will throw if the array is empty
    if (file === EMPTY) return

    const page = pageList.find((p) => {
      return path.join(p.basePath, p.relativePath) === file
    })
    if (!page) {
      throw new Error(`Could not find page for ${file} in all loaded English content`)
    }
    // Each version of the page should successfully render
    for (const { href } of page.permalinks) {
      const res = await get(href)
      if (!res.ok) {
        let msg = `This error happened when rendering from: ${file}\n`
        msg +=
          'To see the full error from jest re-run the test with DEBUG_MIDDLEWARE_TESTS=true set\n'
        msg += `Or, to view it locally start the server (npm run dev) and visit http://localhost:4000${href}`
        console.log(msg)
        throw new Error(`Rendering ${href} failed with status ${res.statusCode}`)
      }
    }
  })
})

describe('deleted-content', () => {
  const deletedContentFiles = getDeletedContentFiles()

  // `jest.each` will throw if the array is empty, so we need to add a dummy
  // when there are no deleted files in the environment.
  if (!deletedContentFiles.length) deletedContentFiles.push(EMPTY)

  test.each(deletedContentFiles)('deleted-content: %s', async (file) => {
    // Necessary because `jest.each` will throw if the array is empty
    if (file === EMPTY) return

    const page = pageList.find((p) => {
      return path.join(p.basePath, p.relativePath) === file
    })
    if (page) {
      throw new Error(`The supposedly deleted file ${file} is still in list of loaded pages`)
    }
    // You can't know what the possible permalinks were for a deleted page,
    // because it's deleted so we can't look at its `versions` front matter.
    // However, we always make sure all pages work in versionless.
    const indexmdSuffixRegex = new RegExp(`${path.sep}index\\.md$`)
    const mdSuffixRegex = /\.md$/
    const relativePath = file.split(path.sep).slice(1).join(path.sep)
    const href = `/en/${relativePath.replace(indexmdSuffixRegex, '').replace(mdSuffixRegex, '')}`

    const res = await head(href)
    const error =
      res.statusCode === 404
        ? `The deleted file ${file} did not set up a redirect when deleted.`
        : ''
    // Certain articles that are deleted and moved under a directory with the same article name
    // should just route to the map topic page instead of redirecting (docs content team confirmed).
    // So, in this scenario, we'd get a 200 status code.
    expect(res.statusCode === 301 || res.statusCode === 200, error).toBe(true)
  })
})
