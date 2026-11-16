import { describe, expect, test } from 'vitest'
import { load } from 'cheerio'

import { renderContent } from '@/content-render/index'

const flowchart = `
\`\`\`mermaid
flowchart LR
  accTitle: Publishing flow
  accDescr: A draft goes to review, then gets published
  A[Draft] --> B[Review] --> C[Published]
\`\`\`
`

describe('mermaid', () => {
  test('renders a mermaid fence to inline SVG', async () => {
    const $ = load(await renderContent(flowchart))
    const svg = $('.mermaid-diagram > svg.pele')
    expect(svg.length).toBe(1)
    expect(svg.attr('viewBox')).toMatch(/^0 0 \d+/)
    expect(svg.find('title').text()).toBe('Publishing flow')
    expect($('pre').length).toBe(0)
  })

  test('flips wide flowcharts to vertical so they fit the article column', async () => {
    const wide = Array.from({ length: 12 }, (_, i) => `  N${i}[Step number ${i}]`).join(' -->\n')
    const $ = load(await renderContent(`\`\`\`mermaid\nflowchart LR\n${wide}\n\`\`\``))
    const [, , width] = ($('svg.pele').attr('viewBox') || '').split(' ').map(Number)
    expect(width).toBeLessThanOrEqual(720)
  })

  test('keeps the source direction for flowcharts that fit', async () => {
    const $ = load(await renderContent(flowchart))
    const [, , width, height] = ($('svg.pele').attr('viewBox') || '').split(' ').map(Number)
    expect(width).toBeGreaterThan(height)
  })

  test('gives each diagram distinct accessibility IDs', async () => {
    const $ = load(await renderContent(`${flowchart}\n${flowchart}`))
    const ids = $('svg.pele title')
      .map((_, el) => $(el).attr('id'))
      .get()
    expect(ids.length).toBe(2)
    expect(new Set(ids).size).toBe(2)
  })

  test('keeps mermaid source nested in a text fence as code', async () => {
    const $ = load(await renderContent(`\`\`\`\`text\n${flowchart}\n\`\`\`\``))
    expect($('svg.pele').length).toBe(0)
    expect($('pre').text()).toContain('flowchart LR')
  })

  test('keeps invalid diagrams as code blocks', async () => {
    const $ = load(await renderContent('```mermaid\nflowchart LR\n  A -->\n```'))
    expect($('svg.pele').length).toBe(0)
    expect($('pre code.language-mermaid').text()).toContain('A -->')
  })

  test('renders hexagon nodes escaped from Liquid', async () => {
    const source = 'flowchart LR\n  A{% raw %}{{Decide}}{% endraw %} --> B[Ship]'
    const $ = load(await renderContent(`\`\`\`mermaid\n${source}\n\`\`\``))
    expect($('svg.pele').length).toBe(1)
    expect($('svg.pele').text()).toContain('Decide')
  })

  test('does not render images inside diagrams', async () => {
    const source = 'flowchart LR\n  A@{ img: "https://example.com/logo.png", label: "Logo" }'
    const $ = load(await renderContent(`\`\`\`mermaid\n${source}\n\`\`\``))
    expect($('svg.pele').length).toBe(1)
    expect($('image').length).toBe(0)
  })

  test('does not render links inside diagrams', async () => {
    const source = 'flowchart LR\n  A[Docs]\n  click A "https://example.com"'
    const $ = load(await renderContent(`\`\`\`mermaid\n${source}\n\`\`\``))
    expect($('svg.pele').length).toBe(1)
    expect($('svg.pele a').length).toBe(0)
  })
})
