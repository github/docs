const Link = require('./link')

// For details, see class method in lib/liquid-tags/link.js
module.exports = class LinkWithShortTitle extends Link {
  async render (context) {
    return super.parseTemplate(context, { shortTitle: true })
  }
}
