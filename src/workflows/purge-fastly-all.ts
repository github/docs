import { fetchWithRetry } from '@/frame/lib/fetch-utils'

// Purges the ENTIRE Fastly cache for the docs service via Fastly's purge_all
// endpoint. This is the workflow equivalent of the "Purge all" button in the
// Fastly UI. It is intentionally a separate, manually triggered entry point:
// routine post-deploy purging is handled by
// `purge-fastly-edge-cache-per-language.ts`, and a gentler "refresh everything"
// can be done by running the Purge Fastly workflow with an empty languages
// input (a soft surrogate-key purge of every language).
//
// NOTE: Fastly's purge_all is always a HARD purge. The `fastly-soft-purge`
// header has no effect on this endpoint, so every object is evicted immediately
// and origin sees a traffic spike while the cache refills. Only reach for this
// when a targeted purge will not do.
// https://www.fastly.com/documentation/reference/api/purging/

async function purgeFastlyAll({ apiToken, serviceId }: { apiToken: string; serviceId: string }) {
  const safeServiceId = encodeURIComponent(serviceId)
  const requestPath = `https://api.fastly.com/service/${safeServiceId}/purge_all`
  const response = await fetchWithRetry(
    requestPath,
    {
      method: 'POST',
      headers: {
        'fastly-key': apiToken,
        accept: 'application/json',
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
    // Fastly puts permission/feature-disabled details in the response body,
    // which is often the only actionable signal, so surface it best-effort.
    let body = ''
    try {
      body = await response.text()
    } catch {
      body = ''
    }
    throw new Error(
      `Fastly purge_all failed: HTTP ${response.status} ${response.statusText}${body ? `: ${body}` : ''}`,
    )
  }
  return response
}

const { FASTLY_TOKEN, FASTLY_SERVICE_ID } = process.env
if (!FASTLY_TOKEN || !FASTLY_SERVICE_ID) {
  throw new Error('Fastly env vars not detected; refusing to run purge_all')
}

console.log('Attempting Fastly purge_all (hard purge of the entire cache)...')
const result = await purgeFastlyAll({ apiToken: FASTLY_TOKEN, serviceId: FASTLY_SERVICE_ID })
console.log('Fastly purge_all result:', result.status)
