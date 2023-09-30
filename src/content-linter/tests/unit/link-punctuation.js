import { runRule } from '../../lib/init-test.js'
import { linkPunctuation } from '../../lib/linting-rules/link-punctuation.js'

describe(linkPunctuation.names.join(' - '), () => {
  test('inline links without quotes or a period should not error', async () => {
    const markdown = [
      '[This should pass](./image.png)',
      '[AUTOTITLE](./image.png)',
      // These are not necessarily good descriptions, but they are valid
      // per the requirements of the rule
      "[A link with end quote'](./image.png)",
      '["A link with start quote](./image.png)',
      '[A link with a question mark?](./image.png)',
      '[A link with an exclamation point!](./image.png)',
    ].join('\n')

    const result = await runRule(linkPunctuation, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
  test('inline links with quotes or punctuation should error', async () => {
    const markdown = [
      '["A title"](./image.png)',
      "['A title'](./image.png)",
      '[A title.](./image.png)',
      '["A title."](./image.png)',
      '["A title".](./image.png)',
      "['A title.'](./image.png)",
      "['A title'.](./image.png)",
      "['A title'?](./image.png)",
      '["A title"!](./image.png)',
      "['A title?'](./image.png)",
      '["A title!"](./image.png)',
    ].join('\n')

    const result = await runRule(linkPunctuation, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(11)
    expect(errors[0].errorRange).toEqual([2, 9])
    expect(errors[6].lineNumber).toBe(7)
  })
  test('links that is not plain text', async () => {
    const markdown = [
      '[*emphasize*](./image.png)',
      '[**boldness**](./image.png)',
      '[**boldness** and *emphasize*](./image.png)',
    ].join('\n')

    const result = await runRule(linkPunctuation, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
})
