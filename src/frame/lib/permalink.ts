import assert from 'assert'
import path from 'path'
import patterns from './patterns'
import removeFPTFromPath from '@/versions/lib/remove-fpt-from-path'

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
// String interning pool: deduplicates low-cardinality, highly-repeated values (languageCode, pageVersion)
// across ~975K Permalink instances (~9 languages × ~9 versions × ~65K pages). Because these fields have
// few distinct values (~81 total), the pool stays bounded — do not use intern() for high-cardinality
// fields like relativePath or title, where the pool would grow unbounded and leak memory.
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
    // When you turn `foo/bar.md`, which is a file path, into a URL pathname,
    // you just need to chop off the `.md` suffix.
    // For `foo/parent/index.md` you can't just chop off the `index.md`
    // because it would leave a trailing `/`.
    return `/${relativePath.replace(indexmdSuffixRegex, '').replace(mdSuffixRegex, '')}`
  }
}

const indexmdSuffixRegex = new RegExp(`${path.sep}index\\.md$`)
const mdSuffixRegex = /\.md$/

export default Permalink
