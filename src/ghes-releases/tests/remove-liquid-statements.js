import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs/promises'

import cheerio from 'cheerio'
import matter from 'gray-matter'
import { describe, expect, test } from 'vitest'

import removeLiquidStatements from '../scripts/remove-liquid-statements'
import removeDeprecatedFrontmatter from '../scripts/remove-deprecated-frontmatter'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const removeLiquidStatementsFixtures = path.join(__dirname, './fixtures/remove-liquid-statements')

// Hardcode values so tests don't go out of date
const versionToDeprecate = '2.13'
const nextOldestVersion = '2.14'

// Remove liquid only
const greaterThan = path.join(removeLiquidStatementsFixtures, 'greater-than.md')
const unnecessary = path.join(removeLiquidStatementsFixtures, 'unnecessary.md')
const andGreaterThan1 = path.join(removeLiquidStatementsFixtures, 'and-greater-than1.md')
const andGreaterThan2 = path.join(removeLiquidStatementsFixtures, 'and-greater-than2.md')
const notEquals = path.join(removeLiquidStatementsFixtures, 'not-equals.md')

// Remove liquid and content
const lessThanNextOldest = path.join(removeLiquidStatementsFixtures, 'less-than-next-oldest.md')
const equals = path.join(removeLiquidStatementsFixtures, 'equals.md')

// Check whitespace
const whitespace = path.join(removeLiquidStatementsFixtures, 'whitespace.md')

// Update frontmatter
const frontmatter1 = path.join(removeLiquidStatementsFixtures, 'frontmatter1.md')
const frontmatter2 = path.join(removeLiquidStatementsFixtures, 'frontmatter2.md')

// process frontmatter
function processFrontmatter(contents, file) {
  const { content, data } = matter(contents)
  removeDeprecatedFrontmatter(file, data.versions, versionToDeprecate, nextOldestVersion)
  return matter.stringify(content, data, { lineWidth: 10000 })
}

