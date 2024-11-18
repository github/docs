import assert from 'assert'
import path from 'path'
import cheerio from 'cheerio'
import getApplicableVersions from '#src/versions/lib/get-applicable-versions.js'
import generateRedirectsForPermalinks from '#src/redirects/lib/permalinks.js'
import getEnglishHeadings from '#src/languages/lib/get-english-headings.js'
import getTocItems from './get-toc-items.js'
import Permalink from './permalink.js'
import { renderContent } from '#src/content-render/index.js'
import processLearningTracks from '#src/learning-track/lib/process-learning-tracks.js'
import { productMap } from '#src/products/lib/all-products.js'
import slash from 'slash'
import readFileContents from './read-file-contents.js'
import getLinkData from '#src/learning-track/lib/get-link-data.js'
import getDocumentType from '#src/events/lib/get-document-type.js'
import { allTools } from '#src/tools/lib/all-tools.js'
import { renderContentWithFallback } from '#src/languages/lib/render-with-fallback.js'
import { deprecated, supported } from '#src/versions/lib/enterprise-server-releases.js'
import { allPlatforms } from '#src/tools/lib/all-platforms.js'

// We're going to check a lot of pages' "ID" (the first part of
// the relativePath) against `productMap` to make sure it's valid.
// To avoid having to do `Object.keys(productMap).includes(id)`
// every single time, we turn it into a Set once.
const productMapKeysAsSet = new Set(Object.keys(productMap))

export class FrontmatterErrorsError extends Error {
  constructor(message, frontmatterErrors) {
    super(message)
    this.frontmatterErrors = frontmatterErrors
  }
}

class Page {
  static async init(opts) {
    opts = await Page.read(opts)
    if (!opts) return
    return new Page(opts)
  }

  static async read(opts) {
    assert(opts.languageCode, 'languageCode is required')
    assert(opts.relativePath, 'relativePath is required')
    assert(opts.basePath, 'basePath is required')

    const relativePath = slash(opts.relativePath)
    const fullPath = slash(path.join(opts.basePath, relativePath))

    // Per https://nodejs.org/api/fs.html#fs_fs_exists_path_callback
    // its better to read and handle errors than to check access/stats first
    try {
      const { data, content, errors: frontmatterErrors } = await readFileContents(fullPath)

      // The `|| ''` is for pages that are purely frontmatter.
      // So the `content` property will be `undefined`.
      let markdown = content || ''

      // When the base path comes from the fixture, we make an exception.
      // The enterprise-server version numbers are constantly evolving,
      // but the fixtures are supposed to work in general for any version.
      // That's why we allow special "macros" in the fixture content.
      // If the fixture content looks like this:
      //
      //    {% ifversion ghes > __GHES_DEPRECATED__[0] and ghes < __GHES_SUPPORTED__[-2] %}
      //
      // it actually means the exact same thing as:
      //
      //    {% ifversion ghes > 3.5 and ghes < 3.7 %}
      //
      // ...**at the time**. The point is that these numbers change meaning
      // where as notations like `__GHES_DEPRECATED__[3]`
      // or `__GHES_SUPPORTED__[0]` are static.
      if (opts.basePath.split(path.sep).includes('fixtures')) {
        supported.forEach((version, i, arr) => {
          markdown = markdown.replaceAll(`__GHES_SUPPORTED__[${i}]`, version)
          markdown = markdown.replaceAll(`__GHES_SUPPORTED__[-${arr.length - i}]`, version)
        })
        deprecated.forEach((version, i, arr) => {
          markdown = markdown.replaceAll(`__GHES_DEPRECATED__[${i}]`, version)
          markdown = markdown.replaceAll(`__GHES_DEPRECATED__[-${arr.length - i}]`, version)
        })
      }

      return {
        ...opts,
        relativePath,
        fullPath,
        ...data,
        markdown,
        frontmatterErrors,
      }
    } catch (err) {
      if (err.code === 'ENOENT') return false
      console.error(err)
    }
  }

