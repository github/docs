// see also languages-schema.js

const languages = {
  en: {
    name: 'English',
    code: 'en',
    hreflang: 'en',
    dir: '',
    wip: false
  },
  ru: {
    name: 'Russian',
    nativeName: 'Русский',
    code: 'ru',
    hreflang: 'ru',
    dir: 'translations/ru-RU',
    wip: false
  },
  de: {
    name: 'German',
    nativeName: 'Deutsch',
    code: 'de',
    hreflang: 'de',
    dir: 'translations/de-DE',
    wip: true
  }
}

if (process.env.ENABLED_LANGUAGES) {
  Object.keys(languages).forEach(code => {
    if (!process.env.ENABLED_LANGUAGES.includes(code)) delete languages[code]
  })
  console.log(`ENABLED_LANGUAGES: ${process.env.ENABLED_LANGUAGES}`)
}

module.exports = languages
