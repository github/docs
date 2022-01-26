import assert from 'assert'
import path from 'path'
import patterns from './patterns.js'
import { allVersions } from './all-versions.js'
import removeFPTFromPath from './remove-fpt-from-path.js'

class Permalink {
  constructor(languageCode, pageVersion, relativePath, title) {
    this.languageCode = languageCode
    this.pageVersion = pageVersion
    this.relativePath = relativePath
    this.title = title

    const permalinkSuffix = this.constructor.relativePathToSuffix(relativePath)

    this.href = removeFPTFromPath(
      path.posix.join('/', languageCode, pageVersion, permalinkSuffix)
    ).replace(patterns.trailingSlash, '$1')

    this.pageVersionTitle = allVersions[pageVersion].versionTitle

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
