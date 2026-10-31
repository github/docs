import { createElement } from 'react'
import type { ReactNode } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { load } from 'cheerio'
import { beforeEach, describe, expect, test, vi } from 'vitest'

const router = vi.hoisted(() => ({
  locale: 'en',
  query: {} as Record<string, string>,
}))

vi.mock('next/router', () => ({ useRouter: () => router }))
vi.mock('@/languages/components/useTranslation', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}))
// Primer packages import CSS files, which Node cannot load outside a bundler.
vi.mock('@primer/react-brand', () => {
  const passthrough = ({ children }: { children?: ReactNode }) =>
    createElement('div', null, children)
  const Card = ({ href, children }: { href: string; children?: ReactNode }) =>
    createElement('a', { href }, children)
  Card.Heading = passthrough
  Card.Description = passthrough
  return { Card }
})
vi.mock('@/frame/components/ui/RenderedHTML/RenderedHTML', () => ({ RenderedHTML: () => null }))

const { LandingCarousel } = await import('@/landings/components/shared/LandingCarousel')

function renderHrefs() {
  const carouselArticles = [
    { href: '/actions/quickstart', title: 'Quickstart', intro: '', category: [] },
  ]
  const $ = load(renderToStaticMarkup(createElement(LandingCarousel, { carouselArticles })))
  return $('a')
    .map((_, el) => $(el).attr('href'))
    .get()
}

describe('LandingCarousel card links', () => {
  beforeEach(() => {
    router.locale = 'en'
    router.query = {}
  })

  test('omits the default version', () => {
    expect(renderHrefs()).toEqual(['/en/actions/quickstart'])
  })

  test('includes a non-default version', () => {
    router.locale = 'ja'
    router.query = { versionId: 'enterprise-server@3.16' }
    expect(renderHrefs()).toEqual(['/ja/enterprise-server@3.16/actions/quickstart'])
  })
})
