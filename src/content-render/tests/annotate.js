import { describe, expect, test } from 'vitest'
import cheerio from 'cheerio'

import { renderContent } from '#src/content-render/index.js'

const example = `
\`\`\`yaml annotate
# The name of the workflow as it will appear in the "Actions" tab of the GitHub repository.
name: Post welcome comment

# Add the \`pull_request\` event, so that the workflow runs automatically
# every time a pull request is created.
on:
  pull_request:
    types: [opened]
\`\`\`
`

describe('annotate', () => {
  test('renders annotations', async () => {
    // We don't normally use snapshots,
    // but in this case its a short and concise example
    // that won't change regularly.
    // If it fails, study the output and make sure it's correct.
    // If it is indeed correct, run `vitest --updateSnapshot` to update it.
    expect(await renderContent(example)).toMatchSnapshot()
  })

  test('renders bash with hash bang annotations', async () => {
    const example = `
\`\`\`bash annotate
# The next line is the hash bang
#!/usr/bin/env bash

# Sample comment
echo "Hello, world!"
\`\`\`
`.trim()
    const res = await renderContent(example)
    const $ = cheerio.load(res)

    const headerCode = $('header pre').text()
    expect(headerCode).toMatch(example.split('\n').slice(1, -1).join('\n'))
    const rows = $('.annotate-row')
    const notes = $('.annotate-note p', rows)
    const noteTexts = notes.map((i, el) => $(el).text()).get()
    expect(noteTexts).toEqual(['The next line is the hash bang', 'Sample comment'])
    const codes = $('.annotate-code pre', rows)
    const codeTexts = codes.map((i, el) => $(el).text()).get()
    expect(codeTexts).toEqual(['#!/usr/bin/env bash', 'echo "Hello, world!"'])
  })

  test("doesn't complain if the first comment is empty", async () => {
    const example = `
\`\`\`yaml annotate copy
#
name: Create and publish a Docker image

# Configures this workflow to run every time...
on:
  push:
    branches: ['release']

\`\`\`
`.trim()
    const res = await renderContent(example)
    const $ = cheerio.load(res)

    const headerCode = $('header pre').text()
    expect(headerCode).toMatch(example.split('\n').slice(1, -1).join('\n'))
    const rows = $('.annotate-row')
    const notes = $('.annotate-note p', rows)
    const noteTexts = notes.map((i, el) => $(el).text()).get()
    expect(noteTexts).toEqual(['Configures this workflow to run every time...'])
    const codes = $('.annotate-code pre', rows)
    const codeTexts = codes.map((i, el) => $(el).text()).get()
    expect(codeTexts).toEqual([
      'name: Create and publish a Docker image',
      "on:\n  push:\n    branches: ['release']",
    ])
  })
})
