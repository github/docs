import GithubSlugger from 'github-slugger'
import renderContent from './renderContent.js'
import { ExtendedMarkdown, tags } from '../liquid-tags/extended-markdown.js'
import IndentedDataReference from '../liquid-tags/indented-data-reference.js'
import Data from '../liquid-tags/data.js'
import Octicon from '../liquid-tags/octicon.js'
import Ifversion from '../liquid-tags/ifversion.js'

renderContent.liquid.registerTag('indented_data_reference', IndentedDataReference)
renderContent.liquid.registerTag('data', Data)
renderContent.liquid.registerTag('octicon', Octicon)
renderContent.liquid.registerTag('ifversion', Ifversion)

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
