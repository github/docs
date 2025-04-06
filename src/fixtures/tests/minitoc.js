import { describe, expect, test } from 'vitest'

import { getDOM } from '#src/tests/helpers/e2etest.js'

describe('minitoc', () => {
  // TODO disable the mini TOC tests when we replace it with sticky TOC header
  test('renders mini TOC in articles with more than one heading', async () => {
    const $ = await getDOM('/en/get-started/minitocs/multiple-headings')
    expect($('h2#in-this-article').length).toBe(1)
    expect($('h2#in-this-article + nav ul li').length).toBeGreaterThan(1)
  })

  test('does not render mini TOC in articles with only one heading', async () => {
    const $ = await getDOM('/en/get-started/minitocs/one-heading')
    expect($('h2#in-this-article').length).toBe(0)
  })

  test('does not render mini TOC in articles with no headings', async () => {
    const $ = await getDOM('/en/get-started/minitocs/no-heading')
    expect($('h2#in-this-article').length).toBe(0)
  })

  test('does not render mini TOC in non-articles', async () => {
    const $ = await getDOM('/en/get-started')
    expect($('h2#in-this-article').length).toBe(0)
  })

  test('renders mini TOC with correct links when headings contain markup', async () => {
    const $ = await getDOM('/en/get-started/minitocs/markup-heading')
    expect($('h2#in-this-article + nav ul li a[href="#on"]').length).toBe(1)
  })

  test("max heading doesn't exceed h2", async () => {
    const $ = await getDOM('/en/get-started/minitocs/multiple-headings')
    expect($('h2#in-this-article').length).toBe(1)
    expect($('h2#in-this-article + nav ul').length).toBeGreaterThan(0) // non-indented items
    expect($('h2#in-this-article + nav ul div ul div').length).toBe(0) // indented items
  })
})
