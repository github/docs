import murmur from 'imurmurhash'
import { getUserEventsId, sendEvent } from './events'
// import h from './hyperscript'

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

  const testName = 'search_lunr'
  const xbucket = bucket(testName)
  document.addEventListener('click', evt => {
    if (!evt.target.closest('.search-result > a')) return
    console.log(testName, xbucket) // eslint-disable-line
    sendSuccess(testName)
  })
  // Treatment code in middleware/search.js
}
