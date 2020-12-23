const path = require('path')
const assert = require('assert')
const Liquid = require('liquid')
const liquid = new Liquid.Engine()
const { getPathWithLanguage } = require('../path-utils')
const LiquidTag = require('./liquid-tag')
const findPageInVersion = require('../find-page-in-version')

// This class supports a set of link tags. Each tag expects one parameter, a language-agnostic href:
//
// {% link /articles/set-up-git %}
//
// {% link_in_list /articles/set-up-git %}
//
// {% link_with_intro /articles/set-up-git %}
//
// {% homepage_link_with_intro /articles/set-up-git %}
//
// Each tag renders a link to the given article using the article's `title`
// frontmatter data. The href and title are all dynamic based on the
// current language (English, Japanese, etc..)
//
// Liquid Docs: https://github.com/liquid-lang/liquid-node#registering-new-tags

module.exports = class Link extends LiquidTag {
  constructor (template, tagName, href) {
    super(template, tagName, href.trim())
  }

  async parseTemplate (context, opts = { shortTitle: false }) {
    const template = await this.getTemplate()

    const ctx = context.environments[0]

    assert(ctx.page, 'context.page is required')
    assert(ctx.page.relativePath, 'context.page.relativePath is required')
    assert(ctx.pages, 'context.pages is required')
    assert(ctx.currentLanguage, 'context.currentLanguage is required')

    // process any liquid in hrefs (e.g., /enterprise/{{ page.version }})
    const href = await liquid.parseAndRender(this.param, ctx)

    let fullPath = href
    const dirName = path.dirname(ctx.page.relativePath)

    // if href contains one slash, assume it's a relative path and infer the full path
    // example: /site-policy (linked to from /github/index.md)
    // becomes: /github/site-policy
    // otherwise, assume it's already a full path and needs nothing further
    if (href.match(/\//g).length < 2) {
      fullPath = path.join(dirName, href)
    }

    // add language code
    fullPath = getPathWithLanguage(fullPath, ctx.currentLanguage)

    // find the page based on the full path
    const page = findPageInVersion(fullPath, ctx.pages, ctx.redirects, ctx.currentLanguage, ctx.currentVersion)

    // if found page should NOT render in current version, return early with an empty string
    // also return if it's a hidden link on a non-hidden page (hidden links on hidden pages are OK)
    if (!page || (page.hidden && !ctx.page.hidden)) {
      return ''
    }

    // find and render the props
    const title = opts.shortTitle
      ? await page.renderProp('shortTitle', ctx, { textOnly: true, encodeEntities: true })
      : await page.renderProp('title', ctx, { textOnly: true, encodeEntities: true })

    // we want markdown in intros to be parsed, so we do not pass textOnly here
    const intro = await page.renderProp('intro', ctx, { unwrap: true })

    const parsed = await liquid.parseAndRender(template, { fullPath, title, intro })

    return parsed.trim()
  }
}
