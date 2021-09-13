import cheerio from 'cheerio'
import renderContent from '../../lib/render-content/renderContent.js'
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

  test('encodes entities', async () => {
    const template = '<beep></beep>'
    const context = {}
    const output = await renderContent(template, context, {
      encodeEntities: true,
    })
    expect(output).toBe('&lt;p&gt;&lt;beep&gt;&lt;/beep&gt;&lt;/p&gt;')
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
      $.html().includes('&quot;<a href="/articles/about-issues">About issues</a>.&quot;')
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
      $.html().includes('<code>requirements.txt</code>, <code>pipfile.lock</code>')
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
    expect($.html().includes('# some comment here')).toBeTruthy()
    expect($.html().includes('<h1 id="some-comment-here">')).toBeFalsy()
    expect($.html().includes('<a href="#some-comment-here">')).toBeFalsy()
  })

  test('renders headings at the right level', async () => {
    const template = nl(`
# This is a level one

## This is a level two

### This is a level three

#### This is a level four

##### This is a level five
`)
    const html = await renderContent(template)
    const $ = cheerio.load(html, { xmlMode: true })
    expect(
      $.html().includes(
        '<h1 id="this-is-a-level-one"><a href="#this-is-a-level-one">This is a level one</a></h1>'
      )
    ).toBeTruthy()
    expect(
      $.html().includes(
        '<h2 id="this-is-a-level-two"><a href="#this-is-a-level-two">This is a level two</a></h2>'
      )
    ).toBeTruthy()
    expect(
      $.html().includes(
        '<h3 id="this-is-a-level-three"><a href="#this-is-a-level-three">This is a level three</a></h3>'
      )
    ).toBeTruthy()
    expect(
      $.html().includes(
        '<h4 id="this-is-a-level-four"><a href="#this-is-a-level-four">This is a level four</a></h4>'
      )
    ).toBeTruthy()
    expect(
      $.html().includes(
        '<h5 id="this-is-a-level-five"><a href="#this-is-a-level-five">This is a level five</a></h5>'
      )
    ).toBeTruthy()
  })

  test('does syntax highlighting', async () => {
    const template = nl(`
\`\`\`js
const example = true
\`\`\`\`
    `)
    const html = await renderContent(template)
    const $ = cheerio.load(html, { xmlMode: true })
    expect($.html().includes('<pre><code class="hljs language-js">')).toBeTruthy()
  })

  test('does not autoguess code block language', async () => {
    const template = nl(`
\`\`\`
some code
\`\`\`\
    `)
    const html = await renderContent(template)
    const $ = cheerio.load(html, { xmlMode: true })
    expect($.html().includes('<pre><code>some code\n</code></pre>')).toBeTruthy()
  })

  test('renders a line break in a table', async () => {
    const content = `| Webhook event payload | Activity types |
| --------------------- | -------------- |
| [\`issues\`](/webhooks/event-payloads/#issues) | - \`opened\`<br/>- \`edited\`<br/>- \`other\` |`
    const file = await renderContent(content)
    expect(file).toBe(
      '<table><thead><tr><th>Webhook event payload</th><th>Activity types</th></tr></thead><tbody><tr><td><a href="/webhooks/event-payloads/#issues"><code>issues</code></a></td><td>- <code>opened</code><br>- <code>edited</code><br>- <code>other</code></td></tr></tbody></table>'
    )
  })

  test('renders a copy button for code blocks with {:copy} annotation', async () => {
    const template = nl(`
\`\`\`js{:copy}
some code
\`\`\`\
    `)
    const html = await renderContent(template)
    const $ = cheerio.load(html)
    const el = $('button.js-btn-copy')
    expect(el.data('clipboard-text')).toBe('some code')
  })
})
