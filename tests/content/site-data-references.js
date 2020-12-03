const { isEqual, get, uniqWith } = require('lodash')
const loadSiteData = require('../../lib/site-data')
const { loadPages } = require('../../lib/pages')
const getDataReferences = require('../../lib/get-liquid-data-references')
const frontmatter = require('@github-docs/frontmatter')
const fs = require('fs')
const path = require('path')

describe('data references', () => {
  let data, pages

  beforeAll(async (done) => {
    data = await loadSiteData()
    pages = await loadPages()
    pages = pages.filter(page => page.languageCode === 'en')
    done()
  })

  test('every data reference found in English content files is defined and has a value', () => {
    let errors = []
    expect(pages.length).toBeGreaterThan(0)

    pages.forEach(page => {
      const file = path.join('content', page.relativePath)
      const pageRefs = getDataReferences(page.markdown)
      pageRefs.forEach(key => {
        const value = get(data.en, key)
        if (typeof value !== 'string') errors.push({ key, value, file })
      })
    })

    errors = uniqWith(errors, isEqual) // remove duplicates
    expect(errors.length, JSON.stringify(errors, null, 2)).toBe(0)
  })

  test('every data reference found in metadata of English content files is defined and has a value', () => {
    let errors = []
    expect(pages.length).toBeGreaterThan(0)

    pages.forEach(page => {
      const metadataFile = path.join('content', page.relativePath)
      const fileContents = fs.readFileSync(path.join(__dirname, '../..', metadataFile))
      const { data: metadata } = frontmatter(fileContents, { filepath: page.fullPath })
      const metadataRefs = getDataReferences(JSON.stringify(metadata))
      metadataRefs.forEach(key => {
        const value = get(data.en, key)
        if (typeof value !== 'string') errors.push({ key, value, metadataFile })
      })
    })

    errors = uniqWith(errors, isEqual) // remove duplicates
    expect(errors.length, JSON.stringify(errors, null, 2)).toBe(0)
  })

  test('every data reference found in English reusable files is defined and has a value', () => {
    let errors = []
    const allReusables = data.en.site.data.reusables
    const reusables = Object.values(allReusables)
    expect(reusables.length).toBeGreaterThan(0)

    reusables.forEach(reusablesPerFile => {
      let reusableFile = path.join(__dirname, '../../data/reusables/', getFilenameByValue(allReusables, reusablesPerFile))
      reusableFile = getFilepath(reusableFile)

      const reusableRefs = getDataReferences(JSON.stringify(reusablesPerFile))

      reusableRefs.forEach(key => {
        const value = get(data.en, key)
        if (typeof value !== 'string') errors.push({ key, value, reusableFile })
      })
    })

    errors = uniqWith(errors, isEqual) // remove duplicates
    expect(errors.length, JSON.stringify(errors, null, 2)).toBe(0)
  })

  test('every data reference found in English variable files is defined and has a value', () => {
    let errors = []
    const allVariables = data.en.site.data.variables
    const variables = Object.values(allVariables)
    expect(variables.length).toBeGreaterThan(0)

    variables.forEach(variablesPerFile => {
      let variableFile = path.join(__dirname, '../../data/variables/', getFilenameByValue(allVariables, variablesPerFile))
      variableFile = getFilepath(variableFile)

      const variableRefs = getDataReferences(JSON.stringify(variablesPerFile))

      variableRefs.forEach(key => {
        const value = get(data.en, key)
        if (typeof value !== 'string') errors.push({ key, value, variableFile })
      })
    })

    errors = uniqWith(errors, isEqual) // remove duplicates
    expect(errors.length, JSON.stringify(errors, null, 2)).toBe(0)
  })
})

function getFilenameByValue (object, value) {
  return Object.keys(object).find(key => object[key] === value)
}

// if path exists, assume it's a directory; otherwise, assume a YML extension
function getFilepath (filepath) {
  filepath = fs.existsSync(filepath)
    ? filepath + '/'
    : filepath + '.yml'

  // we only need the relative path
  return filepath.replace(path.join(__dirname, '../../'), '')
}
