import { describe, expect, test, beforeEach, afterEach } from 'vitest'
import { mkdtemp, writeFile, readdir, rm } from 'fs/promises'
import { mkdirSync } from 'fs'
import path from 'path'
import os from 'os'

import { removeStaleRestDataFiles } from '../scripts/utils/sync'

describe('removeStaleRestDataFiles', () => {
  let tmpDir: string
  let versionDir: string

  beforeEach(async () => {
    tmpDir = await mkdtemp(path.join(os.tmpdir(), 'rest-sync-test-'))
    versionDir = path.join(tmpDir, 'fpt-2022-11-28')
    mkdirSync(versionDir)
  })

  afterEach(async () => {
    await rm(tmpDir, { recursive: true, force: true })
  })

  test('removes stale .json files not written during sync', async () => {
    // Simulate pre-existing files on disk
    await writeFile(path.join(versionDir, 'actions.json'), '{}')
    await writeFile(path.join(versionDir, 'agent-tasks.json'), '{}')
    await writeFile(path.join(versionDir, 'repos.json'), '{}')

    // Only actions.json and repos.json were produced by the sync
    const writtenFiles = new Map<string, Set<string>>()
    writtenFiles.set(versionDir, new Set(['actions.json', 'repos.json']))

    await removeStaleRestDataFiles(writtenFiles)

    const remaining = (await readdir(versionDir)).sort()
    expect(remaining).toEqual(['actions.json', 'repos.json'])
  })

  test('does not remove files when all are current', async () => {
    await writeFile(path.join(versionDir, 'actions.json'), '{}')
    await writeFile(path.join(versionDir, 'repos.json'), '{}')

    const writtenFiles = new Map<string, Set<string>>()
    writtenFiles.set(versionDir, new Set(['actions.json', 'repos.json']))

    await removeStaleRestDataFiles(writtenFiles)

    const remaining = (await readdir(versionDir)).sort()
    expect(remaining).toEqual(['actions.json', 'repos.json'])
  })

  test('ignores non-.json files', async () => {
    await writeFile(path.join(versionDir, 'actions.json'), '{}')
    await writeFile(path.join(versionDir, 'README.md'), '# readme')

    const writtenFiles = new Map<string, Set<string>>()
    writtenFiles.set(versionDir, new Set(['actions.json']))

    await removeStaleRestDataFiles(writtenFiles)

    const remaining = (await readdir(versionDir)).sort()
    expect(remaining).toEqual(['README.md', 'actions.json'])
  })

  test('handles multiple version directories', async () => {
    const versionDir2 = path.join(tmpDir, 'ghec-2022-11-28')
    mkdirSync(versionDir2)

    await writeFile(path.join(versionDir, 'actions.json'), '{}')
    await writeFile(path.join(versionDir, 'stale.json'), '{}')
    await writeFile(path.join(versionDir2, 'repos.json'), '{}')
    await writeFile(path.join(versionDir2, 'stale.json'), '{}')

    const writtenFiles = new Map<string, Set<string>>()
    writtenFiles.set(versionDir, new Set(['actions.json']))
    writtenFiles.set(versionDir2, new Set(['repos.json']))

    await removeStaleRestDataFiles(writtenFiles)

    expect(await readdir(versionDir)).toEqual(['actions.json'])
    expect(await readdir(versionDir2)).toEqual(['repos.json'])
  })

  test('skips version directories that do not exist', async () => {
    const nonexistent = path.join(tmpDir, 'does-not-exist')
    const writtenFiles = new Map<string, Set<string>>()
    writtenFiles.set(nonexistent, new Set(['actions.json']))

    // Should not throw
    await removeStaleRestDataFiles(writtenFiles)
  })
})
