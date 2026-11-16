import assert from 'assert'
import path from 'path'
import patterns from './patterns'
import removeFPTFromPath from '@/versions/lib/remove-fpt-from-path'

// Permalinks derive one language-scoped href for each supported content version.
// Intern only low-cardinality fields across about 975K Permalink instances.
// High-cardinality fields like relativePath and title would make the pool grow without bound.
const stringPool = new Map<string, string>()

function intern(s: string): string {
  const pooled = stringPool.get(s)
  if (pooled !== undefined) return pooled
  stringPool.set(s, s)
  return s
}

class Permalink {
  languageCode: string
  pageVersion: string
  relativePath: string
  title: string
  hrefWithoutLanguage: string
  href: string

  constructor(languageCode: string, pageVersion: string, relativePath: string, title: string) {
    this.languageCode = intern(languageCode)
    this.pageVersion = intern(pageVersion)
    this.relativePath = relativePath
    this.title = title

    const permalinkSuffix = Permalink.relativePathToSuffix(relativePath)

    this.hrefWithoutLanguage = removeFPTFromPath(
      path.posix.join('/', pageVersion, permalinkSuffix),
    ).replace(patterns.trailingSlash, '$1')
    this.href = `/${languageCode}${
      this.hrefWithoutLanguage === '/' ? '' : this.hrefWithoutLanguage
    }`

    return this
  }

  static derive(
    languageCode: string,
    relativePath: string,
    title: string,
    applicableVersions: string[],
  ): Permalink[] {
    assert(relativePath, 'relativePath is required')
    assert(languageCode, 'languageCode is required')

    const permalinks = applicableVersions.map((pageVersion: string) => {
      return new Permalink(languageCode, pageVersion, relativePath, title)
    })

    return permalinks
  }

  static relativePathToSuffix(relativePath: string): string {
    if (relativePath === 'index.md') return '/'
    // index.md paths drop the whole suffix to avoid a trailing slash.
    return `/${relativePath.replace(indexmdSuffixRegex, '').replace(mdSuffixRegex, '')}`
  }
}

const indexmdSuffixRegex = new RegExp(`${path.sep}index\\.md$`)
const mdSuffixRegex = /\.md$/

export default Permalink
