import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import { createRequire } from 'node:module'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { afterEach, beforeEach, expect, test } from 'vitest'

import readFrontmatter from '@/frame/lib/read-frontmatter'

const repo = fileURLToPath(new URL('../../../', import.meta.url))
const tsx = createRequire(import.meta.url).resolve('tsx/cli')
const script = path.join(repo, 'src/content-render/scripts/move-by-content-type.ts')
const tsconfig = path.join(repo, 'tsconfig.json')
const markdown = "---\ntitle: Example\nversions:\n  fpt: '*'\n"
let cwd: string

function write(file: string, content = `${markdown}---\n`) {
  const dest = path.join(cwd, file)
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  fs.writeFileSync(dest, content)
}

function run(...args: string[]) {
  return spawnSync(process.execPath, [tsx, '--tsconfig', tsconfig, script, ...args], {
    cwd,
    env: { ...process.env, ROOT: cwd },
    encoding: 'utf8',
    timeout: 15_000,
  })
}

beforeEach(() => {
  cwd = fs.mkdtempSync(path.join(os.tmpdir(), 'move-by-content-type-'))
  // The frontmatter module loads these files relative to the current directory.
  for (const file of ['src/ghes-releases/lib/enterprise-dates.json', 'src/rest/lib/config.json']) {
    write(file, fs.readFileSync(path.join(repo, file), 'utf8'))
  }
  fs.mkdirSync(path.join(cwd, 'data/features'), { recursive: true })
})

afterEach(() => {
  fs.rmSync(cwd, { recursive: true, force: true })
})

test.each([
  'content',
  'content/product',
  'content/product/index.md',
  'content/product/how-tos',
  'content/product/concepts/index.md',
  'content/another-product/nested/article.md',
])('rejects a symbolic link at %s before migration', (link) => {
  const dest = path.join(cwd, link)
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  const directoryLink = !link.endsWith('.md')
  // A dangling file link must be rejected too.
  const target = path.join(cwd, directoryLink ? 'outside' : 'missing.md')
  if (directoryLink) fs.mkdirSync(target)
  fs.symlinkSync(target, dest, directoryLink ? 'junction' : 'file')

  const result = run('content/product')
  expect(result.status).toBe(1)
  expect(result.stderr).toMatch(/symbolic link/i)
  expect(result.stdout).not.toContain('Processing')
  if (directoryLink) expect(fs.readdirSync(target)).toEqual([])
  else expect(fs.existsSync(target)).toBe(false)
})

test('rejects inputs in a sibling directory whose name starts with content', () => {
  write('content/index.md')
  write('content-sibling/content/product/article.md')

  const result = run('content-sibling/content/product/article.md')
  expect(result.status).toBe(1)
  expect(result.stderr).toContain('Expected a path inside content')
  expect(fs.readdirSync(path.join(cwd, 'content'))).toEqual(['index.md'])
})

test('updates metadata and cleans up legacy directories in a regular content tree', () => {
  write('content/product/index.md', `${markdown}children:\n  - /legacy\n---\n`)
  write('content/product/concepts/article.md', `${markdown}contentType: concepts\n---\n`)
  write('content/product/concepts/index.md', `${markdown}children:\n  - /z\n  - /about-a\n---\n`)
  write('content/product/legacy/index.md', `${markdown}contentType: how-tos\n---\n`)
  for (const type of ['get-started', 'how-tos', 'reference', 'tutorials']) {
    write(`content/product/${type}/index.md`)
  }

  const result = run('content/product')
  expect(result.status, result.stderr).toBe(0)
  expect(fs.existsSync(path.join(cwd, 'content/product/legacy'))).toBe(false)
  const product = fs.readFileSync(path.join(cwd, 'content/product/index.md'), 'utf8')
  expect(product).toContain('  - /concepts')
  expect(product).toContain('redirect_from:\n  - /product/legacy')
  const concepts = fs.readFileSync(path.join(cwd, 'content/product/concepts/index.md'), 'utf8')
  expect(concepts).toContain('children:\n  - /about-a\n  - /z')
  expect(fs.existsSync(path.join(cwd, 'content/product/how-tos/legacy/index.md'))).toBe(true)
})

test('migration cleanup keeps rejected sources and removes fully migrated directory trees', () => {
  const rejected = '---js\n{"title":"Rejected"}\n---\nBody\n'
  const article = '---\ntitle: Migrate me\ncontentType: how-tos\n---\nArticle body\n'
  const read = (file: string) => fs.readFileSync(path.join(cwd, 'content/demo', file), 'utf8')

  write('content/demo/index.md', '---\ntitle: Demo\nchildren: [/mixed, /complete]\n---\n')
  for (const dir of ['get-started', 'concepts', 'how-tos', 'reference', 'tutorials']) {
    write(`content/demo/${dir}/index.md`, '---\ntitle: Destination\n---\n')
  }
  write('content/demo/mixed/nested/rejected.md', rejected)
  write('content/demo/mixed/index.md', article)
  write('content/demo/complete/nested/index.md', article)

  const result = run('content/demo')
  expect(result.status, result.stderr).toBe(0)
  expect(result.stderr).toContain('expected a plain YAML frontmatter opening fence')
  expect(read('mixed/nested/rejected.md')).toBe(rejected)
  expect(read('how-tos/mixed/index.md')).toContain('Article body')
  expect(read('how-tos/complete/nested/index.md')).toContain('Article body')
  expect(() => read('complete')).toThrow(/ENOENT/)
  expect(readFrontmatter(read('index.md')).data).toMatchObject({
    children: ['/get-started', '/concepts', '/how-tos', '/reference', '/tutorials', '/mixed'],
    redirect_from: ['/demo/complete'],
  })
}, 20_000)
