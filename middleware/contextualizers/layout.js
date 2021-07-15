import layouts from '../../lib/layouts.js'

export default function layoutContext(req, res, next) {
  if (!req.context.page) return next()

  const layoutOptsByType = {
    // Layouts can be specified with a `layout` frontmatter value.
    // Any invalid layout values will be caught by frontmatter schema validation.
    string: req.context.page.layout,
    // A `layout: false` value means use no layout.
    boolean: '',
    // For all other files (like articles and the homepage), use the `default` layout.
    undefined: 'default',
  }

  const layoutName = layoutOptsByType[typeof req.context.page.layout]

  // Attach to the context object
  req.context.currentLayoutName = layoutName
  req.context.currentLayout = layouts[layoutName]

  return next()
}
