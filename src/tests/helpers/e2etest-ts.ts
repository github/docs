import cheerio from 'cheerio'
import got, { Response, OptionsOfTextResponseBody, Method } from 'got'
import { omitBy, isUndefined } from 'lodash-es'

type ResponseTypes = 'buffer' | 'json' | 'text'
type ResponseTypeMap = {
  buffer: ArrayBuffer
  json: any
  text: string
}

interface GetOptions<ResponseType extends ResponseTypes = 'text', M extends Method = 'get'> {
  method?: M
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

interface ResponseWithHeaders<T> extends Response<T> {
  headers: Record<string, string>
}

// Cache to store DOM objects
const getDOMCache = new Map<string, cheerio.Root>()

/**
 * Makes an HTTP request using the specified method and options.
 *
 * @param route - The route to request.
 * @param options - Configuration options for the request.
 * @returns A promise that resolves to the HTTP response.
 */
export async function get<T extends ResponseTypes = 'text', M extends Method = 'get'>(
  route: string,
  options: GetOptions<T, M> = {},
): Promise<ResponseWithHeaders<ResponseTypeMap[T]>> {
  const {
    method = 'get',
    body,
    followRedirects = false,
    followAllRedirects = false,
    headers = {},
    responseType,
    retries = 0,
  } = options

  // Ensure the method is a valid function on `got`
  const fn = got[method as 'get']
  if (!fn || typeof fn !== 'function') {
    throw new Error(`No method function for '${method}'`)
  }

  // Construct the options for the `got` request, omitting undefined values
  const xopts: OptionsOfTextResponseBody = omitBy(
    {
      body,
      headers,
      retry: { limit: retries },
      throwHttpErrors: false,
      followRedirect: followAllRedirects || followRedirects,
      responseType: responseType || undefined,
    },
    isUndefined,
  )

  // Perform the HTTP request
  return (await fn(`http://localhost:4000${route}`, xopts)) as ResponseWithHeaders<
    ResponseTypeMap[T]
  >
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
): Promise<Response<string>> {
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
): Promise<Response<string>> {
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
): Promise<cheerio.Root> {
  const key = `${route}::${JSON.stringify(options)}`
  if (!getDOMCache.has(key)) {
    const { $ } = await getDOM(route, options)
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
 * @returns A promise that resolves to the loaded DOM object.
 */
export async function getDOM(
  route: string,
  options: GetDOMOptions = {},
): Promise<{ $: cheerio.Root; res: Response }> {
  const { headers, allow500s = false, allow404 = false, retries = 0 } = options
  const res = await get(route, { followRedirects: true, headers, retries })

  if (!allow500s && res.statusCode >= 500) {
    throw new Error(`Server error (${res.statusCode}) on ${route}`)
  }

  if (!allow404 && res.statusCode === 404) {
    throw new Error(`Page not found on ${route} (${res.statusCode})`)
  }

  const $ = cheerio.load(res.body || '', { xmlMode: true })

  return { $, res }
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
