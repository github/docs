import { describe, expect, test } from 'vitest'

import { getDOMCached as getDOM } from '#src/tests/helpers/e2etest.js'

describe('html-comments', () => {
  test('regular comments are removed', async () => {
    const $ = await getDOM('/get-started/markdown/html-comments')
    const contents = $('#article-contents')
    const html = contents.html()
    expect(html).not.toContain('This comment should get deleted since it mentions gooblygook')
    expect(html).toContain('<code>&lt;-- paragraph --&gt;</code>')
    expect(html).toContain('<span class="hljs-comment">&lt;!-- html comment --&gt;</span>')
    expect(html).toContain('<code>&lt;!-- markdownlint-disable --&gt;</code>')
    expect(html).not.toContain('Another multi-line')
  })
})
