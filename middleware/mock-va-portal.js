const HTML = `<!doctype html>
<html>
<head>
<script>
window.onload = (function() {
    const iframeOrigin = document.currentScript?.getAttribute('iframe_origin')
    window.addEventListener('message', function (event) {
        if (event.data === 'ready') {
            // Send a message back to the parent to signal that the iframe is ready to send messages
            window.parent.postMessage({ type: 'open' }, iframeOrigin)
        }
    })
})
function triggerStart() {
    const iframeOrigin = document.currentScript?.getAttribute('iframe_origin')
    window.parent.postMessage({ type: 'start' }, iframeOrigin)
}
function triggerStop() {
    const iframeOrigin = document.currentScript?.getAttribute('iframe_origin')
    window.parent.postMessage({ type: 'stop' }, iframeOrigin)
}
</script>
<style>
body, h1 { margin: 0; padding: 10px; }
#chat { margin-top: 20px; padding: 20px; border: 2px solid #efefef; min-height: 500px; }
</style>
</head>
<body>
  <h1>Mock Virtual Assistant Portal</h1>
  <button type=button onclick="triggerStart()">START VA</button>

  <div id="chat">
    <h2>This is the Virtual Assistant Portal</h2>
  </div>
  <button type=button onclick="triggerStop()">STOP VA</button>
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
