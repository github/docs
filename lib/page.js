const assert = require('assert')
const path = require('path')
const cheerio = require('cheerio')
const patterns = require('./patterns')
const getMapTopicContent = require('./get-map-topic-content')
const getApplicableVersions = require('./get-applicable-versions')
const generateRedirectsForPermalinks = require('./redirects/permalinks')
const getEnglishHeadings = require('./get-english-headings')
const getTocItems = require('./get-toc-items')
const pathUtils = require('./path-utils')
const Permalink = require('./permalink')
const languages = require('./languages')
const renderContent = require('./render-content')
const { renderReact } = require('./react/engine')
const products = require('./all-products')
const slash = require('slash')
const statsd = require('./statsd')
const readFileContents = require('./read-file-contents')
const getLinkData = require('./get-link-data')
const union = require('lodash/union')

class Page {
  static async init (opts) {
    opts = await Page.read(opts)
    if (!opts) return
    return new Page(opts)
  }

  static async read (opts) {
    assert(opts.languageCode, 'languageCode is required')
    assert(opts.relativePath, 'relativePath is required')
    assert(opts.basePath, 'basePath is required')

    const relativePath = slash(opts.relativePath)
    const fullPath = slash(path.join(opts.basePath, relativePath))

    // Per https://nodejs.org/api/fs.html#fs_fs_exists_path_callback
    // its better to read and handle errors than to check access/stats first
    try {
      const { data, content, errors: frontmatterErrors } = await readFileContents(fullPath, opts.languageCode)

      return {
        ...opts,
        relativePath,
        fullPath,
        ...data,
        markdown: content,
        frontmatterErrors
      }
    } catch (err) {
      if (err.code === 'ENOENT') return false
      console.error(err)
    }
  }

  constructor (opts) {
    Object.assign(this, { ...opts })

    if (this.frontmatterErrors.length) {
      throw new Error(JSON.stringify(this.frontmatterErrors, null, 2))
    }

    // Store raw data so we can cache parsed versions
    this.rawIntro = this.intro
    this.rawTitle = this.title
    this.rawShortTitle = this.shortTitle
    this.rawProduct = this.product
    this.rawPermissions = this.permissions
    this.rawLearningTracks = this.learningTracks
    this.rawIncludeGuides = this.includeGuides

    // a page should only be available in versions that its parent product is available in
    const versionsParentProductIsNotAvailableIn = getApplicableVersions(this.versions, this.fullPath)
      // only the homepage will not have this.parentProduct
      .filter(availableVersion => this.parentProduct && !this.parentProduct.versions.includes(availableVersion))

    if (versionsParentProductIsNotAvailableIn.length) {
      throw new Error(`\`versions\` frontmatter in ${this.fullPath} contains ${versionsParentProductIsNotAvailableIn}, which ${this.parentProduct.id} product is not available in!`)
    }

    // derive array of Permalink objects
    this.permalinks = Permalink.derive(this.languageCode, this.relativePath, this.title, this.versions)

    if (this.relativePath.endsWith('index.md')) {
      // get an array of linked items in product and category TOCs
      this.tocItems = getTocItems(this)
    }

    // if this is an article and it doesn't have showMiniToc = false, set mini TOC to true
    if (!this.relativePath.endsWith('index.md') && !this.mapTopic) {
      this.showMiniToc = this.showMiniToc === false
        ? this.showMiniToc
        : true
    }

    // Instrument the `_render` method, so externally we call #render
    // but it's wrapped in a timer that reports to Datadog
    this.render = statsd.asyncTimer(this._render.bind(this), 'page.render')

    return this
  }

  buildRedirects () {
    // create backwards-compatible old paths for page permalinks and frontmatter redirects
    this.redirects = generateRedirectsForPermalinks(this.permalinks, this.redirect_from)
    return this.redirects
  }

  // Infer the parent product ID from the page's relative file path
  get parentProductId () {
    // Each page's top-level content directory matches its product ID
    const id = this.relativePath.split('/')[0]

    // ignore top-level content/index.md
    if (id === 'index.md') return null

    // make sure the ID is valid
    if (process.env.NODE_ENV !== 'test') {
      assert(
        Object.keys(products).includes(id),
        `page ${this.fullPath} has an invalid product ID: ${id}`
      )
    }

    return id
  }

  get parentProduct () {
    return products[this.parentProductId]
  }

  async renderTitle (context, opts = {}) {
    return this.shortTitle
      ? this.renderProp('shortTitle', context, opts)
      : this.renderProp('title', context, opts)
  }

