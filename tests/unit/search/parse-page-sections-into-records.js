import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs/promises'
import cheerio from 'cheerio'
import parsePageSectionsIntoRecords from '../../../script/search/parse-page-sections-into-records.js'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const fixtures = {
  pageWithSections: await fs.readFile(
    path.join(__dirname, 'fixtures/page-with-sections.html'),
    'utf8'
  ),
  pageWithoutSections: await fs.readFile(
    path.join(__dirname, 'fixtures/page-without-sections.html'),
    'utf8'
  ),
  pageWithoutBody: await fs.readFile(
    path.join(__dirname, 'fixtures/page-without-body.html'),
    'utf8'
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
      headings: 'First heading Second heading Table heading',
      content:
        'This is an introduction to the article.\n' +
        "In this article\nThis won't be ignored.\nFirst heading\n" +
        "Here's a paragraph.\nAnd another.\nSecond heading\n" +
        "Here's a paragraph in the second section.\nAnd another.\n" +
        'Table heading\nPeter Human\n' +
        'Bullet\nPoint\nNumbered\nList\n' +
        "Further reading\nThis won't be ignored.",
      topics: ['topic1', 'topic2', 'GitHub Actions', 'Actions'],
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
      topics: ['key1', 'key2', 'key3', 'Education'],
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
      topics: ['key1', 'key2', 'key3', 'Education'],
    }

    expect(record).toEqual(expected)
  })
})
