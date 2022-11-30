const path = require('path')
const cheerio = require('cheerio')
const matter = require('gray-matter')
const readFileAsync = require('../../lib/readfile-async')
const removeLiquidStatements = require('../../lib/remove-liquid-statements')
const removeDeprecatedFrontmatter = require('../../lib/remove-deprecated-frontmatter')
const removeLiquidStatementsFixtures = path.join(__dirname, '../fixtures/remove-liquid-statements')

// Hardcode values so tests don't go out of date
const versionToDeprecate = 'enterprise-server@2.13'
const nextOldestVersion = 'enterprise-server@2.14'

// Remove liquid only
const greaterThan = path.join(removeLiquidStatementsFixtures, 'greater-than.md')
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
function processFrontmatter (contents, file) {
  const { content, data } = matter(contents)
  removeDeprecatedFrontmatter(file, data.versions, versionToDeprecate, nextOldestVersion)
  return matter.stringify(content, data, { lineWidth: 10000 })
}

describe('removing liquid statements only', () => {
  test('removes liquid statements that specify "greater than version to deprecate"', async () => {
    let contents = await readFileAsync(greaterThan, 'utf8')
    contents = removeLiquidStatements(contents, versionToDeprecate, nextOldestVersion)
    const $ = cheerio.load(contents)
    expect($('.example1').text().trim()).toBe('Alpha')
    expect($('.example2').text().trim()).toBe('Alpha')
    expect($('.example3').text().trim()).toBe('Alpha')
    expect($('.example4').text().trim()).toBe(`{% if currentVersion ver_gt "enterprise-server@2.16" %}\n
Alpha\n\n{% else %}\n\nBravo\n\nCharlie\n\n{% endif %}`)
    expect($('.example5').text().trim()).toBe(`{% if currentVersion ver_lt "enterprise-server@2.16" %}\n
Alpha\n\nBravo\n\n{% else %}\n\nCharlie\n\n{% endif %}`)
    expect($('.example6').text().trim()).toBe(`Alpha\n\n{% if currentVersion ver_lt "enterprise-server@2.16" %}\n
Bravo\n\n{% endif %}`)
    expect($('.example7').text().trim()).toBe(`Alpha\n\n{% if currentVersion ver_gt "enterprise-server@2.16" %}\n
Bravo\n\n{% else %}\n\nCharlie\n\n{% endif %}`)
    expect($('.example8').text().trim()).toBe('Alpha')
    expect($('.example9').text().trim()).toBe(`{% if currentVersion == "free-pro-team@latest" %}\n
Alpha\n\n{% else %}\n\nBravo\n\n{% if currentVersion ver_gt "enterprise-server@2.16" %}\n\nCharlie\n
{% endif %}\n\nDelta\n\n{% endif %}`)
    expect($('.example10').text().trim()).toBe('Alpha')
  })

  test('removes liquid statements that specify "and greater than version to deprecate"', async () => {
    let contents = await readFileAsync(andGreaterThan1, 'utf8')
    contents = removeLiquidStatements(contents, versionToDeprecate, nextOldestVersion)
    const $ = cheerio.load(contents)
    expect($('.example1').text().trim()).toBe('{% if currentVersion != "free-pro-team@latest" %}\n\nAlpha\n\n{% endif %}')
    expect($('.example2').text().trim()).toBe('{% if currentVersion != "free-pro-team@latest" %}\n\nAlpha\n\n{% endif %}')
    expect($('.example3').text().trim()).toBe(`{% if currentVersion ver_gt "enterprise-server@2.16" %}\n
Alpha\n\n{% else %}\n\nBravo\n\n{% if currentVersion != "free-pro-team@latest" %}\n\nCharlie\n\n{% endif %}\n{% endif %}`)
    expect($('.example4').text().trim()).toBe(`{% if currentVersion ver_lt "enterprise-server@2.16" %}\n
Alpha\n\n{% if currentVersion != "free-pro-team@latest" %}\n\nBravo\n\n{% endif %}\n\n{% else %}\n\nCharlie\n\n{% endif %}`)
    expect($('.example5').text().trim()).toBe(`{% if currentVersion != "free-pro-team@latest" %}\n
Alpha\n\n{% if currentVersion ver_gt "enterprise-server@2.16" %}\n\nBravo\n\n{% endif %}\n\n{% endif %}`)
  })

  test('removes liquid statements that specify "and greater than version to deprecate" (alternate format)', async () => {
    let contents = await readFileAsync(andGreaterThan2, 'utf8')
    contents = removeLiquidStatements(contents, versionToDeprecate, nextOldestVersion)
    const $ = cheerio.load(contents)
    expect($('.example1').text().trim()).toBe('{% if currentVersion ver_lt "enterprise-server@2.16" %}\n\nAlpha\n\n{% endif %}')
    expect($('.example2').text().trim()).toBe('{% if currentVersion ver_lt "enterprise-server@2.16" %}\n\nAlpha\n\n{% endif %}')
    expect($('.example3').text().trim()).toBe(`{% if currentVersion == "free-pro-team@latest" %}\n
Alpha\n\n{% else %}\n\nBravo\n\n{% if currentVersion ver_lt "enterprise-server@2.16" %}\n\nCharlie\n\n{% endif %}\n{% endif %}`)
    expect($('.example4').text().trim()).toBe(`{% if currentVersion != "free-pro-team@latest" %}\n
Alpha\n\n{% if currentVersion ver_lt "enterprise-server@2.16" %}\n\nBravo\n\n{% endif %}\n\n{% else %}\n\nCharlie\n\n{% endif %}`)
    expect($('.example5').text().trim()).toBe(`{% if currentVersion ver_lt "enterprise-server@2.16" %}\n
Alpha\n\n{% if currentVersion != "free-pro-team@latest" %}\n\nBravo\n\n{% endif %}\n\n{% endif %}`)
  })

  test('removes liquid statements that specify "not equals version to deprecate"', async () => {
    let contents = await readFileAsync(notEquals, 'utf8')
    contents = removeLiquidStatements(contents, versionToDeprecate, nextOldestVersion)
    const $ = cheerio.load(contents)
    expect($('.example1').text().trim()).toBe('Alpha')
    expect($('.example2').text().trim()).toBe('{% if currentVersion == "free-pro-team@latest" %}\n\nAlpha\n\n{% endif %}')
    expect($('.example3').text().trim()).toBe(`{% if currentVersion == "free-pro-team@latest" %}\n
Alpha\n\n{% else %}\n\nBravo\n\nCharlie\n\n{% endif %}`)
    expect($('.example4').text().trim()).toBe(`{% if currentVersion == "free-pro-team@latest" %}\n
Alpha\n\nBravo\n\n{% else %}\n\nCharlie\n\n{% endif %}`)
    expect($('.example5').text().trim()).toBe(`Alpha\n\n{% if currentVersion == "free-pro-team@latest" %}\n
Bravo\n\n{% endif %}`)
    expect($('.example6').text().trim()).toBe(`{% if currentVersion != "free-pro-team@latest" %}\n
Alpha\n\n{% endif %}`)
  })
})

