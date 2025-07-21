/**
 * Type declarations for modules without TypeScript definitions
 */

declare module 'remark-gemoji-to-emoji' {
  import type { Plugin } from 'unified'
  const plugin: Plugin
  export default plugin
}

declare module 'remark-remove-comments' {
  import type { Plugin } from 'unified'
  const plugin: Plugin
  export default plugin
}

declare module 'rehype-highlight' {
  import type { Plugin } from 'unified'
  import type { Options } from 'lowlight'

  interface HighlightOptions extends Options {
    languages?: Record<string, any>
    subset?: boolean
    aliases?: Record<string, string>
  }

  const plugin: Plugin<[HighlightOptions?]>
  export default plugin
}
