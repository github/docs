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

module.exports = { product, category, maptopic, article }
