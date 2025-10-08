import cheerio from 'cheerio'
import { fetchWithRetry } from '@/frame/lib/fetch-utils'
import { omitBy, isUndefined } from 'lodash-es'

type ResponseTypes = 'buffer' | 'json' | 'text'
type ResponseTypeMap = {
  buffer: ArrayBuffer
  json: any
  text: string
}

interface GetOptions<ResponseType extends ResponseTypes = 'text'> {
  method?: string
  body?: any
  followRedirects?: boolean
  followAllRedirects?: boolean
  headers?: Record<string, string>
  responseType?: ResponseType
  retries?: number
}

interface GetDOMOptions {
  headers?: Record<string, string>
  allow500s?: boolean
  allow404?: boolean
  retries?: number
}

interface ResponseWithHeaders<T> {
  body: T
  statusCode: number
  headers: Record<string, string>
  url: string
  ok: boolean
}

// Type alias for cached DOM results to improve maintainability
type CachedDOMResult = cheerio.Root & { res: ResponseWithHeaders<string>; $: cheerio.Root }

// Cache to store DOM objects
const getDOMCache = new Map<string, CachedDOMResult>()

/**
 * Makes an HTTP request using the specified method and options.
 *
 * @param route - The route to request.
 * @param options - Configuration options for the request.
 * @returns A promise that resolves to the HTTP response.
 */
export async function get<T extends ResponseTypes = 'text'>(
  route: string,
  options: GetOptions<T> = {},
): Promise<ResponseWithHeaders<ResponseTypeMap[T]>> {
  const {
    method = 'get',
    body: requestBody,
    followRedirects = false,
    followAllRedirects = false,
    headers = {},
    responseType,
    retries = 0,
  } = options

  // Construct the options for the fetch request
  const fetchOptions: RequestInit = omitBy(
    {
      method: method.toUpperCase(),
      body: requestBody,
      headers: headers as HeadersInit,
      redirect: followAllRedirects || followRedirects ? 'follow' : 'manual',
    },
    isUndefined,
  )

  // Perform the HTTP request
  const response = await fetchWithRetry(`http://localhost:4000${route}`, fetchOptions, {
    retries,
    throwHttpErrors: false,
  })

  // Get response body based on responseType
  let responseBody: ResponseTypeMap[T]
  if (responseType === 'json') {
    responseBody = (await response.json()) as ResponseTypeMap[T]
  } else if (responseType === 'buffer') {
    const arrayBuffer = await response.arrayBuffer()
    responseBody = arrayBuffer as ResponseTypeMap[T]
  } else {
    responseBody = (await response.text()) as ResponseTypeMap[T]
  }

  // Convert headers to record format
  const headersRecord: Record<string, string> = {}
  response.headers.forEach((value, key) => {
    headersRecord[key] = value
  })

  // Return response in got-compatible format
  return {
    body: responseBody,
    statusCode: response.status,
    headers: headersRecord,
    url: response.url,
    ok: response.ok,
  } as ResponseWithHeaders<ResponseTypeMap[T]>
}

/**
 * Makes a HEAD HTTP request to the specified route.
 *
 * @param route - The route to request.
 * @param opts - Options for following redirects.
 * @returns A promise that resolves to the HTTP response.
 */
export async function head(
  route: string,
  opts: { followRedirects?: boolean } = { followRedirects: false },
): Promise<ResponseWithHeaders<string>> {
  const res = await get(route, { method: 'head', followRedirects: opts.followRedirects })
  return res
}

/**
 * Makes a POST HTTP request to the specified route.
 *
 * @param route - The route to request.
 * @param opts - Options for the request.
 * @returns A promise that resolves to the HTTP response.
 */
export function post(
  route: string,
  opts: Omit<GetOptions, 'method'> = {},
): Promise<ResponseWithHeaders<string>> {
  return get(route, { ...opts, method: 'post' })
}

/**
 * Retrieves a cached DOM object for the specified route and options.
 * If the DOM is not cached, it fetches and caches it.
 *
 * @param route - The route to request.
 * @param options - Options for fetching the DOM.
 * @returns A promise that resolves to the cached DOM object.
 */
export async function getDOMCached(
  route: string,
  options: GetDOMOptions = {},
): Promise<CachedDOMResult> {
  const key = `${route}::${JSON.stringify(options)}`
  if (!getDOMCache.has(key)) {
    const $ = await getDOM(route, options)
    getDOMCache.set(key, $)
  }
  // The non-null assertion is safe here because we've just set the key if it didn't exist
  return getDOMCache.get(key)!
}

/**
 * Fetches the DOM for the specified route and options.
 *
 * @param route - The route to request.
 * @param options - Options for fetching the DOM.
 * @returns A promise that resolves to the loaded DOM object with res attached and destructurable.
 */
export async function getDOM(route: string, options: GetDOMOptions = {}): Promise<CachedDOMResult> {
  const { headers, allow500s = false, allow404 = false, retries = 0 } = options
  const res = await get(route, { followRedirects: true, headers, retries })

  if (!allow500s && res.statusCode >= 500) {
    throw new Error(`Server error (${res.statusCode}) on ${route}`)
  }

  if (!allow404 && res.statusCode === 404) {
    throw new Error(`Page not found on ${route} (${res.statusCode})`)
  }

  const $ = cheerio.load(res.body || '', { xmlMode: true })
  const result = $ as CachedDOMResult
  // Attach res to the cheerio object for backward compatibility
  result.res = res
  // Attach $ to itself for destructuring compatibility
  result.$ = result

  return result
}

/**
 * Fetches and parses JSON from the specified route.
 *
 * @param route - The route to request.
 * @param opts - Options for the request.
 * @returns A promise that resolves to the parsed JSON object.
 */
export async function getJSON<T = any>(
  route: string,
  opts: Omit<GetOptions, 'method'> = {},
): Promise<T> {
  const res = await get(route, { ...opts, followRedirects: true })

  if (res.statusCode >= 500) {
    throw new Error(`Server error (${res.statusCode}) on ${route}`)
  }

  if (res.statusCode >= 400) {
    console.warn(`${res.statusCode} on ${route} and the response might not be JSON`)
  }

  return JSON.parse(res.body)
}
