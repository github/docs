import kill from 'kill-port'
import portUsed from 'port-used'
import got, { RequestError } from 'got'

export const PORT = 4000

// By default it's on
export const START_JEST_SERVER = Boolean(JSON.parse(process.env.START_JEST_SERVER || 1))

export async function isServerHealthy() {
  try {
    const res = await got.head(`http://localhost:${PORT}/healthz`, { retry: { limit: 0 } })
    return res.statusCode === 200
  } catch (err) {
    // This exception is thrown if you can't even connect.
    if (err instanceof RequestError) {
      return false
    }
    throw err
  }
}

export function killServer() {
  kill(PORT, 'tcp')
    .then(() => {
      console.log(`Killed what was on :${PORT}`)
    })
    .catch((error) => {
      console.log(`Unable to kill whatever was on :${PORT}:`, error)
    })
}

export async function isPortRunning() {
  return await portUsed.check(PORT)
}
