// We cannot use Cookies.get() on the frontend for httpOnly cookies
// so we need to make a request to the server to get the cookies

type DotcomCookies = {
  dotcomUsername?: string
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
  // Return the cached object if we have it in memory.
  if (cachedCookies) {
    return cachedCookies
  }

  // Try to load from local storage.
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

  // If a request is already in progress, reuse it.
  if (inFlightPromise) {
    return inFlightPromise
  }

  // Make a single fetch request to the backend.
  inFlightPromise = fetch(GET_COOKIES_ENDPOINT)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch cookies: ${response.statusText}`)
      }
      return response.json() as Promise<DotcomCookies>
    })
    .then((data) => {
      cachedCookies = data
      // Store the fetched cookies in local storage for future use.
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
      } catch (e) {
        console.error('Error storing cookies in local storage:', e)
      }
      return data
    })
    .catch((err) => {
      console.error('Error fetching cookies:', err)
      // On failure, return default values.
      const defaultCookies: DotcomCookies = {
        dotcomUsername: '',
        isStaff: false,
      }
      cachedCookies = defaultCookies
      return defaultCookies
    })
    .finally(() => {
      // Clear the in-flight promise regardless of success or failure.
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
