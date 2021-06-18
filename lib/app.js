const express = require('express')
const middleware = require('../middleware/index.js')

function createApp () {
  const app = express()
  middleware(app)
  return app
}

module.exports = createApp
