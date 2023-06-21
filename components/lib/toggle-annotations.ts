import Cookies from 'components/lib/cookies'

enum annotationMode {
  Beside = '#annotation-beside',
  Inline = '#annotation-inline',
}

/**
 * Validates if a given mode is one of expected annotation modes. If no acceptable mode is found, a default mode is returned.. Optionally, returns a default mode.
 * @param mode The mode to validate, ideally "#annotation-beside" or "#annotation-inline"
 * @param leaveNull Alters the return value of this function. If false, the function will return the mode that was passed in or, in the case of null, the default mode. If true, the function will return null instead of using the default mode.
 * @returns The validated mode, or null if leaveNull is true and no valid mode is found.
 */
function validateMode(mode?: string, leaveNull?: boolean) {
  if (mode === annotationMode.Beside || mode === annotationMode.Inline || (!mode && leaveNull))
    return mode
  else {
    if (leaveNull) {
      console.warn(`Leaving null.`)
      return
    }

    // default to beside
    return annotationMode.Beside
  }
}

export default function toggleAnnotation() {
  const subNavElements = Array.from(document.querySelectorAll('a.subnav-item'))
  if (!subNavElements.length) return

  const cookie = validateMode(Cookies.get('annotate-mode')) // will default to beside
  displayAnnotationMode(subNavElements, cookie)

  // this loop adds event listeners for both the annotation buttons
  for (const subnav of subNavElements) {
    subnav.addEventListener('click', (evt) => {
      evt.preventDefault()

      // returns either:
      // 1. if href is correct, the href that was passed in
      // 2. if href is missing, null
      const validMode = validateMode(subnav.getAttribute('href')!)

      Cookies.set('annotate-mode', validMode!)

      setActive(subNavElements, validMode)
      displayAnnotationMode(subNavElements, validMode)
    })
  }
}

// sets the active element's aria-current, if no targetMode is set we default to "Beside", errors if it can't set either Beside or the passed in targetMode
function setActive(subNavElements: Array<Element>, targetMode?: string) {
  const activeElements: Array<Element> = []
  targetMode = validateMode(targetMode)

  subNavElements.forEach((el) => {
    if (el.getAttribute('href') === targetMode) {
      el.ariaCurrent = 'true'
      activeElements.push(el)
    } else el.removeAttribute('aria-current')
  })

  if (!activeElements.length) throw new Error('No subnav item is active for code annotation.')

  return activeElements
}

// displays the chosen annotation mode
function displayAnnotationMode(subNavItems: Array<Element>, targetMode?: string) {
  if (!targetMode || targetMode === annotationMode.Beside)
    subNavItems.forEach((el) => {
      el.closest('.annotate')?.classList.replace('inline', 'beside')
    })
  else if (targetMode === annotationMode.Inline)
    subNavItems.forEach((el) => {
      el.closest('.annotate')?.classList.replace('beside', 'inline')
    })
  else throw new Error('Invalid target mode set for annotation.')

  setActive(subNavItems, targetMode)
}
