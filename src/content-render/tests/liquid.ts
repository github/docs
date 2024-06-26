import { describe, expect, test, vi } from 'vitest'
import type { Response } from 'express'

import { liquid } from '@/content-render/index.js'
import shortVersionsMiddleware from '@/versions/middleware/short-versions.js'
import featureVersionsMiddleware from '@/versions/middleware/features'
import { allVersions } from '@/versions/lib/all-versions.js'
import enterpriseServerReleases from '@/versions/lib/enterprise-server-releases.js'
import type { Context, ExtendedRequest, Page } from '@/types'

// Setup these variables so we don't need to manually update tests as GHES
// versions continually get deprecated.  For example, if we deprecate GHES 3.0,
// oldestSupportedGhes will be 3.1, secondOldestSupportedGhes will be 3.2, and
// thirdOldestSupportedGhes will be 3.3.
const oldestSupportedGhes =
  enterpriseServerReleases.supported[enterpriseServerReleases.supported.length - 1]
const secondOldestSupportedGhes =
  enterpriseServerReleases.supported[enterpriseServerReleases.supported.length - 2]
const thirdOldestSupportedGhes =
  enterpriseServerReleases.supported[enterpriseServerReleases.supported.length - 3]

const shortVersionsTemplate = `
  {% ifversion fpt %} I am FPT {% endif %}
  {% ifversion ghec %} I am GHEC{% endif %}
  {% ifversion ghes %} I am GHES {% endif %}
  {% ifversion ghes = ${secondOldestSupportedGhes} %} I am GHES = ${secondOldestSupportedGhes} {% endif %}
  {% ifversion ghes > ${secondOldestSupportedGhes} %} I am GHES > ${secondOldestSupportedGhes} {% endif %}
  {% ifversion ghes < ${secondOldestSupportedGhes} %} I am GHES < ${secondOldestSupportedGhes} {% endif %}
  {% ifversion fpt or ghes < ${secondOldestSupportedGhes} %} I am FTP or GHES < ${secondOldestSupportedGhes} {% endif %}
  {% ifversion ghes < ${thirdOldestSupportedGhes} and ghes > ${oldestSupportedGhes} %} I am ${secondOldestSupportedGhes} only {% endif %}
`
const negativeVersionsTemplate = `
  {% ifversion not ghec %} I am not GHEC {% endif %}
  {% ifversion not ghes %} I am not GHES {% endif %}
  {% ifversion ghes != ${secondOldestSupportedGhes} %} I am not GHES ${secondOldestSupportedGhes} {% endif %}
`

const featureVersionsTemplate = `
  {% if placeholder %} I am placeholder content {% endif %}
`

const contextualize = (req: ExtendedRequest) => {
  if (!req.context || !req.context.allVersions || !req.context.currentVersion)
    throw new Error('request not contextualized')
  req.context!.currentVersionObj = req.context.allVersions[req.context.currentVersion]
  shortVersionsMiddleware(req, null, () => {})
}

