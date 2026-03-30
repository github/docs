import express from 'express'
import middleware from '@/frame/middleware'
import connect_datadog from 'connect-datadog'
import statsd from '@/observability/lib/statsd'

function createApp() {
  const app = express()
  app.use(
    connect_datadog({
      dogstatsd: statsd,
      method: true,
      response_code: true,
    }),
  )
  middleware(app)
  return app
}

export default createApp
