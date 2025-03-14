import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test.js'
import { imageNoGif } from '../../lib/linting-rules/image-no-gif.js'

describe(imageNoGif.names.join(' - '), () => {
  test('image with gifs', async () => {
    const markdown = [
      '# Heading',
      '',
      '![GitHub Documentation is here](./image.gif)',
      '',
      '!["image"](./image.png)',
    ].join('\n')
    const result = await runRule(imageNoGif, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors.map((error) => error.lineNumber)).toEqual([3])
  })

  test('image without gif passes', async () => {
    const markdown = [
      '# Heading',
      '',
      '![GitHub Documentation is found on this site.](./image.png)',
      '',
      "GitHub Documentation's logo looks like this: ![logo of GitHub Docs.](./image.jpg) over here.",
      '',
    ].join('\n')
    const result = await runRule(imageNoGif, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
})
