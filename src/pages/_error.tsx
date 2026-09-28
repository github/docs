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

Error.getInitialProps = async (ctx: NextPageContext) => {
  // `.res` only exists during SSR,
  // so its presence is how we know to send this error to Failbot.
  const { err, req, res } = ctx
  let statusCode = 500
  if (res?.statusCode) {
    statusCode = res.statusCode
  }

  // `err` is falsy for a 404, which `pages/404.tsx` handles instead.
  if (err && res && req) {
    // We can't import `@/observability/lib/failbot` here,
    // because webpack pulls this file into the client bundle.
    // Excluding it in next.config.ts would work but makes future Next.js upgrades harder.
    // Instead the contextualizers attach FailBot to the Express request,
    // so it exists only in SSR.
    const expressRequest = req as unknown as ExpressRequestExtensions
    const FailBot = expressRequest.FailBot
    if (FailBot) {
      try {
        // Allowlist: these headers carry no PII.
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

        // `FailBot.report()` returns undefined when no backends are configured,
        // otherwise an array of promises.
        if (!reported) {
          console.warn(
            'The FailBot.report() returned undefined which means the error was NOT sent to Failbot.',
          )
        } else if (
          Array.isArray(reported) &&
          reported.length &&
          reported.every((thing) => thing instanceof Promise)
        ) {
          // Await even though we ignore the results.
          // Leaving these to the event loop produces cryptic errors when one rejects.
          try {
            await Promise.all(reported)
          } catch (error) {
            console.warn('Unable to await reported FailBot errors', error)
          }
        }
      } catch (error) {
        // This catch exists so a FailBot problem can't stop the error page from rendering.
        // It doesn't mean the report failed to send.
        console.warn('Failed to send error to FailBot.', error)
      }
    }
  }

  return { statusCode, message: err?.message }
}

export default Error
