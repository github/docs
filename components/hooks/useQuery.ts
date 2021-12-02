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

  let debug = false
  if (router.query.debug) {
    // Now `router.query.debug` is either string or any array of strings
    debug = Boolean(
      JSON.parse(Array.isArray(router.query.debug) ? router.query.debug[0] : router.query.debug)
    )
  } else if (router.query.debug === '') {
    // E.g. `?query=foo&debug` should be treated as truthy
    debug = true
  }

  return {
    query,
    debug,
  }
}
