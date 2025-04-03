// Logic to get and store the current list of public Fastly IPs from the Fastly API: https://www.fastly.com/documentation/reference/api/utils/public-ip-list/

import ipaddr, { IPv4, IPv6 } from 'ipaddr.js'

type IPRangeArr = [IPv4 | IPv6, number][]

// Default returned from ➜ curl "https://api.fastly.com/public-ip-list"
export const DEFAULT_FASTLY_IPS: IPRangeArr = [
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
].map((cidr) => ipaddr.parseCIDR(cidr))

let ipRangeCache: IPRangeArr = []

export async function getPublicFastlyIPs(): Promise<IPRangeArr> {
  // Don't fetch the list in dev & testing, just use the defaults
  if (process.env.NODE_ENV !== 'production') {
    ipRangeCache = DEFAULT_FASTLY_IPS
  }

  if (ipRangeCache.length) {
    return ipRangeCache
  }

  const endpoint = 'https://api.fastly.com/public-ip-list'
  let attempt = 0

  while (attempt < 3) {
    try {
      const response = await fetch(endpoint)
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`)
      }
      const data = await response.json()
      if (data && Array.isArray(data.addresses)) {
        ipRangeCache = data.addresses.map((cidr: string) => ipaddr.parseCIDR(cidr))
        return ipRangeCache
      } else {
        throw new Error('Invalid response structure')
      }
    } catch (error: any) {
      console.error(
        `Failed to fetch Fastly IPs: ${error.message}. Retrying ${3 - attempt} more times`,
      )
      attempt++
    }
  }

  ipRangeCache = DEFAULT_FASTLY_IPS
  return ipRangeCache
}

// The IPs we check in the rate-limiter are in the form `X.X.X.X`
// But the IPs returned from the Fastly API are in the form `X.X.X.X/Y`
// For an IP in the rate-limiter, we want `X.X.X.*` to match `X.X.X.X/Y`
export async function isFastlyIP(ip: string): Promise<boolean> {
  // If IPs aren't initialized, fetch them
  if (!ipRangeCache.length) {
    await getPublicFastlyIPs()
  }
  if (!ip) return false // localhost
  const addr = ipaddr.parse(ip)
  return ipRangeCache.some((range) => addr.match(range))
}
