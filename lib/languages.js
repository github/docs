// see also languages-schema.js

const languages = {
  en: {
    name: 'English',
    code: 'en',
    hreflang: 'en',
    dir: '',
    wip: false,
  },
  cn: {
    name: 'Simplified Chinese',
    nativeName: '简体中文',
    code: 'cn',
    hreflang: 'zh-Hans',
    redirectPatterns: [/^\/zh-\w{2}/, /^\/zh/],
    dir: 'translations/zh-CN',
    wip: false,
  },
  ja: {
    name: 'Japanese',
    nativeName: '日本語',
    code: 'ja',
    hreflang: 'ja',
    redirectPatterns: [/^\/jp/],
    dir: 'translations/ja-JP',
    wip: false,
  },
  es: {
    name: 'Spanish',
    nativeName: 'Español',
    code: 'es',
    hreflang: 'es',
    dir: 'translations/es-ES',
    wip: false,
  },
  pt: {
    name: 'Portuguese',
    nativeName: 'Português do Brasil',
    code: 'pt',
    hreflang: 'pt',
    dir: 'translations/pt-BR',
    wip: false,
  },
}

if (process.env.ENABLED_LANGUAGES) {
  Object.keys(languages).forEach((code) => {
    if (!process.env.ENABLED_LANGUAGES.includes(code)) delete languages[code]
  })
  console.log(`ENABLED_LANGUAGES: ${process.env.ENABLED_LANGUAGES}`)
}

export const languageKeys = Object.keys(languages)

export const languagePrefixPathRegex = new RegExp(`^/(${languageKeys.join('|')})(/|$)`)

/** Return true if the URL is something like /en/foo or /ja but return false
 * if it's something like /foo or /foo/bar or /fr (because French (fr)
 * is currently not an active language)
 */
export function pathLanguagePrefixed(path) {
  return languagePrefixPathRegex.test(path)
}

export default languages
