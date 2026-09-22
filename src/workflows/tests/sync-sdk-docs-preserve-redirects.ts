import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

import { describe, expect, test, beforeAll, afterAll } from 'vitest'

import {
  contentPathToUrl,
  readRedirects,
  mergeRedirects,
  findSuccessor,
  upsertRedirectBlock,
} from '@/workflows/sync-sdk-docs/preserve-redirects'

const SCRIPT = path.join(process.cwd(), 'src/workflows/sync-sdk-docs/preserve-redirects.ts')
const SDK_DIR = 'content/copilot/how-tos/copilot-sdk'
const STEP_SUMMARY_FILE = 'step-summary.md'

/**
 * Every invocation of the script must go through this helper. The script
 * appends its unresolved-removal warning to whatever `GITHUB_STEP_SUMMARY`
 * points at, so a child that inherited the real one would write this suite's
 * synthetic warnings into the actual Actions job summary and raise a false
 * operational alert. Pinning it to a per-fixture file both prevents that and
 * makes the summary assertable via `readStepSummary`.
 */
const runScript = (cwd: string, args: string[] = []) =>
  execFileSync('npx', ['tsx', SCRIPT, ...args], {
    cwd,
    encoding: 'utf8',
    env: { ...process.env, GITHUB_STEP_SUMMARY: path.join(cwd, STEP_SUMMARY_FILE) },
  })

const readStepSummary = (cwd: string) => {
  const file = path.join(cwd, STEP_SUMMARY_FILE)
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : ''
}

describe('contentPathToUrl', () => {
  test('strips the content prefix and .md extension', () => {
    expect(contentPathToUrl(`${SDK_DIR}/features/mcp.md`)).toBe(
      '/copilot/how-tos/copilot-sdk/features/mcp',
    )
  })

  test('collapses index.md to its directory', () => {
    expect(contentPathToUrl(`${SDK_DIR}/auth/index.md`)).toBe('/copilot/how-tos/copilot-sdk/auth')
  })

  test('does not strip "index" from a longer filename', () => {
    expect(contentPathToUrl(`${SDK_DIR}/reindex.md`)).toBe('/copilot/how-tos/copilot-sdk/reindex')
  })
})

describe('readRedirects', () => {
  test('returns an empty list when absent', () => {
    expect(readRedirects({})).toEqual([])
  })

  test('accepts a bare string as well as an array', () => {
    expect(readRedirects({ redirect_from: '/old' })).toEqual(['/old'])
    expect(readRedirects({ redirect_from: ['/a', '/b'] })).toEqual(['/a', '/b'])
  })

  test('ignores non-string entries', () => {
    expect(readRedirects({ redirect_from: ['/a', 42, null] })).toEqual(['/a'])
  })
})

describe('mergeRedirects', () => {
  test('dedupes while preserving first-seen order', () => {
    expect(mergeRedirects(['/a', '/b'], ['/b', '/c'])).toEqual(['/a', '/b', '/c'])
  })

  test('strips trailing slashes, which redirect-orphans rejects', () => {
    expect(mergeRedirects(['/a/'])).toEqual(['/a'])
  })

  test('drops empty entries', () => {
    expect(mergeRedirects(['', '  ', '/a'])).toEqual(['/a'])
  })
})

