import { describe, expect, test } from 'vitest'

import { BespokeLandingTransformer } from '@/article-api/transformers/bespoke-landing-transformer'
import { DiscoveryLandingTransformer } from '@/article-api/transformers/discovery-landing-transformer'
import shortVersionsMiddleware from '@/versions/middleware/short-versions'
import { allVersions } from '@/versions/lib/all-versions'
import enterpriseServerReleases from '@/versions/lib/enterprise-server-releases'
import type { Context, ExtendedRequest, Page } from '@/types'

const ghesVersion = `enterprise-server@${enterpriseServerReleases.latest}`
const overviewPath = '/billing/get-started/how-billing-works'
const ghesOverviewPath = '/billing/concepts/enterprise-billing/billing-for-enterprises'
const rawOverview = `{% ifversion fpt or ghec %}${overviewPath} {% elsif ghes %}${ghesOverviewPath}{% endif %}`

const makeLinkedPage = (title: string) =>
  ({
    title,
    intro: '',
    // resolveCarouselLinks drops links whose page does not apply to the requested version.
    applicableVersions: Object.keys(allVersions),
    renderTitle: async () => title,
    renderProp: async () => '',
  }) as unknown as Page

const pages: Record<string, Page> = {
  [`/en${overviewPath}`]: makeLinkedPage('How billing works'),
  [`/en${ghesOverviewPath}`]: makeLinkedPage('Billing for enterprises'),
  [`/en/${ghesVersion}${ghesOverviewPath}`]: makeLinkedPage('Billing for enterprises'),
}

// staleOverview stands in for the introLinks value that Page.render leaves on the shared Page.
const makeLandingPage = (layout: string, staleOverview: string) =>
  ({
    layout,
    title: 'Billing',
    intro: '',
    rawIntroLinks: { overview: rawOverview },
    introLinks: { overview: staleOverview },
    rawCarousels: { recommended: [ghesOverviewPath] },
    renderTitle: async () => 'Billing',
    renderProp: async () => '',
  }) as unknown as Page

const buildContext = async (currentVersion: string): Promise<Context> => {
  const req = { language: 'en', query: {} } as ExtendedRequest
  req.context = {
    currentLanguage: 'en',
    currentVersion,
    currentVersionObj: allVersions[currentVersion],
    allVersions,
    enterpriseServerReleases,
    pages,
    redirects: {},
  } as Context
  await shortVersionsMiddleware(req, null, () => {})
  return req.context
}

const getLinksSection = (body: string) => {
  const start = body.indexOf('## Links')
  if (start === -1) return ''
  const end = body.indexOf('\n## ', start)
  return end === -1 ? body.slice(start) : body.slice(start, end)
}

describe.each([
  {
    name: 'discovery',
    layout: 'discovery-landing',
    transformer: new DiscoveryLandingTransformer(),
  },
  { name: 'bespoke', layout: 'bespoke-landing', transformer: new BespokeLandingTransformer() },
])('$name landing intro links', ({ layout, transformer }) => {
  test('renders raw intro links for fpt when the page holds a GHES render', async () => {
    const page = makeLandingPage(layout, ghesOverviewPath)
    const body = await transformer.transform(
      page,
      '/en/billing',
      await buildContext('free-pro-team@latest'),
    )

    const linksSection = getLinksSection(body)
    expect(linksSection).toContain('### Getting started')
    expect(linksSection).toContain(`[How billing works](/en${overviewPath})`)
    expect(linksSection).not.toContain('Billing for enterprises')
  })

  test('renders raw intro links for GHES when the page holds an fpt render', async () => {
    const page = makeLandingPage(layout, overviewPath)
    const body = await transformer.transform(page, '/en/billing', await buildContext(ghesVersion))

    const linksSection = getLinksSection(body)
    expect(linksSection).toContain(
      `[Billing for enterprises](/en/${ghesVersion}${ghesOverviewPath})`,
    )
    expect(body).not.toContain('How billing works')
  })
})

describe('bespoke landing intro links order', () => {
  test('lists intro links before carousels, like the page hero', async () => {
    const page = makeLandingPage('bespoke-landing', overviewPath)
    const body = await new BespokeLandingTransformer().transform(
      page,
      '/en/billing',
      await buildContext('free-pro-team@latest'),
    )

    expect(body.indexOf('## Links')).toBeGreaterThan(-1)
    expect(body.indexOf('## Links')).toBeLessThan(body.indexOf('## Recommended'))
  })
})
