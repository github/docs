const layouts = require('../../lib/layouts')

module.exports = function layoutContext (req, res, next) {
  if (!req.context.page) return next()

  let layoutName

  if (req.context.page.layout) {
    // Layouts can be specified with a `layout` frontmatter value.
    // Any invalid layout values will be caught by frontmatter schema validation.
    layoutName = req.context.page.layout
    // A `layout: false` value means use no layout.
  } else if (req.context.page.layout === false) {
    layoutName = ''
    // If undefined, use either the default layout or the generic-toc layout.
  } else if (req.context.page.layout === undefined) {
    layoutName = 'default'
  }

  // Attach to the context object
  req.context.currentLayoutName = layoutName
  req.context.currentLayout = layouts[layoutName]

  return next()
}
