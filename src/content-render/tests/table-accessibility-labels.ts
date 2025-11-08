import cheerio from 'cheerio'
import { describe, expect, test } from 'vitest'

import { renderContent } from '@/content-render/index'
import { EOL } from 'os'

// Use platform-specific line endings for realistic tests when templates have
// been loaded from disk
const nl = (str: string) => str.replace(/\n/g, EOL)

describe('table accessibility labels', () => {
  test('adds aria-labelledby to tables following headings', async () => {
    const template = nl(`
## Supported Platforms

| Platform | Status |
|----------|--------|
| Linux    | ✅     |
| Windows  | ✅     |
`)

    const html = await renderContent(template)
    const $ = cheerio.load(html)

    const table = $('table')
    expect(table.length).toBe(1)
    expect(table.attr('aria-labelledby')).toBe('supported-platforms')

    const heading = $('#supported-platforms')
    expect(heading.length).toBe(1)
    expect(heading.text()).toBe('Supported Platforms')
  })

  test('works with different heading levels', async () => {
    const template = nl(`
### Configuration Options

| Option | Default |
|--------|---------|
| debug  | false   |
| port   | 3000    |
`)

    const html = await renderContent(template)
    const $ = cheerio.load(html)

    const table = $('table')
    expect(table.attr('aria-labelledby')).toBe('configuration-options')
  })

  test('skips tables that already have accessibility attributes', async () => {
    const template = nl(`
## Test Heading

<table aria-label="Pre-labeled table">
  <tr><th>Header</th><th>Header</th></tr>
  <tr><td>Data</td><td>Data</td></tr>
</table>
`)

    const html = await renderContent(template)
    const $ = cheerio.load(html)

    const table = $('table')
    expect(table.attr('aria-label')).toBe('Pre-labeled table')
    expect(table.attr('aria-labelledby')).toBeUndefined()
  })

  test('skips tables that already have captions', async () => {
    const template = nl(`
## Test Heading

<table>
<caption>Existing caption</caption>
  <tr><th>Header</th><th>Header</th></tr>
  <tr><td>Data</td><td>Data</td></tr>
</table>
`)

    const html = await renderContent(template)
    const $ = cheerio.load(html)

    const table = $('table')
    expect(table.find('caption').text()).toBe('Existing caption')
    expect(table.attr('aria-labelledby')).toBeUndefined()
  })

  test('handles multiple tables with different headings', async () => {
    const template = nl(`
## First Table

| A | B |
|---|---|
| 1 | 2 |

## Second Table

| X | Y |
|---|---|
| 3 | 4 |
`)

    const html = await renderContent(template)
    const $ = cheerio.load(html)

    const tables = $('table')
    expect(tables.length).toBe(2)
    expect($(tables[0]).attr('aria-labelledby')).toBe('first-table')
    expect($(tables[1]).attr('aria-labelledby')).toBe('second-table')
  })

  test('skips tables without preceding headings', async () => {
    const template = nl(`
| Header | Header |
|--------|--------|
| Data   | Data   |

Some text here.

| Another | Table |
|---------|-------|
| More    | Data  |
`)

    const html = await renderContent(template)
    const $ = cheerio.load(html)

    const tables = $('table')
    expect(tables.length).toBe(2)
    expect($(tables[0]).attr('aria-labelledby')).toBeUndefined()
    expect($(tables[1]).attr('aria-labelledby')).toBeUndefined()
  })

  test('finds nearest preceding heading even with content in between', async () => {
    const template = nl(`
## Data Table

This table shows important information:

Some additional context here.

| Column | Value |
|--------|-------|
| Item   | 123   |
`)

    const html = await renderContent(template)
    const $ = cheerio.load(html)

    const table = $('table')
    expect(table.attr('aria-labelledby')).toBe('data-table')
  })

  test('stops searching at another table', async () => {
    const template = nl(`
## First Heading

| Table | One |
|-------|-----|
| A     | B   |

| Table | Two |
|-------|-----|
| C     | D   |
`)

    const html = await renderContent(template)
    const $ = cheerio.load(html)

    const tables = $('table')
    expect(tables.length).toBe(2)
    expect($(tables[0]).attr('aria-labelledby')).toBe('first-heading')
    // Second table should not get the same heading since the first table is in between
    expect($(tables[1]).attr('aria-labelledby')).toBeUndefined()
  })

  test('handles headings with complex content', async () => {
    const template = nl(`
## Supported GitHub Actions Features

| Feature | Status |
|---------|--------|
| Build   | ✅     |
| Deploy  | ✅     |
`)

    const html = await renderContent(template)
    const $ = cheerio.load(html)

    const table = $('table')
    expect(table.attr('aria-labelledby')).toBe('supported-github-actions-features')
  })

  test('preserves existing table structure and attributes', async () => {
    const template = nl(`
## Test Table

| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
`)

    const html = await renderContent(template)
    const $ = cheerio.load(html)

    const table = $('table')
    expect(table.find('thead th').length).toBe(2)
    expect(table.find('tbody td').length).toBe(2)
    expect(table.find('th').first().attr('scope')).toBe('col')
    expect(table.attr('aria-labelledby')).toBe('test-table')
  })
})
