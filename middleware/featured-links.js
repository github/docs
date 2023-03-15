import getLinkData from '../lib/get-link-data.js'
import renderContent from '../lib/render-content/index.js'

// this middleware adds properties to the context object
export default async function featuredLinks(req, res, next) {
  if (!req.context.page) return next()

  if (
    !(
      req.context.page.relativePath.endsWith('index.md') ||
      req.context.page.layout === 'product-landing'
    )
  )
    return next()

  if (!req.context.page.featuredLinks) return next()

  req.context.featuredLinks = {}
  for (const key in req.context.page.featuredLinks) {
    if (key === 'videos') {
      // Videos are external URLs so don't run through getLinkData, they're
      // objects with title and href properties.
      // When the title contains Liquid versioning tags, it will be either
      // the provided string title or an empty title. When the title is empty,
      // it indicates the video is not versioned for the current version
      req.context.featuredLinks[key] = []
      for (let i = 0; i < req.context.page.featuredLinks[key].length; i++) {
        const title = await renderContent(
          req.context.page.featuredLinks[key][i].title,
          req.context,
          {
            textOnly: true,
          }
        )
        const item = { title, href: req.context.page.featuredLinks[key][i].href }

        if (item.title) {
          req.context.featuredLinks[key].push(item)
        }
      }
    } else {
      req.context.featuredLinks[key] = await getLinkData(
        req.context.page.featuredLinks[key],
        req.context,
        { title: true, intro: true, fullTitle: true }
      )
    }
  }

  return next()
}
