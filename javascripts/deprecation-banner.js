// Make deprecation banner language adaptive to past and future tense based on deprecation date

export default function () {
  const spanWillBeDeprecated = document.querySelector('span[data-display-until]')
  const spanWasDeprecated = document.querySelector('span[data-display-starting]')

  if (!spanWillBeDeprecated) return
  if (!spanWasDeprecated) return

  const today = getDate()

  const deprecationDate = getDate(spanWillBeDeprecated.getAttribute('data-display-until'))

  // if deprecation date is >= today's date, the date is in the future, so display "will be deprecated"
  // if deprecation date is < today's date, the date is in the past, so display "was deprecated"
  if (deprecationDate > today || getTime(deprecationDate) === getTime(today)) {
    spanWasDeprecated.style.display = 'none'
  } else {
    spanWillBeDeprecated.style.display = 'none'
  }
}

function getDate (date) {
  const dateObj = date ? new Date(date) : new Date()
  return dateObj.toISOString().slice(0, 10)
}

function getTime (date) {
  return new Date(date).getTime()
}
