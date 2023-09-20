import { runRule } from '../../lib/init-test.js'
import { incorrectAltTextLength } from '../../lib/linting-rules/image-alt-text-length.js'

describe(incorrectAltTextLength.names.join(' - '), () => {
  test('image with incorrect alt text length fails', async () => {
    const markdown = [
      `![${'x'.repeat(39)}](./image.png)`,
      `![${'x'.repeat(151)}](./image.png)`,
    ].join('\n')
    const result = await runRule(incorrectAltTextLength, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors[0].lineNumber).toBe(1)
    expect(errors[1].lineNumber).toBe(2)
    expect(errors[0].errorRange).toEqual([3, 39])
    expect(errors[1].errorRange).toEqual([3, 151])
  })
  test('image with correct length alt test passes', async () => {
    const markdown = [
      `![${'x'.repeat(40)}](./image.png)`,
      `![${'x'.repeat(150)}](./image.png)`,
    ].join('\n')
    const result = await runRule(incorrectAltTextLength, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
  test('image alt text that is entirely empty', async () => {
    const markdown = [
      '# Heading',
      '',
      // Completely empty
      '![](/images/this-is-ok.png)',
    ].join('\n')
    const result = await runRule(incorrectAltTextLength, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(3)
    // Because you can't get a valid range when it's entirely empty
    expect(errors[0].errorRange).toEqual(null)
  })
})
