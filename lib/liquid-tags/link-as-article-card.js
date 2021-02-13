const Link = require('./link')

// For details, see class method in lib/liquid-tags/link.js
module.exports = class LinkAsArticleCard extends Link {
  async renderPageProps (page, ctx, props) {
    const renderedProps = await super.renderPageProps(page, ctx, props)
    const { type } = page
    return { ...renderedProps, type }
  }
}
