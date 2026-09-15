// Mocks the VA portal so you can test the VA integration without access to a
// staging VA portal. You can't point at the production one either, because it
// is hardened to https://docs.github.com and will reject your localhost:4000.
//
// To test locally:
//
//   1. Add `SUPPORT_PORTAL_URL=http://localhost:4000` to your `.env` file
//   2. `npm run dev`
//   3. Navigate to a page listed in the `PagePathToVaFlowMapping` object in
//      the `ArticleContext`.
//
// This mocking is not secure. It is only for local development.

import type { Response, NextFunction } from 'express'

import type { ExtendedRequest } from '@/types'

const HTML = `<!doctype html>
<html>
<head>
<script>
const iframeOrigin = '*';

window.onload = (function() {
    window.parent.postMessage({ type: 'open' }, iframeOrigin)
})
function triggerStart() {
    window.parent.postMessage({ type: 'start' }, iframeOrigin)
}
function triggerStop() {
    window.parent.postMessage({ type: 'stop' }, iframeOrigin)
}
</script>
<style>
body, h1 { margin: 0; padding: 10px; }
#chat { margin-top: 20px; padding: 20px; border: 2px solid #efefef; min-height: 500px; }
body { border: 2px dashed orange; }
</style>
</head>
<body>
  <h1>Mock Virtual Assistant Portal</h1>
  <button type="button" onclick="triggerStart()">START VA</button>

  <div id="chat">
    <h2>This is the Virtual Assistant Portal</h2>
  </div>
  <button type="button" onclick="triggerStop()">STOP VA</button>
</body>
</html>`

export default function mockVaPortal(req: ExtendedRequest, res: Response, next: NextFunction) {
  if (process.env.NODE_ENV !== 'development') {
    throw new Error('Should not have been enabled')
  }

  if (req.url.startsWith('/iframe/docs_va')) {
    res.removeHeader('content-security-policy')
    res.status(200).type('text/html').send(HTML)
    return
  }

  next()
}
