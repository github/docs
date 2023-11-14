/**
 * To test the VA integration, we need to mock the VA portal.
 * This is if you don't have access to the VA portal in a staging environment.
 * And you can't use the VA portal in production, because that one is
 * hardened to only use https://docs.github.com, not your localhost:4000.
 *
 * So, to test this locally, you need to:
 *
 *   1. Add `SUPPORT_PORTAL_URL=http://localhost:4000` into your `.env` file
 *   2. `npm run dev`
 *   3. Navigate to a page whose path is mentioned in the
 *      `PagePathToVaFlowMapping` object in the `ArticleContext`.
 *
 * This mocking is not secure, but it's only for local development.
 */

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

export default function mockVaPortal(req, res, next) {
  if (process.env.NODE_ENV !== 'development') {
    throw new Error('Should not have been enabled')
  }

  if (req.url.startsWith('/iframe/docs_va')) {
    res.removeHeader('content-security-policy')
    return res.status(200).type('text/html').send(HTML)
  }

  next()
}
