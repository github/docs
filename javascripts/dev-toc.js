const expandText = 'Expand All'
const closeText = 'Close All'

export default function devToc () {
  const expandButton = document.querySelector('.js-expand')
  if (!expandButton) return

  expandButton.addEventListener('click', () => {
    // on click, toggle the button text
    expandButton.textContent === expandText
      ? expandButton.textContent = closeText
      : expandButton.textContent = expandText

    // on click, toggle all the details elements open or closed
    const detailsElements = document.querySelectorAll('details')

    for (const detailsElement of detailsElements) {
      detailsElement.open
        ? detailsElement.removeAttribute('open')
        : detailsElement.open = true
    }
  })
}
