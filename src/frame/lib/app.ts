import express from 'express'
import middleware from '@/frame/middleware'

function createApp() {
  const app = express()
  middleware(app)
  return app
}

export default createApp
