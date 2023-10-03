import type { NextPageContext } from 'next'

import { GenericError } from 'components/GenericError'

function Error() {
  return <GenericError />
}

Error.getInitialProps = async (ctx: NextPageContext) => {
  // If this getInitialProps() is called in client-side rendering,
  // you won't have a `.res` object. It's only present when it's
  // rendered Node (SSR). That's our clue to know that, we should
  // send this error to Failbot.
  // In client-side, it's undefined. In server, it's a ServerResponse object.
  const { err, req, res } = ctx
  let statusCode = 500
  if (res?.statusCode) {
    statusCode = res.statusCode
  }

  // 'err' will by falsy if it's a 404
  // But note, at the time of writing this comment, we have a dedicated
  // `pages/404.tsx` which takes care of 404 messages.
  if (err && res && req) {
    // This is a (necessary) hack!
    // You can't import `../lib/failbot.js` here in this
    // file because it gets imported by webpack to be used in the
    // client-side JS bundle. It *could* be solved by overriding
    // the webpack configuration in our `next.config.js` but this is prone
    // to be fragile since ignoring code can be hard to get right
    // and the more we override there, the harder it will become to
    // upgrade NextJS in the future because of moving parts.
    // So the solution is to essentially do what the contextualizers
    // do which mutate the Express request object by attaching
    // callables to it. This way it's only ever present in SSR executed
    // code and doesn't need any custom webpack configuration.
    const expressRequest = req as any
    const FailBot = expressRequest.FailBot
    if (FailBot) {
      try {
        // An inclusion-list of headers we're OK with sending because
        // they don't contain an PII.
        const OK_HEADER_KEYS = ['user-agent', 'referer', 'accept-encoding', 'accept-language']
        const reported = FailBot.report(err, {
          path: req.url,
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

        // Within FailBot.report() (which is our wrapper for Failbot in
        // the `@github/failbot` package), it might exit only because
        // it has no configured backends to send to. I.e. it returns undefined.
        // Otherwise, it should return `Array<Promise<Response | void>>`.
        if (!reported) {
          console.warn(
            'The FailBot.report() returned undefined which means the error was NOT sent to Failbot.',
          )
        } else if (
          Array.isArray(reported) &&
          reported.length &&
          reported.every((thing) => thing instanceof Promise)
        ) {
          // Make sure we await the promises even though we don't care
          // about the results. This makes the code cleaner rather than
          // letting the eventloop take care of it which could result
          // in cryptic error messages if the await does fail for some
          // reason.
          try {
            await Promise.all(reported)
          } catch (error) {
            console.warn('Unable to await reported FailBot errors', error)
          }
        }
      } catch (error) {
        // This does not necessarily mean FailBot failed to send. It's
        // most likely that we failed to *send to* FailBot before it
        // even has a chance to use the network. This is because
        // `FailBot.report` returns an array of Promises which themselves
        // could go wrong, but that's a story for another try/catch.
        // Basically, this catch it just to avoid other errors that
        // might prevent the pretty error page to render at all.
        console.warn('Failed to send error to FailBot.', error)
      }
    }
  }

  return { statusCode, message: err?.message }
}

export default Error
