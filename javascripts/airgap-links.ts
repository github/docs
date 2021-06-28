export default function airgapLinks() {
  // @ts-ignore
  if (window.IS_NEXTJS_PAGE) return

  // When in an airgapped environment,
  // show a tooltip on external links
  const exposeEl = document?.getElementById('expose') as HTMLScriptElement
  const { airgap } = JSON.parse(exposeEl.text)
  if (!airgap) return

  const externaLinks = Array.from(document.querySelectorAll('a[href^="http"], a[href^="//"]'))
  externaLinks.forEach((link) => {
    link.classList.add('tooltipped')
    link.setAttribute('aria-label', 'This link may not work in this environment.')
    link.setAttribute('rel', 'noopener')
  })
}
