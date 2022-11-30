const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const parsePageSectionsIntoRecords = require('../../../script/search/parse-page-sections-into-records')
const fixtures = {
  pageWithSections: fs.readFileSync(path.join(__dirname, 'fixtures/page-with-sections.html'), 'utf8'),
  pageWithoutSections: fs.readFileSync(path.join(__dirname, 'fixtures/page-without-sections.html'), 'utf8')
}

describe('search parsePageSectionsIntoRecords module', () => {
  test('works for pages with sections', () => {
    const html = fixtures.pageWithSections
    const $ = cheerio.load(html)
    const href = '/example/href'
    const records = parsePageSectionsIntoRecords(href, $)
    expect(Array.isArray(records)).toBe(true)
    expect(records.length).toBe(2)
    const expected = [
      {
        objectID: '/example/href#first',
        url: 'https://docs.github.com/example/href#first',
        slug: 'first',
        breadcrumbs: 'GitHub Actions / actions learning path',
        heading: 'First heading',
        title: 'I am the page title',
        content: "Here's a paragraph. And another.",
        topics: ['topic1', 'topic2', 'GitHub Actions', 'Actions']
      },
      {
        objectID: '/example/href#second',
        url: 'https://docs.github.com/example/href#second',
        slug: 'second',
        breadcrumbs: 'GitHub Actions / actions learning path',
        heading: 'Second heading',
        title: 'I am the page title',
        content: "Here's a paragraph in the second section. And another.",
        topics: ['topic1', 'topic2', 'GitHub Actions', 'Actions']
      }
    ]

    expect(records).toEqual(expected)
  })

  test('works for pages without sections', () => {
    const html = fixtures.pageWithoutSections
    const $ = cheerio.load(html)
    const href = '/example/href'
    const records = parsePageSectionsIntoRecords(href, $)
    expect(Array.isArray(records)).toBe(true)
    expect(records.length).toBe(1)
    const expected = [
      {
        objectID: '/example/href',
        url: 'https://docs.github.com/example/href',
        breadcrumbs: 'Education / map topic',
        title: 'A page without sections',
        content: 'First paragraph. Second paragraph.',
        topics: ['key1', 'key2', 'key3', 'Education']
      }
    ]
    expect(records).toEqual(expected)
  })
})
