#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const productsFile = path.join(process.cwd(), 'data/products.yml')

const contents = `# this sequence sets the product order in the sidebar
# the product IDs match keys in lib/all-products.js
# note this file should not be translated
productsInOrder:
  - github
  - admin
  - actions
  - packages
  - developers
  - rest
  - graphql
  - insights
  - desktop`

fs.writeFileSync(productsFile, contents)
