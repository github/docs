import { execFileSync } from 'node:child_process'
import { mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'

import { expect, test } from 'vitest'

import readFrontmatter from '@/frame/lib/read-frontmatter'

test('migration cleanup keeps rejected sources and removes fully migrated directory trees', () => {
  const repo = process.cwd()
  const cwd = mkdtempSync(path.join(tmpdir(), 'move-by-content-type-'))
  try {
    // Version metadata is loaded relative to the CLI's working directory.
    symlinkSync(path.join(repo, 'src'), path.join(cwd, 'src'), 'junction')

    const write = (file: string, content: string) => {
      const dest = path.join(cwd, 'content/demo', file)
      mkdirSync(path.dirname(dest), { recursive: true })
      writeFileSync(dest, content)
    }
    const read = (file: string) => readFileSync(path.join(cwd, 'content/demo', file), 'utf8')
    const rejected = '---js\n{"title":"Rejected"}\n---\nBody\n'
    const article = '---\ntitle: Migrate me\ncontentType: how-tos\n---\nArticle body\n'

    write('index.md', '---\ntitle: Demo\nchildren: [/mixed, /complete]\n---\n')
    for (const dir of ['get-started', 'concepts', 'how-tos', 'reference', 'tutorials']) {
      write(`${dir}/index.md`, '---\ntitle: Destination\n---\n')
    }
    write('mixed/nested/rejected.md', rejected)
    write('mixed/index.md', article)
    write('complete/nested/index.md', article)

    const output = execFileSync(
      process.execPath,
      [
        path.join(repo, 'node_modules/tsx/dist/cli.mjs'),
        '--tsconfig',
        path.join(repo, 'tsconfig.json'),
        path.join(repo, 'src/content-render/scripts/move-by-content-type.ts'),
        'content/demo',
      ],
      {
        cwd,
        env: { ...process.env, ROOT: repo },
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe'],
      },
    )

    expect(output).toContain('JavaScript frontmatter is not supported')
    expect(read('mixed/nested/rejected.md')).toBe(rejected)
    expect(read('how-tos/mixed/index.md')).toContain('Article body')
    expect(read('how-tos/complete/nested/index.md')).toContain('Article body')
    expect(() => read('complete')).toThrow(/ENOENT/)
    expect(readFrontmatter(read('index.md')).data).toMatchObject({
      children: ['/get-started', '/concepts', '/how-tos', '/reference', '/tutorials', '/mixed'],
      redirect_from: ['/demo/complete'],
    })
  } finally {
    rmSync(cwd, { recursive: true, force: true })
  }
}, 20_000)
