export default () => {
  const buttons = Array.from(document.querySelectorAll('button.js-btn-copy'))

  if (!buttons) return

  buttons.forEach(button =>
    button.addEventListener('click', async evt => {
      const text = button.dataset.clipboardText
      await navigator.clipboard.writeText(text)

      const beforeTooltip = button.getAttribute('aria-label')
      button.setAttribute('aria-label', 'Copied!')

      setTimeout(() => {
        button.setAttribute('aria-label', beforeTooltip)
      }, 2000)
    })
  )
}
