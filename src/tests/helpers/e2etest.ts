import { load, type CheerioAPI } from 'cheerio'
import { fetchWithRetry } from '@/frame/lib/fetch-utils'
import { omitBy, isUndefined } from 'lodash-es'

type ResponseTypes = 'buffer' | 'json' | 'text'
type ResponseTypeMap = {
  buffer: ArrayBuffer
  json: unknown
  text: string
}

interface GetOptions<ResponseType extends ResponseTypes = 'text'> {
  method?: string
  body?: RequestInit['body']
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

type CachedDOMResult = CheerioAPI & { res: ResponseWithHeaders<string>; $: CheerioAPI }

const getDOMCache = new Map<string, CachedDOMResult>()

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

  const fetchOptions: RequestInit = omitBy(
    {
      method: method.toUpperCase(),
      body: requestBody,
      headers: headers as HeadersInit,
      redirect: followAllRedirects || followRedirects ? 'follow' : 'manual',
    },
    isUndefined,
  )

  const response = await fetchWithRetry(`http://localhost:4000${route}`, fetchOptions, {
    retries,
    throwHttpErrors: false,
  })

  let responseBody: ResponseTypeMap[T]
  if (responseType === 'json') {
    responseBody = (await response.json()) as ResponseTypeMap[T]
  } else if (responseType === 'buffer') {
    const arrayBuffer = await response.arrayBuffer()
    responseBody = arrayBuffer as ResponseTypeMap[T]
  } else {
    responseBody = (await response.text()) as ResponseTypeMap[T]
  }

  const headersRecord: Record<string, string> = {}
  for (const [key, value] of response.headers) {
    headersRecord[key] = value
  }

  // Return response in got-compatible format
  return {
    body: responseBody,
    statusCode: response.status,
    headers: headersRecord,
    url: response.url,
    ok: response.ok,
  } as ResponseWithHeaders<ResponseTypeMap[T]>
}

export async function head(
  route: string,
  opts: { followRedirects?: boolean } = { followRedirects: false },
): Promise<ResponseWithHeaders<string>> {
  const res = await get(route, { method: 'head', followRedirects: opts.followRedirects })
  return res
}

export function post(
  route: string,
  opts: Omit<GetOptions, 'method'> = {},
): Promise<ResponseWithHeaders<string>> {
  return get(route, { ...opts, method: 'post' })
}

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

export async function getDOM(route: string, options: GetDOMOptions = {}): Promise<CachedDOMResult> {
  const { headers, allow500s = false, allow404 = false, retries = 0 } = options
  const res = await get(route, { followRedirects: true, headers, retries })

  if (!allow500s && res.statusCode >= 500) {
    throw new Error(`Server error (${res.statusCode}) on ${route}`)
  }

  if (!allow404 && res.statusCode === 404) {
    throw new Error(`Page not found on ${route} (${res.statusCode})`)
  }

  const $ = load(res.body || '', { xmlMode: true })
  const result = $ as CachedDOMResult
  // Attach res to the cheerio object for backward compatibility
  result.res = res
  // Attach $ to itself for destructuring compatibility
  result.$ = result

  return result
}

export async function getJSON<T = unknown>(
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