describe('liquid template parser', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  describe('short versions', () => {
    // Create a fake req so we can test the shortVersions middleware
    const req = { language: 'en', query: {} } as ExtendedRequest

    test('FPT works as expected when it is FPT', async () => {
      req.context = {
        currentVersion: 'free-pro-team@latest',
        allVersions,
        enterpriseServerReleases,
      } as Context
      contextualize(req)
      const output = await liquid.parseAndRender(shortVersionsTemplate, req.context)
      // We should have TWO results because we are supporting two shortcuts
      expect(output.replace(/\s\s+/g, ' ').trim()).toBe(
        `I am FPT I am FTP or GHES < ${secondOldestSupportedGhes}`,
      )
    })

    test('GHEC works as expected', async () => {
      req.context = {
        currentVersion: 'enterprise-cloud@latest',
        // page: {},
        allVersions,
        enterpriseServerReleases,
      } as Context
      contextualize(req)
      const output = await liquid.parseAndRender(shortVersionsTemplate, req.context)
      expect(output.trim()).toBe('I am GHEC')
    })

    test('GHES works as expected', async () => {
      req.context = {
        currentVersion: `enterprise-server@${oldestSupportedGhes}`,
        allVersions,
        enterpriseServerReleases,
      } as Context
      contextualize(req)
      const output = await liquid.parseAndRender(shortVersionsTemplate, req.context)
      expect(output.replace(/\s\s+/g, ' ').trim()).toBe(
        `I am GHES I am GHES < ${secondOldestSupportedGhes} I am FTP or GHES < ${secondOldestSupportedGhes}`,
      )
    })

    test('AND statements work as expected', async () => {
      req.context = {
        currentVersion: `enterprise-server@${secondOldestSupportedGhes}`,
        allVersions,
        enterpriseServerReleases,
      } as Context
      contextualize(req)
      const output = await liquid.parseAndRender(shortVersionsTemplate, req.context)
      expect(output.replace(/\s\s+/g, ' ').trim()).toBe(
        `I am GHES I am GHES = ${secondOldestSupportedGhes} I am ${secondOldestSupportedGhes} only`,
      )
    })

    test('NOT statements work as expected on versions without numbered releases', async () => {
      req.context = {
        currentVersion: 'free-pro-team@latest',
        allVersions,
        enterpriseServerReleases,
      } as Context
      contextualize(req)
      const output = await liquid.parseAndRender(negativeVersionsTemplate, req.context)
      expect(output.replace(/\s\s+/g, ' ').trim()).toBe(
        `I am not GHEC I am not GHES I am not GHES ${secondOldestSupportedGhes}`,
      )
    })

    test('NOT statements work as expected on versions with numbered releases', async () => {
      req.context = {
        currentVersion: `enterprise-server@${oldestSupportedGhes}`,
        allVersions,
        enterpriseServerReleases,
      } as Context
      contextualize(req)
      const output = await liquid.parseAndRender(negativeVersionsTemplate, req.context)
      expect(output.replace(/\s\s+/g, ' ').trim()).toBe(
        `I am not GHEC I am not GHES ${secondOldestSupportedGhes}`,
      )
    })

    test('The != operator works as expected', async () => {
      req.context = {
        currentVersion: `enterprise-server@${secondOldestSupportedGhes}`,
        allVersions,
        enterpriseServerReleases,
      } as Context
      contextualize(req)
      const output = await liquid.parseAndRender(negativeVersionsTemplate, req.context)
      expect(output.replace(/\s\s+/g, ' ').trim()).toBe('I am not GHEC')
    })
  })

  describe('feature versions', () => {
    // Create a fake req so we can test the feature versions middleware
    const req = { language: 'en', query: {} } as ExtendedRequest

    test('does not render in FPT because feature is not available in FPT', async () => {
      req.context = {
        currentVersion: 'free-pro-team@latest',
        page: {} as Page, // it just has to be any truthy value
        allVersions,
        enterpriseServerReleases,
      } as Context
      featureVersionsMiddleware(req as ExtendedRequest, {} as Response, () => {})
      const output = await liquid.parseAndRender(featureVersionsTemplate, req.context)
      expect(output.includes('placeholder content')).toBe(false)
    })

    test('renders in GHES because feature is available in GHES', async () => {
      req.context = {
        currentVersion: `enterprise-server@${enterpriseServerReleases.latest}`,
        page: {} as Page, // it just has to be any truthy value
        allVersions,
        enterpriseServerReleases,
      } as Context
      featureVersionsMiddleware(req, {} as Response, () => {})
      const output = await liquid.parseAndRender(featureVersionsTemplate, req.context)
      expect(output.includes('placeholder content')).toBe(true)
    })

    test('renders in GHEC because feature is available in GHEC', async () => {
      req.context = {
        currentVersion: 'enterprise-cloud@latest',
        page: {} as Page, // it just has to be any truthy value
        allVersions,
        enterpriseServerReleases,
      } as Context
      featureVersionsMiddleware(req, {} as Response, () => {})
      const output = await liquid.parseAndRender(featureVersionsTemplate, req.context)
      expect(output.includes('placeholder content')).toBe(true)
    })
  })
})
