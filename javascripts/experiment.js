import murmur from 'imurmurhash'
import { getUserEventsId, sendEvent } from './events'
import toggleImages from './toggle-images'
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

function applyTreatment (toggleButton) {
  // Treatment-specific options.
  const hideImagesByDefault = true
  const focusButtonByDefault = true

  toggleImages(hideImagesByDefault, focusButtonByDefault)
}

export default function () {
  // *** Example test code ***
  const testName = 'toggle-images'
  const xbucket = process.env.TEST_TREATMENT
    ? 'TREATMENT'
    : bucket(testName)
  const x = document.getElementById('js-toggle-images')
  if (!x) return

  x.addEventListener('click', () => { sendSuccess(testName) })
  if (xbucket === TREATMENT) applyTreatment(x)
}
