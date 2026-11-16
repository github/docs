import { afterEach, describe, expect, test, vi } from 'vitest'

import { printAnnotationResults } from '@/content-linter/lib/helpers/print-annotations'

function captureAnnotations(...args: Parameters<typeof printAnnotationResults>) {
  const spy = vi.spyOn(console, 'log').mockImplementation(() => {})
  printAnnotationResults(...args)
  return spy.mock.calls.map((call) => call[0])
}

describe('printAnnotationResults', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('adds a trailing period to errorDetail', () => {
    const lines = captureAnnotations({
      'content/foo.md': [
        {
          ruleNames: ['GHD001', 'link-punctuation'],
          severity: 'error',
          lineNumber: 3,
          ruleDescription: 'Desc',
          errorDetail: 'Detail',
        },
      ],
    })
    expect(lines).toEqual(['::error file=content/foo.md,line=3,title=Desc::Detail.'])
  })

  test('uses context as the message when errorDetail is missing', () => {
    const lines = captureAnnotations({
      'content/foo.md': [
        {
          ruleNames: ['MD040', 'fenced-code-language'],
          severity: 'error',
          lineNumber: 12,
          ruleDescription: 'Desc',
          context: 'Context',
        },
      ],
    })
    expect(lines).toEqual(['::error file=content/foo.md,line=12,title=Desc::Context'])
  })

  test('appends context after errorDetail', () => {
    const lines = captureAnnotations({
      'content/foo.md': [
        {
          ruleNames: ['GHD002', 'some-rule'],
          severity: 'warning',
          lineNumber: 5,
          ruleDescription: 'Desc',
          errorDetail: 'Detail.',
          context: 'Context',
        },
      ],
    })
    expect(lines).toEqual(['::warning file=content/foo.md,line=5,title=Desc::Detail. Context'])
  })

  test('uses ruleDescription as the message when errorDetail and context are missing', () => {
    const lines = captureAnnotations({
      'content/foo.md': [
        {
          ruleNames: ['MD018', 'no-missing-space-atx'],
          severity: 'error',
          lineNumber: 7,
          ruleDescription: 'Desc',
        },
      ],
    })
    expect(lines).toEqual(['::error file=content/foo.md,line=7,title=Desc::Desc'])
  })

  test('skips flaws with a skippable property', () => {
    const lines = captureAnnotations(
      {
        'data/foo.yml': [
          {
            ruleNames: ['GHD001', 'link-punctuation'],
            severity: 'error',
            lineNumber: 1,
            ruleDescription: 'Desc',
            errorDetail: 'Detail',
            isYamlFile: true,
          },
        ],
      },
      { skippableFlawProperties: ['isYamlFile'] },
    )
    expect(lines).toEqual([])
  })
})