  constructor(opts) {
    if (opts.frontmatterErrors && opts.frontmatterErrors.length) {
      throw new FrontmatterErrorsError(
        `${opts.frontmatterErrors.length} frontmatter errors trying to load ${opts.fullPath}`,
        opts.frontmatterErrors,
      )
    }
    delete opts.frontmatterErrors
    Object.assign(this, { ...opts })

    // Store raw data so we can cache parsed versions
    this.rawIntro = this.intro
    this.rawTitle = this.title
    this.rawShortTitle = this.shortTitle
    this.rawProduct = this.product
    this.rawPermissions = this.permissions
    this.rawLearningTracks = this.learningTracks
    this.rawIncludeGuides = this.includeGuides
    this.rawIntroLinks = this.introLinks

    // Is this the Homepage or a Product, Category, Topic, or Article?
    this.documentType = getDocumentType(this.relativePath)

    // Get array of versions that the page is available in for fast lookup
    this.applicableVersions = getApplicableVersions(this.versions, this.fullPath)

    // Only check the parent product ID for English because if a top-level
    // product is edited in English, it will fail for translations until
    // the next translation pipeline PR gets a chance to catch up.
    if (this.languageCode === 'en') {
      // a page should only be available in versions that its parent product is available in
      const versionsParentProductIsNotAvailableIn = this.applicableVersions
        // only the homepage will not have this.parentProduct
        .filter(
          (availableVersion) =>
            this.parentProduct && !this.parentProduct.versions.includes(availableVersion),
        )

      if (versionsParentProductIsNotAvailableIn.length) {
        throw new Error(
          `\`versions\` frontmatter in ${this.fullPath} contains ${versionsParentProductIsNotAvailableIn}, which ${this.parentProduct.id} product is not available in!`,
        )
      }
    }

    // derive array of Permalink objects
    this.permalinks = Permalink.derive(
      this.languageCode,
      this.relativePath,
      this.title,
      this.applicableVersions,
    )

    if (this.relativePath.endsWith('index.md')) {
      // get an array of linked items in product and category TOCs
      this.tocItems = getTocItems(this)
    }

    // if this is an article and it doesn't have showMiniToc = false, set mini TOC to true
    if (!this.relativePath.endsWith('index.md')) {
      this.showMiniToc = this.showMiniToc === false ? this.showMiniToc : true
    }

    this.render = this._render.bind(this)

    return this
  }

  buildRedirects() {
    return generateRedirectsForPermalinks(this.permalinks, this.redirect_from || [])
  }

  // Infer the parent product ID from the page's relative file path
  get parentProductId() {
    // Each page's top-level content directory matches its product ID
    const id = this.relativePath.split('/')[0]

    // ignore top-level content/index.md
    if (id === 'index.md') return null

    // make sure the ID is valid
    if (process.env.NODE_ENV !== 'test') {
      assert(productMapKeysAsSet.has(id), `page ${this.fullPath} has an invalid product ID: ${id}`)
    }

    return id
  }

  get parentProduct() {
    return productMap[this.parentProductId]
  }

  async renderTitle(context, opts = { preferShort: true }) {
    return opts.preferShort && this.shortTitle
      ? this.renderProp('shortTitle', context, opts)
      : this.renderProp('title', context, opts)
  }

