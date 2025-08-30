import { Response } from 'express'
import statsd from '@/observability/lib/statsd'
import got from 'got'
import { getHmacWithEpoch } from '@/search/lib/helpers/get-cse-copilot-auth'
import { getCSECopilotSource } from '@/search/lib/helpers/cse-copilot-docs-versions'
import type { ExtendedRequest } from '@/types'
import { handleExternalSearchAnalytics } from '@/search/lib/helpers/external-search-analytics'

export const aiSearchProxy = async (req: ExtendedRequest, res: Response) => {
  const { query, version } = req.body

  const errors = []

  // Validate request body
  if (!query) {
    errors.push({ message: `Missing required key 'query' in request body` })
  } else if (typeof query !== 'string') {
    errors.push({ message: `Invalid 'query' in request body. Must be a string` })
  }

  let docsSource = ''
  try {
    docsSource = getCSECopilotSource(version)
  } catch (error: any) {
    errors.push({ message: error?.message || 'Invalid version' })
  }

  if (errors.length) {
    res.status(400).json({ errors })
    return
  }

  // Handle search analytics and client_name validation
  const analyticsError = await handleExternalSearchAnalytics(req, 'ai-search')
  if (analyticsError) {
    res.status(analyticsError.status).json({
      errors: [{ message: analyticsError.error }],
    })
    return
  }

  const diagnosticTags = [
    `version:${version}`.slice(0, 200),
    `language:${req.language}`.slice(0, 200),
    `queryLength:${query.length}`.slice(0, 200),
  ]
  statsd.increment('ai-search.call', 1, diagnosticTags)

  const startTime = Date.now()
  let totalChars = 0

  const body = {
    chat_context: 'docs',
    docs_source: docsSource,
    query,
    stream: true,
  }

  try {
    // TODO: We temporarily add ?ai_search=1 to use a new pattern in cgs-copilot production
    const stream = got.stream.post(`${process.env.CSE_COPILOT_ENDPOINT}/answers?ai_search=1`, {
      json: body,
      headers: {
        Authorization: getHmacWithEpoch(),
        'Content-Type': 'application/json',
      },
    })

    // Listen for data events to count characters
    stream.on('data', (chunk: Buffer | string) => {
      // Ensure we have a string for proper character count
      const dataStr = typeof chunk === 'string' ? chunk : chunk.toString()
      totalChars += dataStr.length
    })

    // Handle the upstream response before piping
    stream.on('response', (upstreamResponse) => {
      if (upstreamResponse.statusCode !== 200) {
        const errorMessage = `Upstream server responded with status code ${upstreamResponse.statusCode}`
        console.error(errorMessage)
        statsd.increment('ai-search.stream_response_error', 1, diagnosticTags)
        res.status(upstreamResponse.statusCode).json({
          errors: [{ message: errorMessage }],
          upstreamStatus: upstreamResponse.statusCode,
        })
        stream.destroy()
      } else {
        // Set response headers
        res.setHeader('Content-Type', 'application/x-ndjson')
        res.flushHeaders()

        // Pipe the got stream directly to the response
        stream.pipe(res)
      }
    })

    // Handle stream errors
    stream.on('error', (error: any) => {
      console.error('Error streaming from cse-copilot:', error)

      if (error?.code === 'ERR_NON_2XX_3XX_RESPONSE') {
        const upstreamStatus = error?.response?.statusCode || 500
        return res.status(upstreamStatus).json({
          errors: [{ message: 'Upstream server error' }],
          upstreamStatus,
        })
      }

      statsd.increment('ai-search.stream_error', 1, diagnosticTags)

      if (!res.headersSent) {
        res.status(500).json({ errors: [{ message: 'Internal server error' }] })
      } else {
        // Send error message via the stream
        const errorMessage =
          JSON.stringify({ errors: [{ message: 'Internal server error' }] }) + '\n'
        res.write(errorMessage)
        res.end()
      }
    })

    // Calculate metrics on stream end
    stream.on('end', () => {
      const totalResponseTime = Date.now() - startTime // in ms
      const charPerMsRatio = totalResponseTime > 0 ? totalChars / totalResponseTime : 0 // chars per ms

      statsd.gauge('ai-search.total_response_time', totalResponseTime, diagnosticTags)
      statsd.gauge('ai-search.response_chars_per_ms', charPerMsRatio, diagnosticTags)

      statsd.increment('ai-search.success_stream_end', 1, diagnosticTags)
      res.end()
    })
  } catch (error) {
    statsd.increment('ai-search.route_error', 1, diagnosticTags)
    console.error('Error posting /answers to cse-copilot:', error)
    res.status(500).json({ errors: [{ message: 'Internal server error' }] })
  }
}
