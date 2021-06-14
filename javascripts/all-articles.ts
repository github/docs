/**
 * Handles the client-side events for `includes/all-articles.html`.
 */
export default function allArticles() {
  const buttons = document.querySelectorAll('button.js-all-articles-show-more')

  buttons.forEach((btn) =>
    btn.addEventListener('click', (evt) => {
      const target = evt.currentTarget as HTMLButtonElement
      // Show all hidden links
      const hiddenLinks = target?.parentElement?.querySelectorAll('li.d-none')
      hiddenLinks?.forEach((link) => link.classList.remove('d-none'))
      // Remove the button, since we don't need it anymore
      target?.parentElement?.removeChild(target)
    })
  )
}
