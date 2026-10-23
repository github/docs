type InputState = {
  button: number
  metaKey: boolean
  ctrlKey: boolean
  shiftKey: boolean
  altKey: boolean
}

type AnchorState = {
  target: string
  hasDownload: boolean
  href: string
}

// Leave new-tab, download, modifier and off-site clicks to the browser so they keep their default behavior.
export function shouldForwardFeatureParam(
  event: InputState,
  anchor: AnchorState,
  currentOrigin: string,
): boolean {
  if (event.button !== 0) return false
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false
  if (anchor.target && anchor.target !== '_self') return false
  if (anchor.hasDownload) return false
  if (!anchor.href) return false
  try {
    return new URL(anchor.href, currentOrigin).origin === currentOrigin
  } catch {
    return false
  }
}
