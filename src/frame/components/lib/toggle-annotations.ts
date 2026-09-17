import Cookies from '@/frame/components/lib/cookies'
import { sendEvent } from '@/events/components/events'
import { EventType } from '@/events/types'
import { ANNOTATE_MODE_COOKIE_NAME } from '@/frame/lib/constants'

enum annotationMode {
  Beside = 'beside',
  Inline = 'inline',
}

// Returns the mode if it is 'beside' or 'inline', otherwise falls back to Beside.
function validateMode(mode?: string) {
  if (mode === annotationMode.Beside || mode === annotationMode.Inline) return mode
  else return annotationMode.Beside
}

export default function toggleAnnotation() {
  const annotationButtons = Array.from(document.querySelectorAll('.annotate-toggle button'))
  if (!annotationButtons.length) return

  const cookie = validateMode(Cookies.get(ANNOTATE_MODE_COOKIE_NAME))
  displayAnnotationMode(annotationButtons, cookie)

  for (const annotationBtn of annotationButtons) {
    annotationBtn.addEventListener('click', (evt) => {
      evt.preventDefault()

      const validMode = validateMode(annotationBtn.getAttribute('value')!)
      Cookies.set(ANNOTATE_MODE_COOKIE_NAME, validMode!)
      sendEvent({
        type: EventType.preference,
        preference_name: 'code_display',
        preference_value: validMode,
      })

      setActive(annotationButtons, validMode)
      displayAnnotationMode(annotationButtons, validMode)
    })
  }
}

// Sets aria-current on every button whose value matches the validated mode, and
// clears it from the rest. Missing or invalid modes validate to Beside. Throws if
// no button matches.
function setActive(annotationButtons: Array<Element>, targetMode?: string) {
  const activeElements: Array<Element> = []
  targetMode = validateMode(targetMode)
  for (const el of annotationButtons) {
    if (el.getAttribute('value') === targetMode) {
      el.ariaCurrent = 'true'
      el.classList.add('selected')
      activeElements.push(el)
    } else {
      el.removeAttribute('aria-current')
      el.classList.remove('selected')
    }
  }

  if (!activeElements.length)
    throw new Error('No annotationBtn item is active for code annotation.')

  return activeElements
}

function displayAnnotationMode(annotationBtnItems: Array<Element>, targetMode?: string) {
  if (!targetMode || targetMode === annotationMode.Beside) {
    for (const el of annotationBtnItems) {
      el.closest('.annotate')?.classList.replace('inline', 'beside')
    }
  } else if (targetMode === annotationMode.Inline) {
    for (const el of annotationBtnItems) {
      el.closest('.annotate')?.classList.replace('beside', 'inline')
    }
  } else throw new Error('Invalid target mode set for annotation.')

  setActive(annotationBtnItems, targetMode)
}
