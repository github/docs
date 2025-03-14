import { Liquid } from 'liquidjs'
import GithubSlugger from 'github-slugger'
import IndentedDataReference from './indented-data-reference.js'
import Data from './data.js'
import Octicon from './octicon.js'
import Ifversion from './ifversion.js'
import { Tool, tags as toolTags } from './tool.js'
import { Spotlight, tags as spotlightTags } from './spotlight.js'

export const engine = new Liquid({
  extname: '.html',
  dynamicPartials: false,
})

engine.registerTag('indented_data_reference', IndentedDataReference)
engine.registerTag('data', Data)
engine.registerTag('octicon', Octicon)
engine.registerTag('ifversion', Ifversion)

for (const tag of toolTags) {
  engine.registerTag(tag, Tool)
}

for (const tag in spotlightTags) {
  engine.registerTag(tag, Spotlight)
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
