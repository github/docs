import { jest } from '@jest/globals'

import { getDOM } from '../helpers/e2etest.js'

jest.setTimeout(3 * 60 * 1000)

describe('learning tracks', () => {
  test('render first track as feature track', async () => {
    const $ = await getDOM('/en/code-security/guides')
    expect($('[data-testid=feature-track]')).toHaveLength(1)
    const href = $('[data-testid=feature-track] li a').first().attr('href')
    const found = href.match(/.*\?learn=(.*)/i)
    expect(found).not.toBeNull()
    const trackName = found[1]

    // check all the links contain track name
    $('[data-testid=feature-track] li a').each((i, elem) => {
      expect($(elem).attr('href')).toEqual(expect.stringContaining(`?learn=${trackName}`))
    })
  })

  test('render other tracks', async () => {
    const $ = await getDOM('/en/code-security/guides')
    expect($('[data-testid=learning-track]').length).toBeGreaterThanOrEqual(4)
    $('[data-testid=learning-track]').each((i, trackElem) => {
      const href = $(trackElem).find('.Box-header a:nth-child(2)').first().attr('href')
      const found = href.match(/.*\?learn=(.*)/i)
      expect(found).not.toBeNull()
      const trackName = found[1]
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
      '/en/code-security/security-advisories/creating-a-security-advisory?learn=security_advisories'
    )
    expect($('[data-testid=learning-track-nav]')).toHaveLength(1)
    const $navLinks = $('[data-testid=learning-track-nav] a')
    expect($navLinks).toHaveLength(2)
    $navLinks.each((i, elem) => {
      expect($(elem).attr('href')).toEqual(expect.stringContaining('?learn=security_advisories'))
    })
  })

  test('render navigation banner when url is a redirect to a learning track URL', async () => {
    const $ = await getDOM(
      '/en/enterprise/admin/enterprise-management/enabling-automatic-update-checks?learn=upgrade_your_instance'
    )
    expect($('[data-testid=learning-track-nav]')).toHaveLength(1)
    const $navLinks = $('[data-testid=learning-track-nav] a')
    expect($navLinks).toHaveLength(1)
    $navLinks.each((i, elem) => {
      expect($(elem).attr('href')).toEqual(expect.stringContaining('?learn=upgrade_your_instance'))
    })
  })

  test('render navigation banner when url belongs to a multi-product learning track', async () => {
    // This is a `code-security` product learning track and it includes a guide
    // path that belongs to the `repositories` product.
    const $ = await getDOM(
      '/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository?learn=dependabot_alerts&learnProduct=code-security'
    )
    expect($('[data-testid=learning-track-nav]')).toHaveLength(1)
    const $navLinks = $('[data-testid=learning-track-nav] a')
    expect($navLinks).toHaveLength(2)
    $navLinks.each((i, elem) => {
      expect($(elem).attr('href')).toEqual(
        expect.stringContaining('?learn=dependabot_alerts&learnProduct=code-security')
      )
    })
  })

  test('render navigation banner when url belongs to a learning track and has an incorrect `learnProduct` param', async () => {
    // This is a `code-security` product learning track so the path should
    // work as-is and we won't check `learnProduct`.
    const $ = await getDOM(
      '/en/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/viewing-and-updating-vulnerable-dependencies-in-your-repository?learn=dependabot_alerts&learnProduct=not_real'
    )
    expect($('[data-testid=learning-track-nav]')).toHaveLength(1)
    const $navLinks = $('[data-testid=learning-track-nav] a')
    expect($navLinks).toHaveLength(2)
    $navLinks.each((i, elem) => {
      expect($(elem).attr('href')).toEqual(
        expect.stringContaining('?learn=dependabot_alerts&learnProduct=code-security')
      )
    })
  })

  test('does not include banner with multi-product learning track and when url has incorrect `learnProduct` param', async () => {
    // This is a `code-security` product learning track and it includes a guide
    // path that belongs to the `repositories` product.
    const $ = await getDOM(
      '/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository?learn=dependabot_alerts&learnProduct=not_real'
    )
    expect($('[data-testid=learning-track-nav]')).toHaveLength(0)
  })

  test('does not include banner when url does not include `learn` param', async () => {
    const $ = await getDOM(
      '/en/actions/guides/setting-up-continuous-integration-using-workflow-templates'
    )
    expect($('[data-testid=learning-track-nav]')).toHaveLength(0)
  })

  test('does not include banner when url has incorrect `learn` param', async () => {
    const $ = await getDOM(
      '/en/actions/guides/setting-up-continuous-integration-using-workflow-templates?learn=not_real'
    )
    expect($('[data-testid=learning-track-nav]')).toHaveLength(0)
  })

  test('does not include banner when url is not part of the learning track', async () => {
    const $ = await getDOM(
      '/en/actions/learn-github-actions/introduction-to-github-actions?learn=continuous_integration'
    )
    expect($('[data-testid=learning-track-nav]')).toHaveLength(0)
  })
})
