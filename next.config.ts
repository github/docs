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
  // Keep OTel packages out of the Next.js server bundle.
  // They must be loaded via native require() for auto-instrumentation to work.
  serverExternalPackages: [
    '@opentelemetry/api',
    '@opentelemetry/auto-instrumentations-node',
    '@opentelemetry/core',
    '@opentelemetry/exporter-trace-otlp-proto',
    '@opentelemetry/sdk-node',
  ],
  // speed up production `next build` by ignoring typechecking during that step of build.
  // type-checking still occurs in the Dockerfile build
  typescript: {
    ignoreBuildErrors: true,
  },

  i18n: {
    locales: languageKeys,
    defaultLocale: 'en',
  },
  sassOptions: {
    quietDeps: true,
    silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'color-4-api'],
  },
  // Don't use automatic Next.js logging in dev unless the log level is `debug` or higher
  // See `src/observability/logger/README.md` for log levels
  logging: getLogLevelNumber() < 3 ? undefined : {},
  async rewrites() {
    const DEFAULT_VERSION = 'free-pro-team@latest'
    return productIds.map((productId) => {
      return {
        source: `/${productId}/:path*`,
        destination: `/${DEFAULT_VERSION}/${productId}/:path*`,
      }
    })
  },

  webpack: (webpackConfig, { isServer }) => {
    webpackConfig.resolve.fallback = { fs: false, async_hooks: false }
    // OTel is server-only. Alias to empty stub in browser bundles.
    if (!isServer) {
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        '@/observability/lib/tracing': path.resolve('./src/observability/lib/tracing.browser.ts'),
      }
    }
    return webpackConfig
  },

  // Turbopack is the default bundler in Next.js 16
  // Keep webpack config for now to support both bundlers

  // Turbopack configuration for Next.js 16 (replaces webpack fallbacks)
  turbopack: {
    resolveAlias: {
      fs: {
        browser: './empty.ts', // Point to empty module when fs is requested for browser
      },
      async_hooks: {
        browser: './empty.ts', // Point to empty module when async_hooks is requested for browser
      },
      '@/observability/logger': {
        browser: './empty.ts',
      },
      '@/observability/logger/lib/logger-context': {
        browser: './empty.ts',
      },
      '@/observability/lib/tracing': {
        browser: './src/observability/lib/tracing.browser.ts',
      },
    },
  },

  // https://nextjs.org/docs/api-reference/next.config.js/compression
  compress: false,

  // ETags break stale content serving from the CDN. When a response has
  // an ETag, the CDN attempts to revalidate the content in the background.
  // This causes problems with serving stale content, since upon revalidating
  // the CDN marks the cached content as "fresh".
  generateEtags: false,

  // Disable Next.js's in-memory data cache. We don't use ISR or cached
  // fetch — all pages render via Express middleware with getServerSideProps.
  // The default 50 MB cache is unnecessary overhead during a memory-leak
  // investigation and is implicated in known Next.js 16.1.x memory issues
  // (vercel/next.js#88603).
  cacheMaxMemorySize: 0,

  compiler: {
    styledComponents: true,
  },
}

export default config
