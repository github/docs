import { describe, expect, test, beforeEach, afterEach } from 'vitest'
import { mkdtemp, writeFile, readdir, rm } from 'fs/promises'
import path from 'path'
import os from 'os'

import { removeStaleWebhookDataFiles } from '@/webhooks/scripts/sync'

describe('removeStaleWebhookDataFiles', () => {
  let versionDir: string

  beforeEach(async () => {
    versionDir = await mkdtemp(path.join(os.tmpdir(), 'webhook-sync-test-'))
  })

  afterEach(async () => {
    await rm(versionDir, { recursive: true, force: true })
  })

  test('removes category and child-params files not written during sync', async () => {
    await writeFile(path.join(versionDir, 'foo_bar.json'), '{}')
    await writeFile(path.join(versionDir, 'foo_bar.child-params.json'), '{}')
    await writeFile(path.join(versionDir, 'foo_bar.json.br'), '')
    await writeFile(path.join(versionDir, 'foo_baz.json'), '{}')
    await writeFile(path.join(versionDir, 'ping.json'), '{}')
    await writeFile(path.join(versionDir, 'README.md'), '# readme')

    await removeStaleWebhookDataFiles(versionDir, new Set(['foo_baz.json', 'ping.json']))

    const remaining = (await readdir(versionDir)).sort()
    expect(remaining).toEqual(['README.md', 'foo_baz.json', 'ping.json'])
  })

  test('keeps child-params files that were written during sync', async () => {
    await writeFile(path.join(versionDir, 'foo_baz.json'), '{}')
    await writeFile(path.join(versionDir, 'foo_baz.child-params.json'), '{}')

    await removeStaleWebhookDataFiles(
      versionDir,
      new Set(['foo_baz.json', 'foo_baz.child-params.json']),
    )

    const remaining = (await readdir(versionDir)).sort()
    expect(remaining).toEqual(['foo_baz.child-params.json', 'foo_baz.json'])
  })

  test('skips a directory that does not exist', async () => {
    const nonexistent = path.join(versionDir, 'does-not-exist')
    await expect(
      removeStaleWebhookDataFiles(nonexistent, new Set(['ping.json'])),
    ).resolves.toBeUndefined()
  })
})
