import GithubSlugger from 'github-slugger'
import renderContent from './renderContent.js'
import { ExtendedMarkdown, tags } from '../liquid-tags/extended-markdown.js'
import xLink from '../liquid-tags/link.js'
import xLinkWithIntro from '../liquid-tags/link-with-intro.js'
import xHomepageLinkWithIntro from '../liquid-tags/homepage-link-with-intro.js'
import xLinkInList from '../liquid-tags/link-in-list.js'
import xTopicLinkInList from '../liquid-tags/topic-link-in-list.js'
import xIndentedDataReference from '../liquid-tags/indented-data-reference.js'
import xData from '../liquid-tags/data.js'
import xOcticon from '../liquid-tags/octicon.js'
import xLinkAsArticleCard from '../liquid-tags/link-as-article-card.js'
import xIfversion from '../liquid-tags/ifversion.js'

// Include custom tags like {% link_with_intro /article/foo %}
renderContent.liquid.registerTag('link', xLink('link'))
renderContent.liquid.registerTag('link_with_intro', xLinkWithIntro)
renderContent.liquid.registerTag('homepage_link_with_intro', xHomepageLinkWithIntro)
renderContent.liquid.registerTag('link_in_list', xLinkInList)
renderContent.liquid.registerTag('topic_link_in_list', xTopicLinkInList)
renderContent.liquid.registerTag('indented_data_reference', xIndentedDataReference)
renderContent.liquid.registerTag('data', xData)
renderContent.liquid.registerTag('octicon', xOcticon)
renderContent.liquid.registerTag('link_as_article_card', xLinkAsArticleCard)
renderContent.liquid.registerTag('ifversion', xIfversion)

for (const tag in tags) {
  // Register all the extended markdown tags, like {% note %} and {% warning %}
  renderContent.liquid.registerTag(tag, ExtendedMarkdown)
}

/**
 * Like the `size` filter, but specifically for
 * getting the number of keys in an object
 */
renderContent.liquid.registerFilter('obj_size', (input) => {
  if (!input) return 0
  return Object.keys(input).length
})

/**
 * Returns the version number of a GHES version string
 * ex: enterprise-server@2.22 => 2.22
 */
renderContent.liquid.registerFilter('version_num', (input) => {
  return input.split('@')[1]
})

/**
 * Convert the input to a slug
 */
renderContent.liquid.registerFilter('slugify', (input) => {
  const slugger = new GithubSlugger()
  return slugger.slug(input)
})

export default renderContent

export const liquid = renderContent.liquid