describe('removing liquid statements and content', () => {
  test('removes interior content and liquid statements that specify "equals version to deprecate"', async () => {
    let contents = await readFileAsync(equals, 'utf8')
    contents = removeLiquidStatements(contents, versionToDeprecate, nextOldestVersion)
    const $ = cheerio.load(contents)
    expect($('.example1').text().trim()).toBe('')
    expect($('.example2').text().trim()).toBe('')
    expect($('.example3').text().trim()).toBe(`{% if currentVersion == "free-pro-team@latest" %}\n
Alpha\n\n{% else %}\n\nBravo\n\n{% endif %}`)
    expect($('.example4').text().trim()).toBe(`{% if currentVersion == "free-pro-team@latest" %}\n
Alpha\n\n{% else %}\n\nCharlie\n\n{% endif %}`)
    expect($('.example5').text().trim()).toBe('Charlie')
    expect($('.example6').text().trim()).toBe('Charlie\n\nBravo')
  })

  test('removes interior content and liquid statements that specify "less than next oldest than version to deprecate"', async () => {
    let contents = await readFileAsync(lessThanNextOldest, 'utf8')
    contents = removeLiquidStatements(contents, versionToDeprecate, nextOldestVersion)
    const $ = cheerio.load(contents)
    expect($('.example1').text().trim()).toBe('Alpha')
    expect($('.example2').text().trim()).toBe('Alpha')
    expect($('.example3').text().trim()).toBe(`{% if currentVersion == "free-pro-team@latest" %}\n
Alpha\n\n{% else %}\n\nBravo\n\n{% endif %}`)
    expect($('.example4').text().trim()).toBe(`{% if currentVersion == "free-pro-team@latest" %}\n
Alpha\n\n{% else %}\n\nCharlie\n\n{% endif %}`)
    expect($('.example5').text().trim()).toBe('Charlie')
    expect($('.example6').text().trim()).toBe(`{% if currentVersion ver_lt "enterprise-server@2.16" %}\n
Alpha\n\n{% else %}\n\nCharlie\n\n{% endif %}`)
    expect($('.example7').text().trim()).toBe('')
    expect($('.example8').text().trim()).toBe(`Bravo\n\n{% if currentVersion ver_gt "enterprise-server@2.16" %}\n
Charlie\n\n{% else %}\n\nDelta\n\n{% endif %}\n\nEcho`)
  })
})

describe('updating frontmatter', () => {
  test('updates frontmatter versions Enterprise if set to greater-than-or-equal-to version to deprecate', async () => {
    let contents = await readFileAsync(frontmatter1, 'utf8')
    contents = processFrontmatter(contents, frontmatter1)
    const $ = cheerio.load(contents)
    // console.log('foo')
    // console.log($.text())
    expect($.text().includes('enterprise-server: \'*\'')).toBe(true)
    expect($.text().includes('enterprise-server: \'>=2.13\'')).toBe(false)
  })

  test('updates frontmatter versions Enterprise if set to greater-than-or-equal-to next oldest version', async () => {
    let contents = await readFileAsync(frontmatter2, 'utf8')
    contents = processFrontmatter(contents, frontmatter2)
    const $ = cheerio.load(contents)
    expect($.text().includes('enterprise-server: \'*\'')).toBe(true)
    expect($.text().includes('enterprise-server: \'>=2.14\'')).toBe(false)
  })
})

describe('whitespace', () => {
  test('does not add newlines when whitespace control is used', async () => {
    let contents = await readFileAsync(whitespace, 'utf8')
    contents = removeLiquidStatements(contents, versionToDeprecate, nextOldestVersion)
    const $ = cheerio.load(contents)
    expect($('.example1').text()).toBe('\n  Alpha\n')
    expect($('.example2').text()).toBe('\n  Alpha\n')
    expect($('.example3').text()).toBe('\n  Alpha\n')
    expect($('.example4').text()).toBe('\n  Alpha\n')
  })

  test('does not add newlines when no newlines are present', async () => {
    let contents = await readFileAsync(whitespace, 'utf8')
    contents = removeLiquidStatements(contents, versionToDeprecate, nextOldestVersion)
    const $ = cheerio.load(contents)
    expect($('.example5').text()).toBe('\n  Alpha\n')
    expect($('.example6').text()).toBe('\n  Alpha\n  Bravo\n  Charlie\n')
    expect($('.example7').text()).toBe('\nAlpha\nBravo\n')
  })
})
