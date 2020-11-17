import murmur from 'imurmurhash'
import { getUserEventsId, sendEvent } from './events'

const TREATMENT = 'TREATMENT'
const CONTROL = 'CONTROL'

export function bucket (test) {
  const id = getUserEventsId()
  const hash = murmur(test).hash(id).result()
  return hash % 2 ? TREATMENT : CONTROL
}

export async function sendSuccess (test) {
  return sendEvent({
    type: 'experiment',
    experiment_name: test,
    experiment_variation: bucket(test).toLowerCase(),
    experiment_success: true
  })
}

const xmlns = 'http://www.w3.org/2000/svg'

export function h (tagName, attributes = {}, children = []) {
  const el = ['svg', 'path'].includes(tagName)
    ? document.createElementNS(xmlns, tagName)
    : document.createElement(tagName)
  Object.entries(attributes).forEach(
    ([key, value]) => el.setAttribute(key, value)
  )
  children.forEach(child =>
    typeof child === 'string'
      ? el.append(document.createTextNode(child))
      : el.append(child)
  )
  return el
}

export default function () {
  // const testName = '$test-name$'
  // const xbucket = bucket(testName)
  // if (xbucket === TREATMENT) { ... }
  // x.addEventListener('click', () => { sendSuccess(testName) })

  const testName = 'helpfulness-prompt-to-bottom'
  const xbucket = bucket(testName)

  if (xbucket === TREATMENT) {
    const bigHelpfulness = document.querySelector('#helpfulness-xl')
    const smallHelpfulness = document.querySelector('#helpfulness-sm')

    // Check that helpfulness prompt is present on this page
    if (!(bigHelpfulness && smallHelpfulness)) {
      return
    }

    // Remove the -xl prompts
    bigHelpfulness.parentElement.parentElement.removeChild(bigHelpfulness.parentElement)

    // Always show the -sm prompt
    smallHelpfulness.parentElement.classList.remove('d-xl-none')
  }

  const votes = Array.from(document.querySelectorAll('.js-helpfulness [type=radio]'))
  votes.forEach(voteEl => {
    voteEl.addEventListener('change', () => { sendSuccess(testName) })
  })
}
