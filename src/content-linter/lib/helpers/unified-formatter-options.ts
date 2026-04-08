interface MarkdownFormatterOptions {
  bullet: string
  emphasis: string
  closeAtx: boolean
  fence: string
  fences: boolean
  incrementListMarker: boolean
  strong: string
}

export const MARKDOWN_OPTIONS: MarkdownFormatterOptions = {
  bullet: '*',
  emphasis: '_',
  closeAtx: false,
  fence: '`',
  fences: true,
  incrementListMarker: false,
  strong: '*',
}
