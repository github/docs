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
    const res = await renderContent(example)
    const $ = cheerio.load(res)

    // Check that the annotation structure is rendered correctly
    const annotation = $('.annotate')
    expect(annotation.length).toBe(1)
    expect(annotation.hasClass('beside')).toBe(true)

    // Check annotation header exists
    const header = $('.annotate-header')
    expect(header.length).toBe(1)

    // Check both beside and inline modes are rendered
    const beside = $('.annotate-beside')
    const inline = $('.annotate-inline')
    expect(beside.length).toBe(1)
    expect(inline.length).toBe(1)

    // Check that we have the correct number of annotation rows
    const rows = $('.annotate-row')
    expect(rows.length).toBe(2)

    // Check that each row has both code and note sections
    rows.each((i, row) => {
      const $row = $(row)
      expect($row.find('.annotate-code').length).toBe(1)
      expect($row.find('.annotate-note').length).toBe(1)
    })

    // Check specific content of the annotations
    const notes = $('.annotate-note p')
    const noteTexts = notes.map((i, el) => $(el).text()).get()
    expect(noteTexts).toEqual([
      'The name of the workflow as it will appear in the "Actions" tab of the GitHub repository.',
      'Add the pull_request event, so that the workflow runs automatically\nevery time a pull request is created.',
    ])

    // Check code content
    const codes = $('.annotate-code pre')
    const codeTexts = codes.map((i, el) => $(el).text()).get()
    expect(codeTexts).toEqual([
      'name: Post welcome comment',
      'on:\n  pull_request:\n    types: [opened]',
    ])
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

  test('supports AUTOTITLE links in annotations', async () => {
    const example = `
\`\`\`yaml annotate copy
# For more information about workflow syntax, see [AUTOTITLE](/get-started/start-your-journey/hello-world).
name: Test workflow

# This uses the checkout action. See [AUTOTITLE](/get-started/foo) for details.
on: [push]
\`\`\`
`

    // Create a mock context with pages for AUTOTITLE resolution
    const mockPages = {
      '/get-started/start-your-journey/hello-world': {
        href: '/get-started/start-your-journey/hello-world',
        rawTitle: 'Hello World',
      },
      '/get-started/foo': {
        href: '/get-started/foo',
        rawTitle: 'Fooing Around',
      },
    }

    const mockContext = {
      currentLanguage: 'en',
      currentVersion: 'free-pro-team@latest',
      pages: mockPages,
      redirects: {},
    }

    const res = await renderContent(example, mockContext)
    const $ = cheerio.load(res)

    const rows = $('.annotate-row')
    const notes = $('.annotate-note', rows)

    // Check that AUTOTITLE links were resolved to actual titles
    const firstNote = notes.eq(0).html()
    const secondNote = notes.eq(1).html()

    expect(firstNote).toContain('Hello World')
    expect(firstNote).not.toContain('[AUTOTITLE]')
    expect(secondNote).toContain('Fooing Around')
    expect(secondNote).not.toContain('[AUTOTITLE]')
  })
})
