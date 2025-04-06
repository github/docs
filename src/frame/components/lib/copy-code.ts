import { announce } from '@primer/live-region-element'

export default function copyCode() {
  const buttons = Array.from(document.querySelectorAll('button.js-btn-copy'))

  if (!buttons) return

  buttons.forEach((button) =>
    button.addEventListener('click', async () => {
      const codeId = (button as HTMLElement).dataset.clipboard
      if (!codeId) return
      const pre = document.querySelector(`pre[data-clipboard="${codeId}"]`) as HTMLElement | null
      if (!pre) return
      const text = pre.innerText
      if (!text) return
      await navigator.clipboard.writeText(text)

      button.classList.add('copied')

      announce('Copied!')

      setTimeout(() => {
        button.classList.remove('copied')
      }, 2000)
    }),
  )
}
