export type Rule = {
  names: string[]
  description: string
  tags: string[]
  information?: URL
  function: Function[]
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
