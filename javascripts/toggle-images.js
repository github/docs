// import { sendEvent } from './events'

export default function () {
  const toggleImagesBtn = document.getElementById('js-toggle-images')
  if (!toggleImagesBtn) return

  const images = document.querySelectorAll('img')

  // If there are no images on the page, hide the button entirely and return.
  if (!images.length) {
    toggleImagesBtn.style.display = 'none'
    return
  }

  const hideText = document.getElementById('js-hide-text')
  const showText = document.getElementById('js-show-text')

  // For localization friendliness, the button HTML includes both show and hide text.
  // The button should say "Hide" by default, so we suppress the "Show" text here.
  showText.style.display = 'none'

  // The selection state is set to false by default in the button HTML.
  let selectionState = toggleImagesBtn.getAttribute('aria-selected') !== 'false'

  toggleImagesBtn.addEventListener('click', (e) => {
    // On click, toggle the selection state.
    selectionState = !selectionState
    toggleImagesBtn.setAttribute('aria-selected', selectionState)

    // Check first image to see if images are currently hidden; if so, and there is a click to show them...
    if (images[0].style.display === 'none') {
      // Button should say "Hide"
      showText.style.display = 'none'
      hideText.style.display = 'inline'
    } else {
      // Button should say "Show"
      showText.style.display = 'inline'
      hideText.style.display = 'none'
    }

    // Toggle the images on click.
    for (const img of images) {
      if (img.style.display === 'none') {
        img.style.display = 'block'
      } else {
        img.style.display = 'none'
      }
    }

    // Track image toggle events
    // sendEvent({ type: 'imageToggle' })
  })
}
