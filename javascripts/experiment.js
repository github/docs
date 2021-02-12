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

export async function sendSuccess (test) {
  return sendEvent({
    type: 'experiment',
    experiment_name: test,
    experiment_variation: bucket(test).toLowerCase(),
    experiment_success: true
  })
}

export default function () {
  // const testName = '$test-name$'
  // const xbucket = bucket(testName)
  // if (xbucket === TREATMENT) { ... }
  // x.addEventListener('click', () => { sendSuccess(testName) })
}
