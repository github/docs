import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test.js'
import { linkQuotation } from '../../lib/linting-rules/link-quotation.js'

describe(linkQuotation.names.join(' - '), () => {
  test('links that are formatted correctly should not generate an error', async () => {
    const markdown = [
      'Random stuff [A title](./image.png)',
      '"This is a direct quote" [A title](./image.png)',
    ].join('\n')
    const result = await runRule(linkQuotation, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('links with quotes around them should error out', async () => {
    const markdown = [
      'Random stuff "[A title](./image.png)."',
      'Random stuff "[A title](./image.png)?"',
      'Random stuff "[A title](./image.png)!"',
      'Random stuff "[A title](./image.png)".',
      'Random stuff "[A title](./image.png)"?',
      'Random stuff "[A title](./image.png)"!',
      'See "[AUTOTITLE](/foo/bar){% ifversion fpt %}."{% elsif ghes or ghec %}" and "[AUTOTITLE](/foo/bar)."{% endif %}',
      'See "[AUTOTITLE](/foo/bar)," "[AUTOTITLE](/foo/bar2)," "[AUTOTITLE](/foo/bar3)," and "[AUTOTITLE](/foo/bar4)."',
      'See "[Anchor link](#anchor-link)."',
    ].join('\n')
    const result = await runRule(linkQuotation, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(13)
    expect(errors[0].errorRange).toEqual([14, 25])
    expect(errors[0].fixInfo.insertText).toBe('[A title](./image.png).')
    expect(errors[1].fixInfo.insertText).toBe('[A title](./image.png)?')
  })
})
