// Interfaces for content linter rule parameters and callbacks
export interface MarkdownToken {
  type: string
  tag?: string
  attrs?: [string, string][]
  content?: string
  info?: string
  lineNumber: number
  line: string
  children?: MarkdownToken[]
}

export interface RuleParams {
  name: string // file path
  lines: string[] // array of lines from the file
  frontMatterLines: string[] // array of frontmatter lines
  tokens?: MarkdownToken[] // markdown tokens (when using markdownit parser)
  config?: {
    [key: string]: any // rule-specific configuration
  }
}

export interface RuleErrorCallback {
  (
    lineNumber: number,
    detail?: string,
    context?: string,
    range?: [number, number],
    fixInfo?: any,
  ): void
}

export type Rule = {
  names: string[]
  description: string
  tags: string[]
  information?: URL
  parser?: 'markdownit' | 'micromark' | 'none'
  asynchronous?: boolean
  severity?: string
  function: (params: RuleParams, onError: RuleErrorCallback) => void | Promise<void>
}

type RuleDetail = Rule & {
  name: string
  'partial-markdown-files': boolean
  message: string
  severity: string
  searchPattern: string
  searchScope: string
  precommitSeverity?: string
}

export type Config = {
  severity: string
  'partial-markdown-files': boolean
  allowed_languages?: string[]
  style?: string
  rules?: RuleDetail[]
  context?: string
}

export type RuleConfig = {
  [name: string]: Config
}
