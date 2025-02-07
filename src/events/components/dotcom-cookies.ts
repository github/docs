// We cannot use Cookies.get() on the frontend for httpOnly cookies
// so we need to make a request to the server to get the cookies

type DotcomCookies = {
  dotcomUsername?: string
  isStaff?: boolean
}

let cachedCookies: DotcomCookies | null = null
let inFlightPromise: Promise<DotcomCookies> | null = null
let tries = 0

const GET_COOKIES_ENDPOINT = '/api/cookies'
const MAX_TRIES = 3

// Fetches httpOnly cookies from the server and cache the result
// We use an in-flight promise to avoid duplicate requests
async function fetchCookies(): Promise<DotcomCookies> {
  if (cachedCookies) {
    return cachedCookies
  }

  // If request is already in progress, return the same promise
  if (inFlightPromise) {
    return inFlightPromise
  }

  if (tries > MAX_TRIES) {
    // In prod, fail without a serious error
    console.error('Failed to fetch cookies after 3 tries')
    // In dev, be loud about the issue
    if (process.env.NODE_ENV === 'development') {
      throw new Error('Failed to fetch cookies after 3 tries')
    }

    return Promise.resolve({})
  }

  inFlightPromise = fetch(GET_COOKIES_ENDPOINT)
    .then((response) => {
      tries++
      if (!response.ok) {
        throw new Error(`Failed to fetch cookies: ${response.statusText}`)
      }
      return response.json() as Promise<DotcomCookies>
    })
    .then((data) => {
      cachedCookies = data
      return data
    })
    .finally(() => {
      // Clear the in-flight promise regardless of success or failure
      // On success, subsequent calls will return the cached value
      // On failure, subsequent calls will retry the request up to MAX_TRIES times
      inFlightPromise = null
    })

  return inFlightPromise
}

export async function getIsStaff(): Promise<boolean> {
  const cookies = await fetchCookies()
  return cookies.isStaff || false
}

export async function getDotcomUsername(): Promise<string> {
  const cookies = await fetchCookies()
  return cookies.dotcomUsername || ''
}
