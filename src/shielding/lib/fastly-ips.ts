// Logic to get and store the current list of public Fastly IPs from the Fastly API: https://www.fastly.com/documentation/reference/api/utils/public-ip-list/

// Default returned from ➜ curl "https://api.fastly.com/public-ip-list"
export const DEFAULT_FASTLY_IPS: string[] = [
  '23.235.32.0/20',
  '43.249.72.0/22',
  '103.244.50.0/24',
  '103.245.222.0/23',
  '103.245.224.0/24',
  '104.156.80.0/20',
  '140.248.64.0/18',
  '140.248.128.0/17',
  '146.75.0.0/17',
  '151.101.0.0/16',
  '157.52.64.0/18',
  '167.82.0.0/17',
  '167.82.128.0/20',
  '167.82.160.0/20',
  '167.82.224.0/20',
  '172.111.64.0/18',
  '185.31.16.0/22',
  '199.27.72.0/21',
  '199.232.0.0/16',
]

let ipCache: string[] = []

export async function getPublicFastlyIPs(): Promise<string[]> {
  // Don't fetch the list in dev & testing, just use the defaults
  if (process.env.NODE_ENV !== 'production') {
    ipCache = DEFAULT_FASTLY_IPS
  }

  if (ipCache.length) {
    return ipCache
  }

  const endpoint = 'https://api.fastly.com/public-ip-list'
  let ips: string[] = []
  let attempt = 0

  while (attempt < 3) {
    try {
      const response = await fetch(endpoint)
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`)
      }
      const data = await response.json()
      if (data && Array.isArray(data.addresses)) {
        ips = data.addresses
        break
      } else {
        throw new Error('Invalid response structure')
      }
    } catch (error: any) {
      console.error(
        `Failed to fetch Fastly IPs: ${error.message}. Retrying ${3 - attempt} more times`,
      )
      attempt++
      if (attempt >= 3) {
        ips = DEFAULT_FASTLY_IPS
      }
    }
  }

  ipCache = ips
  return ips
}

// The IPs we check in the rate-limiter are in the form `X.X.X.X`
// But the IPs returned from the Fastly API are in the form `X.X.X.X/Y`
// For an IP in the rate-limiter, we want `X.X.X.*` to match `X.X.X.X/Y`
export async function isFastlyIP(ip: string): Promise<boolean> {
  // If IPs aren't initialized, fetch them
  if (!ipCache.length) {
    await getPublicFastlyIPs()
  }
  const parts = ip.split('.')
  const prefix = parts.slice(0, 3).join('.')
  return ipCache.some((fastlyIP) => fastlyIP.startsWith(prefix))
}
