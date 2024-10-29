import { afterAll, beforeAll, describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test.js'
import {
  liquidIfVersionVersions,
  validateIfversionConditionalsVersions,
} from '../../lib/linting-rules/liquid-versioning.js'
import { supported } from '#src/versions/lib/enterprise-server-releases.js'

describe(liquidIfVersionVersions.names.join(' - '), () => {
  const envVarValueBefore = process.env.ROOT

  beforeAll(() => {
    process.env.ROOT = 'src/fixtures/fixtures'
  })

  afterAll(() => {
    process.env.ROOT = envVarValueBefore
  })

  test('ifversion naming all possible shortnames in body', async () => {
    const markdown = `
      {% ifversion ghes or ghec or fpt %}{% endif %}
      {% ifversion fpt %}{% elsif ghec or fpt or ghes %}{% endif %}
    `
    const result = await runRule(liquidIfVersionVersions, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors.every((error) => error.ruleNames[0] === 'GHD022'))
  })

  test('ifversion naming all possible shortnames in front matter', async () => {
    const markdown = [
      '---',
      "title: '{% ifversion ghes or ghec or fpt %}Always{% endif %}'",
      '---',
      'All is well',
    ].join('\n')

    const fmOptions = { markdownlintOptions: { frontMatter: null } }
    const result = await runRule(liquidIfVersionVersions, {
      strings: { markdown },
      ...fmOptions,
    })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].ruleNames[0]).toBe('GHD022')
  })

  test('ifversion all shortnames and an oldest ghes', async () => {
    const markdown = `
      {% ifversion ghec or fpt or ghes >=${supported.at(-1)} %}{% endif %}
    `
    const result = await runRule(liquidIfVersionVersions, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].ruleNames[0]).toBe('GHD022')
  })

  test('ifversion all shortnames and an almost oldest ghes', async () => {
    // Note that this will mean version will not catch the oldest version
    // of ghes, so something is actually excluded by the ifversion tag.
    const markdown = `
      {% ifversion ghec or fpt or ghes >${supported.at(-1)} %}{% endif %}
    `
    const result = await runRule(liquidIfVersionVersions, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('ifversion using feature based version with all versions', async () => {
    // That `features/them-and-all.yml` uses all versions.
    const markdown = `
      {% ifversion them-and-all %}{% endif %}
    `
    const result = await runRule(liquidIfVersionVersions, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].ruleNames[0]).toBe('GHD022')
  })

  test('ifversion using feature based version extended with shortname all versions', async () => {
    // That `features/volvo.yml` contains `fpt:'*', ghec:'*'`
    // so combined with the
    const markdown = `
      {% ifversion volvo or ghes %}{% endif %}
    `
    const result = await runRule(liquidIfVersionVersions, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].ruleNames[0]).toBe('GHD022')
  })

  test("ifversion using 'not' can't be tested", async () => {
    const markdown = `
      {% ifversion ghes or fpt or not ghec %}{% endif %}
    `
    const result = await runRule(liquidIfVersionVersions, {
      strings: { markdown },
    })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
})

describe('test validateIfversionConditionalsVersions function', () => {
  test('most basic example without feature', () => {
    const condition = 'ghes or ghec or fpt'
    const allFeatures = {}
    const errors = validateIfversionConditionalsVersions(condition, allFeatures)
    expect(errors.length).toBe(1)
  })
  test('most basic example with feature', () => {
    const condition = 'some-feature'
    const allFeatures = {
      'some-feature': {
        versions: {
          ghec: '*',
          fpt: '*',
          ghes: '*',
        },
      },
    }
    const errors = validateIfversionConditionalsVersions(condition, allFeatures)
    expect(errors.length).toBe(1)
  })
  test("any 'and' always yields no errors", () => {
    const condition = 'ghes and ghec or fpt'
    const allFeatures = {}
    const errors = validateIfversionConditionalsVersions(condition, allFeatures)
    expect(errors.length).toBe(0)
  })
  test("any 'not' always yields no errors", () => {
    const condition = 'ghes or ghec or not fpt'
    const allFeatures = {}
    const errors = validateIfversionConditionalsVersions(condition, allFeatures)
    expect(errors.length).toBe(0)
  })
  test('combined with feature it is all versions', () => {
    const condition = 'ghec or fpt or some-feature'
    const allFeatures = {
      'some-feature': {
        versions: {
          ghes: `>=${supported.at(-1)}`,
        },
      },
    }
    const errors = validateIfversionConditionalsVersions(condition, allFeatures)
    expect(errors.length).toBe(1)
  })
  test('less or equal than a future version', () => {
    const condition = 'ghec or fpt or some-feature'
    const latestToday = parseFloat(supported.at(-1))
    const allFeatures = {
      'some-feature': {
        versions: {
          ghes: `<=${latestToday + 0.1}`,
        },
      },
    }
    const errors = validateIfversionConditionalsVersions(condition, allFeatures)
    expect(errors.length).toBe(0)
  })
  test('less than a future version', () => {
    const condition = 'ghec or fpt or some-feature'
    const latestToday = parseFloat(supported.at(-1))
    const allFeatures = {
      'some-feature': {
        versions: {
          ghes: `<${latestToday + 0.1}`,
        },
      },
    }
    const errors = validateIfversionConditionalsVersions(condition, allFeatures)
    expect(errors.length).toBe(0)
  })
  test('combined with feature it is eventually all versions (1)', () => {
    const condition = `ghec or fpt or ghes >${supported.at(-1)} or some-feature`
    const allFeatures = {
      'some-feature': {
        versions: {
          ghes: `>=${supported.at(-1)}`,
        },
      },
    }
    const errors = validateIfversionConditionalsVersions(condition, allFeatures)
    expect(errors.length).toBe(1)
  })
  test('combined with feature it is eventually all versions (2)', () => {
    const condition = `ghec or fpt or ghes >=${supported.at(-1)} or some-feature`
    const allFeatures = {
      'some-feature': {
        versions: {
          ghes: `>${supported.at(-1)}`,
        },
      },
    }
    const errors = validateIfversionConditionalsVersions(condition, allFeatures)
    expect(errors.length).toBe(1)
  })
})
