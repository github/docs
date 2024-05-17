import fs from 'fs'
import path from 'path'

import { defaultCacheControl } from './cache-control.js'

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

export default async function manifestJson(req, res, next) {
  if (!req.url.startsWith('/manifest.json')) {
    return next()
  }

  if (req.url !== '/manifest.json') {
    // E.g. `/manifest.json/anything` or `/manifest.json?foo=bar`
    defaultCacheControl(res)
    return res.redirect(302, '/manifest.json')
  }

  // This is modelled after https://github.com/manifest.json
  const manifest = {
    // In the future we might want to have a different manifest for each
    // language. Particularly, the `name` property.
    // But as of May 2023, this is overkill because all translations's
    // home page refer to the name of the site as "GitHub Docs".
    // For example, on https://docs.github.com/ja the `<title>`
    // is "GitHub Docs".
    name: 'GitHub Docs',
    short_name: 'GitHub Docs',
    start_url: '/',
    display: 'standalone',
    icons: [],
  }
  for (const icon of ICONS) {
    for (const sizes of path.basename(icon).match(/\d+x\d+/g)) {
      const stats = fs.statSync(icon)
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
