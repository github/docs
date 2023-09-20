import { runRule } from '../../lib/init-test.js'
import { listFirstWordCapitalization } from '../../lib/linting-rules/list-first-word-capitalization.js'

describe(listFirstWordCapitalization.names.join(' - '), () => {
  test('ensure multi-level lists catch incorrect capitalization errors', async () => {
    const markdown = [
      '- List item',
      '  - `list` item',
      '    - list item',
      '1. number item',
      '1. Number 2 item',
      '- `X` item',
      '- always start `with code`',
      '- remember to go to [foo](/bar)',
    ].join('\n')
    const result = await runRule(listFirstWordCapitalization, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(4)
    expect(errors[0].errorRange).toEqual([7, 4])
    expect(errors[0].lineNumber).toBe(3)
    expect(errors[0].fixInfo).toEqual({
      deleteCount: 1,
      editColumn: 7,
      insertText: 'L',
      lineNumber: 3,
    })
    expect(errors[1].errorRange).toEqual([4, 6])
    expect(errors[1].lineNumber).toBe(4)
    expect(errors[1].fixInfo).toEqual({
      deleteCount: 1,
      editColumn: 4,
      insertText: 'N',
      lineNumber: 4,
    })
  })

  test('list items that start with special characters pass', async () => {
    const markdown = [
      '- `X-GitHub-Event`: Name of the event that triggered the delivery.',
      '- **October 1, 2018**: GitHub discontinued allowing users to install services. We removed GitHub Services from the GitHub.com user interface.',
      '- **boldness** is a cool thing',
      '- Always start `with code`',
      '- Remember to go to [foo](/bar)',
      '- **{% data variables.product.prodname_oauth_apps %}**: Request either the `repo_hook` and/or `org_hook` scope(s) to manage the relevant events on behalf of users.',
      '- "[AUTOTITLE](/billing/managing-billing-for-github-marketplace-apps)"',
      "- '[AUTOTITLE](/billing/managing-billing-for-github-marketplace-apps)'",
      '- [Viewing your sponsors and sponsorships](/sponsors/receiving-sponsorships-through-github-sponsors/viewing-your-sponsors-and-sponsorships)',
      '- macOS',
      '- {% data variables.product.prodname_dotcom_the_website %} Services Continuity and Incident Management Plan',
      '-  {% data variables.product.prodname_dotcom_the_website %} Services Continuity and Incident Management Plan',
      '- x64',
      '- 05:00',
    ].join('\n')
    const result = await runRule(listFirstWordCapitalization, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test("list items that aren't simple lists", async () => {
    const markdown = ['- > Blockquote in a list', '- ### Heading in a list'].join('\n')
    const result = await runRule(listFirstWordCapitalization, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('works on markdown that has no lists at all, actually', async () => {
    const markdown = '- \n'
    const result = await runRule(listFirstWordCapitalization, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
})
