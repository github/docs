import murmur from 'imurmurhash'
import { v4 as uuidv4 } from 'uuid'
import Cookies from 'js-cookie'
import getCsrf from './get-csrf'

const TREATMENT = 'TREATMENT'
const CONTROL = 'CONTROL'
const COOKIE_NAME = '_docs-experiment'

let cookieValue

export function getUserExperimentId () {
  if (cookieValue) return cookieValue
  cookieValue = Cookies.get(COOKIE_NAME)
  if (cookieValue) return cookieValue
  cookieValue = uuidv4()
  Cookies.set(COOKIE_NAME, cookieValue, {
    secure: true,
    sameSite: 'strict',
    expires: 365
  })
  return cookieValue
}

export function bucket (test) {
  const id = getUserExperimentId()
  const hash = murmur(test).hash(id).result()
  return hash % 2 ? TREATMENT : CONTROL
}

export async function sendSuccess (test) {
  return fetch('/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'CSRF-Token': getCsrf()
    },
    body: JSON.stringify({
      type: 'EXPERIMENT',
      user: getUserExperimentId(),
      test,
      group: bucket(test).toLowerCase(),
      success: 'yes'
    })
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
}
