import { Response } from 'express'
import statsd from '@/observability/lib/statsd'
import { fetchStream } from '@/frame/lib/fetch-utils'
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
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Invalid version'
    errors.push({ message })
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

  let reader: ReadableStreamDefaultReader<Uint8Array> | null = null

  try {
    const response = await fetchStream(
      `${process.env.CSE_COPILOT_ENDPOINT}/answers`,
      {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          Authorization: getHmacWithEpoch(),
          'Content-Type': 'application/json',
        },
      },
      {
        throwHttpErrors: false,
      },
    )

    if (!response.ok) {
      const errorMessage = `Upstream server responded with status code ${response.status}`
      console.error(errorMessage)
      statsd.increment('ai-search.stream_response_error', 1, diagnosticTags)
      res.status(response.status).json({
        errors: [{ message: errorMessage }],
        upstreamStatus: response.status,
      })
      return
    }

    // Set response headers
    res.setHeader('Content-Type', 'application/x-ndjson')
    res.flushHeaders()

    // Stream the response body
    if (!response.body) {
      res.status(500).json({ errors: [{ message: 'No response body' }] })
      return
    }

    reader = response.body.getReader()
    const decoder = new TextDecoder()

    try {
      while (true) {
        const { done, value } = await reader.read()

        if (done) {
          break
        }

        // Decode chunk and count characters
        const chunk = decoder.decode(value, { stream: true })
        totalChars += chunk.length

        // Write chunk to response
        res.write(chunk)
      }

      // Calculate metrics on stream end
      const totalResponseTime = Date.now() - startTime // in ms
      const charPerMsRatio = totalResponseTime > 0 ? totalChars / totalResponseTime : 0 // chars per ms

      statsd.gauge('ai-search.total_response_time', totalResponseTime, diagnosticTags)
      statsd.gauge('ai-search.response_chars_per_ms', charPerMsRatio, diagnosticTags)

      statsd.increment('ai-search.success_stream_end', 1, diagnosticTags)
      res.end()
    } catch (streamError) {
      console.error('Error streaming from cse-copilot:', streamError)
      statsd.increment('ai-search.stream_error', 1, diagnosticTags)

      if (!res.headersSent) {
        res.status(500).json({ errors: [{ message: 'Internal server error' }] })
      } else {
        // Send error message via the stream
        const errorMessage = `${JSON.stringify({ errors: [{ message: 'Internal server error' }] })}\n`
        res.write(errorMessage)
        res.end()
      }
    } finally {
      if (reader) {
        reader.releaseLock()
        reader = null
      }
    }
  } catch (error) {
    statsd.increment('ai-search.route_error', 1, diagnosticTags)
    console.error('Error posting /answers to cse-copilot:', error)
    res.status(500).json({ errors: [{ message: 'Internal server error' }] })
  } finally {
    // Ensure reader lock is always released
    if (reader) {
      reader.releaseLock()
    }
  }
}
