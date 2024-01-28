import { renderContent } from '#src/content-render/index.js'

// This middleware sets `.nameRendered` on each product in
// the `req.context.productMap` because the names
// used inside it might have Liquid variables in them.
// That Liquid can't be rendered until all the contextualizing has been
// done. And it has, by the time this middleware runs.
export default async function renderProductMap(req, res, next) {
  for (const product of Object.values(req.context.productMap)) {
    const { name } = product
    product.nameRendered = await renderContent(name, req.context, { textOnly: true })
  }
  return next()
}
