export interface CodeBlockRef {
  id: string
  highlight?: Array<[number, number]> | number | [number, number]
}
export interface ContentBlock {
  title?: string
  type: 'default' | 'sub-section' | 'sub-section-2'
  content: string
  codeBlock: CodeBlockRef
}
export interface CodeBlock {
  fileName: string
  language: string
  code: string
}
export interface PlaygroundArticleT {
  title: string
  shortTitle: string
  topics: Array<string>
  intro: string
  slug: string
  originalArticle: string
  type: 'tutorial'
  prerequisites?: string
  codeLanguageId: string
  contentBlocks: Array<ContentBlock>
  codeBlocks: Record<string, CodeBlock | Array<CodeBlock>>
}

export interface CodeLanguage {
  id: string
  label: string
}