describe('findSuccessor', () => {
  test('matches a moved page by its unique filename', () => {
    const successor = findSuccessor(
      `${SDK_DIR}/old/mcp.md`,
      [`${SDK_DIR}/features/mcp.md`, `${SDK_DIR}/features/skills.md`],
      [`${SDK_DIR}/old/mcp.md`],
    )
    expect(successor?.path).toBe(`${SDK_DIR}/features/mcp.md`)
  })

  test('refuses to guess when the filename is ambiguous', () => {
    expect(
      findSuccessor(
        `${SDK_DIR}/old/mcp.md`,
        [`${SDK_DIR}/features/mcp.md`, `${SDK_DIR}/setup/mcp.md`],
        [`${SDK_DIR}/old/mcp.md`],
      ),
    ).toBeNull()
  })

  test('refuses a many-to-one match when two removed pages share a filename', () => {
    const currentPaths = [`${SDK_DIR}/features/mcp.md`]
    const removedPaths = [`${SDK_DIR}/old/mcp.md`, `${SDK_DIR}/legacy/mcp.md`]

    // Neither removal may claim the single survivor: at most one of them is its
    // real predecessor, so assigning both would invent a wrong redirect.
    for (const removed of removedPaths) {
      expect(findSuccessor(removed, currentPaths, removedPaths)).toBeNull()
    }
  })

  test('refuses a many-to-one match when two removed directories share a name', () => {
    const currentPaths = [`${SDK_DIR}/hooks/index.md`]
    const removedPaths = [`${SDK_DIR}/a/hooks/index.md`, `${SDK_DIR}/b/hooks/index.md`]

    for (const removed of removedPaths) {
      expect(findSuccessor(removed, currentPaths, removedPaths)).toBeNull()
    }
  })

  test('matches index.md on its directory name, not the filename', () => {
    const successor = findSuccessor(
      `${SDK_DIR}/use-hooks/index.md`,
      [`${SDK_DIR}/hooks/index.md`, `${SDK_DIR}/use-hooks/index.md`],
      [`${SDK_DIR}/use-hooks/index.md`],
    )
    expect(successor?.path).toBe(`${SDK_DIR}/use-hooks/index.md`)
  })

  test('does not pair unrelated directories through their index.md', () => {
    expect(
      findSuccessor(
        `${SDK_DIR}/auth/index.md`,
        [`${SDK_DIR}/features/index.md`, `${SDK_DIR}/setup/index.md`],
        [`${SDK_DIR}/auth/index.md`],
      ),
    ).toBeNull()
  })

  test('does not confuse an index.md with a same-named page', () => {
    // `hooks/index.md` and `hooks.md` are different keys, so a removed
    // directory index must not be matched to a page called hooks.md.
    expect(
      findSuccessor(
        `${SDK_DIR}/hooks/index.md`,
        [`${SDK_DIR}/features/hooks.md`],
        [`${SDK_DIR}/hooks/index.md`],
      ),
    ).toBeNull()
  })

  test('returns null when nothing matches', () => {
    expect(
      findSuccessor(`${SDK_DIR}/gone.md`, [`${SDK_DIR}/features/mcp.md`], [`${SDK_DIR}/gone.md`]),
    ).toBeNull()
  })
})

