// import { sendEvent } from './events'

export default function () {
  const toggleImagesBtn = document.getElementById('js-toggle-images')
  if (!toggleImagesBtn) return

  const hideText = document.getElementById('js-hide-text')
  const showText = document.getElementById('js-show-text')

  // For localization friendliness, the button HTML includes both show and hide text.
  // The button should say "Hide" by default, so we suppress the "Show" text here.
  showText.style.display = 'none'

  const images = document.querySelectorAll('img')

  toggleImagesBtn.addEventListener('click', (e) => {
    for (const img of images) {
      if (img.style.display === 'none') {
        // Show images
        img.style.display = 'block'
        // Say "Hide"
        showText.style.display = 'none'
        hideText.style.display = 'inline'
      } else {
        // Hide images
        img.style.display = 'none'
        // Say "Show"
        showText.style.display = 'inline'
        hideText.style.display = 'none'
      }
    }

    // Track image toggle events
    // sendEvent({ type: 'imageToggle' })
  })
}
