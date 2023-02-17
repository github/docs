import { getDOM } from '../helpers/e2etest.js'

describe('extended Markdown', () => {
  test('renders styled warnings', async () => {
    const $ = await getDOM('/get-started/liquid/warnings')
    const nodes = $('div.extended-markdown.warning')
    expect(nodes.length).toBe(1)
    expect(nodes.text().includes('This is inside the warning.')).toBe(true)
    expect(nodes.hasClass('color-border-danger')).toBe(true)
    expect(nodes.hasClass('color-bg-danger')).toBe(true)
  })

  test('renders styled tips', async () => {
    const $ = await getDOM('/get-started/liquid/tips')
    const nodes = $('div.extended-markdown.tip')
    expect(nodes.length).toBe(1)
    expect(nodes.text().includes('This is inside the tip.')).toBe(true)
    expect(nodes.hasClass('color-border-accent-emphasis')).toBe(true)
    expect(nodes.hasClass('color-bg-accent')).toBe(true)
  })

  test('renders styled notes', async () => {
    const $ = await getDOM('/get-started/liquid/notes')
    const nodes = $('div.extended-markdown.note')
    expect(nodes.length).toBe(1)
    expect(nodes.text().includes('This is inside the note.')).toBe(true)
    expect(nodes.hasClass('color-border-accent-emphasis')).toBe(true)
    expect(nodes.hasClass('color-bg-accent')).toBe(true)
  })

  test('renders platform-specific content', async () => {
    const $ = await getDOM('/get-started/liquid/platform-specific')
    expect($('.extended-markdown.mac p').length).toBe(1)
    expect($('.extended-markdown.mac p').text().includes('mac specific content')).toBe(true)
    expect($('.extended-markdown.windows p').length).toBe(1)
    expect($('.extended-markdown.windows p').text().includes('windows specific content')).toBe(true)
    expect($('.extended-markdown.linux p').length).toBe(1)
    expect($('.extended-markdown.linux p').text().includes('linux specific content')).toBe(true)
  })

  test('renders expected mini TOC headings in platform-specific content', async () => {
    const $ = await getDOM('/get-started/liquid/platform-specific')
    expect($('h2#in-this-article').length).toBe(1)
    expect($('h2#in-this-article + nav ul div.extended-markdown.mac').length).toBe(1)
    expect($('h2#in-this-article + nav ul div.extended-markdown.windows').length).toBe(1)
    expect($('h2#in-this-article + nav ul div.extended-markdown.linux').length).toBe(1)
  })
})