  async _render(context) {
    // use English IDs/anchors for translated headings, so links don't break (see #8572)
    if (this.languageCode !== 'en') {
      const englishHeadings = getEnglishHeadings(this, context)
      context.englishHeadings = englishHeadings
    }

    this.intro = await renderContentWithFallback(this, 'rawIntro', context)
    this.introPlainText = await renderContentWithFallback(this, 'rawIntro', context, {
      textOnly: true,
    })
    this.title = await renderContentWithFallback(this, 'rawTitle', context, {
      textOnly: true,
      throwIfEmpty: true,
    })

    const html = await renderContentWithFallback(this, 'markdown', context)

    // Adding communityRedirect for Discussions, Sponsors, and Codespaces - request from Product
    if (
      this.parentProduct &&
      (this.parentProduct.id === 'discussions' ||
        this.parentProduct.id === 'sponsors' ||
        this.parentProduct.id === 'codespaces')
    ) {
      this.communityRedirect = {
        name: 'Provide GitHub Feedback',
        href: `https://github.com/community/community/discussions/categories/${this.parentProduct.id}`,
      }
    }

    // product frontmatter may contain liquid
    if (this.rawProduct) {
      this.product = await renderContentWithFallback(this, 'rawProduct', context)
    }

    // permissions frontmatter may contain liquid
    if (this.rawPermissions) {
      this.permissions = await renderContentWithFallback(this, 'rawPermissions', context)
    }

    // Learning tracks may contain Liquid and need to have versioning processed.
    if (this.rawLearningTracks) {
      const { learningTracks } = await processLearningTracks(this.rawLearningTracks, context)
      this.learningTracks = learningTracks
    }

    // introLinks may contain Liquid and need to have versioning processed.
    if (this.rawIntroLinks) {
      const introLinks = {}
      for (const [rawKey, value] of Object.entries(this.rawIntroLinks)) {
        introLinks[rawKey] = await renderContent(value, context, {
          textOnly: true,
        })
      }

      this.introLinks = introLinks
    }

    if (this.rawIncludeGuides) {
      this.includeGuides = await getLinkData(this.rawIncludeGuides, context)
      this.includeGuides.map((guide) => {
        const { page } = guide
        guide.type = page.type
        if (page.topics) {
          guide.topics = page.topics
        }
        delete guide.page
        return guide
      })
    }

    // set a flag so layout knows whether to render a mac/windows/linux switcher element
    // Remember, the values of platform is matched in
    // the handleInvalidQuerystringValues shielding middleware.
    this.detectedPlatforms = allPlatforms.filter((platform) => {
      // This matches `ghd-tool mac` but not `ghd-tool macos`
      // Whereas `html.includes('ghd-tool mac')` would match both.
      const regex = new RegExp(`ghd-tool ${platform}\\b|platform-${platform}\\b`)
      return regex.test(html)
    })
    this.includesPlatformSpecificContent = this.detectedPlatforms.length > 0

    // set flags for webui, cli, etc switcher element
    this.detectedTools = Object.keys(allTools).filter((tool) => {
      // This matches `ghd-tool jetbrain` but not `ghd-tool jetbrain_beta`
      // Whereas `html.includes('ghd-tool jetbrain')` would match both.
      const regex = new RegExp(`ghd-tool ${tool}\\b|tool-${tool}\\b`)
      return regex.test(html)
    })

    // pass the list of all possible tools around to components and utilities that will need it later on
    this.allToolsParsed = allTools

    this.includesToolSpecificContent = this.detectedTools.length > 0

    return html
  }

  // Allow other modules (like custom liquid tags) to make one-off requests
  // for a page's rendered properties like `title` and `intro`
  async renderProp(propName, context, opts = { unwrap: false }) {
    let prop
    if (propName === 'title') {
      prop = 'rawTitle'
    } else if (propName === 'shortTitle') {
      prop = this.rawShortTitle ? 'rawShortTitle' : 'rawTitle'
    } else if (propName === 'intro') {
      prop = 'rawIntro'
    } else {
      prop = propName
    }

    const html = await renderContentWithFallback(this, prop, context, opts)

    if (!opts.unwrap) return html

    // The unwrap option removes surrounding tags from a string, preserving any inner HTML
    const $ = cheerio.load(html, { xmlMode: true })
    return $.root().contents().html()
  }

  // infer current page's corresponding homepage
  // /en/articles/foo                          -> /en
  // /en/enterprise/2.14/user/articles/foo     -> /en/enterprise/2.14/user
  static getHomepage(requestPath) {
    return requestPath.replace(/\/articles.*/, '')
  }
}

export default Page
