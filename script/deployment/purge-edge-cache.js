import sleep from 'await-sleep'
import got from 'got'

const ONE_SECOND = 1000
const ONE_MINUTE = 60 * ONE_SECOND

async function purgeFastlyBySurrogateKey({ apiToken, serviceId, surrogateKey }) {
  const key = surrogateKey
  const safeServiceId = encodeURIComponent(serviceId)

  const headers = {
    'fastly-key': apiToken,
    accept: 'application/json',
    'fastly-soft-purge': '1',
  }
  const requestPath = `https://api.fastly.com/service/${safeServiceId}/purge/${key}`
  return got.post(requestPath, { headers, json: true })
}

// This delay (includeDelayForPreboot) can potentially be removed in the
// future if the deployment workflow is updated to include a delay to offset
// Heroku Preboot before this script runs.
export default async function purgeEdgeCache({ includeDelayForPreboot = true } = {}) {
  // If Heroku Preboot is enabled, then there is an additional delay of at
  // least 2 minutes before the new dynos are swapped into active serving.
  const delayForPrebootSwap = 2 * ONE_MINUTE + 30 * ONE_SECOND

  // Give the app some extra time to wake up before the thundering herd of
  // Fastly requests.
  const delayBeforeFirstPurge = ONE_MINUTE

  // Evidence has shown that it's necessary to purge twice to ensure all
  // customers see fresh content.
  const delayBeforeSecondPurge = 5 * ONE_SECOND

  console.log('Fastly purgeEdgeCache initialized...')

  const { FASTLY_TOKEN, FASTLY_SERVICE_ID, FASTLY_SURROGATE_KEY } = process.env
  if (!FASTLY_TOKEN || !FASTLY_SERVICE_ID || !FASTLY_SURROGATE_KEY) {
    console.log('Fastly env vars not detected; skipping purgeEdgeCache step')
    return
  }

  const purgingParams = {
    apiToken: FASTLY_TOKEN,
    serviceId: FASTLY_SERVICE_ID,
    surrogateKey: FASTLY_SURROGATE_KEY,
  }

  if (includeDelayForPreboot) {
    console.log('Waiting for Heroku Preboot to swap dynos...')
    await sleep(delayForPrebootSwap)
  }

  console.log('Waiting extra time to prevent a Thundering Herd problem...')
  await sleep(delayBeforeFirstPurge)

  console.log('Attempting first Fastly purge...')
  const firstPurge = await purgeFastlyBySurrogateKey(purgingParams)
  console.log('First Fastly purge result:', firstPurge.body || firstPurge)

  console.log('Waiting to purge a second time...')
  await sleep(delayBeforeSecondPurge)

  console.log('Attempting second Fastly purge...')
  const secondPurge = await purgeFastlyBySurrogateKey(purgingParams)
  console.log('Second Fastly purge result:', secondPurge.body || secondPurge)
}
