import path from 'path'

import { describe, expect, test } from 'vitest'
import walk from 'walk-sync'

import createTree from '#src/frame/lib/create-tree.js'

describe('content files', () => {
  test.each(['content', 'src/fixtures/fixtures/content'])(
    'no content files left orphaned without being in the tree in %s',
    async (contentDir) => {
      const tree = await createTree(contentDir)

      const traverse = (node) => {
        const relativeFiles = [node.page.relativePath]
        for (const child of node.childPages || []) {
          relativeFiles.push(...traverse(child))
        }
        return relativeFiles
      }
      const relativeFiles = traverse(tree).map((p) => path.join(contentDir, p))
      const contentFiles = walk(contentDir, { includeBasePath: true, directories: false }).filter(
        (file) => {
          return file.endsWith('.md') && !file.includes('README')
        },
      )
      const orphanedFiles = contentFiles.filter((file) => !relativeFiles.includes(file))
      expect(
        orphanedFiles.length,
        `${orphanedFiles} orphaned files found on disk but not in site tree`,
      ).toBe(0)
    },
  )
})
