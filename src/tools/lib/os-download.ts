import { parseUserAgent } from '@/events/components/user-agent'

export type DownloadKey = 'mac' | 'mac-intel' | 'windows' | 'windows-arm' | 'linux' | 'linux-arm'
export type Arch = 'arm' | 'x86' | 'unknown'

export const DOWNLOAD_ATTRIBUTE_PREFIX = 'data-os-download-'

const OS_NAMES: Record<string, string> = {
  mac: 'macOS',
  windows: 'Windows',
  linux: 'Linux',
}

type DetectInput = {
  os: string
  arch: Arch
  // iPadOS and Android tablets in desktop mode send Mac or Linux desktop user agents.
  // Touch support tells them apart, at the cost of skipping Linux laptops with touchscreens.
  isTouch?: boolean
}

// Unknown architecture follows github.com/features/ai/github-app:
// macOS defaults to Apple silicon, and Windows and Linux default to x64.
export function pickDownloadKey({ os, arch, isTouch }: DetectInput): DownloadKey | null {
  if (isTouch && (os === 'mac' || os === 'linux')) return null
  if (os === 'mac') return arch === 'x86' ? 'mac-intel' : 'mac'
  if (os === 'windows') return arch === 'arm' ? 'windows-arm' : 'windows'
  if (os === 'linux') return arch === 'arm' ? 'linux-arm' : 'linux'
  return null
}

export function osNameForKey(key: DownloadKey): string {
  return OS_NAMES[key.split('-')[0]]
}

// Firefox on Linux reports the real architecture in the user agent.
// Chromium freezes it to x86_64, so prefer client hints when they exist.
export function archFromUserAgent(ua: string): Arch {
  const lower = ua.toLowerCase()
  if (/\b(aarch64|arm64|armv\d)/.test(lower)) return 'arm'
  if (/\bx86_64\b/.test(lower)) return 'x86'
  return 'unknown'
}

type UADataLike = {
  getHighEntropyValues?: (hints: string[]) => Promise<{ architecture?: string }>
}

export type NavigatorLike = {
  userAgent: string
  maxTouchPoints?: number
  userAgentData?: UADataLike
}

async function archFromClientHints(nav: NavigatorLike): Promise<Arch> {
  try {
    const values = await nav.userAgentData?.getHighEntropyValues?.(['architecture'])
    if (values?.architecture === 'arm') return 'arm'
    if (values?.architecture === 'x86') return 'x86'
  } catch {
    // Browsers can reject high entropy hints; fall back to the user agent.
  }
  return 'unknown'
}

export async function detectDownloadKey(nav: NavigatorLike): Promise<DownloadKey | null> {
  const { os } = parseUserAgent(nav.userAgent)
  let arch = await archFromClientHints(nav)
  // Mac and Windows user agents freeze the architecture, so only trust it on Linux.
  if (arch === 'unknown' && os === 'linux') arch = archFromUserAgent(nav.userAgent)
  return pickDownloadKey({ os, arch, isTouch: (nav.maxTouchPoints ?? 0) > 1 })
}
