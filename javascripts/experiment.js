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
  // x.addEventListener('click', evt => evt.preventDefault(); await sendSuccess(testName); evt())

  const treatment = document.getElementById('quickstart-treatment')
  if (!treatment) return

  const testName = 'quickstart-hello'
  const xbucket = bucket(testName)

  if (xbucket === TREATMENT) {
    Array.from(
      document.querySelectorAll('#article-contents > *')
    ).forEach(el => { el.hidden = true })
    treatment.hidden = false
  }

  document.documentElement.addEventListener('copy', () => {
    sendSuccess(testName)
  })
}
