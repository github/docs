import { sendEvent } from './events'

function showElement (el) {
  el.removeAttribute('hidden')
}

function hideElement (el) {
  el.setAttribute('hidden', true)
}

function updateDisplay (form, state) {
  Array.from(
    form.querySelectorAll(
      ['start', 'yes', 'no', 'end']
        .map(xstate => '[data-help-' + xstate + ']')
        .join(',')
    )
  )
    .forEach(hideElement)
  Array.from(form.querySelectorAll('[data-help-' + state + ']'))
    .forEach(showElement)
}

function submitForm (form) {
  const formData = new FormData(form)
  const data = Object.fromEntries(
    Array.from(formData.entries())
      .map(
        ([key, value]) => [
          key.replace('helpfulness-', ''),
          value || undefined // Convert empty strings to undefined
        ]
      )
  )
  return trackEvent(data)
}

function trackEvent ({ token, vote, email, comment }) {
  return sendEvent({
    type: 'survey',
    token, // Honeypot
    survey_vote: vote === 'Yes',
    survey_comment: comment,
    survey_email: email
  })
}

export default function helpfulness () {
  const form = document.querySelector('.js-helpfulness')
  const texts = Array.from(document.querySelectorAll('.js-helpfulness input, .js-helpfulness textarea'))
  const votes = Array.from(document.querySelectorAll('.js-helpfulness [type=radio]'))
  if (!form || !texts.length || !votes.length) return

  form.addEventListener('submit', evt => {
    evt.preventDefault()
    submitForm(form)
    updateDisplay(form, 'end')
  })

  votes.forEach(voteEl => {
    voteEl.addEventListener('change', evt => {
      const state = evt.target.value.toLowerCase()
      const form = voteEl.closest('form')
      submitForm(form)
      updateDisplay(form, state)
    })
  })

  // Prevent the site search from overtaking your input
  texts.forEach(text => {
    text.addEventListener('keydown', evt => {
      if (evt.code === 'Slash') evt.stopPropagation()
    })
  })
}
