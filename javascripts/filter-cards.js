function matchCardBySearch (card, searchString) {
  const matchReg = new RegExp(searchString, 'i')
  // Check if this card matches - any `data-*` attribute contains the string
  return Object.keys(card.dataset).some(key => matchReg.test(card.dataset[key]))
}

function matchCardByAttribute (card, attribute, value) {
  if (attribute in card.dataset) {
    const allValues = card.dataset[attribute].split(',')
    return allValues.some(key => key === value)
  }
  return false
}

export default function cardsFilter () {
  const inputFilter = document.querySelector('.js-filter-card-filter')
  const dropdownFilters = document.querySelectorAll('.js-filter-card-filter-dropdown')
  const cards = Array.from(document.querySelectorAll('.js-filter-card'))
  const showMoreButton = document.querySelector('.js-filter-card-show-more')
  const noResults = document.querySelector('.js-filter-card-no-results')
  // if jsFilterCardMax not set, assume no limit (well, at 99)
  const maxCards = showMoreButton ? parseInt(showMoreButton.dataset.jsFilterCardMax || 99) : null

  const noFilter = () => {
    showMoreButton.classList.remove('d-none')
    for (let index = 0; index < cards.length; index++) {
      const card = cards[index]
      // Hide all but the first n number of cards
      if (index > maxCards - 1) {
        card.classList.add('d-none')
      } else {
        card.classList.remove('d-none')
      }
    }
  }

  const filterEventHandler = (evt) => {
    const { currentTarget } = evt
    const value = currentTarget.value

    showMoreButton.classList.add('d-none')

    // Track whether or not we had at least one match
    let hasMatches = false

    for (let index = 0; index < cards.length; index++) {
      const card = cards[index]

      let cardMatches = false

      if (currentTarget.tagName === 'INPUT') {
        // Filter was emptied
        if (!value) {
          noFilter()
          // return hasMatches = true, so we don't show the "No results" blurb
          hasMatches = true
          continue
        }
        cardMatches = matchCardBySearch(card, value)
      }

      if (currentTarget.tagName === 'SELECT' && currentTarget.name) {
        const matches = []
        // check all the other dropdowns
        dropdownFilters.forEach(({ name, value }) => {
          if (!name || !value) return
          matches.push(matchCardByAttribute(card, name, value))
        })
        // if none of the filters is selected
        if (matches.length === 0) {
          noFilter()
          // return hasMatches = true, so we don't show the "No results" blurb
          hasMatches = true
          continue
        }
        cardMatches = matches.every(value => value)
      }

      if (cardMatches) {
        card.classList.remove('d-none')
        hasMatches = true
      } else {
        card.classList.add('d-none')
      }
    }

    // If there wasn't at least one match, show the "no results" text
    if (!hasMatches) {
      noResults.classList.remove('d-none')
    } else {
      noResults.classList.add('d-none')
    }

    return hasMatches
  }

  if (inputFilter) {
    inputFilter.addEventListener('keyup', (evt) => {
      const hasMatches = filterEventHandler(evt)
      if (!hasMatches) {
        document.querySelector('.js-filter-card-value').textContent = evt.currentTarget.value
      }
    })
  }

  if (dropdownFilters) {
    dropdownFilters.forEach(filter => filter.addEventListener('change', filterEventHandler))
  }

  if (showMoreButton) {
    showMoreButton.addEventListener('click', evt => {
      // Number of cards that are currently visible
      const numShown = cards.filter(card => !card.classList.contains('d-none')).length
      // We want to show n more cards
      const totalToShow = numShown + maxCards

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
      if (totalToShow >= cards.length) {
        evt.currentTarget.classList.add('d-none')
      }
    })
  }
}
