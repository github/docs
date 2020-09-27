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
    // Ensure that Google Analytics was registered
    if (!window.ga) return
    const category = 'Print'
    const action = 'print'
    const label = 'print'
    window.ga('send', 'event', category, action, label)
  }
}
