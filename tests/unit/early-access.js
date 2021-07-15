import { jest } from '@jest/globals'
import xFs from 'fs'
import path from 'path'
import { testViaActionsOnly } from '../helpers/conditional-runs.js'
import { getDOM } from '../helpers/supertest.js'
import got from 'got'
const fs = xFs.promises

describe('cloning early-access', () => {
  testViaActionsOnly('the content directory exists', async () => {
    const eaDir = path.join(process.cwd(), 'content/early-access')
    expect(await fs.stat(eaDir)).toBeTruthy()
  })

  testViaActionsOnly('the data directory exists', async () => {
    const eaDir = path.join(process.cwd(), 'data/early-access')
    expect(await fs.stat(eaDir)).toBeTruthy()
  })

  testViaActionsOnly('the assets/images directory exists', async () => {
    const eaDir = path.join(process.cwd(), 'assets/images/early-access')
    expect(await fs.stat(eaDir)).toBeTruthy()
  })
})

describe('rendering early-access', () => {
  jest.setTimeout(5 * 60 * 1000)

  testViaActionsOnly('the top-level TOC renders locally', async () => {
    const $ = await getDOM('/en/early-access')
    expect(
      $.html().includes('Hello, local developer! This page is not visible on production.')
    ).toBe(true)
    expect($('ul a').length).toBeGreaterThan(5)
  })

  testViaActionsOnly('the top-level TOC does not render on production', async () => {
    async function getEarlyAccess() {
      return await got('https://docs.github.com/en/early-access')
    }
    await expect(getEarlyAccess).rejects.toThrowError('Response code 404 (Not Found)')
  })

  testViaActionsOnly('TOCs display on category pages', async () => {
    const $ = await getDOM('/en/early-access/github/enforcing-best-practices-with-github-policies')
    expect($('ul a').length).toBeGreaterThan(5)
  })
})
