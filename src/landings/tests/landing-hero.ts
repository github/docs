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
  return {
    Button: ({ href, children }: { href: string; children?: ReactNode }) =>
      createElement('a', { href }, children),
    ButtonGroup: passthrough,
    Heading: passthrough,
    Text: passthrough,
  }
})
vi.mock('@/frame/components/ui/RenderedHTML/RenderedHTML', () => ({ RenderedHTML: () => null }))

const { LandingHero } = await import('@/landings/components/shared/LandingHero')

function renderHrefs(introLinks: Record<string, string>) {
  const $ = load(renderToStaticMarkup(createElement(LandingHero, { title: 'Title', introLinks })))
  return $('a')
    .map((_, el) => $(el).attr('href'))
    .get()
}

describe('LandingHero introLinks', () => {
  beforeEach(() => {
    router.locale = 'en'
    router.query = {}
  })

  test('prefixes internal links with the locale on the default version', () => {
    expect(renderHrefs({ quickstart: '/actions/quickstart' })).toEqual(['/en/actions/quickstart'])
  })

  test('prefixes internal links with the locale and current version', () => {
    router.locale = 'ja'
    router.query = { versionId: 'enterprise-server@3.16' }
    expect(renderHrefs({ overview: '/billing/overview' })).toEqual([
      '/ja/enterprise-server@3.16/billing/overview',
    ])
  })

  test('leaves external links unchanged', () => {
    router.query = { versionId: 'enterprise-cloud@latest' }
    expect(
      renderHrefs({ overview: 'https://github.com/features', other: '//example.com/x' }),
    ).toEqual(['https://github.com/features', '//example.com/x'])
  })
})

describe('LandingHero heroTheme', () => {
  function renderHero(props: { heroImage?: string; heroTheme?: 'mos-diner' }) {
    return load(renderToStaticMarkup(createElement(LandingHero, { title: 'Title', ...props })))
  }

  test('draws the hero image when no theme is set', () => {
    const $ = renderHero({ heroImage: '/assets/images/banner-images/hero-1' })
    expect($('[style*="background-image"]').length).toBe(1)
    expect($('[data-hero-theme]').length).toBe(0)
    expect($('[aria-hidden="true"]').length).toBe(0)
    expect($('.visually-hidden').length).toBe(0)
  })

  test('replaces the hero image with the theme and its decorative accent', () => {
    const $ = renderHero({
      heroImage: '/assets/images/banner-images/hero-1',
      heroTheme: 'mos-diner',
    })
    expect($('[data-hero-theme="mos-diner"]').length).toBe(1)
    expect($('[style*="background-image"]').length).toBe(0)
    expect($('[data-hero-theme="mos-diner"] > [aria-hidden="true"]').length).toBe(1)
    expect($('.visually-hidden').text()).toBe('Title')
  })
})