describe('upsertRedirectBlock', () => {
  const frontmatter = [
    'title: Example',
    'intro: >-',
    '  A long intro that YAML would rewrap if the file were re-serialized',
    '  instead of edited as text.',
    'versions:',
    "  fpt: '*'",
    'contentType: how-tos',
  ].join('\n')

  test('inserts the block directly before contentType', () => {
    expect(upsertRedirectBlock(frontmatter, ['/old']).split('\n')).toEqual([
      'title: Example',
      'intro: >-',
      '  A long intro that YAML would rewrap if the file were re-serialized',
      '  instead of edited as text.',
      'versions:',
      "  fpt: '*'",
      'redirect_from:',
      '  - /old',
      'contentType: how-tos',
    ])
  })

  test('leaves every other line byte-identical', () => {
    const result = upsertRedirectBlock(frontmatter, ['/old'])
    for (const line of frontmatter.split('\n')) {
      expect(result).toContain(line)
    }
  })

  test('replaces an existing block rather than duplicating it', () => {
    const withBlock = upsertRedirectBlock(frontmatter, ['/one'])
    const replaced = upsertRedirectBlock(withBlock, ['/one', '/two'])
    expect(replaced.match(/redirect_from:/g)).toHaveLength(1)
    expect(replaced).toContain('  - /one')
    expect(replaced).toContain('  - /two')
  })

  test('replaces the inline form too', () => {
    const inline = 'title: Example\nredirect_from: /solo\ncontentType: how-tos'
    const result = upsertRedirectBlock(inline, ['/solo', '/extra'])
    expect(result.match(/redirect_from/g)).toHaveLength(1)
    expect(result).toContain('  - /extra')
  })

  test('appends when there is no contentType key', () => {
    const result = upsertRedirectBlock('title: Example', ['/old'])
    expect(result).toBe('title: Example\nredirect_from:\n  - /old')
  })

  test('removes the block when given no redirects', () => {
    const withBlock = upsertRedirectBlock(frontmatter, ['/one'])
    expect(upsertRedirectBlock(withBlock, [])).toBe(frontmatter)
  })

  test('consumes blank lines inside a hand-edited block', () => {
    const messy = [
      'title: Example',
      'redirect_from:',
      '  - /one',
      '',
      '  - /two',
      'contentType: how-tos',
    ].join('\n')
    expect(upsertRedirectBlock(messy, ['/one', '/two'])).toBe(
      ['title: Example', 'redirect_from:', '  - /one', '  - /two', 'contentType: how-tos'].join(
        '\n',
      ),
    )
  })

  test('keeps a blank line that separates the block from the next key', () => {
    const spaced = [
      'title: Example',
      'redirect_from:',
      '  - /one',
      '',
      'contentType: how-tos',
    ].join('\n')
    expect(upsertRedirectBlock(spaced, ['/one'])).toBe(
      ['title: Example', '', 'redirect_from:', '  - /one', 'contentType: how-tos'].join('\n'),
    )
  })

  test('ignores keys that merely contain redirect_from', () => {
    const decoy = 'title: Example\nold_redirect_from: /decoy\ncontentType: how-tos'
    expect(upsertRedirectBlock(decoy, ['/real'])).toContain('old_redirect_from: /decoy')
  })
})

/**
 * End-to-end runs against a throwaway git repo. The script reconciles the
 * working tree against a git ref, so a real commit is the only honest fixture.
 */
