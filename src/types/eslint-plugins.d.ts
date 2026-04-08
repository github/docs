// Type declarations for ESLint plugins without official TypeScript definitions

declare module 'eslint-plugin-github' {
  import type { ESLint, Linter } from 'eslint'

  const plugin: ESLint.Plugin & {
    configs: {
      recommended: Linter.FlatConfig
    }
  }

  export default plugin
}

declare module 'eslint-plugin-primer-react' {
  import type { ESLint, Linter } from 'eslint'

  const plugin: ESLint.Plugin & {
    configs: {
      recommended: Linter.FlatConfig
    }
  }

  export default plugin
}

declare module 'eslint-plugin-eslint-comments' {
  import type { ESLint } from 'eslint'

  const plugin: ESLint.Plugin

  export default plugin
}

declare module 'eslint-plugin-i18n-text' {
  import type { ESLint } from 'eslint'

  const plugin: ESLint.Plugin

  export default plugin
}

declare module 'eslint-plugin-filenames' {
  import type { ESLint } from 'eslint'

  const plugin: ESLint.Plugin

  export default plugin
}

declare module 'eslint-plugin-no-only-tests' {
  import type { ESLint } from 'eslint'

  const plugin: ESLint.Plugin

  export default plugin
}

declare module 'eslint-plugin-custom-rules' {
  import type { ESLint } from 'eslint'

  const plugin: ESLint.Plugin

  export default plugin
}
