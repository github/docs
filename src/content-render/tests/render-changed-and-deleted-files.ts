// To run this test locally, set CHANGED_FILES, DELETED_FILES, or RENAMED_FILES.
// CHANGED_FILES and DELETED_FILES contain whitespace-separated content paths.
// RENAMED_FILES contains oldPath,newPath pairs from tj-actions/changed-files.
// CHANGED_FILES paths must identify loaded pages or the test throws before expectations run.
// Newline-separated git diff output works because the parser accepts all whitespace.
// Example:
// export CHANGED_FILES="content/get-started/index.md content/actions/index.md"
// export RENAMED_FILES="content/old/path.md,content/new/path.md"
// export DELETED_FILES="$(git diff --name-only --diff-filter=D main...)"
// npm run test -- src/content-render/tests/render-changed-and-deleted-files.ts

import path from 'path'

import { describe, expect, test, vi } from 'vitest'

import { head, get } from '@/tests/helpers/e2etest'
import { loadPages } from '@/frame/lib/page-data'

const EMPTY = Symbol('EMPTY')

const pageList = await loadPages(undefined, ['en'])

function getChangedContentFiles() {
  const deleted = new Set([...getDeletedContentFiles(), ...getRenamedOldContentFiles()])
  return getContentFiles(process.env.CHANGED_FILES).filter((f) => !deleted.has(f))
}
function getDeletedContentFiles() {
  return getContentFiles(process.env.DELETED_FILES)
}

// RENAMED_FILES comes from tj-actions/changed-files all_old_new_renamed_files.
// Each oldPath,newPath entry adds the old path because old URLs must not return 404.
function getRenamedOldContentFiles() {
  const raw = (process.env.RENAMED_FILES || '').split(/\s+/g).filter(Boolean)
  const oldPaths = raw.map((pair) => pair.split(',')[0]).filter(Boolean)
  return getContentFiles(oldPaths.join(' '))
}

function getContentFiles(spaceSeparatedList: string | undefined): string[] {
  return (spaceSeparatedList || '').split(/\s+/g).filter((filePath) => {
    // Only content Markdown pages count; data files and content README files do not render.
    return (
      filePath.endsWith('.md') &&
      filePath.split(path.sep)[0] === 'content' &&
      path.basename(filePath) !== 'README.md'
    )
  })
}

// Large changes and guide pages can render slowly because guides gather linked data.
vi.setConfig({ testTimeout: 60 * 1000 })

describe('changed-content', () => {
  const changedContentFiles = getChangedContentFiles()

  // test.each throws on an empty array, so EMPTY stands in when no files are present.
  const testFiles: Array<string | symbol> = changedContentFiles.length
    ? changedContentFiles
    : [EMPTY]

  test.each(testFiles)('changed-content: %s', async (file: string | symbol) => {
    if (file === EMPTY) return

    const page = pageList.find((p) => {
      return path.join(p.basePath, p.relativePath) === file
    })
    if (!page) {
      throw new Error(`Could not find page for ${file as string} in all loaded English content`)
    }
    // Every permalink must render because changed files can affect all versions.
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
  // RENAMED_FILES provides old paths separately because git status R paths skip DELETED_FILES.
  const deletedContentFiles = [...getDeletedContentFiles(), ...getRenamedOldContentFiles()]

  // test.each throws on an empty array, so EMPTY stands in when no files are present.
  const testFiles: Array<string | symbol> = deletedContentFiles.length
    ? deletedContentFiles
    : [EMPTY]

  // Deleted pages no longer have versions frontmatter, so this checks the versionless permalink.
  test.each(testFiles)('deleted-content: %s', async (file: string | symbol) => {
    if (file === EMPTY) return

    const page = pageList.find((p) => {
      return path.join(p.basePath, p.relativePath) === file
    })
    if (page) {
      throw new Error(
        `The supposedly deleted file ${file as string} is still in list of loaded pages`,
      )
    }
    const indexmdSuffixRegex = new RegExp(`${path.sep}index\\.md$`)
    const mdSuffixRegex = /\.md$/
    const relativePath = (file as string).split(path.sep).slice(1).join(path.sep)
    const href = `/en/${relativePath.replace(indexmdSuffixRegex, '').replace(mdSuffixRegex, '')}`

    const res = await head(href)
    const error =
      res.statusCode === 404
        ? `The deleted or renamed file ${file as string} did not set up a redirect.`
        : ''
    // Same-name subcategory moves return 200 instead of redirecting.
    expect(res.statusCode === 301 || res.statusCode === 200, error).toBe(true)
  })
})
