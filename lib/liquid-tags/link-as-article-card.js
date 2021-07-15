import link from './link.js'
const linkAsArticleCard = link('link-as-article-card')

// For details, see class method in lib/liquid-tags/link.js
linkAsArticleCard.renderPageProps = async function renderPageProps(page, ctx, props) {
  const renderedProps = await link().renderPageProps(page, ctx, props)
  const { type: typeKey, topics = [] } = page
  const typeVal = typeKey ? ctx.site.data.ui.product_sublanding.guide_types[typeKey] : null
  return {
    ...renderedProps,
    type: { key: typeKey, value: typeVal },
    topics,
  }
}

export default linkAsArticleCard
