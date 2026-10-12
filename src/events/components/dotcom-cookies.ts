import { isHeadless } from './is-headless'

// httpOnly cookies require a server request because frontend code cannot read them.

type DotcomCookies = {
  isStaff?: boolean
}

let cachedCookies: DotcomCookies | null = null
let inFlightPromise: Promise<DotcomCookies> | null = null

const GET_COOKIES_ENDPOINT = '/api/cookies'
const LOCAL_STORAGE_KEY = 'dotcomCookies'

// Cache cookie values to avoid repeated load on the cookies endpoint.
// Successful responses stay in localStorage with no expiry, so a stored isStaff=false persists after sign-in.
// Staff must clear the dotcomCookies entry before reloading to refresh experiment targeting.
// Failed requests cache isStaff=false in memory until the next page load.
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
