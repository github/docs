import Clipboard from 'clipboard'

export default () => {
  const clipboard = new Clipboard('button.js-btn-copy')

  clipboard.on('success', evt => {
    const btn = evt.trigger
    const beforeTooltip = btn.getAttribute('aria-label')
    btn.setAttribute('aria-label', 'Copied!')

    setTimeout(() => {
      btn.setAttribute('aria-label', beforeTooltip)
    }, 2000)
  })
}
