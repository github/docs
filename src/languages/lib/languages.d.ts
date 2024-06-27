type Language = {
  name: string
  nativeName?: string
  code: string
  hreflang: string
  redirectPatterns?: RegExp[]
  dir: string
}
type Languages = {
  [code: string]: Language
}

export const allLanguageKeys: string[]

export const languageKeys: string[]

export const languagePrefixPathRegex: RegExp

export declare function pathLanguagePrefixed(path: string): boolean

const languages: Languages

export default languages
