import { Request, Response } from 'express'
import got from 'got'
import { getHmacWithEpoch } from '@/search/lib/helpers/get-cse-copilot-auth'
import { getCSECopilotSource } from '#src/search/lib/helpers/cse-copilot-docs-versions.js'

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

  const body = {
    chat_context: 'defaults',
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

    // Handle the upstream response before piping
    stream.on('response', (upstreamResponse) => {
      if (upstreamResponse.statusCode !== 200) {
        const errorMessage = `Upstream server responded with status code ${upstreamResponse.statusCode}`
        console.error(errorMessage)
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

    // Ensure response ends when stream ends
    stream.on('end', () => {
      res.end()
    })
  } catch (error) {
    console.error('Error posting /answers to cse-copilot:', error)
    res.status(500).json({ errors: [{ message: 'Internal server error' }] })
  }
}
