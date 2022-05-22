const express = require('express')

const app = express()
require('../middleware')(app)
module.exports = app
