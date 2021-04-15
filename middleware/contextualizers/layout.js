const layouts = require('../../lib/layouts')

module.exports = function layoutContext (req, res, next) {
  if (!req.context.page) return next()

  let layoutName

  // If this is an index.md that is not the homepage and does not have a defined layout, use `generic-toc`.
  const usesGenericToc = req.context.page.relativePath.endsWith('index.md') &&
    req.context.page.documentType !== 'homepage' &&
    !req.context.page.hidden

  if (req.context.page.layout) {
    // Layouts can be specified with a `layout` frontmatter value.
    // Any invalid layout values will be caught by frontmatter schema validation.
    layoutName = req.context.page.layout
  } else if (req.context.page.layout === false) {
    // A `layout: false` value means use no layout.
    layoutName = ''
  } else if (req.context.page.layout === undefined) {
    // For all other files (like articles and the homepage), use the `default` layout.
    if (process.env.FEATURE_NEW_SITETREE) {
      layoutName = usesGenericToc ? 'generic-toc' : 'default'
    } else {
      layoutName = 'default'
    }
  }

  // Attach to the context object
  req.context.currentLayoutName = layoutName
  req.context.currentLayout = layouts[layoutName]

  return next()
}
