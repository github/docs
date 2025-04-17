import { Request, Response } from 'express'
import statsd from '@/observability/lib/statsd'
import got from 'got'
import { getHmacWithEpoch } from '@/search/lib/helpers/get-cse-copilot-auth'
import { getCSECopilotSource } from '@/search/lib/helpers/cse-copilot-docs-versions'

const memoryCache = new Map<string, Buffer>()

export const aiSearchProxy = async (req: Request, res: Response) => {
  const { query, version, language } = req.body

  const errors = []

  // Validate request body
  if (!query) {
    errors.push({ message: `Missing required key 'query' in request body` })
  } else if (typeof query !== 'string') {
    errors.push({ message: `Invalid 'query' in request body. Must be a string` })
  }
  if (!version) {
    errors.push({ message: `Missing required key 'version' in request body` })
  }
  if (!language) {
    errors.push({ message: `Missing required key 'language' in request body` })
  }

  let docsSource = ''
  try {
    docsSource = getCSECopilotSource(version, language)
  } catch (error: any) {
    errors.push({ message: error?.message || 'Invalid version or language' })
  }

  if (errors.length) {
    res.status(400).json({ errors })
    return
  }

  const diagnosticTags = [
    `version:${version}`.slice(0, 200),
    `language:${language}`.slice(0, 200),
    `queryLength:${query.length}`.slice(0, 200),
  ]
  statsd.increment('ai-search.call', 1, diagnosticTags)

  // TODO: Caching here may cause an issue if the cache grows too large. Additionally, the cache will be inconsistent across pods
  const cacheKey = `${query}:${version}:${language}`
  if (memoryCache.has(cacheKey)) {
    statsd.increment('ai-search.cache_hit', 1, diagnosticTags)
    res.setHeader('Content-Type', 'application/x-ndjson')
    res.send(memoryCache.get(cacheKey))
    return
  }

  const startTime = Date.now()
  let totalChars = 0

  const body = {
    chat_context: 'docs',
    docs_source: docsSource,
    query,
    stream: true,
  }

  try {
    const stream = got.stream.post(`${process.env.CSE_COPILOT_ENDPOINT}/answers`, {
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
        res.status(500).json({ errors: [{ message: errorMessage }] })
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
        return res
          .status(400)
          .json({ errors: [{ message: 'Sorry I am unable to answer this question.' }] })
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
