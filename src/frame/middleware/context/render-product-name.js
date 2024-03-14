import { renderContent } from '#src/content-render/index.js'

export default async function renderProductName(req, res, next) {
  const { productMap, currentProduct } = req.context
  const productObject = productMap[currentProduct]
  if (!productObject) {
    // If the "currentProduct" isn't recognized, there's no point trying
    // to render its name. Skip this middleware.
    return next()
  }
  req.context.currentProductName = await renderContent(productObject.name, req.context, {
    textOnly: true,
    cache: true,
  })
  return next()
}
