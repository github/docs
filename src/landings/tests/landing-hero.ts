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
    ButtonGroup: ({ children }: { children?: ReactNode }) =>
      createElement('div', { 'data-button-group': '' }, children),
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
  function renderHero(props: {
    heroImage?: string
    heroImageDark?: string
    heroTheme?: 'mos-diner'
  }) {
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

  // The dark image only shows in dark mode, so a broken swap is easy to miss by eye.
  test('passes a dark mode hero image to the stylesheet when one is set', () => {
    const $ = renderHero({
      heroImage: '/assets/images/banner-images/chez-mona',
      heroImageDark: '/assets/images/banner-images/chez-mona-dark',
    })
    const hero = $('[style*="background-image"]')
    expect(hero.attr('style')).toContain('--hero-image-dark')
    expect(hero.attr('style')).toContain('chez-mona-dark')
    expect(hero.attr('class')).toContain('hasDarkHeroImage')
  })

  test('leaves pages without a dark mode hero image unchanged', () => {
    const $ = renderHero({ heroImage: '/assets/images/banner-images/hero-1' })
    const hero = $('[style*="background-image"]')
    expect(hero.attr('style')).not.toContain('--hero-image-dark')
    expect(hero.attr('class') ?? '').not.toContain('hasDarkHeroImage')
  })

  test('ignores the dark mode hero image when a theme replaces the art', () => {
    const $ = renderHero({
      heroImage: '/assets/images/banner-images/chez-mona',
      heroImageDark: '/assets/images/banner-images/chez-mona-dark',
      heroTheme: 'mos-diner',
    })
    expect($.html()).not.toContain('--hero-image-dark')
  })
})

describe('LandingHero share button', () => {
  function render(showShareButton?: boolean, introLinks?: Record<string, string>) {
    return load(
      renderToStaticMarkup(
        createElement(LandingHero, { title: 'Title', showShareButton, introLinks }),
      ),
    )
  }

  test('is hidden unless the page opts in', () => {
    expect(render().text()).not.toContain('share_button.label')
    expect(render(true).text()).toContain('share_button.label')
  })

  // ButtonGroup silently drops a third button, so Share must leave the group when it's full.
  test('joins the button group only when the group has room', () => {
    const oneLink = render(true, { compare: 'https://example.com/a' })
    expect(oneLink('[data-button-group]').text()).toContain('share_button.label')

    const twoLinks = render(true, { a: 'https://example.com/a', b: 'https://example.com/b' })
    expect(twoLinks('[data-button-group]').text()).not.toContain('share_button.label')
    expect(twoLinks.text()).toContain('share_button.label')
  })
})
