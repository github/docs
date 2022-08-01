import { useRouter } from 'next/router'

type QueryInfo = {
  query: string
  debug: boolean
}
export const useQuery = (): QueryInfo => {
  const router = useRouter()
  const query =
    router.query.query && Array.isArray(router.query.query)
      ? router.query.query[0]
      : router.query.query || ''

  const debug = parseDebug(router.query.debug)

  return {
    query,
    debug,
  }
}

function parseDebug(debug: string | Array<string> | undefined) {
  if (debug === '') {
    // E.g. `?query=foo&debug` should be treated as truthy
    return true
  }

  if (!debug) {
    return false
  }

  // Now `router.query.debug` is either string or any array of strings
  if (Array.isArray(debug)) {
    debug = debug[0]
  }

  try {
    debug = JSON.parse(debug)
    return Boolean(debug)
  } catch (e) {}

  return false
}
