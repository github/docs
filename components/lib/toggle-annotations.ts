import Cookies from 'components/lib/cookies'
import { sendEvent, EventType } from 'src/events/components/events'

enum annotationMode {
  Beside = 'beside',
  Inline = 'inline',
}

/**
 * Validates if a given mode is one of expected annotation modes. If no acceptable mode is found, a default mode is returned.. Optionally, returns a default mode.
 * @param mode The mode to validate, ideally "#annotation-beside" or "#annotation-inline"
 * @param leaveNull Alters the return value of this function. If false, the function will return the mode that was passed in or, in the case of null, the default mode. If true, the function will return null instead of using the default mode.
 * @returns The validated mode, or null if leaveNull is true and no valid mode is found.
 */
function validateMode(mode?: string) {
  if (mode === annotationMode.Beside || mode === annotationMode.Inline) return mode
  // default to Beside
  else return annotationMode.Beside
}

export default function toggleAnnotation() {
  const annotationButtons = Array.from(document.querySelectorAll('div.BtnGroup button'))
  if (!annotationButtons.length) return

  const cookie = validateMode(Cookies.get('annotate-mode')) // will default to beside
  displayAnnotationMode(annotationButtons, cookie)

  // this loop adds event listeners for both the annotation buttons
  for (const annotationBtn of annotationButtons) {
    annotationBtn.addEventListener('click', (evt) => {
      evt.preventDefault()

      // validate the annotation mode and set the cookie with the valid mode
      const validMode = validateMode(annotationBtn.getAttribute('value')!)
      Cookies.set('annotate-mode', validMode!)
      sendEvent({
        type: EventType.preference,
        preference_name: 'code_display',
        preference_value: validMode,
      })

      // set and display the annotation mode
      setActive(annotationButtons, validMode)
      displayAnnotationMode(annotationButtons, validMode)
    })
  }
}

// sets the active element's aria-current, if no targetMode is set we default to "Beside", errors if it can't set either Beside or the passed in targetMode
function setActive(annotationButtons: Array<Element>, targetMode?: string) {
  const activeElements: Array<Element> = []
  targetMode = validateMode(targetMode)
  annotationButtons.forEach((el) => {
    if (el.getAttribute('value') === targetMode) {
      el.ariaCurrent = 'true'
      el.classList.add('selected')
      activeElements.push(el)
    } else {
      el.removeAttribute('aria-current')
      el.classList.remove('selected')
    }
  })

  if (!activeElements.length)
    throw new Error('No annotationBtn item is active for code annotation.')

  return activeElements
}

// displays the chosen annotation mode
function displayAnnotationMode(annotationBtnItems: Array<Element>, targetMode?: string) {
  if (!targetMode || targetMode === annotationMode.Beside)
    annotationBtnItems.forEach((el) => {
      el.closest('.annotate')?.classList.replace('inline', 'beside')
    })
  else if (targetMode === annotationMode.Inline)
    annotationBtnItems.forEach((el) => {
      el.closest('.annotate')?.classList.replace('beside', 'inline')
    })
  else throw new Error('Invalid target mode set for annotation.')

  setActive(annotationBtnItems, targetMode)
}