describe('removing liquid statements only', () => {
  test('removes liquid statements that specify "greater than version to deprecate"', async () => {
    const content = await fs.readFile(greaterThan, 'utf8')
    const { newContent } = removeLiquidStatements(content, versionToDeprecate, nextOldestVersion)
    const $ = cheerio.load(newContent)
    expect($('.example1').text().trim()).toBe(`{% ifversion ghes %}\n
Alpha\n\n{% endif %}`)
    expect($('.example2').text().trim()).toBe(`{% ifversion fpt or ghes %}\n
Alpha\n\n{% endif %}`)
    expect($('.example3').text().trim()).toBe(`{% ifversion ghes %}\n
Alpha\n\n{% else %}\n\nBravo\n\n{% endif %}`)
    expect($('.example4').text().trim()).toBe(`{% ifversion ghes > 2.16 %}\n
Alpha\n\n{% else %}\n\nBravo\n\n{% ifversion ghes %}\n\nCharlie\n\n{% endif %}\n\n{% endif %}`)
    expect($('.example5').text().trim()).toBe(`{% ifversion ghes < 2.16 %}\n
Alpha\n\n{% ifversion ghes %}\n\nBravo\n\n{% endif %}\n\n{% else %}\n\nCharlie\n\n{% endif %}`)
    expect($('.example6').text().trim()).toBe(`{% ifversion ghes %}\n\nAlpha\n
{% ifversion ghes < 2.16 %}\n\nBravo\n\n{% endif %}\n\n{% else %}\n\nCharlie\n\n{% endif %}`)
    expect($('.example7').text().trim()).toBe(`{% ifversion ghes %}\n\nAlpha\n
{% ifversion ghes > 2.16 %}\n\nBravo\n\n{% else %}\n\nCharlie\n\n{% endif %}\n\n{% endif %}`)
    expect($('.example8').text().trim()).toBe(`{% ifversion ghes %}\n\nAlpha\n
{% else %}\n\nBravo\n\n{% ifversion not fpt %}\n\nCharlie\n\n{% endif %}\n\nDelta\n\n{% endif %}`)
    expect($('.example9').text().trim()).toBe(`{% ifversion fpt %}\n
Alpha\n\n{% else %}\n\nBravo\n\n{% ifversion ghes > 2.16 %}\n\nCharlie\n
{% endif %}\n\n{% ifversion ghes %}\n\nDelta\n\n{% endif %}\n\n{% endif %}`)
    expect($('.example10').text().trim()).toBe(`{% ifversion ghes %}\n\nAlpha\n
{% else %}\n\nBravo\n\n{% endif %}`)
  })
  test('removes liquid statements that specify all known versions, including some nested conditionals"', async () => {
    const content = await fs.readFile(unnecessary, 'utf8')
    const { newContent } = removeLiquidStatements(content, versionToDeprecate, nextOldestVersion)
    const $ = cheerio.load(newContent)
    expect($('.example1').text().trim()).toBe(`Alpha`)
    expect($('.example2').text().trim()).toBe(
      `Alpha\n  {% ifversion fpt or ghec %}\n  Bravo\n  {% endif %}`,
    )
    expect($('.example3').text().trim()).toBe(
      `Alpha\n  {% ifversion fpt or ghec %}\n  Bravo\n  {% else %}\n  Delta\n  {% endif %}`,
    )
    expect($('.example4').text().trim()).toBe(
      `Alpha\n  {% ifversion fpt or ghec %}\n  Bravo\n    {% ifversion ghae %}\n    Charlie\n    {% endif %}\n  {% endif %}`,
    )
    expect($('.example5').text().trim()).toBe(
      `Alpha\n  {% ifversion fpt or ghec %}\n  Bravo\n    {% ifversion ghae %}\n    Charlie\n    {% endif %}\n  {% else %}\n  Delta\n  {% endif %}`,
    )
  })

  test('removes liquid statements that specify "and greater than version to deprecate"', async () => {
    const content = await fs.readFile(andGreaterThan1, 'utf8')
    const { newContent } = removeLiquidStatements(content, versionToDeprecate, nextOldestVersion)
    const $ = cheerio.load(newContent)
    expect($('.example1').text().trim()).toBe(
      '{% ifversion not fpt and ghes %}\n\nAlpha\n\n{% endif %}',
    )
    expect($('.example2').text().trim())
      .toBe(`{% ifversion not fpt and ghes %}\n\nAlpha\n\n{% else %}\n
Bravo\n\n{% endif %}`)
    expect($('.example3').text().trim()).toBe(`{% ifversion ghes > 2.16 %}\n
Alpha\n\n{% else %}\n\nBravo\n\n{% ifversion not fpt and ghes %}\n\nCharlie\n\n{% endif %}\n{% endif %}`)
    expect($('.example4').text().trim()).toBe(`{% ifversion ghes < 2.16 %}\n
Alpha\n\n{% ifversion not fpt and ghes %}\n\nBravo\n\n{% endif %}\n\n{% else %}\n\nCharlie\n\n{% endif %}`)
    expect($('.example5').text().trim()).toBe(`{% ifversion not fpt and ghes %}\n
Alpha\n\n{% ifversion ghes > 2.16 %}\n\nBravo\n\n{% endif %}\n\n{% else %}\n\nCharlie\n\n{% endif %}`)
  })

  test('removes liquid statements that specify "and greater than version to deprecate" (alternate format)', async () => {
    const content = await fs.readFile(andGreaterThan2, 'utf8')
    const { newContent } = removeLiquidStatements(content, versionToDeprecate, nextOldestVersion)
    const $ = cheerio.load(newContent)
    expect($('.example1').text().trim()).toBe('{% ifversion ghes < 2.16 %}\n\nAlpha\n\n{% endif %}')
    expect($('.example2').text().trim()).toBe(`{% ifversion ghes < 2.16 %}\n\nAlpha\n\n{% else %}\n
Bravo\n\n{% endif %}`)
    expect($('.example3').text().trim()).toBe(`{% ifversion fpt %}\n
Alpha\n\n{% else %}\n\nBravo\n\n{% ifversion ghes < 2.16 %}\n\nCharlie\n\n{% endif %}\n\n{% endif %}`)
    expect($('.example4').text().trim()).toBe(`{% ifversion not fpt %}\n
Alpha\n\n{% ifversion ghes < 2.16 %}\n\nBravo\n\n{% endif %}\n\n{% else %}\n\nCharlie\n\n{% endif %}`)
    expect($('.example5').text().trim()).toBe(`{% ifversion ghes < 2.16 %}\n
Alpha\n\n{% ifversion not fpt %}\n\nBravo\n\n{% endif %}\n\n{% else %}\n\nCharlie\n\n{% endif %}`)
  })

  test('removes liquid statements that specify "not equals version to deprecate"', async () => {
    const content = await fs.readFile(notEquals, 'utf8')
    const { newContent } = removeLiquidStatements(content, versionToDeprecate, nextOldestVersion)
    const $ = cheerio.load(newContent)
    expect($('.example1').text().trim()).toBe('{% ifversion ghes %}\n\nAlpha\n\n{% endif %}')
    expect($('.example2').text().trim()).toBe('{% ifversion fpt or ghes %}\n\nAlpha\n\n{% endif %}')
    expect($('.example3').text().trim()).toBe(`{% ifversion fpt %}\n
Alpha\n\n{% else %}\n\nBravo\n\n{% ifversion ghes %}\n\nCharlie\n\n{% endif %}\n\n{% endif %}`)
    expect($('.example4').text().trim()).toBe(`{% ifversion fpt %}\n
Alpha\n\n{% ifversion ghes %}\n\nBravo\n\n{% endif %}\n\n{% else %}\n\nCharlie\n\n{% endif %}`)
    expect($('.example5').text().trim())
      .toBe(`{% ifversion ghes %}\n\nAlpha\n\n{% ifversion fpt %}\n
Bravo\n\n{% endif %}\n\n{% else %}\n\nCharlie\n\n{% endif %}`)
    expect($('.example6').text().trim()).toBe(`{% ifversion not fpt and ghes %}\n
Alpha\n\n{% endif %}`)
  })
})

