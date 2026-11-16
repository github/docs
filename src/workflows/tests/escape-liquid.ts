import { describe, expect, test } from 'vitest'
import { Liquid } from 'liquidjs'

import { escapeLiquid } from '@/workflows/sync-sdk-docs/escape-liquid'

const FENCE = '```'

// Match the docs.github.com Liquid engine options.
const engine = new Liquid({ extname: '.html', dynamicPartials: false })

async function expectRendersUnchanged(input: string): Promise<void> {
  expect(await engine.parseAndRender(escapeLiquid(input), {})).toBe(input)
}

describe('escapeLiquid', () => {
  test('wraps a GitHub Actions expression in a code sample', async () => {
    const input = [
      `${FENCE}yaml`,
      'env:',
      '  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}',
      FENCE,
    ].join('\n')

    expect(escapeLiquid(input)).toBe(
      [
        `${FENCE}yaml`,
        'env:',
        '  GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}',
        FENCE,
      ].join('\n'),
    )
    await expectRendersUnchanged(input)
  })

  test('wraps each placeholder on a line', async () => {
    const input = 'Hello {{name}}, welcome to {{ place }}.'

    expect(escapeLiquid(input)).toBe(
      'Hello {% raw %}{{name}}{% endraw %}, welcome to {% raw %}{{ place }}{% endraw %}.',
    )
    await expectRendersUnchanged(input)
  })

  test('wraps each tag of a multi-line template block', async () => {
    const input = [
      `${FENCE}jinja`,
      '{% for item in items %}',
      '- {{ item }}',
      '{% endfor %}',
      FENCE,
    ].join('\n')

    expect(escapeLiquid(input)).toBe(
      [
        `${FENCE}jinja`,
        '{% raw %}{% for item in items %}{% endraw %}',
        '- {% raw %}{{ item }}{% endraw %}',
        '{% raw %}{% endfor %}{% endraw %}',
        FENCE,
      ].join('\n'),
    )
    await expectRendersUnchanged(input)
  })

  test('wraps lone opening delimiters so they cannot break parsing', async () => {
    const input = ['const open = "{{"', 'const tag = "{%"', '{{', '  name', '}}'].join('\n')

    expect(escapeLiquid(input)).toBe(
      [
        'const open = "{% raw %}{{{% endraw %}"',
        'const tag = "{% raw %}{%{% endraw %}"',
        '{% raw %}{{{% endraw %}',
        '  name',
        '}}',
      ].join('\n'),
    )
    await expectRendersUnchanged(input)
  })

  test('keeps an endraw tag in the source from closing the raw block early', async () => {
    const input = 'Liquid: {% raw %}{{ x }}{% endraw %} and ${{ "{% endraw %}" }}'

    await expectRendersUnchanged(input)
  })

  test('keeps a brace before an Actions expression out of the raw tag', async () => {
    const input = 'Use {${{ secrets.TOKEN }}} here'

    expect(escapeLiquid(input)).toBe('Use {${% raw %}{{ secrets.TOKEN }}{% endraw %}} here')
    await expectRendersUnchanged(input)
  })

  test('leaves mermaid diagrams for the diagram renderer', () => {
    const input = [`${FENCE}mermaid`, 'flowchart LR', '  A{{Hexagon}} --> B', FENCE].join('\n')

    expect(escapeLiquid(input)).toBe(input)
  })

  test('leaves indented mermaid diagrams in lists for the diagram renderer', () => {
    const input = [
      '1. Step',
      '',
      `    ${FENCE}mermaid`,
      '    A{{Hexagon}} --> B',
      `    ${FENCE}`,
    ].join('\n')

    expect(escapeLiquid(input)).toBe(input)
  })

  test('escapes mermaid fences that the diagram renderer does not convert', async () => {
    for (const opener of ['~~~mermaid', `${FENCE} mermaid`]) {
      const closer = opener.slice(0, 3)
      const input = [opener, 'flowchart LR', '  A{{Hexagon}} --> B', closer].join('\n')

      expect(escapeLiquid(input)).toBe(
        [opener, 'flowchart LR', '  A{% raw %}{{Hexagon}}{% endraw %} --> B', closer].join('\n'),
      )
      await expectRendersUnchanged(input)
    }
  })

  test('escapes content after a mermaid diagram closes', () => {
    const input = [`${FENCE}mermaid`, 'flowchart LR', FENCE, '', 'Hello {{name}}'].join('\n')

    expect(escapeLiquid(input)).toBe(
      [`${FENCE}mermaid`, 'flowchart LR', FENCE, '', 'Hello {% raw %}{{name}}{% endraw %}'].join(
        '\n',
      ),
    )
  })

  test('leaves text without Liquid syntax unchanged', async () => {
    const input = [
      '# Title',
      '',
      'A { single } brace, a closing }} pair, and 50% %} text.',
      '',
      `${FENCE}js`,
      'const obj = { a: { b: 1 } }',
      FENCE,
    ].join('\n')

    expect(escapeLiquid(input)).toBe(input)
    await expectRendersUnchanged(input)
  })
})
