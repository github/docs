import murmur from 'imurmurhash'
import { getUserEventsId, sendEvent } from './events'
import h from './hyperscript'

import { updateDisplay, submitForm } from './helpfulness'

const TREATMENT = 'TREATMENT'
const CONTROL = 'CONTROL'

export function bucket (test) {
  const id = getUserEventsId()
  const hash = murmur(test).hash(id).result()
  return hash % 2 ? TREATMENT : CONTROL
}

export function sendSuccess (test) {
  return sendEvent({
    type: 'experiment',
    experiment_name: test,
    experiment_variation: bucket(test).toLowerCase(),
    experiment_success: true
  })
}

export default function () {
  // *** Example test code ***
  // const testName = '$test-name$'
  // const xbucket = bucket(testName)
  // const x = document.querySelector(...)
  // x.addEventListener('click', () => { sendSuccess(testName) })
  // if (xbucket === TREATMENT) applyTreatment(x)

  const testName = 'survey-stars'
  const xbucket = bucket(testName)

  const form = document.querySelector('.js-helpfulness')
  if (!form) return

  // Overwrites the default handler for helpfulness survey...
  form.addEventListener('submit', evt => {
    evt.preventDefault()
    sendSuccess(testName)
    submitForm(form)
    updateDisplay(form, 'end')
  })

  if (xbucket === TREATMENT) applyTreatment(form)
}

function applyTreatment (form) {
  const p = form.querySelector('.radio-group')
  p.innerHTML = ''

  const buttons = [1, 2, 3, 4, 5].map(i =>
    h(
      'button',
      {
        'data-value': i,
        'aria-label': i,
        class: 'btn-link tooltipped tooltipped-n'
      },
      h(
        'span',
        {
          class: 'star-empty f3'
        },
        '☆'
      ),
      h(
        'span',
        {
          class: 'star-full f3',
          hidden: true
        },
        '★'
      )
    )
  )
  const input = h('input', {
    name: 'helpfulness-vote',
    type: 'hidden'
  })
  buttons.forEach(btn => p.appendChild(btn))
  p.appendChild(input)

  buttons.forEach((btn, i) => {
    btn.addEventListener('click', evt => {
      evt.preventDefault()
      updateBtnDisplay(i)
      submitForm(form)
      updateDisplay(form, i > 2 ? 'yes' : 'no')
    })
  })

  function updateBtnDisplay (i) {
    buttons.forEach((xbtn, xi) => {
      if (xi <= i) {
        xbtn.querySelector('.star-full').removeAttribute('hidden')
        xbtn.querySelector('.star-empty').setAttribute('hidden', true)
      } else {
        xbtn.querySelector('.star-full').setAttribute('hidden', true)
        xbtn.querySelector('.star-empty').removeAttribute('hidden')
      }
    })
    input.setAttribute('value', i > 2 ? 'Yes' : 'No')
  }
}
