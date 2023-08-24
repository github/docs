import got from 'got'

// Because we use shielding, it's recommended that you purge twice
// so it purges the edge nodes *and* the origin.
// The documentation says:
//
//    One solution to this race condition problem is simply to purge
//    twice. For purge-all operations, the two purges should be
//    around 30 seconds apart and, for single object and surrogate
//    key purges, around 2 seconds apart.
//
// See https://developer.fastly.com/learning/concepts/purging/#shielding
const DELAY_BEFORE_FIRST_PURGE = 0 * 1000
const DELAY_BEFORE_SECOND_PURGE = 2 * 1000

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function purgeFastlyBySurrogateKey({ apiToken, serviceId, surrogateKey }) {
  const safeServiceId = encodeURIComponent(serviceId)

  const headers = {
    'fastly-key': apiToken,
    accept: 'application/json',
    'fastly-soft-purge': '1',
  }
  const requestPath = `https://api.fastly.com/service/${safeServiceId}/purge/${surrogateKey}`
  return got.post(requestPath, { headers, json: true })
}

export default async function purgeEdgeCache(
  surrogateKey,
  {
    purgeTwice = true,
    delayBeforeFirstPurge = DELAY_BEFORE_FIRST_PURGE,
    delayBeforeSecondPurge = DELAY_BEFORE_SECOND_PURGE,
  } = {},
) {
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

  // Give the app some extra time to wake up before the thundering herd of
  // Fastly requests.
  if (delayBeforeFirstPurge) {
    console.log('Waiting extra time to prevent a Thundering Herd problem...')
    await sleep(delayBeforeFirstPurge)
  }

  console.log('Attempting first Fastly purge...')
  const firstPurge = await purgeFastlyBySurrogateKey(purgingParams)
  console.log('First Fastly purge result:', firstPurge.body || firstPurge)

  // See comment above about why we purge twice. (Hint, it's shielding)
  if (purgeTwice) {
    console.log('Waiting to purge a second time...')
    await sleep(delayBeforeSecondPurge)

    console.log('Attempting second Fastly purge...')
    const secondPurge = await purgeFastlyBySurrogateKey(purgingParams)
    console.log('Second Fastly purge result:', secondPurge.body || secondPurge)
  }
}
