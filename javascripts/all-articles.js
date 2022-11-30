/**
 * Handles the client-side events for `includes/all-articles.html`.
 */
export default function allArticles () {
  const buttons = document.querySelectorAll('button.js-all-articles-show-more')

  for (const btn of buttons) {
    btn.addEventListener('click', evt => {
      // Show all hidden links
      const hiddenLinks = evt.currentTarget.parentElement.querySelectorAll('li.d-none')
      for (const link of hiddenLinks) {
        link.classList.remove('d-none')
      }
      // Remove the button, since we don't need it anymore
      evt.currentTarget.parentElement.removeChild(evt.currentTarget)
    })
  }
}
