const product = {
  properties: {
    href: {
      type: 'string',
      required: true
    },
    title: {
      type: 'string',
      required: true
    },
    categories: {
      type: 'object'
    }
  }
}

const category = {
  properties: {
    href: {
      type: 'string',
      required: true
    },
    title: {
      type: 'string',
      required: true
    },
    maptopics: {
      type: 'object'
    }
  }
}

const maptopic = {
  properties: {
    href: {
      type: 'string',
      required: true
    },
    title: {
      type: 'string',
      required: true
    },
    articles: {
      type: 'object'
    }
  }
}

const article = {
  properties: {
    href: {
      type: 'string',
      required: true
    },
    title: {
      type: 'string',
      required: true
    },
    linkTag: {
      type: 'string',
      required: true
    }
  }
}

const childPage = {
  type: 'object',
  properties: {
    href: {
      type: 'string',
      required: true
    },
    page: {
      type: 'object',
      required: true,
      properties: {
        title: {
          type: 'string',
          required: true
        },
        relativePath: {
          type: 'string',
          required: true
        },
        permalinks: {
          type: 'array',
          required: true,
          minItems: 1
        }
      }
    }
  }
}

// TODO after enabling FEATURE_NEW_SITETREE, we can delete everything except childPage
module.exports = { product, category, maptopic, article, childPage }
