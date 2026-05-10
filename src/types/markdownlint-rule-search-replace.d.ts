declare module 'markdownlint-rule-search-replace' {
  import type { RuleParams, RuleErrorCallback } from '@/content-linter/types'

  const searchReplace: {
    names: string[]
    description: string
    tags: string[]
    function: (params: RuleParams, onError: RuleErrorCallback) => void
  }

  export default searchReplace
}