describe('removing liquid statements and content', () => {
  test('removes interior content and liquid statements that specify "equals version to deprecate"', async () => {
    const content = await fs.readFile(equals, 'utf8')
    const { newContent } = removeLiquidStatements(content, versionToDeprecate, nextOldestVersion)
    const $ = cheerio.load(newContent)
    expect($('.example1').text().trim()).toBe('')
    expect($('.example2').text().trim()).toBe('{% ifversion not fpt %}\n\nAlpha\n\n{% endif %}')
    expect($('.example3').text().trim()).toBe(`{% ifversion fpt %}\n
Alpha\n\n{% else %}\n\nBravo\n\n{% endif %}`)
    expect($('.example4').text().trim()).toBe(`{% ifversion fpt %}\n
Alpha\n\n{% else %}\n\nCharlie\n\n{% endif %}`)
    expect($('.example5').text().trim()).toBe('Charlie')
    expect($('.example6').text().trim()).toBe(
      'Charlie\n\n{% ifversion fpt or ghes %}\n\nBravo\n\n{% endif %}',
    )
  })

  test('removes interior content and liquid statements that specify "less than next oldest than version to deprecate"', async () => {
    const content = await fs.readFile(lessThanNextOldest, 'utf8')
    const { newContent } = removeLiquidStatements(content, versionToDeprecate, nextOldestVersion)
    const $ = cheerio.load(newContent)
    expect($('.example1').text().trim()).toBe('Alpha')
    expect($('.example2').text().trim()).toBe(
      'Alpha\n\n{% ifversion fpt %}\n\nBravo\n\n{% endif %}',
    )
    expect($('.example3').text().trim()).toBe(`{% ifversion fpt %}\n
Alpha\n\n{% else %}\n\nBravo\n\n{% endif %}`)
    expect($('.example4').text().trim()).toBe(`{% ifversion fpt %}\n
Alpha\n\n{% else %}\n\nCharlie\n\n{% endif %}`)
    expect($('.example5').text().trim()).toBe('Charlie')
    expect($('.example6').text().trim()).toBe(`{% ifversion ghes < 2.16 %}\n
Alpha\n\n{% else %}\n\nCharlie\n\n{% ifversion not fpt %}\n\nBravo\n\n{% endif %}\n\n{% endif %}`)
    expect($('.example7').text().trim()).toBe(`{% ifversion not fpt %}\n
Alpha\n\nCharlie\n\n{% endif %}`)
    expect($('.example8').text().trim()).toBe(`Bravo\n\n{% ifversion ghes > 2.16 %}\n
Charlie\n\n{% else %}\n\nDelta\n\n{% endif %}\n\nEcho`)
  })
})

