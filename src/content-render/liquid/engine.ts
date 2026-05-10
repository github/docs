import { Liquid } from 'liquidjs'
import GithubSlugger from 'github-slugger'
import Data from './data'
import Octicon from './octicon'
import Ifversion from './ifversion'
import { Tool, tags as toolTags } from './tool'
import { Spotlight, tags as spotlightTags } from './spotlight'
import { Prompt } from './prompt'
import IndentedDataReference from './indented-data-reference'

type LiquidTagDef = Parameters<Liquid['registerTag']>[1]

const dataTag = Data as unknown as LiquidTagDef
const ifversionTag = Ifversion as unknown as LiquidTagDef
const toolTag = Tool as unknown as LiquidTagDef
const spotlightTag = Spotlight as unknown as LiquidTagDef
const promptTag = Prompt as unknown as LiquidTagDef
const indentedDataReferenceTag = IndentedDataReference as unknown as LiquidTagDef

export const engine = new Liquid({
  extname: '.html',
  dynamicPartials: false,
})

engine.registerTag('indented_data_reference', indentedDataReferenceTag)
engine.registerTag('data', dataTag)
engine.registerTag('octicon', Octicon)
engine.registerTag('ifversion', ifversionTag)

for (const tag of toolTags) {
  engine.registerTag(tag, toolTag)
}

for (const tag in spotlightTags) {
  engine.registerTag(tag, spotlightTag)
}

engine.registerTag('prompt', promptTag)

/**
 * Like the `size` filter, but specifically for
 * getting the number of keys in an object
 */
engine.registerFilter('obj_size', (input: Record<string, unknown> | null | undefined): number => {
  if (!input) return 0
  return Object.keys(input).length
})

/**
 * Returns the version number of a GHES version string
 * ex: enterprise-server@2.22 => 2.22
 */
engine.registerFilter('version_num', (input: string): string => {
  return input.split('@')[1]
})

/**
 * Convert the input to a slug
 */
engine.registerFilter('slugify', (input: string): string => {
  const slugger = new GithubSlugger()
  return slugger.slug(input)
})
