require('dotenv').config()

const algoliasearch = require('algoliasearch')
const { ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY } = process.env

module.exports = algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY)
