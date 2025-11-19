declare module '*/markdownlint/lib/rules' {
  interface MarkdownlintRule {
    names: string[]
    description: string
    tags: string[]
    // Using any because markdownlint doesn't provide TypeScript definitions
    // params contains parsing context with varying structures per rule
    // onError is a callback function with dynamic signature
    function: (params: any, onError: any) => void
  }

  const rules: MarkdownlintRule[]
  export default rules
}
