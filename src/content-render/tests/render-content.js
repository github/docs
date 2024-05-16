import cheerio from 'cheerio'
import { describe, expect, test } from 'vitest'

import { renderContent } from '#src/content-render/index.js'
import { EOL } from 'os'

// Use platform-specific line endings for realistic tests when templates have
// been loaded from disk
const nl = (str) => str.replace(/\n/g, EOL)

describe('renderContent', () => {
  test('takes a template and a context and returns a string (async)', async () => {
    const template = 'my favorite color is {{ color }}.'
    const context = { color: 'orange' }
    const output = await renderContent(template, context)
    expect(output, '<p>my favorite color is orange.</p>')
  })

  test('preserves content within {% raw %} tags', async () => {
    const template = nl('For example: {% raw %}{% include cool_header.html %}{% endraw %}.')
    const expected = '<p>For example: {% include cool_header.html %}.</p>'
    const output = await renderContent(template)
    expect(output).toBe(expected)
  })

  test('removes extra newlines to prevent lists from breaking', async () => {
    const template = nl(`
1. item one
1. item two


1. item three`)

    const html = await renderContent(template)
    const $ = cheerio.load(html, { xmlMode: true })
    expect($('ol').length).toBe(1)
    expect($('ol > li').length).toBe(3)
  })

  test('removes extra newlines from lists of links', async () => {
    const template = nl(`- <a>item</a>

- <a>item</a>`)

    const html = await renderContent(template)
    const $ = cheerio.load(html, { xmlMode: true })
    expect($('ul p').length, 0)
  })

  test('renders text only', async () => {
    const template = 'my favorite color is {{ color }}.'
    const context = { color: 'orange' }
    const output = await renderContent(template, context, { textOnly: true })
    expect(output, 'my favorite color is orange.')
  })

  test('throws on rendering errors', async () => {
    const template = 1
    const context = {}

    let err

    try {
      await renderContent(template, context)
    } catch (_err) {
      err = _err
    }

    expect(err).toBeTruthy()
  })

  test('warns and throws on rendering errors when the file name is passed', async () => {
    const template = 1
    const context = {}

    let err
    let warned = false

    const error = console.error
    console.error = (message) => {
      expect(message, 'renderContent failed on file: name')
      console.error = error
      warned = true
    }

    try {
      await renderContent(template, context, { filename: 'name' })
    } catch (_err) {
      err = _err
    }

    expect(err).toBeTruthy()
    expect(warned).toBeTruthy()
  })

  test('renders empty templates', async () => {
    const template = ''
    const context = {}
    const output = await renderContent(template, context)
    expect(output).toBe('')
  })

  test('does not render newlines around links in tables', async () => {
    const template = nl(`
| Keyboard shortcut | Description
|-----------|------------
|<kbd>g</kbd> <kbd>c</kbd> | Go to the **Code** tab
|<kbd>g</kbd> <kbd>i</kbd> | Go to the **Issues** tab. For more information, see "[About issues](/articles/about-issues)."
    `)
    const html = await renderContent(template)
    const $ = cheerio.load(html, { xmlMode: true })
    expect(
      $.html().includes('&quot;<a href="/articles/about-issues">About issues</a>.&quot;'),
    ).toBeTruthy()
  })

  test('does not render newlines around inline code in tables', async () => {
    const template = nl(`
| Package manager | formats |
| --- | --- |
| Python | \`requirements.txt\`, \`pipfile.lock\`
    `)
    const html = await renderContent(template)
    const $ = cheerio.load(html, { xmlMode: true })
    expect(
      $.html().includes('<code>requirements.txt</code>, <code>pipfile.lock</code>'),
    ).toBeTruthy()
  })

  test('does not render newlines around emphasis in code', async () => {
    const template = nl(`
| Qualifier        | Example
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt ubuntu**](https://github.com/search?q=user%3Adefunkt+ubuntu&type=Issues) matches issues with the word "ubuntu" from repositories owned by @defunkt.
    `)
    const html = await renderContent(template)
    const $ = cheerio.load(html, { xmlMode: true })
    expect($.html().includes('<code>user:<em>USERNAME</em></code>')).toBeTruthy()
  })

  test('renders code blocks with # comments', async () => {
    const template = nl(`
1. This is a list item with code containing a comment:

   \`\`\`shell
   $ foo the bar
   # some comment here
   \`\`\`
1. This is another list item.
    `)
    const html = await renderContent(template)
    const $ = cheerio.load(html, { xmlMode: true })
    expect($('ol').length).toBe(1)
    expect($.html().includes('<span class="hljs-meta prompt_"># </span')).toBeTruthy()
    expect($.html().includes('some comment here')).toBeTruthy()
    expect($.html().includes('<h1 id="some-comment-here">')).toBeFalsy()
    expect($.html().includes('<a href="#some-comment-here">')).toBeFalsy()
  })

  test('renders headings at the right level', async () => {
    const template = nl(`
# This is a level 1

## This is a level 2

### This is a level 3

#### This is a level 4

##### This is a level 5
`)
    const html = await renderContent(template)
    const $ = cheerio.load(html, { xmlMode: true })

    ;[1, 2, 3, 4, 5].forEach((level) => {
      expect(
        $(`h${level}#this-is-a-level-${level} a[href="#this-is-a-level-${level}"]`).length,
      ).toBe(1)
    })
  })

  test('does syntax highlighting', async () => {
    let template = nl(`
\`\`\`js
const example = true
\`\`\`\`
    `)
    let html = await renderContent(template)
    let $ = cheerio.load(html, { xmlMode: true })
    expect($.html().includes('<pre><code class="hljs language-js">')).toBeTruthy()
    expect($.html().includes('<span class="hljs-keyword">const</span>')).toBeTruthy()

    template = nl(`
\`\`\`erb
<% @articles.each do |article| %>
\`\`\`\`
    `)
    html = await renderContent(template)
    $ = cheerio.load(html, { xmlMode: true })
    expect($.html().includes('<pre><code class="hljs language-erb">')).toBeTruthy()
    expect($.html().includes('<span class="hljs-variable">@articles</span>')).toBeTruthy()

    template = nl(`
\`\`\`http
POST / HTTP/2
\`\`\`\`
    `)
    html = await renderContent(template)
    $ = cheerio.load(html, { xmlMode: true })
    expect($.html().includes('<pre><code class="hljs language-http">')).toBeTruthy()
    expect($.html().includes('<span class="hljs-keyword">POST</span>')).toBeTruthy()

    template = nl(`
\`\`\`groovy
plugins {
  ...
  id 'maven-publish'
}
\`\`\`\`
    `)
    html = await renderContent(template)
    $ = cheerio.load(html, { xmlMode: true })
    expect($.html().includes('<pre><code class="hljs language-groovy">')).toBeTruthy()
    expect(
      $.html().includes('<span class="hljs-string">&apos;maven-publish&apos;</span>'),
    ).toBeTruthy()

    template = nl(`
\`\`\`Dockerfile
FROM alpine:3.10
\`\`\`\`
    `)
    html = await renderContent(template)
    $ = cheerio.load(html, { xmlMode: true })
    expect($.html().includes('<pre><code class="hljs language-Dockerfile">')).toBeTruthy()
    expect($.html().includes('<span class="hljs-keyword">FROM</span>')).toBeTruthy()

    template = nl(`
\`\`\`Powershell
$resourceGroupName = "octocat-testgroup"
\`\`\`\`
    `)
    html = await renderContent(template)
    $ = cheerio.load(html, { xmlMode: true })
    expect($.html().includes('<pre><code class="hljs language-Powershell">')).toBeTruthy()
    expect(
      $.html().includes('<span class="hljs-variable">&#x24;resourceGroupName</span>'),
    ).toBeTruthy()
  })

  test('does not autoguess code block language', async () => {
    const template = nl(`
\`\`\`
var a = 1
\`\`\`
    `)
    const html = await renderContent(template)
    const $ = cheerio.load(html, { xmlMode: true })
    expect($.html().includes('var a = 1')).toBeTruthy()
  })

  test('renders a line break in a table', async () => {
    const content = `| Webhook event payload | Activity types |
| --------------------- | -------------- |
| [\`issues\`](/webhooks/event-payloads/#issues) | - \`opened\`<br/>- \`edited\`<br/>- \`other\` |`
    const file = await renderContent(content)
    expect(file).toBe(
      '<table><thead><tr><th scope="col">Webhook event payload</th><th scope="col">Activity types</th></tr></thead>' +
        '<tbody><tr><td><a href="/webhooks/event-payloads/#issues"><code>issues</code></a></td><td>- <code>opened</code><br>- <code>edited</code><br>- <code>other</code></td></tr></tbody></table>',
    )
  })

  test('renders a copy button for code blocks with language specified', async () => {
    const template = nl(`
\`\`\`javascript copy
var a = 1
\`\`\`
    `)
    const html = await renderContent(template)
    const $ = cheerio.load(html)
    const el = $('button.js-btn-copy')
    expect(el.data('clipboard')).toBe(2967273189)
    // Generates a murmurhash based ID that matches a <pre>
  })
})
