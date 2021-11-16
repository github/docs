import got from 'got'
import { Failbot, HTTPBackend, LogBackend } from '@github/failbot'

const HAYSTACK_APP = 'docs'

export function report(error, metadata) {
  // If there's no HAYSTACK_URL set, bail early
  if (!process.env.HAYSTACK_URL) return

  const backends = [
    new HTTPBackend({
      haystackURL: process.env.HAYSTACK_URL,
      fetchFn: got,
    }),
  ]
  if (process.env.NODE_ENV !== 'test') {
    backends.push(new LogBackend({ log: console.log.bind(console) }))
  }
  const failbot = new Failbot({
    app: HAYSTACK_APP,
    backends: backends,
  })
  return failbot.report(error, metadata)
}

// Kept for legacy so you can continue to do:
//
//  import FailBot from './lib/failbot.js'
//  ...
//  FailBot.report(myError)
//
export default {
  report,
}
