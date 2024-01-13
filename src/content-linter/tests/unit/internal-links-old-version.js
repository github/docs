import { runRule } from '../../lib/init-test.js'
import { internalLinksOldVersion } from '../../lib/linting-rules/internal-links-old-version.js'

describe(internalLinksOldVersion.names.join(' - '), () => {
  test('links with old hardcoded versioning fail', async () => {
    const markdown = [
      '[Enterprise 2.19](/enterprise/2.19/admin/site/blah)',
      '[Link to Enterprise 11.10.340](https://docs.github.com/enterprise/11.10.340/admin/yes)',
      '[Enterprise 2.8](http://help.github.com/enterprise/2.8/admin/)',
    ].join('\n')
    const result = await runRule(internalLinksOldVersion, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(3)
    expect(errors.map((error) => error.lineNumber)).toEqual([1, 2, 3])
    expect(errors[0].errorRange).toEqual([19, 32])
    expect(errors[1].errorRange).toEqual([32, 54])
    expect(errors[2].errorRange).toEqual([18, 44])
  })

  test('links without old hardcoded versions pass', async () => {
    const markdown = [
      // External links with enterprise in them
      '[External link](https://someservice.com/enterprise/1.0/admin/yes)',
      // Current versioning links is excluded from this test
      '[New versioning](/github/site-policy/enterprise/2.2/yes)',
    ].join('\n')
    const result = await runRule(internalLinksOldVersion, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
})