describe('preserve-redirects end to end', () => {
  let repo: string

  const git = (...args: string[]) => execFileSync('git', args, { cwd: repo, encoding: 'utf8' })

  const write = (relativePath: string, contents: string) => {
    const full = path.join(repo, relativePath)
    fs.mkdirSync(path.dirname(full), { recursive: true })
    fs.writeFileSync(full, contents, 'utf8')
  }

  const read = (relativePath: string) => fs.readFileSync(path.join(repo, relativePath), 'utf8')

  const page = (title: string, redirects?: string[]) =>
    [
      '---',
      `title: ${title}`,
      'versions:',
      "  fpt: '*'",
      ...(redirects ? ['redirect_from:', ...redirects.map((r) => `  - ${r}`)] : []),
      'contentType: how-tos',
      '---',
      '',
      'Body text.',
      '',
    ].join('\n')

  const run = (extraArgs: string[] = []) =>
    runScript(repo, ['--sdk-docs-dir', path.join(repo, SDK_DIR), ...extraArgs])

  const stepSummary = () => readStepSummary(repo)

  beforeAll(() => {
    repo = fs.mkdtempSync(path.join(os.tmpdir(), 'sdk-redirects-'))
    git('init', '--initial-branch=main')
    git('config', 'user.email', 'test@example.com')
    git('config', 'user.name', 'Test')

    // Pre-sync state: a page carrying a hand-added redirect, a page that will be
    // moved, a directory index that will be renamed, and a page left untouched.
    write(`${SDK_DIR}/features/mcp.md`, page('MCP', ['/copilot/how-tos/copilot-sdk/old-mcp']))
    write(`${SDK_DIR}/features/moving.md`, page('Moving', ['/copilot/how-tos/copilot-sdk/ancient']))
    write(`${SDK_DIR}/use-hooks/index.md`, page('Hooks'))
    write(`${SDK_DIR}/features/stable.md`, page('Stable'))
    git('add', '-A')
    git('commit', '-m', 'pre-sync state')
  })

  afterAll(() => {
    if (repo) fs.rmSync(repo, { recursive: true, force: true })
  })

  test('restores redirects the sync would have dropped, and reports moves', () => {
    // Simulate the sync: wipe the tree and rebuild it without any redirect_from,
    // moving one page and renaming one directory along the way.
    fs.rmSync(path.join(repo, SDK_DIR), { recursive: true, force: true })
    write(`${SDK_DIR}/features/mcp.md`, page('MCP'))
    write(`${SDK_DIR}/setup/moving.md`, page('Moving'))
    write(`${SDK_DIR}/use-hooks/index.md`, page('Hooks'))
    write(`${SDK_DIR}/features/stable.md`, page('Stable'))

    const output = run()

    // 1. A redirect on a page that kept its path is put back.
    expect(read(`${SDK_DIR}/features/mcp.md`)).toContain('/copilot/how-tos/copilot-sdk/old-mcp')

    // 2. A moved page is reported for a human, never auto-redirected: a matching
    //    filename is not proof that one page replaced another. Both the page's
    //    own URL and the older redirect it had inherited must be listed, or a
    //    human fixing the obvious one would still strand the chain.
    expect(output).toContain('/copilot/how-tos/copilot-sdk/features/moving')
    expect(output).toContain('/copilot/how-tos/copilot-sdk/ancient')
    expect(output).toContain('possible replacement: /copilot/how-tos/copilot-sdk/setup/moving')
    expect(read(`${SDK_DIR}/setup/moving.md`)).not.toContain('redirect_from')

    // 3. A page that never had redirects is left alone.
    expect(read(`${SDK_DIR}/features/stable.md`)).not.toContain('redirect_from')
  })

  test('is idempotent — a second run changes nothing', () => {
    const before = [
      read(`${SDK_DIR}/features/mcp.md`),
      read(`${SDK_DIR}/setup/moving.md`),
      read(`${SDK_DIR}/features/stable.md`),
    ]

    run()

    expect([
      read(`${SDK_DIR}/features/mcp.md`),
      read(`${SDK_DIR}/setup/moving.md`),
      read(`${SDK_DIR}/features/stable.md`),
    ]).toEqual(before)
  })

  test('never points a page at its own URL', () => {
    for (const relativePath of [`${SDK_DIR}/features/mcp.md`, `${SDK_DIR}/setup/moving.md`]) {
      const selfUrl = contentPathToUrl(relativePath)
      expect(read(relativePath)).not.toContain(`- ${selfUrl}\n`)
    }
  })

  test('does not reflow unrelated frontmatter', () => {
    // A long `intro` is the field most likely to be rewrapped by a YAML
    // round-trip, which would swamp the real change in every sync diff.
    const longIntro =
      'This intro is deliberately far longer than the eighty column default that ' +
      'js-yaml wraps folded scalars at, so any re-serialization would be obvious.'

    const isolated = fs.mkdtempSync(path.join(os.tmpdir(), 'sdk-redirects-reflow-'))
    const igit = (...args: string[]) =>
      execFileSync('git', args, { cwd: isolated, encoding: 'utf8' })
    const target = path.join(isolated, SDK_DIR, 'features/stable.md')

    const build = (redirect: boolean) =>
      [
        '---',
        'title: Stable',
        `intro: ${longIntro}`,
        ...(redirect ? ['redirect_from:', '  - /copilot/how-tos/copilot-sdk/legacy-stable'] : []),
        'contentType: how-tos',
        '---',
        '',
        'Body.',
        '',
      ].join('\n')

    try {
      igit('init', '--initial-branch=main')
      igit('config', 'user.email', 'test@example.com')
      igit('config', 'user.name', 'Test')
      fs.mkdirSync(path.dirname(target), { recursive: true })

      fs.writeFileSync(target, build(true), 'utf8')
      igit('add', '-A')
      igit('commit', '-m', 'pre-sync state')
      const expected = fs.readFileSync(target, 'utf8')

      // A sync rebuilds the frontmatter without the redirect.
      fs.writeFileSync(target, build(false), 'utf8')

      runScript(isolated, ['--sdk-docs-dir', path.join(isolated, SDK_DIR)])

      expect(fs.readFileSync(target, 'utf8')).toBe(expected)
      expect(fs.readFileSync(target, 'utf8')).toContain(`intro: ${longIntro}`)
    } finally {
      fs.rmSync(isolated, { recursive: true, force: true })
    }
  })

  test('reports an ambiguous removal instead of guessing', () => {
    git('add', '-A')
    git('commit', '-m', 'sync result')

    // `gone.md` disappears with no plausible successor.
    write(`${SDK_DIR}/features/gone.md`, page('Gone'))
    git('add', '-A')
    git('commit', '-m', 'add page that will vanish')
    fs.rmSync(path.join(repo, `${SDK_DIR}/features/gone.md`))

    const output = run()
    expect(output).toContain('needing a redirect decision')
    expect(output).toContain('/copilot/how-tos/copilot-sdk/features/gone')
  })

  test('exits non-zero on an unresolved removal when asked to', () => {
    expect(() => run(['--fail-on-unresolved'])).toThrow()
  })

  test('writes the unresolved warning to the step summary it was given', () => {
    // Self-contained: clear the file, trigger its own unresolved run, then read
    // it back, rather than depending on a previous test having written it.
    const file = path.join(repo, 'step-summary.md')
    fs.rmSync(file, { force: true })

    write(`${SDK_DIR}/features/vanishing.md`, page('Vanishing', ['/copilot/older-vanishing']))
    git('add', '-A')
    git('commit', '-m', 'add page that will vanish')
    fs.rmSync(path.join(repo, `${SDK_DIR}/features/vanishing.md`))

    run()

    // Guards the env redirect in `run`: without it these synthetic warnings
    // would be appended to the real Actions job summary during CI.
    const summary = stepSummary()
    expect(summary).toContain('need a redirect decision')
    expect(summary).toContain('/copilot/how-tos/copilot-sdk/features/vanishing')
    // The inherited redirect is at risk too, so it must be reported, not just
    // the removed page's own URL.
    expect(summary).toContain('/copilot/older-vanishing')
  })

  test('fails loudly when the baseline ref cannot be read', () => {
    // Previously a failed `git ls-tree` was indistinguishable from a first sync,
    // so the run reported "nothing to preserve" and exited 0 — dropping every
    // redirect in the tree without a single warning.
    let message = ''
    try {
      run(['--git-ref', 'refs/heads/no-such-ref'])
      throw new Error('expected the script to fail')
    } catch (error) {
      message = `${(error as Error).message}${(error as { stderr?: string }).stderr ?? ''}`
    }
    expect(message).toContain('Could not read the baseline tree')
    expect(message).not.toContain('nothing to preserve')
  })

  test('carries inherited redirects when a page keeps its URL but changes file', () => {
    // `guide.md` becoming `guide/index.md` keeps the URL live, so nothing 404s
    // and no successor guess is needed — but the redirects the old file had
    // inherited would be stranded unless they are moved by URL identity.
    const isolated = fs.mkdtempSync(path.join(os.tmpdir(), 'sdk-redirects-reshape-'))
    const igit = (...args: string[]) =>
      execFileSync('git', args, { cwd: isolated, encoding: 'utf8' })
    const flat = path.join(isolated, SDK_DIR, 'features/guide.md')
    const nested = path.join(isolated, SDK_DIR, 'features/guide/index.md')

    try {
      igit('init', '--initial-branch=main')
      igit('config', 'user.email', 'test@example.com')
      igit('config', 'user.name', 'Test')
      fs.mkdirSync(path.dirname(flat), { recursive: true })
      fs.writeFileSync(flat, page('Guide', ['/copilot/ancient-guide']), 'utf8')
      igit('add', '-A')
      igit('commit', '-m', 'pre-sync state')

      fs.rmSync(flat)
      fs.mkdirSync(path.dirname(nested), { recursive: true })
      fs.writeFileSync(nested, page('Guide'), 'utf8')

      runScript(isolated, ['--sdk-docs-dir', path.join(isolated, SDK_DIR), '--fail-on-unresolved'])

      const result = fs.readFileSync(nested, 'utf8')
      expect(result).toContain('/copilot/ancient-guide')
      // The URL the file already serves must not be added to its own page.
      expect(result).not.toContain('- /copilot/how-tos/copilot-sdk/features/guide\n')
    } finally {
      fs.rmSync(isolated, { recursive: true, force: true })
    }
  })

  test('exits cleanly when the ref is valid but the SDK directory is absent', () => {
    // The first ever sync. This is the one empty baseline that is legitimate,
    // and it must stay distinguishable from a baseline that could not be read.
    const isolated = fs.mkdtempSync(path.join(os.tmpdir(), 'sdk-redirects-first-'))
    const igit = (...args: string[]) =>
      execFileSync('git', args, { cwd: isolated, encoding: 'utf8' })

    try {
      igit('init', '--initial-branch=main')
      igit('config', 'user.email', 'test@example.com')
      igit('config', 'user.name', 'Test')
      fs.writeFileSync(path.join(isolated, 'README.md'), '# Repo\n', 'utf8')
      igit('add', '-A')
      igit('commit', '-m', 'repo without SDK docs')

      // The sync has just created the tree for the first time.
      const target = path.join(isolated, SDK_DIR, 'features/new.md')
      fs.mkdirSync(path.dirname(target), { recursive: true })
      fs.writeFileSync(target, page('New'), 'utf8')

      const output = runScript(isolated, [
        '--sdk-docs-dir',
        path.join(isolated, SDK_DIR),
        '--fail-on-unresolved',
      ])
      expect(output).toContain('nothing to preserve')
    } finally {
      fs.rmSync(isolated, { recursive: true, force: true })
    }
  })

  test('fails loudly when the page receiving redirects has no frontmatter', () => {
    const isolated = fs.mkdtempSync(path.join(os.tmpdir(), 'sdk-redirects-nofm-'))
    const igit = (...args: string[]) =>
      execFileSync('git', args, { cwd: isolated, encoding: 'utf8' })
    const target = path.join(isolated, SDK_DIR, 'features/stable.md')

    try {
      igit('init', '--initial-branch=main')
      igit('config', 'user.email', 'test@example.com')
      igit('config', 'user.name', 'Test')
      fs.mkdirSync(path.dirname(target), { recursive: true })

      fs.writeFileSync(
        target,
        [
          '---',
          'title: Stable',
          'redirect_from:',
          '  - /copilot/legacy',
          '---',
          '',
          'Body.',
          '',
        ].join('\n'),
        'utf8',
      )
      igit('add', '-A')
      igit('commit', '-m', 'pre-sync state')

      // The sync rewrites the page without any frontmatter at all, so there is
      // nowhere to put the redirect back.
      fs.writeFileSync(target, 'Body only, no frontmatter.\n', 'utf8')

      let message = ''
      try {
        runScript(isolated, ['--sdk-docs-dir', path.join(isolated, SDK_DIR)])
        throw new Error('expected the script to fail')
      } catch (error) {
        message = `${(error as Error).message}${(error as { stderr?: string }).stderr ?? ''}`
      }
      expect(message).toContain('no frontmatter block')
      expect(message).toContain('/copilot/legacy')
    } finally {
      fs.rmSync(isolated, { recursive: true, force: true })
    }
  })
})
