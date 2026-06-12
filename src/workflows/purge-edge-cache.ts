import { fetchWithRetry } from '@/frame/lib/fetch-utils'

async function purgeFastlyBySurrogateKey({
  apiToken,
  serviceId,
  surrogateKey,
}: {
  apiToken: string
  serviceId: string
  surrogateKey: string
}) {
  const safeServiceId = encodeURIComponent(serviceId)
  const safeSurrogateKey = encodeURIComponent(surrogateKey)

  const headers = {
    'fastly-key': apiToken,
    accept: 'application/json',
    'fastly-soft-purge': '1',
  }
  const requestPath = `https://api.fastly.com/service/${safeServiceId}/purge/${safeSurrogateKey}`
  const response = await fetchWithRetry(
    requestPath,
    {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    },
    {
      retries: 0,
      timeout: 30_000,
      throwHttpErrors: false,
    },
  )
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`)
  }
  return response
}

export default async function purgeEdgeCache(surrogateKey: string | undefined) {
  if (!surrogateKey) {
    throw new Error('No key set and/or no FASTLY_SURROGATE_KEY env var set')
  }
  console.log(`Fastly purgeEdgeCache initialized for: '${surrogateKey}'`)

  const { FASTLY_TOKEN, FASTLY_SERVICE_ID } = process.env
  if (!FASTLY_TOKEN || !FASTLY_SERVICE_ID) {
    throw new Error('Fastly env vars not detected; skipping purgeEdgeCache step')
  }

  const purgingParams = {
    apiToken: FASTLY_TOKEN,
    serviceId: FASTLY_SERVICE_ID,
    surrogateKey,
  }

  console.log('Attempting Fastly purge...')
  const result = await purgeFastlyBySurrogateKey(purgingParams)
  console.log('Fastly purge result:', result.status)
}
