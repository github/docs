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

  // Get the aria-labels from the span elements containing the hide/show tooltips for single images.
  // (We do it this way instead of hardcoding text here for localization-friendliness.)
  const tooltipHideSingle = document.getElementById('js-hide-single-image').getAttribute('aria-label')
  const tooltipShowSingle = document.getElementById('js-show-single-image').getAttribute('aria-label')

  for (const img of images) {
    // First, wrap each image in a button and add some attributes.
    const parentDiv = img.parentNode
    const parentButton = document.createElement('button')
    parentDiv.replaceChild(parentButton, img)
    parentButton.appendChild(img)
    parentButton.classList.add('tooltipped', 'tooltipped-nw', 'btn-toggle-image')
    parentButton.setAttribute('aria-label', tooltipHideSingle)

    // On any individual image button click...
    parentButton.addEventListener('click', (e) => {
      // Determine current state.
      const hideOnNextClick = parentButton.getAttribute('aria-label') === tooltipShowSingle

      // Hide or show!
      if (hideOnNextClick) {
        toggleImage(img, 'show', tooltipHideSingle)
      } else {
        toggleImage(img, 'hide', tooltipShowSingle)
      }
    })
  }

  // Get the span elements containing the hide and show icons.
  const hideIcon = document.getElementById('js-hide-icon')
  const showIcon = document.getElementById('js-show-icon')

  // Get the aria-labels from the span elements for the tooltips.
  const tooltipHideAll = hideIcon.getAttribute('aria-label')
  const tooltipShowAll = showIcon.getAttribute('aria-label')

  // The icon should be "Hide" to start, so we suppress the "Show" icon here.
  showIcon.style.display = 'none'
  toggleImagesBtn.setAttribute('aria-label', tooltipHideAll)

  let showOnNextClick = true

  toggleImagesBtn.addEventListener('click', (e) => {
    if (showOnNextClick) {
      // Button should say "Show" on first click
      showIcon.style.display = 'inline'
      hideIcon.style.display = 'none'
      toggleImagesBtn.setAttribute('aria-label', tooltipShowAll)
      toggleImages(images, 'hide', tooltipShowSingle)
    } else {
      // Button should say "Hide" on another click
      showIcon.style.display = 'none'
      hideIcon.style.display = 'inline'
      toggleImagesBtn.setAttribute('aria-label', tooltipHideAll)
      toggleImages(images, 'show', tooltipHideSingle)
    }

    // Toggle the action on every click.
    showOnNextClick = !showOnNextClick

    // Track image toggle events
    // sendEvent({ type: 'imageToggle' })
  })
}

function toggleImages (images, action, tooltipText) {
  for (const img of images) {
    toggleImage(img, action, tooltipText)
  }
}

function toggleImage (img, action, tooltipText) {
  const parentButton = img.parentNode

  if (action === 'show') {
    img.src = img.getAttribute('originalSrc')
    parentButton.setAttribute('aria-label', tooltipText)
  } else {
    if (!img.getAttribute('originalSrc')) img.setAttribute('originalSrc', img.src)
    img.src = '/assets/images/octicons/image.svg'
    parentButton.setAttribute('aria-label', tooltipText)
  }
}
