import { Liquid } from 'liquidjs'
import GithubSlugger from 'github-slugger'
import IndentedDataReference from './indented-data-reference.js'
import Data from './data.js'
import Octicon from './octicon.js'
import Ifversion from './ifversion.js'
import { ExtendedMarkdown, tags } from './extended-markdown.js'

export const engine = new Liquid({
  extname: '.html',
  dynamicPartials: false,
})

engine.registerTag('indented_data_reference', IndentedDataReference)
engine.registerTag('data', Data)
engine.registerTag('octicon', Octicon)
engine.registerTag('ifversion', Ifversion)

for (const tag in tags) {
  // Register all the extended markdown tags, like {% note %} and {% warning %}
  engine.registerTag(tag, ExtendedMarkdown)
}

/**
 * Like the `size` filter, but specifically for
 * getting the number of keys in an object
 */
engine.registerFilter('obj_size', (input) => {
  if (!input) return 0
  return Object.keys(input).length
})

/**
 * Returns the version number of a GHES version string
 * ex: enterprise-server@2.22 => 2.22
 */
engine.registerFilter('version_num', (input) => {
  return input.split('@')[1]
})

/**
 * Convert the input to a slug
 */
engine.registerFilter('slugify', (input) => {
  const slugger = new GithubSlugger()
  return slugger.slug(input)
})
