import express from 'express'
import middleware from '../middleware/index.js'

function createApp() {
  const app = express()
  middleware(app)
  return app
}

export default createApp
