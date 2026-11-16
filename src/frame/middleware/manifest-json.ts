import type { NextFunction, Request, Response } from 'express'
import fs from 'fs/promises'
import path from 'path'

import { defaultCacheControl } from './cache-control'

const ICONS = [
  './assets/images/site/apple-touch-icon-57x57.png',
  './assets/images/site/apple-touch-icon-60x60.png',
  './assets/images/site/apple-touch-icon-72x72.png',
  './assets/images/site/apple-touch-icon-76x76.png',
  './assets/images/site/apple-touch-icon-114x114.png',
  './assets/images/site/apple-touch-icon-120x120.png',
  './assets/images/site/apple-touch-icon-144x144.png',
  './assets/images/site/apple-touch-icon-152x152.png',
  './assets/images/site/apple-touch-icon-180x180.png',
  './assets/images/site/apple-touch-icon-192x192.png',
  './assets/images/site/apple-touch-icon-512x512.png',
]

type Icon = {
  sizes: string
  src: string
  type?: string
}

export default async function manifestJson(req: Request, res: Response, next: NextFunction) {
  if (!req.url.startsWith('/manifest.json')) {
    return next()
  }

  if (req.url !== '/manifest.json') {
    // Examples: /manifest.json/anything and /manifest.json?foo=bar.
    defaultCacheControl(res)
    return res.safeRedirect(302, '/manifest.json')
  }

  const icons: Icon[] = []

  // The manifest mirrors https://github.com/manifest.json.
  const manifest = {
    // Localized home pages title the site GitHub Docs, so one manifest covers every language.
    name: 'GitHub Docs',
    short_name: 'GitHub Docs',
    start_url: '/',
    display: 'standalone',
    icons,
  }
  for (const icon of ICONS) {
    for (const sizes of path.basename(icon).match(/\d+x\d+/g) || []) {
      const stats = await fs.stat(icon)
      const split = icon.slice(1).split(path.sep)
      const hash = `${stats.size}`
      split.splice(2, 0, `cb-${hash}`)
      const src = split.join('/')
      const type = path.extname(icon) === '.png' ? 'image/png' : undefined
      manifest.icons.push({
        sizes,
        src,
        type,
      })
    }
  }
  defaultCacheControl(res)
  res.json(manifest)
}
