import path from 'path'

import { describe, expect, test } from 'vitest'
import walk from 'walk-sync'

import createTree from '@/frame/lib/create-tree'

interface Page {
  relativePath: string
}

interface TreeNode {
  page: Page
  childPages?: TreeNode[]
}

describe('content files', () => {
  test.each(['content', 'src/fixtures/fixtures/content'])(
    'no content files left orphaned without being in the tree in %s',
    async (contentDir: string) => {
      const tree = await createTree(contentDir)

      const traverse = (node: TreeNode): string[] => {
        const relativeFiles = [node.page.relativePath]
        for (const child of node.childPages || []) {
          relativeFiles.push(...traverse(child))
        }
        return relativeFiles
      }
      const relativeFiles = tree ? traverse(tree).map((p: string) => path.join(contentDir, p)) : []
      const contentFiles = walk(contentDir, { includeBasePath: true, directories: false }).filter(
        (file: string) => {
          return file.endsWith('.md') && !file.includes('README')
        },
      ) as string[]
      const orphanedFiles = contentFiles.filter((file: string) => !relativeFiles.includes(file))
      expect(
        orphanedFiles.length,
        `${orphanedFiles} orphaned files found on disk but not in site tree`,
      ).toBe(0)
    },
  )
})
