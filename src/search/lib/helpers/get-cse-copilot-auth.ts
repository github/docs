import crypto from 'crypto'

// github/cse-copilot's API requires an HMAC-SHA256 signature with each request
export function getHmacWithEpoch() {
  const epochTime = getEpochTime().toString()
  // CSE_COPILOT_SECRET needs to be set for the api-ai-search tests to work
  if (process.env.NODE_ENV === 'test') {
    process.env.CSE_COPILOT_SECRET = 'mock-secret'
  }
  if (!process.env.CSE_COPILOT_SECRET) {
    throw new Error('CSE_COPILOT_SECRET is not defined')
  }
  const hmac = generateHmacSha256(process.env.CSE_COPILOT_SECRET, epochTime)
  return `${epochTime}.${hmac}`
}

// In seconds
function getEpochTime(): number {
  return Math.floor(Date.now() / 1000)
}

function generateHmacSha256(key: string, data: string): string {
  return crypto.createHmac('sha256', key).update(data).digest('hex')
}
