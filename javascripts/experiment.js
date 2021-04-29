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

function applyTreatment () {
  // Treatment-specific options.
  const hideImagesByDefault = true
  const focusButtonByDefault = true

  // Run toggleImages a second time on each page, but with treatment defaults.
  toggleImages(hideImagesByDefault, focusButtonByDefault)
}

export default function () {
  const testName = 'toggle-images'
  const xbucket = bucket(testName)

  const toggleImagesBtn = document.getElementById('js-toggle-images')
  if (!toggleImagesBtn) return

  toggleImagesBtn.addEventListener('click', () => { sendSuccess(testName) })

  if (xbucket === TREATMENT) applyTreatment()
}
