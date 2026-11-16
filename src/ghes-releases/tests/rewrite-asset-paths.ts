import fs from 'fs'
import os from 'os'
import path from 'path'

import { afterEach, beforeEach, describe, expect, test } from 'vitest'

import { RewriteAssetPathsPlugin } from '@/ghes-releases/scripts/deprecate/rewrite-asset-paths'

type RegisterAction = Parameters<RewriteAssetPathsPlugin['apply']>[0]
type Handler = Parameters<RegisterAction>[1]

function registerPlugin(plugin: RewriteAssetPathsPlugin) {
  const handlers: Record<string, Handler> = {}
  plugin.apply((event, callback) => {
    handlers[event] = callback
  })
  return {
    onResourceSaved: handlers.onResourceSaved,
    afterFinish: handlers.afterFinish as () => Promise<void>,
  }
}

function htmlResource(filename: string, text: string) {
  return {
    isHtml: () => true,
    isCss: () => false,
    getText: () => text,
    getFilename: () => filename,
    encoding: 'utf8' as BufferEncoding,
  }
}

describe('RewriteAssetPathsPlugin', () => {
  let tempDirectory: string

  beforeEach(() => {
    tempDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'rewrite-asset-paths-'))
  })

  afterEach(() => {
    fs.rmSync(tempDirectory, { recursive: true, force: true })
  })

  test('afterFinish waits for rewrites that website-scraper does not await', async () => {
    const plugin = new RewriteAssetPathsPlugin(tempDirectory, false, 'https://example.com')
    const handlers = registerPlugin(plugin)

    // website-scraper fires onResourceSaved without awaiting it.
    void handlers.onResourceSaved({
      resource: htmlResource('index.html', '<link href="/stylesheets/main.css">'),
    })
    await handlers.afterFinish()

    expect(fs.readFileSync(path.join(tempDirectory, 'index.html'), 'utf8')).toBe(
      '<link href="https://example.com/stylesheets/main.css">',
    )
  })

  test('afterFinish rejects when a rewrite fails', async () => {
    const plugin = new RewriteAssetPathsPlugin(tempDirectory, false, 'https://example.com')
    const handlers = registerPlugin(plugin)

    await handlers.onResourceSaved({
      resource: htmlResource('missing-dir/index.html', '<p>hi</p>'),
    })

    await expect(handlers.afterFinish()).rejects.toThrow(/ENOENT/)
  })
})
