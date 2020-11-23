function filterCards (cards, value) {
  const noResults = document.querySelector('.js-code-example-no-results')
  const matchReg = new RegExp(value, 'i')

  // Track whether or not we had at least one match
  let hasMatches = false

  for (let index = 0; index < cards.length; index++) {
    const card = cards[index]

    // Filter was emptied
    if (!value) {
      // Make sure we don't show the "No results" blurb
      hasMatches = true

      // Hide all but the first 6
      if (index > 5) {
        card.classList.add('d-none')
      } else {
        card.classList.remove('d-none')
      }

      continue
    }

    // Check if this card matches
    const { title, description, tags } = card.dataset
    const cardMatches = (
      matchReg.test(title) ||
      matchReg.test(description) ||
      matchReg.test(tags)
    )

    if (cardMatches) {
      card.classList.remove('d-none')
      hasMatches = true
    } else {
      card.classList.add('d-none')
    }
  }

  // If there wasn't at least one match, show the "no results" text
  if (!hasMatches) {
    document.querySelector('.js-code-example-filter-value').textContent = value
    noResults.classList.remove('d-none')
  } else {
    noResults.classList.add('d-none')
  }
}

export default function filterCodeExamples () {
  const filter = document.querySelector('.js-code-example-filter')
  if (!filter) return

  const cards = Array.from(document.querySelectorAll('.js-code-example-card'))
  const showMoreButton = document.querySelector('.js-code-example-show-more')

  filter.addEventListener('keyup', evt => {
    const value = evt.currentTarget.value

    // Show or hide the "Show more" button if there is a value
    if (value) showMoreButton.classList.add('d-none')
    else showMoreButton.classList.remove('d-none')

    filterCards(cards, value)
  })

  showMoreButton.addEventListener('click', evt => {
    // Number of cards that are currently visible
    const numShown = cards.filter(card => !card.classList.contains('d-none')).length
    // We want to show 6 more
    const totalToShow = numShown + 6

    for (let index = numShown; index < cards.length; index++) {
      const card = cards[index]

      // If the card we're at is less than the total number of cards
      // we should show, show this one
      if (index < totalToShow) {
        card.classList.remove('d-none')
      } else {
        // Otherwise, we've shown the ones we intend to so exit the loop
        break
      }
    }

    // They're all shown now, we should hide the button
    if (totalToShow === cards.length) {
      evt.currentTarget.style.display = 'none'
    }
  })
}
