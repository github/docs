import type { NextPageContext } from 'next'

import { GenericError } from '@/frame/components/GenericError'

interface ExpressRequestExtensions {
  FailBot?: {
    report: (
      err: Error,
      context: Record<string, string>,
    ) => Array<Promise<Response | void>> | undefined
  }
  method?: string
  query?: Record<string, unknown>
  language?: string
}

function Error() {
  return <GenericError />
}

// Importing @/observability/lib/failbot here would pull it into the client bundle.
// renderPage middleware attaches FailBot to SSR requests.
// Excluding it in next.config.ts complicates Next.js upgrades.
Error.getInitialProps = async (ctx: NextPageContext) => {
  // ctx.res only exists during SSR, so it gates FailBot reporting.
  const { err, req, res } = ctx
  let statusCode = 500
  if (res?.statusCode) {
    statusCode = res.statusCode
  }

  // Missing pages become 404 responses in render-page, so this only reports real errors.
  if (err && res && req) {
    const expressRequest = req as unknown as ExpressRequestExtensions
    const FailBot = expressRequest.FailBot
    if (FailBot) {
      try {
        // Report only the request headers listed in OK_HEADER_KEYS.
        const OK_HEADER_KEYS = ['user-agent', 'referer', 'accept-encoding', 'accept-language']
        const reported = FailBot.report(err, {
          path: req.url || '',
          request: JSON.stringify(
            {
              method: expressRequest.method,
              query: expressRequest.query,
              language: expressRequest.language,
            },
            undefined,
            2,
          ),
          headers: JSON.stringify(
            Object.fromEntries(
              Object.entries(req.headers).filter(([k]) => OK_HEADER_KEYS.includes(k)),
            ),
            undefined,
            2,
          ),
        })

        // FailBot.report returns undefined without backends, or an array of promises.
        if (!reported) {
          console.warn(
            'The FailBot.report() returned undefined which means the error was NOT sent to Failbot.',
          )
        } else if (
          Array.isArray(reported) &&
          reported.length &&
          reported.every((thing) => thing instanceof Promise)
        ) {
          // Await ignored results so rejected reports do not surface later as unclear errors.
          try {
            await Promise.all(reported)
          } catch (error) {
            console.warn('Unable to await reported FailBot errors', error)
          }
        }
      } catch (error) {
        // Keep FailBot problems from blocking rendering; the report may still have sent.
        console.warn('Failed to send error to FailBot.', error)
      }
    }
  }

  return { statusCode, message: err?.message }
}

export default Error
