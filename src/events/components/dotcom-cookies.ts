import { isHeadless } from './is-headless'

// We cannot use Cookies.get() on the frontend for httpOnly cookies
// so we need to make a request to the server to get the cookies

type DotcomCookies = {
  isStaff?: boolean
}

let cachedCookies: DotcomCookies | null = null
let inFlightPromise: Promise<DotcomCookies> | null = null

const GET_COOKIES_ENDPOINT = '/api/cookies'
const LOCAL_STORAGE_KEY = 'dotcomCookies'

// Fetches httpOnly cookies from the server and caches the result.
// We don't want to do this every time because of the load it would place on our servers
// So on success, the data is stored in local storage and reused on subsequent loads
// On failure, returns default empty values
// If a user is staff and they didn't happen to be logged in when these cookies were saved,
// we can instruct them as needed to update the cookies and correctly set the isStaff flag.
async function fetchCookies(): Promise<DotcomCookies> {
  if (isHeadless()) return { isStaff: false }

  if (cachedCookies) {
    return cachedCookies
  }

  const storedCookies = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (storedCookies) {
    try {
      cachedCookies = JSON.parse(storedCookies) as DotcomCookies
      return cachedCookies
    } catch (e) {
      console.error('Error parsing cookies from local storage:', e)
      localStorage.removeItem(LOCAL_STORAGE_KEY)
    }
  }

  if (inFlightPromise) {
    return inFlightPromise
  }

  inFlightPromise = (async () => {
    try {
      const response = await fetch(GET_COOKIES_ENDPOINT)
      if (!response.ok) {
        throw new Error(`Failed to fetch cookies: ${response.statusText}`)
      }
      const data = (await response.json()) as DotcomCookies
      cachedCookies = data
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
      } catch (e) {
        console.error('Error storing cookies in local storage:', e)
      }
      return data
    } catch (err) {
      console.error('Error fetching cookies:', err)
      const defaultCookies: DotcomCookies = {
        isStaff: false,
      }
      cachedCookies = defaultCookies
      return defaultCookies
    } finally {
      inFlightPromise = null
    }
  })()

  return inFlightPromise
}

export async function getIsStaff(): Promise<boolean> {
  const cookies = await fetchCookies()
  return cookies.isStaff || false
}
