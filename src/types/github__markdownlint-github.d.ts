declare module '@github/markdownlint-github' {
  interface MarkdownlintRule {
    names: string[]
    description: string
    tags: string[]
    // Using any because @github/markdownlint-github doesn't provide TypeScript definitions
    // params contains markdownlint parsing context with varying structures per rule
    // onError is a callback function with dynamic signature
    function: (params: any, onError: any) => void
  }

  const markdownlintGitHub: MarkdownlintRule[]

  export default markdownlintGitHub
}
