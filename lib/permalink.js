const assert = require('assert')
const path = require('path')
const patterns = require('./patterns')
const getApplicableVersions = require('./get-applicable-versions')
const allVersions = require('./all-versions')

class Permalink {
  constructor (languageCode, pageVersion, relativePath, title) {
    this.languageCode = languageCode
    this.pageVersion = pageVersion
    this.relativePath = relativePath
    this.title = title

    const permalinkSuffix = this.constructor.relativePathToSuffix(relativePath)

    this.href = path.join('/', languageCode, pageVersion, permalinkSuffix)
      .replace(patterns.trailingSlash, '$1')

    this.pageVersionTitle = allVersions[pageVersion].versionTitle

    return this
  }

  static derive (languageCode, relativePath, title, frontmatterVersions) {
    assert(relativePath, 'relativePath is required')
    assert(languageCode, 'languageCode is required')

    const applicableVersions = getApplicableVersions(frontmatterVersions, path.join(languageCode, relativePath))
    const permalinks = applicableVersions.map(pageVersion => {
      return new Permalink(languageCode, pageVersion, relativePath, title)
    })

    // special permalink for homepage
    if (relativePath === 'index.md') {
      const homepagePermalink = {
        ...permalinks[0],
        href: '/' + languageCode,
        pageVersion: 'homepage',
        pageVersionTitle: permalinks[0].title,
        homepage: true
      }
      permalinks.push(homepagePermalink)
    }

    return permalinks
  }

  static relativePathToSuffix (relativePath) {
    return '/' + relativePath
      .replace('index.md', '')
      .replace('.md', '')
  }
}

module.exports = Permalink
