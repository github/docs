import { stat } from 'fs/promises'
import path from 'path'

import { describe, expect } from 'vitest'

import { testViaActionsOnly } from '@/tests/helpers/conditional-runs.js'
import { get, getDOM } from '@/tests/helpers/e2etest.js'

describe('cloning early-access', () => {
  testViaActionsOnly('the content directory exists', async () => {
    const eaDir = path.join(process.cwd(), 'content/early-access')
    expect(await stat(eaDir)).toBeTruthy()
  })

  testViaActionsOnly('the data directory exists', async () => {
    const eaDir = path.join(process.cwd(), 'data/early-access')
    expect(await stat(eaDir)).toBeTruthy()
  })

  testViaActionsOnly('the assets/images directory exists', async () => {
    const eaDir = path.join(process.cwd(), 'assets/images/early-access')
    expect(await stat(eaDir)).toBeTruthy()
  })
})

describe('rendering early-access', () => {
  testViaActionsOnly('the top-level TOC is always 404', async () => {
    const res = await get('/en/early-access')
    expect(res.statusCode).toBe(404)
  })

  testViaActionsOnly('the enterprise-cloud TOC is always 404', async () => {
    const res = await get('/en/enterprise-cloud@latest/early-access')
    expect(res.statusCode).toBe(404)
  })

  testViaActionsOnly('TOCs display on category pages', async () => {
    const $ = await getDOM('/en/early-access/github/enforcing-best-practices-with-github-policies')
    expect($('ul a').length).toBeGreaterThan(5)
  })
})
