import { describe, expect, test } from 'vitest'
import type { CheerioAPI } from 'cheerio'

import { getDOM } from '@/tests/helpers/e2etest'

describe('annotations', () => {
  test('code-snippet-with-hashbang', async () => {
    const $: CheerioAPI = await getDOM('/get-started/foo/code-snippet-with-hashbang')
    const annotations = $('#article-contents .annotate')

    // The fixture page intentionally has 2 Bash annotations and 1 YAML annotation.
    expect(annotations.length).toBe(2 + 1)

    {
      const annotation = annotations.eq(0)
      expect(annotation.find('.annotate-header').length).toBe(1)
      expect(annotation.find('.annotate-beside').length).toBe(1)
      expect(annotation.find('.annotate-inline').length).toBe(1)
      expect(annotation.find('.annotate-row').length).toBe(3)
      const notes = $('.annotate-row .annotate-note p', annotation)
      const noteTexts = notes.map((_, el) => $(el).text()).get()
      expect(noteTexts).toEqual(["Let's get started", 'This is just a sample', 'End of the script'])
    }
    {
      const annotation = annotations.eq(1)
      expect(annotation.find('.annotate-header').length).toBe(1)
      expect(annotation.find('.annotate-beside').length).toBe(1)
      expect(annotation.find('.annotate-inline').length).toBe(1)
      expect(annotation.find('.annotate-row').length).toBe(2)
      const notes = $('.annotate-row .annotate-note p', annotation)
      const noteTexts = notes.map((_, el) => $(el).text()).get()
      expect(noteTexts).toEqual(['Has to start with a comment.', 'This is the if statement'])
    }
    // The YAML snippet starts with an empty comment.
    {
      const annotation = annotations.eq(2)
      expect(annotation.find('.annotate-header').length).toBe(1)
      expect(annotation.find('.annotate-beside').length).toBe(1)
      expect(annotation.find('.annotate-inline').length).toBe(1)
      expect(annotation.find('.annotate-row').length).toBe(3)
      const notes = $('.annotate-row .annotate-note p', annotation)
      const noteTexts = notes.map((_, el) => $(el).text()).get()
      expect(noteTexts).toEqual([
        'Configures this workflow to run every time a change is pushed to the branch called release.',
        "This job checks out the repository contents ...\nAnd here's the second comment line.",
      ])
    }
  })
})
