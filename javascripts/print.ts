import { EventType, sendEvent } from './events'

export default function () {
  const printButtons = document.querySelectorAll('.js-print')

  Array.from(printButtons).forEach((btn) => {
    // Open the print dialog when the button is clicked
    btn.addEventListener('click', () => {
      window.print()
    })
  })

  // Track print events
  window.onbeforeprint = function () {
    sendEvent({ type: EventType.print })
  }
}
