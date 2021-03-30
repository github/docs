const path = require('path')
const assert = require('assert')
const readFileAsync = require('../readfile-async')
const findPage = require('../find-page')
const { getPathWithoutLanguage, getPathWithoutVersion } = require('../path-utils')
const getApplicableVersions = require('../get-applicable-versions')
const removeFPTFromPath = require('../remove-fpt-from-path')
const liquidVariableSyntax = /^{{\s*(.*)\s*}}/

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

module.exports = (name) => ({
  parse (tagToken) {
    this.param = tagToken.args.trim()
  },

  async getTemplate () {
    const pathToTemplate = path.join(__dirname, '../../includes/liquid-tags', `${name}.html`)
    const template = await readFileAsync(pathToTemplate, 'utf8')
    return template.replace(/\r/g, '')
  },

  async renderPageProps (page, ctx, props) {
    const renderedProps = {}

    for (const propName in props) {
      const { opt } = props[propName] || {}
      renderedProps[propName] = await page.renderProp(propName, ctx, opt)
    }

    return renderedProps
  },

  async render (scope) {
    const template = await this.getTemplate()

    const ctx = scope.environments

    assert(ctx.page, 'context.page is required')
    assert(ctx.page.relativePath, 'context.page.relativePath is required')
    assert(ctx.pages, 'context.pages is required')
    assert(ctx.currentLanguage, 'context.currentLanguage is required')

    // process any liquid in hrefs (e.g., /enterprise/{{ page.version }})
    let href = await this.liquid.parseAndRender(this.param, ctx)
    if (href === '') {
      const match = liquidVariableSyntax.exec(this.param)
      if (match) {
        href = await this.liquid.evalValue(match[1], scope)
      }
    }

    let fullPath = href
    const dirName = path.dirname(ctx.page.relativePath)

    // if href contains one slash, assume it's a relative path and infer the full path
    // example: /site-policy (linked to from /github/index.md)
    // becomes: /github/site-policy
    // otherwise, assume it's already a full path and needs nothing further
    const hrefMatch = href.match(/\//g)
    if (hrefMatch && hrefMatch.length < 2) {
      fullPath = path.join(dirName, href)
    }

    // add language code and version
    fullPath = removeFPTFromPath(path.posix.join('/', ctx.currentLanguage, ctx.currentVersion, getPathWithoutLanguage(getPathWithoutVersion(fullPath))))

    // find the page based on the full path
    const page = findPage(fullPath, ctx.pages, ctx.redirects)

    // return an empty string if it's a hidden link on a non-hidden page (hidden links on hidden pages are OK)
    if (!page || (page.hidden && !ctx.page.hidden)) {
      return ''
    }
    // also return early if the found page should not render in current version
    if (!getApplicableVersions(page.versions).includes(ctx.currentVersion)) {
      return ''
    }

    // find and render the props
    const renderedProps = await this.renderPageProps(page, ctx, {
      title: { opt: { textOnly: true, encodeEntities: true } },
      intro: { opt: { unwrap: true } }
    })

    const parsed = await this.liquid.parseAndRender(template, { fullPath, ...renderedProps })

    return parsed.trim()
  }
})
