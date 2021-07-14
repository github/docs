import { getDOM } from '../helpers/supertest.js'
import { jest } from '@jest/globals'

jest.setTimeout(3 * 60 * 1000)

describe('learning tracks', () => {
  test('render first track as feature track', async () => {
    const $ = await getDOM('/en/actions/guides')
    expect($('.feature-track')).toHaveLength(1)
    const href = $('.feature-track li a').first().attr('href')
    const found = href.match(/.*\?learn=(.*)/i)
    expect(found).not.toBeNull()
    const trackName = found[1]

    // check all the links contain track name
    $('.feature-track li a').each((i, elem) => {
      expect($(elem).attr('href')).toEqual(expect.stringContaining(`?learn=${trackName}`))
    })
  })

  test('render other tracks', async () => {
    const $ = await getDOM('/en/actions/guides')
    expect($('.learning-track').length).toBeGreaterThanOrEqual(4)
    $('.learning-track').each((i, trackElem) => {
      const href = $(trackElem).find('.Box-header a').first().attr('href')
      const found = href.match(/.*\?learn=(.*)/i)
      expect(found).not.toBeNull()
      const trackName = found[1]

      // check all the links contain track name
      $(trackElem)
        .find('a.Box-row')
        .each((i, elem) => {
          expect($(elem).attr('href')).toEqual(expect.stringContaining(`?learn=${trackName}`))
        })
    })
  })
})

describe('navigation banner', () => {
  test('render navigation banner when url includes correct learning track name', async () => {
    const $ = await getDOM(
      '/en/actions/guides/setting-up-continuous-integration-using-workflow-templates?learn=continuous_integration'
    )
    expect($('.learning-track-nav')).toHaveLength(1)
    const $navLinks = $('.learning-track-nav a')
    expect($navLinks).toHaveLength(2)
    $navLinks.each((i, elem) => {
      expect($(elem).attr('href')).toEqual(expect.stringContaining('?learn=continuous_integration'))
    })
  })

  test('does not include banner when url does not include `learn` param', async () => {
    const $ = await getDOM(
      '/en/actions/guides/setting-up-continuous-integration-using-workflow-templates'
    )
    expect($('.learning-track-nav')).toHaveLength(0)
  })

  test('does not include banner when url has incorrect `learn` param', async () => {
    const $ = await getDOM(
      '/en/actions/guides/setting-up-continuous-integration-using-workflow-templates?learn=not_real'
    )
    expect($('.learning-track-nav')).toHaveLength(0)
  })

  test('does not include banner when url is not part of the learning track', async () => {
    const $ = await getDOM(
      '/en/actions/learn-github-actions/introduction-to-github-actions?learn=continuous_integration'
    )
    expect($('.learning-track-nav')).toHaveLength(0)
  })
})
