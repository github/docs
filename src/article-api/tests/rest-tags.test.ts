import { describe, expect, test } from 'vitest'
import { Liquid } from 'liquidjs'
import { fromMarkdown } from 'mdast-util-from-markdown'
import type { List } from 'mdast'

import { restTags } from '@/article-api/liquid-renderers/rest-tags'

const engine = new Liquid()
for (const [tagName, tagClass] of Object.entries(restTags)) {
  engine.registerTag(tagName, tagClass as unknown as Parameters<typeof engine.registerTag>[1])
}

const multiLineDescription =
  '<p>Intro.</p>\n<ul>\n<li><code>a</code>: first value</li>\n<li><code>b</code>: second value</li>\n</ul>\n<p>Closing note.</p>'

async function render(template: string, param: unknown): Promise<string> {
  return engine.parseAndRender(template, { param, context: {} })
}

function linesAfterFirst(output: string): string[] {
  return output
    .split('\n')
    .slice(1)
    .filter((line) => line.trim() !== '')
}

describe('REST Liquid tags with multi-line descriptions', () => {
  test('rest_parameter indents every description line under the list item', async () => {
    const output = await render('{% rest_parameter param %}', {
      name: 'scope',
      in: 'query',
      required: false,
      description: multiLineDescription,
      schema: { type: 'string', enum: ['a', 'b'] },
    })

    expect(output).toContain('a: first value')
    expect(output).toContain('Closing note.')
    for (const line of linesAfterFirst(output)) {
      expect(line).toMatch(/^ {2}\S/)
    }

    const tree = fromMarkdown(output)
    expect(tree.children.map((node) => node.type)).toEqual(['list'])
  })

  test('rest_body_parameter keeps child parameters nested under their parent', async () => {
    const output = await render('{% rest_body_parameter param %}', {
      name: 'budget_scope',
      type: 'object',
      isRequired: true,
      description: multiLineDescription,
      enum: ['a', 'b'],
      childParamsGroups: [
        {
          name: 'value',
          type: 'string',
          description: multiLineDescription,
        },
      ],
    })

    const lines = output.split('\n')
    const childIndex = lines.findIndex((line) => line.includes('**`value`**'))
    expect(childIndex).toBeGreaterThan(0)
    for (const line of lines.slice(1, childIndex).filter((l) => l.trim() !== '')) {
      expect(line).toMatch(/^ {2}\S/)
    }
    expect(lines[childIndex]).toMatch(/^ {2}- /)
    for (const line of lines.slice(childIndex + 1).filter((l) => l.trim() !== '')) {
      expect(line).toMatch(/^ {4}\S/)
    }

    const tree = fromMarkdown(output)
    expect(tree.children.map((node) => node.type)).toEqual(['list'])
    const topList = tree.children[0] as List
    expect(topList.children).toHaveLength(1)
    const nestedLists = topList.children[0].children.filter(
      (node): node is List => node.type === 'list' && node.children.length === 1,
    )
    expect(nestedLists.some((list) => JSON.stringify(list).includes('"value":"value"'))).toBe(true)
  })
})
