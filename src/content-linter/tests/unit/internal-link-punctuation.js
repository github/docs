import { jest } from '@jest/globals'

import { runRule } from '../../lib/init-test.js'
import { internalLinkPunctuation } from '../../lib/linting-rules/internal-link-punctuation.js'

jest.setTimeout(60 * 1000)

describe(internalLinkPunctuation.names.join(' - '), () => {
  test('inline links without quotes and punctuation should not error', async () => {
    const markdown = [
      '[This should pass](./image.png)',
      '[AUTOTITLE](./image.png)',
      // These are not necessarily good descriptions, but they are valid
      // per the requirements of the rule
      "[A link with end quote'](./image.png)",
      '["A link with start quote](./image.png)',
    ].join('\n')

    const result = await runRule(internalLinkPunctuation, { markdown })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
  test('inline links with quotes or punctuation should error', async () => {
    const markdown = [
      '["GitHub Documentation is here"](./image.png)',
      "['GitHub Documentation is here'](./image.png)",
      '[GitHub Documentation is found on this site.](./image.png)',
      '["GitHub Documentation is found on this site."](./image.png)',
      '["GitHub Documentation is found on this site".](./image.png)',
      "['GitHub Documentation is found on this site.'](./image.png)",
      "['GitHub Documentation is found on this site'?](./image.png)",
      '["GitHub Documentation is found on this site"!](./image.png)',
      "['GitHub Documentation is found on this site?'](./image.png)",
      '["GitHub Documentation is found on this site!"](./image.png)',
      '[A link with a question mark?](./image.png)',
      '[A link with an exclamation point!](./image.png)',
      '[A link with a period.](./image.png)',
    ].join('\n')

    const result = await runRule(internalLinkPunctuation, { markdown })
    const errors = result.markdown
    expect(errors.length).toBe(13)
    expect(errors[0].errorRange).toEqual([2, 30])
    expect(errors[9].lineNumber).toBe(10)
  })
})
