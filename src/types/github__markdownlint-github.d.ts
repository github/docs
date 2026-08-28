declare module '@github/markdownlint-github' {
  import type { RuleParams, RuleOnError } from 'markdownlint'

  interface MarkdownlintRule {
    names: string[]
    description: string
    tags: string[]
    function: (params: RuleParams, onError: RuleOnError) => void
  }

  const markdownlintGitHub: MarkdownlintRule[]

  export default markdownlintGitHub
}