  async _render (context) {
    // use English IDs/anchors for translated headings, so links don't break (see #8572)
    if (this.languageCode !== 'en') {
      const englishHeadings = getEnglishHeadings(this, context)
      context.englishHeadings = englishHeadings
    }

    this.intro = await renderContent(this.rawIntro, context)
    this.introPlainText = await renderContent(this.rawIntro, context, { textOnly: true })
    this.title = await renderContent(this.rawTitle, context, { textOnly: true, encodeEntities: true })
    this.shortTitle = await renderContent(this.shortTitle, context, { textOnly: true, encodeEntities: true })

    let markdown = this.mapTopic
      // get the map topic child articles from the siteTree
      ? getMapTopicContent(this.parentProduct.id, context.siteTree, context.currentLanguage, context.currentVersion, context.currentPath)
      : this.markdown

    // If the article is interactive parse the React!
    if (this.interactive) {
      // Search for the react code comments to find the react components
      const reactComponents = markdown.match(/<!--react-->(.*?)<!--end-react-->/gs)

      // Render each of the react components in the markdown
      await Promise.all(reactComponents.map(async (reactComponent) => {
        let componentStr = reactComponent

        // Remove the React comment indicators
        componentStr = componentStr.replace('<!--react-->\n', '').replace('<!--react-->', '')
        componentStr = componentStr.replace('\n<!--end-react-->', '').replace('<!--end-react-->', '')

        // Get the rendered component
        const renderedComponent = await renderReact(componentStr)

        // Replace the react component with the rendered markdown
        markdown = markdown.replace(reactComponent, renderedComponent)
      }))
    }

    context.relativePath = this.relativePath
    const html = await renderContent(markdown, context)

    // product frontmatter may contain liquid
    if (this.product) {
      this.product = await renderContent(this.rawProduct, context)
    }

    // permissions frontmatter may contain liquid
    if (this.permissions) {
      this.permissions = await renderContent(this.rawPermissions, context)
    }

    if (this.learningTracks) {
      const learningTracks = []
      for await (const trackName of this.rawLearningTracks) {
        const track = context.site.data['learning-tracks'][context.currentProduct][trackName]
        if (!track) continue
        learningTracks.push({
          trackName,
          title: await renderContent(track.title, context, { textOnly: true, encodeEntities: true }),
          description: await renderContent(track.description, context, { textOnly: true, encodeEntities: true }),
          guides: await getLinkData(track.guides, context)
        })
      }
      this.learningTracks = learningTracks
    }

    if (this.rawIncludeGuides) {
      this.allTopics = []
      this.includeGuides = await getLinkData(this.rawIncludeGuides, context)
      this.includeGuides.map((guide) => {
        const { page } = guide
        guide.type = page.type
        if (page.topics) {
          this.allTopics = union(this.allTopics, page.topics)
          guide.topics = page.topics
        }
        delete guide.page
        return guide
      })
    }

    // set a flag so layout knows whether to render a mac/windows/linux switcher element
    this.includesPlatformSpecificContent = (
      html.includes('extended-markdown mac') ||
      html.includes('extended-markdown windows') ||
      html.includes('extended-markdown linux')
    )

    return html
  }

  // Allow other modules (like custom liquid tags) to make one-off requests
  // for a page's rendered properties like `title` and `intro`
  async renderProp (propName, context, opts = { unwrap: false }) {
    let prop
    if (propName === 'title') {
      prop = this.rawTitle
    } else if (propName === 'shortTitle') {
      prop = this.rawShortTitle || this.rawTitle // fall back to title
    } else if (propName === 'intro') {
      prop = this.rawIntro
    } else {
      prop = this[propName]
    }

    const html = await renderContent(prop, context, opts)

    if (!opts.unwrap) return html

    // The unwrap option removes surrounding tags from a string, preserving any inner HTML
    const $ = cheerio.load(html, { xmlMode: true })
    return $.root().contents().html()
  }

  // infer current page's corresponding homepage
  // /en/articles/foo                          -> /en
  // /en/enterprise/2.14/user/articles/foo     -> /en/enterprise/2.14/user
  static getHomepage (requestPath) {
    return requestPath.replace(/\/articles.*/, '')
  }

  // given a page path, return an array of objects containing hrefs
  // for that page in all languages
  static getLanguageVariants (href) {
    const suffix = pathUtils.getPathWithoutLanguage(href)
    return Object.values(languages).map(({ name, code, hreflang }) => { // eslint-disable-line
      return {
        name,
        code,
        hreflang,
        href: `/${code}${suffix}`.replace(patterns.trailingSlash, '$1')
      }
    })
  }
}

module.exports = Page
