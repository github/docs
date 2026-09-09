import { Liquid } from 'liquidjs'
import GithubSlugger from 'github-slugger'
import Data from './data'
import Octicon from './octicon'
import Ifversion from './ifversion'
import { Tool, tags as toolTags } from './tool'
import { Prompt } from './prompt'
import { CodeTab, CodeTabs, tags as codeTabTags } from './codetabs'
import IndentedDataReference from './indented-data-reference'

type LiquidTagDef = Parameters<Liquid['registerTag']>[1]

const dataTag = Data as unknown as LiquidTagDef
const ifversionTag = Ifversion as unknown as LiquidTagDef
const toolTag = Tool as unknown as LiquidTagDef
const promptTag = Prompt as unknown as LiquidTagDef
const codeTabsTag = CodeTabs as unknown as LiquidTagDef
const codeTabTag = CodeTab as unknown as LiquidTagDef
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

for (const tag of codeTabTags) {
  engine.registerTag(tag, tag === 'codetabs' ? codeTabsTag : codeTabTag)
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
 * Render a string that itself contains Liquid.
 *
 * Values interpolated with `{{ }}` are not given a second Liquid pass, so
 * `{% data %}` or `{% ifversion %}` stored in a data file would otherwise be
 * printed literally. This filter lets data files keep using Liquid instead of
 * hardcoding product names or version logic.
 *
 * Usage: {{ row.action | render_liquid }}
 */
interface FilterScope {
  context: {
    environments: Record<string, unknown>
  }
}

engine.registerFilter('render_liquid', function (this: FilterScope, input: unknown): unknown {
  if (typeof input !== 'string') return input
  if (!input.includes('{%') && !input.includes('{{')) return input
  return engine.parseAndRender(input, this.context.environments)
})

/**
 * Convert the input to a slug
 */
engine.registerFilter('slugify', (input: string): string => {
  const slugger = new GithubSlugger()
  return slugger.slug(input)
})
