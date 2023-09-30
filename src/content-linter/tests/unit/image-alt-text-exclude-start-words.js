import { runRule } from '../../lib/init-test.js'
import { imageAltTextExcludeStartWords } from '../../lib/linting-rules/image-alt-text-exclude-start-words.js'

describe(imageAltTextExcludeStartWords.names.join(' - '), () => {
  test('image alt text that starts with exclude words fails', async () => {
    const markdown = [
      '![Image with alt text](/images/image-with-alt-text.png)',
      '![image with alt text](/images/image-with-alt-text.png)',
      '![Graphic with alt text](/images/graphic-with-alt-text.png)',
      '![graphic with alt text](/images/graphic-with-alt-text.png)',
    ].join('\n')
    const result = await runRule(imageAltTextExcludeStartWords, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(4)
    expect(errors[0].lineNumber).toBe(1)
    expect(errors[1].lineNumber).toBe(2)
    expect(errors[2].lineNumber).toBe(3)
    expect(errors[3].lineNumber).toBe(4)
    expect(errors[0].errorRange).toEqual([3, 19])
    expect(errors[2].errorRange).toEqual([3, 21])
  })
  test('image alt text with no start exclude words passes', async () => {
    const markdown = [
      '![This is ok image](/images/this-is-ok.png)',
      '![This is ok grapic](/images/this-is-ok.png)',
    ].join('\n')
    const result = await runRule(imageAltTextExcludeStartWords, { strings: { markdown } })
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
    const result = await runRule(imageAltTextExcludeStartWords, { strings: { markdown } })
    const errors = result.markdown
    // This rule is not concerned with empty alt text
    // That will be caught by the incorrect-alt-text-empty rule
    // So technically, it's not imageAltTextEndPunctuation's problem.
    expect(errors.length).toBe(0)
  })
})
