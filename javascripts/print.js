import { sendEvent } from './events'

export default function () {
  const printButton = document.querySelector('.js-print')

  if (printButton) {
    // Open the print dialog when the button is clicked
    printButton.addEventListener('click', () => {
      window.print()
    })
  }

  // Track print events
  window.onbeforeprint = function () {
    sendEvent({ type: 'print' })
  }
}
