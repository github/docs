import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs/promises'

import cheerio from 'cheerio'
import { describe, expect, test } from 'vitest'

import parsePageSectionsIntoRecords from '../scripts/parse-page-sections-into-records'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const fixtures = {
  pageWithSections: await fs.readFile(
    path.join(__dirname, 'fixtures/page-with-sections.html'),
    'utf8',
  ),
  pageWithoutSections: await fs.readFile(
    path.join(__dirname, 'fixtures/page-without-sections.html'),
    'utf8',
  ),
  pageWithoutBody: await fs.readFile(
    path.join(__dirname, 'fixtures/page-without-body.html'),
    'utf8',
  ),
  pageMultipleH1s: await fs.readFile(
    path.join(__dirname, 'fixtures/page-with-multiple-h1s.html'),
    'utf8',
  ),
  pageHeadingParagraphNoWhitespace: await fs.readFile(
    path.join(__dirname, 'fixtures/page-with-heading-and-paragraph-no-whitespace.html'),
    'utf8',
  ),
}

describe('search parsePageSectionsIntoRecords module', () => {
  test('works for pages with sections', () => {
    const html = fixtures.pageWithSections
    const $ = cheerio.load(html)
    const href = '/example/href'
    const record = parsePageSectionsIntoRecords({ href, $, languageCode: 'en' })
    const expected = {
      objectID: '/example/href',
      breadcrumbs: 'GitHub Actions / actions learning path',
      title: 'I am the page title',
      headings: 'First heading\nSecond heading\nTable heading',
      content:
        'This is an introduction to the article.\n' +
        "In this article\nThis won't be ignored.\nFirst heading\n" +
        "Here's a paragraph.\nAnd another.\nSecond heading\n" +
        "Here's a paragraph in the second section.\nAnd another.\n" +
        'Table heading\nPeter\nHuman\n' +
        'Bullet\nPoint\nNumbered\nList\n' +
        "Further reading\nThis won't be ignored.",
      intro: 'This is an introduction to the article.',
      toplevel: 'GitHub Actions',
    }

    expect(record).toEqual(expected)
  })

  test('works for pages without sections', () => {
    const html = fixtures.pageWithoutSections
    const $ = cheerio.load(html)
    const href = '/example/href'
    const record = parsePageSectionsIntoRecords({ href, $, languageCode: 'en' })
    const expected = {
      objectID: '/example/href',
      breadcrumbs: 'Education / map topic',
      title: 'A page without sections',
      headings: '',
      content: 'This is an introduction to the article.\nFirst paragraph.\nSecond paragraph.',
      intro: 'This is an introduction to the article.',
      toplevel: 'Education',
    }

    expect(record).toEqual(expected)
  })

  test('works for pages without content', () => {
    const html = fixtures.pageWithoutBody
    const $ = cheerio.load(html)
    const href = '/example/href'
    const record = parsePageSectionsIntoRecords({ href, $, languageCode: 'en' })
    const expected = {
      objectID: '/example/href',
      breadcrumbs: 'Education / map topic',
      title: 'A page without body',
      headings: '',
      content: 'This is an introduction to the article.',
      intro: 'This is an introduction to the article.',
      toplevel: 'Education',
    }

    expect(record).toEqual(expected)
  })

  test('only picks up the first h1 for the title', () => {
    const html = fixtures.pageMultipleH1s
    const $ = cheerio.load(html)
    const href = '/example/href'
    const record = parsePageSectionsIntoRecords({ href, $, languageCode: 'en' })
    expect(record.title).toEqual('I am the page title')
  })

  test("content doesn't lump headings with paragraphs together", () => {
    const html = fixtures.pageHeadingParagraphNoWhitespace
    const $ = cheerio.load(html)
    const href = '/example/href'
    const record = parsePageSectionsIntoRecords({ href, $, languageCode: 'en' })

    // This is a <h2> inside the page but it should only appear once.
    // We had a bug where the heading would be injected twice.
    // E.g.
    //
    //    <h2>Heading</h2><p>Text here</p>
    //
    // would become:
    //
    //    Heading\nHeadingText here
    //
    // So now we make sure it only appears exactly once.
    expect(record.content.match(/Changing your primary email address/g).length).toBe(1)
    // But note also that it would also concatenate the text of the heading
    // with the text of the paragraph without a whitespace in between.
    expect(record.content.includes('email addressYou can set')).toBeFalsy()
    // Make sure that inline elements are still together.
    expect(record.content).toMatch(/Paragraph\./)
  })
})
