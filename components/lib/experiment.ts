import murmur from 'imurmurhash'
import { getUserEventsId, sendEvent, EventType } from './events'

let initialized = false

const TREATMENT = 'TREATMENT'
const CONTROL = 'CONTROL'

export function bucket(test: string) {
  const id = getUserEventsId()
  const hash = murmur(test).hash(id).result()
  return hash % 2 ? TREATMENT : CONTROL
}

export function sendSuccess(test: string) {
  return sendEvent({
    type: EventType.experiment,
    experiment_name: test,
    experiment_variation: bucket(test).toLowerCase(),
    experiment_success: true,
  })
}

export function initializeExperiments() {
  if (initialized) return
  initialized = true
  // *** Example test code ***
  // const testName = '$test-name$'
  // const xbucket = bucket(testName)
  // const x = document.querySelector(...)
  // x.addEventListener('click', () => { sendSuccess(testName) })
  // if (xbucket === TREATMENT) applyTreatment(x)
}
