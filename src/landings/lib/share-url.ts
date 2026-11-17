// The UTM keys a shared link keeps from the visitor's own URL. utm_medium is
// excluded because buildShareUrl always replaces it.
const CARRIED_UTM_KEYS = ['utm_source', 'utm_campaign']

export const SHARE_UTM_MEDIUM = 'share'

// Builds the link a visitor shares from a landing page. It drops every other
// query parameter (such as grid filters) so the recipient lands on the page as
// published, keeps the campaign so shared visits stay attributed to the event,
// and sets utm_medium=share so they can be told apart from first visits.
export function buildShareUrl(href: string): string {
  const current = new URL(href)
  const shared = new URL(current.pathname, current.origin)

  for (const key of CARRIED_UTM_KEYS) {
    const value = current.searchParams.get(key)
    if (value) shared.searchParams.set(key, value)
  }
  shared.searchParams.set('utm_medium', SHARE_UTM_MEDIUM)

  return shared.toString()
}

export type ShareOutcome = {
  // 'copied' and 'not-copied' are the clipboard result, whether or not a share was tried first.
  result: 'shared' | 'cancelled' | 'copied' | 'not-copied'
  // A share that failed for any reason other than the visitor closing the sheet.
  // Safari spends the click's user activation on that attempt, so the clipboard
  // fallback in the same click is likely to be refused too. The caller should
  // make the next click copy only, so it runs from a fresh gesture.
  shareFailed: boolean
}

type ShareApis = {
  share?: (data: { title: string; url: string }) => Promise<void>
  writeText: (text: string) => Promise<void>
}

// Shares through the native sheet where there is one, and copies otherwise.
// copyOnly skips the sheet, for the retry after a failed share.
export async function shareOrCopy(
  apis: ShareApis,
  data: { title: string; url: string },
  copyOnly = false,
): Promise<ShareOutcome> {
  let shareFailed = false
  if (!copyOnly && typeof apis.share === 'function') {
    try {
      await apis.share(data)
      return { result: 'shared', shareFailed }
    } catch (error) {
      // AbortError means the visitor closed the sheet, so don't copy behind their back.
      if (error instanceof DOMException && error.name === 'AbortError') {
        return { result: 'cancelled', shareFailed }
      }
      shareFailed = true
    }
  }
  try {
    await apis.writeText(data.url)
    return { result: 'copied', shareFailed }
  } catch {
    // Clipboard access can be denied; report it rather than claim success.
    return { result: 'not-copied', shareFailed }
  }
}
