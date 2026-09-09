/**
 * To "debug" this test locally, you need to set at least one of these
 * environment variables:
 *
 *   - CHANGED_FILES
 *   - DELETED_FILES
 *   - RENAMED_FILES
 *
 * `CHANGED_FILES` and `DELETED_FILES` are whitespace-separated lists of
 * paths to content files. `RENAMED_FILES` is a whitespace-separated list
 * of `oldPath,newPath` pairs (as emitted by tj-actions/changed-files
 * `all_old_new_renamed_files` output). For example:
 *
 *    export CHANGED_FILES="content/get-started/index.md content/get-started/start-your-journey/hello-world.md"
 *    export RENAMED_FILES="content/old/path.md,content/new/path.md"
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
 *    npm run test -- src/content-render/tests/render-changed-and-deleted-files.ts
 */

import path from 'path'

import { describe, expect, test, vi } from 'vitest'

import { head, get } from '@/tests/helpers/e2etest'
import { loadPages } from '@/frame/lib/page-data'

const EMPTY = Symbol('EMPTY')

const pageList = await loadPages(undefined, ['en'])

const SDK_DOCS_PATH = 'content/copilot/how-tos/copilot-sdk/'

function getChangedContentFiles() {
  const deleted = new Set([...getDeletedContentFiles(), ...getRenamedOldContentFiles()])
  return getContentFiles(process.env.CHANGED_FILES).filter(
    (f) => !deleted.has(f) && !f.startsWith(SDK_DOCS_PATH),
  )
}
function getDeletedContentFiles() {
  return getContentFiles(process.env.DELETED_FILES).filter((file) => {
    // Auto-generated SDK docs are managed by the sync-sdk-docs pipeline,
    // which deletes and recreates pages when the source repo restructures.
    // These deletions are expected and don't need redirects.
    return !file.startsWith(SDK_DOCS_PATH)
  })
}

// Parse `RENAMED_FILES` from tj-actions/changed-files `all_old_new_renamed_files`
// output. Each whitespace-separated entry is an `oldPath,newPath` pair. We return
// the OLD paths so they can be checked the same way deleted files are: the test
// will fail if the old URL 404s (i.e. no redirect was set up for the rename).
function getRenamedOldContentFiles() {
  const raw = (process.env.RENAMED_FILES || '').split(/\s+/g).filter(Boolean)
  const oldPaths = raw.map((pair) => pair.split(',')[0]).filter(Boolean)
  return getContentFiles(oldPaths.join(' '))
}

function getContentFiles(spaceSeparatedList: string | undefined): string[] {
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
vi.setConfig({ testTimeout: 60 * 1000 })

describe('changed-content', () => {
  const changedContentFiles = getChangedContentFiles()

  // `test.each` will throw if the array is empty, so we need to add a dummy
  // when there are no changed files in the environment.
  const testFiles: Array<string | symbol> = changedContentFiles.length
    ? changedContentFiles
    : [EMPTY]

  test.each(testFiles)('changed-content: %s', async (file: string | symbol) => {
    // Necessary because `test.each` will throw if the array is empty
    if (file === EMPTY) return

    const page = pageList.find((p) => {
      return path.join(p.basePath, p.relativePath) === file
    })
    if (!page) {
      throw new Error(`Could not find page for ${file as string} in all loaded English content`)
    }
    // Each version of the page should successfully render
    for (const { href } of page.permalinks) {
      const res = await get(href)
      if (!res.ok) {
        let msg = `This error happened when rendering from: ${file as string}\n`
        msg +=
          'To see the full error from vitest re-run the test with DEBUG_MIDDLEWARE_TESTS=true set\n'
        msg += `Or, to view it locally start the server (npm run dev) and visit http://localhost:4000${href}`
        console.log(msg)
        throw new Error(`Rendering ${href} failed with status ${res.statusCode}`)
      }
    }
  })
})

describe('deleted-content', () => {
  // Renamed files (status `R` from git) don't appear in `DELETED_FILES`, but
  // the old path is just as gone from the user's perspective and needs a
  // redirect. Treat the old path of each rename the same as a deleted file.
  const deletedContentFiles = [...getDeletedContentFiles(), ...getRenamedOldContentFiles()]

  // `test.each` will throw if the array is empty, so we need to add a dummy
  // when there are no deleted files in the environment.
  const testFiles: Array<string | symbol> = deletedContentFiles.length
    ? deletedContentFiles
    : [EMPTY]

  test.each(testFiles)('deleted-content: %s', async (file: string | symbol) => {
    // Necessary because `test.each` will throw if the array is empty
    if (file === EMPTY) return

    const page = pageList.find((p) => {
      return path.join(p.basePath, p.relativePath) === file
    })
    if (page) {
      throw new Error(
        `The supposedly deleted file ${file as string} is still in list of loaded pages`,
      )
    }
    // You can't know what the possible permalinks were for a deleted page,
    // because it's deleted so we can't look at its `versions` front matter.
    // However, we always make sure all pages work in versionless.
    const indexmdSuffixRegex = new RegExp(`${path.sep}index\\.md$`)
    const mdSuffixRegex = /\.md$/
    const relativePath = (file as string).split(path.sep).slice(1).join(path.sep)
    const href = `/en/${relativePath.replace(indexmdSuffixRegex, '').replace(mdSuffixRegex, '')}`

    const res = await head(href)
    const error =
      res.statusCode === 404
        ? `The deleted or renamed file ${file as string} did not set up a redirect.`
        : ''
    // Certain articles that are deleted and moved under a directory with the same article name
    // should just route to the subcategory page instead of redirecting (docs content team confirmed).
    // So, in this scenario, we'd get a 200 status code.
    expect(res.statusCode === 301 || res.statusCode === 200, error).toBe(true)
  })
})
