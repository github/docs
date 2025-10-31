import fs from 'fs'
import path from 'path'
import type { NextConfig } from 'next'

import frontmatter from '@gr2m/gray-matter'
import { getLogLevelNumber } from '@/observability/logger/lib/log-levels'
import { languageKeys } from '@/languages/lib/languages'

const ROOT = process.env.ROOT || '.'
const homepage = path.posix.join(ROOT, 'content/index.md')
const { data } = frontmatter(fs.readFileSync(homepage, 'utf8'))
const productIds = data.children as string[]

const config: NextConfig = {
  // Transpile @primer/react so Next's webpack can process its CSS and other assets
  // This ensures CSS in node_modules/@primer/react is handled by the app's loaders.
  transpilePackages: ['@primer/react'],
  // speed up production `next build` by ignoring typechecking during that step of build.
  // type-checking still occurs in the Dockerfile build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: languageKeys,
    defaultLocale: 'en',
  },
  sassOptions: {
    quietDeps: true,
    silenceDeprecations: [
      'legacy-js-api',
      'import',
      'global-builtin',
      'color-4-api',
      'mixed-decls',
    ],
  },
  // Don't use automatic Next.js logging in dev unless the log level is `debug` or higher
  // See `src/observability/logger/README.md` for log levels
  logging: getLogLevelNumber() < 3 ? false : {},
  async rewrites() {
    const DEFAULT_VERSION = 'free-pro-team@latest'
    return productIds.map((productId) => {
      return {
        source: `/${productId}/:path*`,
        destination: `/${DEFAULT_VERSION}/${productId}/:path*`,
      }
    })
  },
  webpack: (webpackConfig) => {
    webpackConfig.experiments = webpackConfig.experiments || {}
    webpackConfig.experiments.topLevelAwait = true
    webpackConfig.resolve.fallback = { fs: false, async_hooks: false }
    return webpackConfig
  },

  // https://nextjs.org/docs/api-reference/next.config.js/compression
  compress: false,

  // ETags break stale content serving from the CDN. When a response has
  // an ETag, the CDN attempts to revalidate the content in the background.
  // This causes problems with serving stale content, since upon revalidating
  // the CDN marks the cached content as "fresh".
  generateEtags: false,

  experimental: {
    // The output of our getServerSideProps() return large chunks of
    // data because it contains our rendered Markdown.
    // The default, for a "Large Page Data" warning is 128KB
    // but many of our pages are much larger.
    // The warning is: https://nextjs.org/docs/messages/large-page-data
    largePageDataBytes: 1024 * 1024, // 1 MB

    // This makes it so that going Back will scroll to the previous position
    scrollRestoration: true,
  },

  compiler: {
    styledComponents: true,
  },
}

export default config
