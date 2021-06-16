import { sendEvent, EventType } from './events'

function showElement(el: HTMLElement) {
  el.removeAttribute('hidden')
}

function hideElement(el: HTMLElement) {
  el.setAttribute('hidden', 'hidden')
}

function updateDisplay(form: HTMLFormElement, state: string) {
  const allSelector = ['start', 'yes', 'no', 'end']
    .map((xstate) => '[data-help-' + xstate + ']')
    .join(',')
  const stateSelector = '[data-help-' + state + ']'
  const allEls = Array.from(form.querySelectorAll(allSelector)) as Array<HTMLElement>
  allEls.forEach(hideElement)
  const stateEls = Array.from(form.querySelectorAll(stateSelector)) as Array<HTMLElement>
  stateEls.forEach(showElement)
}

function submitForm(form: HTMLFormElement) {
  const formData = new FormData(form)
  return trackEvent(formData)
}

function trackEvent(formData: FormData) {
  return sendEvent({
    type: EventType.survey,
    survey_token: (formData.get('survey-token') as string) || undefined, // Honeypot
    survey_vote: formData.get('survey-vote') === 'Yes',
    survey_comment: (formData.get('survey-comment') as string) || undefined,
    survey_email: (formData.get('survey-email') as string) || undefined,
  })
}

export default function survey() {
  // @ts-ignore
  if (window.IS_NEXTJS_PAGE) return

  const form = document.querySelector('.js-survey') as HTMLFormElement | null
  const texts = Array.from(
    document.querySelectorAll('.js-survey input, .js-survey textarea')
  ) as Array<HTMLElement>
  const votes = Array.from(document.querySelectorAll('.js-survey [type=radio]'))
  if (!form || !texts.length || !votes.length) return

  form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    submitForm(form)
    updateDisplay(form, 'end')
  })

  votes.forEach((voteEl) => {
    voteEl.addEventListener('change', (evt) => {
      const radio = evt.target as HTMLInputElement
      const state = radio.value.toLowerCase()
      submitForm(form)
      updateDisplay(form, state)
    })
  })

  // Prevent the site search from overtaking your input
  texts.forEach((text) => {
    text.addEventListener('keydown', (evt: KeyboardEvent) => {
      if (evt.code === 'Slash') evt.stopPropagation()
    })
  })
}