describe('updating frontmatter', () => {
  test('updates frontmatter versions Enterprise if set to greater-than-or-equal-to version to deprecate', async () => {
    let contents = await fs.readFile(frontmatter1, 'utf8')
    contents = processFrontmatter(contents, frontmatter1)
    const $ = cheerio.load(contents)
    expect($.text().includes("ghes: '*'")).toBe(true)
    expect($.text().includes("ghes: '>=2.13'")).toBe(false)
  })

  test('updates frontmatter versions Enterprise if set to greater-than-or-equal-to next oldest version', async () => {
    let contents = await fs.readFile(frontmatter2, 'utf8')
    contents = processFrontmatter(contents, frontmatter2)
    const $ = cheerio.load(contents)
    expect($.text().includes("ghes: '*'")).toBe(true)
    expect($.text().includes("ghes: '>=2.14'")).toBe(false)
  })
})

describe('whitespace', () => {
  test('does not add newlines when whitespace control is used', async () => {
    const content = await fs.readFile(whitespace, 'utf8')
    const { newContent } = removeLiquidStatements(content, versionToDeprecate, nextOldestVersion)
    const $ = cheerio.load(newContent)
    expect($('.example1').text()).toBe('\n{% ifversion ghes %}\n  Alpha\n{% endif %}\n')
    expect($('.example2').text()).toBe('\n{%- ifversion ghes %}\n  Alpha\n{% endif %}\n')
    expect($('.example3').text()).toBe('\n{% ifversion fpt or ghes %}\n  Alpha\n{%- endif %}\n')
    expect($('.example4').text()).toBe('\n{%- ifversion fpt or ghes %}\n  Alpha\n{%- endif %}\n')
  })

  test('does not add newlines when no newlines are present', async () => {
    const content = await fs.readFile(whitespace, 'utf8')
    const { newContent } = removeLiquidStatements(content, versionToDeprecate, nextOldestVersion)
    const $ = cheerio.load(newContent)
    expect($('.example5').text()).toBe('\n{% ifversion ghes %}\n  Alpha\n{% endif %}\n')
    expect($('.example6').text()).toBe(
      '\n  Alpha\n{% ifversion fpt or ghes %}\n  Bravo\n{% endif %}\n  Charlie\n',
    )
    expect($('.example7').text()).toBe('\nAlpha{% ifversion fpt or ghes %}\nBravo{% endif %}\n')
  })

  test('only remove newlines when tag starts at beginning of line', async () => {
    const content = await fs.readFile(whitespace, 'utf8')
    const { newContent } = removeLiquidStatements(content, versionToDeprecate, nextOldestVersion)
    const $ = cheerio.load(newContent)
    expect($('.example8').text()).toBe('\nAlpha\nBravo\n')
    expect($('.example9').text()).toBe('\nAlpha\nBravo\n')
    expect($('.example10').text()).toBe('\nPre\nBravo\n')
    expect($('.example11').text()).toBe('\nPre\nBravo\n')
  })
})
