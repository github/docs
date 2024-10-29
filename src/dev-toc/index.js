const expandText = 'Expand All'
const closeText = 'Close All'

document.addEventListener('DOMContentLoaded', async () => {
  devToc()
})

function devToc() {
  const expandButton = document.querySelector('.js-expand')
  if (!expandButton) return

  const detailsElements = document.querySelectorAll('details')

  expandButton.addEventListener('click', () => {
    // on click, toggle all the details elements open or closed
    const anyDetailsOpen = Array.from(detailsElements).find((details) => details.open)

    for (const detailsElement of detailsElements) {
      anyDetailsOpen ? detailsElement.removeAttribute('open') : (detailsElement.open = true)
    }

    // toggle the button text on click
    anyDetailsOpen
      ? (expandButton.textContent = expandText)
      : (expandButton.textContent = closeText)
  })

  // also toggle the button text on clicking any of the details elements
  for (const detailsElement of detailsElements) {
    detailsElement.addEventListener('click', () => {
      expandButton.textContent = closeText

      // we can only get an accurate count of the open details elements if we wait a fraction after click
      setTimeout(() => {
        if (!Array.from(detailsElements).find((details) => details.open)) {
          expandButton.textContent = expandText
        }
      }, 50)
    })
  }
}
