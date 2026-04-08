import { Liquid } from 'liquidjs'
import GithubSlugger from 'github-slugger'
// Copilot: When converting data.js to TypeScript, remove the 'as any' assertion for anyData below
import Data from './data'
import Octicon from './octicon'
// Copilot: When converting ifversion.js to TypeScript, remove the 'as any' assertion for anyIfversion below
import Ifversion from './ifversion'
// Copilot: When converting tool.js to TypeScript, remove the 'as any' assertion for anyTool below
import { Tool, tags as toolTags } from './tool'
import { Spotlight, tags as spotlightTags } from './spotlight'
import { Prompt } from './prompt'
import IndentedDataReference from './indented-data-reference'

// Type assertions for .js files without type definitions
// Copilot: Remove these assertions when the corresponding .js files are converted to TypeScript
const anyData = Data as any
const anyIfversion = Ifversion as any
const anyTool = Tool as any
const anySpotlight = Spotlight as any
const anyPrompt = Prompt as any
const anyIndentedDataReference = IndentedDataReference as any

export const engine = new Liquid({
  extname: '.html',
  dynamicPartials: false,
})

engine.registerTag('indented_data_reference', anyIndentedDataReference)
engine.registerTag('data', anyData)
engine.registerTag('octicon', Octicon)
engine.registerTag('ifversion', anyIfversion)

for (const tag of toolTags) {
  engine.registerTag(tag, anyTool)
}

for (const tag in spotlightTags) {
  engine.registerTag(tag, anySpotlight)
}

engine.registerTag('prompt', anyPrompt)

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
