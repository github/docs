import assert from 'assert'
import path from 'path'
import patterns from './patterns.js'
import removeFPTFromPath from './remove-fpt-from-path.js'

/*
This class creates the "permalinks" that power a page's different versions,
where the source for the versions is a content file's frontmatter. The
page.permalinks is an array of objects that looks like this:
[
  {
    "languageCode": "en",
    "pageVersion": "free-pro-team@latest",
    "relativePath": "billing/managing-billing-for-your-github-account/index.md",
    "title": "Managing billing for your GitHub account",
    "hrefWithoutLanguage": "/billing/managing-billing-for-your-github-account",
    "href": "/en/billing/managing-billing-for-your-github-account"
  },
  {
    "languageCode": "en",
    "pageVersion": "enterprise-cloud@latest",
    "relativePath": "billing/managing-billing-for-your-github-account/index.md",
    "title": "Managing billing for your GitHub account",
    "hrefWithoutLanguage": "/enterprise-cloud@latest/billing/managing-billing-for-your-github-account",
    "href": "/en/enterprise-cloud@latest/billing/managing-billing-for-your-github-account"
  }
  ... and so on for each of the content file's supported versions.
]
*/
class Permalink {
  constructor(languageCode, pageVersion, relativePath, title) {
    this.languageCode = languageCode
    this.pageVersion = pageVersion
    this.relativePath = relativePath
    this.title = title

    const permalinkSuffix = this.constructor.relativePathToSuffix(relativePath)

    this.hrefWithoutLanguage = removeFPTFromPath(
      path.posix.join('/', pageVersion, permalinkSuffix)
    ).replace(patterns.trailingSlash, '$1')
    this.href = `/${languageCode}${
      this.hrefWithoutLanguage === '/' ? '' : this.hrefWithoutLanguage
    }`

    return this
  }

  static derive(languageCode, relativePath, title, applicableVersions) {
    assert(relativePath, 'relativePath is required')
    assert(languageCode, 'languageCode is required')

    const permalinks = applicableVersions.map((pageVersion) => {
      return new Permalink(languageCode, pageVersion, relativePath, title)
    })

    return permalinks
  }

  static relativePathToSuffix(relativePath) {
    return '/' + relativePath.replace('index.md', '').replace('.md', '')
  }
}

export default Permalink
