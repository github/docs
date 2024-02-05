import { getDOM } from '#src/tests/helpers/e2etest.js'

describe('annotations', () => {
  test('code-snippet-with-hashbang', async () => {
    const $ = await getDOM('/get-started/foo/code-snippet-with-hashbang')
    const annotations = $('#article-contents .annotate')
    expect(annotations.length).toBe(2)
    // Check http://localhost:4000/en/get-started/foo/code-snippet-with-hashbang
    // to understand the confidence in the assertions.

    // First code snippet block
    {
      const annotation = annotations.eq(0)
      expect(annotation.find('.annotate-header').length).toBe(1)
      expect(annotation.find('.annotate-beside').length).toBe(1)
      expect(annotation.find('.annotate-inline').length).toBe(1)
      expect(annotation.find('.annotate-row').length).toBe(3)
      const notes = $('.annotate-row .annotate-note p', annotation)
      const noteTexts = notes.map((i, el) => $(el).text()).get()
      expect(noteTexts).toEqual(["Let's get started", 'This is just a sample', 'End of the script'])
    }
    // Second code snippet block
    {
      const annotation = annotations.eq(1)
      expect(annotation.find('.annotate-header').length).toBe(1)
      expect(annotation.find('.annotate-beside').length).toBe(1)
      expect(annotation.find('.annotate-inline').length).toBe(1)
      expect(annotation.find('.annotate-row').length).toBe(2)
      const notes = $('.annotate-row .annotate-note p', annotation)
      const noteTexts = notes.map((i, el) => $(el).text()).get()
      expect(noteTexts).toEqual(['Has to start with a comment.', 'This is the if statement'])
    }
  })
})
