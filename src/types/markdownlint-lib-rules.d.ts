declare module '*/markdownlint/lib/rules' {
  import type { RuleParams, RuleOnError } from 'markdownlint'

  interface MarkdownlintRule {
    names: string[]
    description: string
    tags: string[]
    function: (params: RuleParams, onError: RuleOnError) => void
  }

  const rules: MarkdownlintRule[]
  export default rules
}
