// import { sendEvent } from './events'
import Cookies from 'js-cookie'

// Determines whether images are hidden or displayed on first visit.
const hideImagesByDefault = false

// Set the image placeholder icon here.
const placeholderImagePath = '/assets/images/octicons/image.svg'

/*
 * This module adds a new icon button in the margin to toggle all images on the page.
 * It uses cookies to keep track of a user's selected image preference.
 */
export default function () {
  const toggleImagesBtn = document.getElementById('js-toggle-images')
  if (!toggleImagesBtn) return

  // If there are no images on the page, return!
  // Don't include images in tables, which are already small and shouldn't be hidden.
  const images = [...document.querySelectorAll('img')].filter(img => !img.closest('table'))
  if (!images.length) return

  // The button is hidden by default so it doesn't appear on browsers with JS disabled.
  // If there are images on a docs page and JS is enabled, display the toggle button.
  toggleImagesBtn.removeAttribute('hidden')

  // Look for a cookie with image visibility preference; otherwise, use the default.
  const hideImagesPreferred = (Cookies.get('hideImagesPreferred') === 'true') || hideImagesByDefault

  // Hide the images if that is the preference.
  if (hideImagesPreferred) {
    toggleImages(images, 'hide')
  }

  // Get the span elements containing the off and on icons.
  const offIcon = document.getElementById('js-off-icon')
  const onIcon = document.getElementById('js-on-icon')

  // Get the aria-labels from the span elements for the tooltips.
  const tooltipImagesOff = offIcon.getAttribute('aria-label')
  const tooltipImagesOn = onIcon.getAttribute('aria-label')

  // Set the starting state depending on user preferences.
  if (hideImagesPreferred) {
    offIcon.removeAttribute('hidden')
    toggleImagesBtn.setAttribute('aria-label', tooltipImagesOff)
  } else {
    onIcon.removeAttribute('hidden')
    toggleImagesBtn.setAttribute('aria-label', tooltipImagesOn)
  }

  // If images are hidden by default, showOnNextClick should be false.
  // If images are not hidden by default, showOnNextClick should be true.
  let showOnNextClick = !hideImagesPreferred

  toggleImagesBtn.addEventListener('click', (e) => {
    if (showOnNextClick) {
      // Button should say "Images are off" on first click (depending on prefs)
      offIcon.removeAttribute('hidden')
      onIcon.setAttribute('hidden', true)
      toggleImagesBtn.setAttribute('aria-label', tooltipImagesOff)
      toggleImages(images, 'hide')
    } else {
      // Button should say "Images are on" on another click
      offIcon.setAttribute('hidden', true)
      onIcon.removeAttribute('hidden')
      toggleImagesBtn.setAttribute('aria-label', tooltipImagesOn)
      toggleImages(images, 'show')
    }

    // Remove focus from the button after click so the tooltip does not stay displayed.
    // Use settimeout to work around Firefox-specific issue.
    setTimeout(() => { toggleImagesBtn.blur() }, 100)

    // Save this preference as a cookie.
    Cookies.set('hideImagesPreferred', showOnNextClick, { sameSite: 'strict', secure: true })

    // Toggle the action on every click.
    showOnNextClick = !showOnNextClick

    // TODO Track image toggle events
    // sendEvent({ type: 'imageToggle' })
  })
}

function toggleImages (images, action) {
  for (const img of images) {
    toggleImage(img, action)
  }
}

function toggleImage (img, action) {
  const parentEl = img.parentNode

  // Style the parent element and image depending on the state.
  if (action === 'show') {
    img.src = img.getAttribute('originalSrc')
    img.style.border = '2px solid var(--color-auto-gray-2)'
    parentEl.style.display = 'block'
    parentEl.style['margin-top'] = '20px'
    parentEl.style.padding = '10px 0'
  } else {
    if (!img.getAttribute('originalSrc')) img.setAttribute('originalSrc', img.src)
    img.src = placeholderImagePath
    img.style.border = 'none'
    parentEl.style.display = 'inline'
    parentEl.style['margin-top'] = '0'
    parentEl.style.padding = '1px 6px'
  }
}
