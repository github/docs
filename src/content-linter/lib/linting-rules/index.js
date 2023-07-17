import { codeFenceLineLength } from './code-fence-line-length.js'
import { imageAltTextEndPunctuation } from './image-alt-text-end-punctuation.js'
import { imageFileKebab } from './image-file-kebab.js'
import { incorrectAltTextLength } from './image-alt-text-length.js'
import { internalLinksLang } from './internal-links-lang.js'
import { internalLinksSlash } from './internal-links-slash.js'

export const gitHubDocsMarkdownlint = {
  rules: [
    codeFenceLineLength,
    imageAltTextEndPunctuation,
    imageFileKebab,
    incorrectAltTextLength,
    internalLinksLang,
    internalLinksSlash,
  ],
}
