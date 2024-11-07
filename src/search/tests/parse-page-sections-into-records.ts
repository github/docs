import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs/promises'

import cheerio from 'cheerio'
import { describe, expect, test } from 'vitest'

import parsePageSectionsIntoRecords from '@/search/scripts/scrape/lib/parse-page-sections-into-records'
import type { Record } from '@/search/scripts/scrape/types'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Define the shape of fixtures with explicit keys and string values
const fixtures: {
  pageWithSections: string
  pageWithoutSections: string
  pageWithoutBody: string
  pageMultipleH1s: string
  pageHeadingParagraphNoWhitespace: string
} = {
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
    const html: string = fixtures.pageWithSections
    const $ = cheerio.load(html)
    const href: string = '/example/href'
    const record: Record = parsePageSectionsIntoRecords({ href, $, languageCode: 'en' })
    const expected: Record = {
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
    const html: string = fixtures.pageWithoutSections
    const $ = cheerio.load(html)
    const href: string = '/example/href'
    const record: Record = parsePageSectionsIntoRecords({ href, $, languageCode: 'en' })
    const expected: Record = {
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
    const html: string = fixtures.pageWithoutBody
    const $ = cheerio.load(html)
    const href: string = '/example/href'
    const record: Record = parsePageSectionsIntoRecords({ href, $, languageCode: 'en' })
    const expected: Record = {
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
    const html: string = fixtures.pageMultipleH1s
    const $ = cheerio.load(html)
    const href: string = '/example/href'
    const record: Record = parsePageSectionsIntoRecords({ href, $, languageCode: 'en' })

    expect(record.title).toEqual('I am the page title')
  })

  test("content doesn't lump headings with paragraphs together", () => {
    const html: string = fixtures.pageHeadingParagraphNoWhitespace
    const $ = cheerio.load(html)
    const href: string = '/example/href'
    const record: Record = parsePageSectionsIntoRecords({ href, $, languageCode: 'en' })

    // Ensure the heading appears only once
    const headingMatches = record.content.match(/Changing your primary email address/g)
    expect(headingMatches).not.toBeNull()
    expect(headingMatches!.length).toBe(1)

    // Ensure there's no concatenation without whitespace
    expect(record.content.includes('email addressYou can set')).toBeFalsy()

    // Ensure inline elements remain intact
    expect(record.content).toMatch(/Paragraph\./)
  })
})
