// import { sendEvent } from './events'

// This module does two things:
// 1. Wraps every image in a div so they can be toggled individually.
// 2. Adds a button to toggle all images on the page.
export default function () {
  const toggleImagesBtn = document.getElementById('js-toggle-images')
  if (!toggleImagesBtn) return

  const images = document.querySelectorAll('img')

  // If there are no images on the page, hide the button entirely and return.
  if (!images.length) {
    toggleImagesBtn.style.display = 'none'
    return
  }

  // Get the span elements containing the hide and show icons.
  const hideIcon = document.getElementById('js-hide-icon')
  const showIcon = document.getElementById('js-show-icon')

  // Get the aria-labels from the span elements for the tooltips.
  const tooltipHide = hideIcon.getAttribute('aria-label')
  const tooltipShow = showIcon.getAttribute('aria-label')

  // The icon should be "Hide" to start, so we suppress the "Show" icon here.
  showIcon.style.display = 'none'
  toggleImagesBtn.setAttribute('aria-label', tooltipHide)

  let hideImages = true

  toggleImagesBtn.addEventListener('click', (e) => {
    if (hideImages) {
      // Button should say "Show" on first click
      showIcon.style.display = 'inline'
      hideIcon.style.display = 'none'
      toggleImagesBtn.setAttribute('aria-label', tooltipShow)
      toggleImages(images, 'hide')
    } else {
      // Button should say "Hide" on another click
      showIcon.style.display = 'none'
      hideIcon.style.display = 'inline'
      toggleImagesBtn.setAttribute('aria-label', tooltipHide)
      toggleImages(images, 'show')
    }

    // Toggle the action on every click.
    hideImages = !hideImages

    // Track image toggle events
    // sendEvent({ type: 'imageToggle' })
  })
}

function toggleImages (images, action) {
  for (const img of images) {
    if (action === 'show') {
      img.src = img.getAttribute('originalSrc')
    } else {
      if (!img.getAttribute('originalSrc')) img.setAttribute('originalSrc', img.src)
      img.src = '/assets/images/octicons/image.svg'
    }
  }
}
