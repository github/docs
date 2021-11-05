export default {
  properties: {
    name: {
      required: true,
      description: 'the English name',
      type: 'string',
    },

    nativeName: {
      description: 'the native name',
      type: 'string',
    },

    code: {
      required: true,
      description: 'the code used in the URL',
      type: 'string',
      minLength: 2,
      maxLength: 2,
    },

    dir: {
      required: true,
      description: 'the local relative path to files in this language',
      type: 'string',
    },

    // https://support.google.com/webmasters/answer/189077
    // https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
    // http://unicode.org/iso15924/iso15924-codes.html
    hreflang: {
      required: true,
      description: 'the ISO 639-1, ISO 3166-1 Alpha 2, or ISO 15924 language code',
      type: 'string',
      minLength: 2,
    },

    redirectPatterns: {
      description: 'array of regular expressions used for redirecting incorrect URLs',
      type: 'array',
    },

    wip: {
      description: 'boolean indicating whether translations are incomplete',
      type: 'boolean',
    },
  },
}
