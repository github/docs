import sleep from 'await-sleep'
import got from 'got'

const ONE_SECOND = 1000

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

export default async function purgeEdgeCache() {
  // Give the app some extra time to wake up before the thundering herd of
  // Fastly requests.
  const delayBeforeFirstPurge = 30 * ONE_SECOND

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
