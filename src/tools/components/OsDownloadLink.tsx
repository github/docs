import { Children, cloneElement, isValidElement, useEffect, useState } from 'react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { useTranslation } from '@/languages/components/useTranslation'
import {
  DOWNLOAD_ATTRIBUTE_PREFIX,
  detectDownloadKey,
  osNameForKey,
  type DownloadKey,
} from '@/tools/lib/os-download'

export const OS_DOWNLOAD_LABEL_CLASS = 'js-os-download-label'

type Props = ComponentPropsWithoutRef<'a'> & { [attribute: `data-${string}`]: string | undefined }

// Content marks a link with a.js-os-download and lists installers in
// data-os-download-<key> attributes. Pages are CDN-cached, so the server render
// keeps the fallback href, and the installer swaps in after hydration.
export function OsDownloadLink({ children, href, target, ...props }: Props) {
  const { t } = useTranslation('pages')
  const [key, setKey] = useState<DownloadKey | null>(null)

  useEffect(() => {
    let cancelled = false
    async function detect() {
      const detected = await detectDownloadKey(navigator)
      if (!cancelled) setKey(detected)
    }
    detect()
    return () => {
      cancelled = true
    }
  }, [])

  const downloadHref = key ? props[`${DOWNLOAD_ATTRIBUTE_PREFIX}${key}`] : undefined
  if (!key || !downloadHref) {
    return (
      <a href={href} target={target} {...props}>
        {children}
      </a>
    )
  }

  // Installers download in place, so drop target="_blank" to avoid an empty tab.
  const label = t('download_for').replace('{os}', osNameForKey(key))
  return (
    <a href={downloadHref} {...props}>
      {replaceDownloadLabel(children, label)}
    </a>
  )
}

export function replaceDownloadLabel(children: ReactNode, label: string): ReactNode {
  return Children.map(children, (child) => {
    if (!isValidElement<{ className?: string }>(child)) return child
    const classes = String(child.props.className || '').split(/\s+/)
    return classes.includes(OS_DOWNLOAD_LABEL_CLASS) ? cloneElement(child, undefined, label) : child
  })
}
