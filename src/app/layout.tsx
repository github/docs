import '@/frame/stylesheets/index.scss'
import type { Metadata, Viewport } from 'next'
import { ReactNode } from 'react'
import type { JSX } from 'react'

export const metadata: Metadata = {
  title: {
    template: '%s | GitHub Docs',
    default: 'GitHub Docs',
  },
  icons: {
    icon: [
      { url: '/assets/cb-345/images/site/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/cb-345/images/site/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
    ],
    shortcut: '/assets/cb-345/images/site/favicon.ico',
    apple: '/assets/cb-345/images/site/favicon.png',
  },
  verification: {
    google: [
      'OgdQc0GZfjDI52wDv1bkMT-SLpBUo_h5nn9mI9L22xQ',
      'c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY',
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

interface RootLayoutProps {
  readonly children: ReactNode
}

// Root layout for App Router pages
export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-color-mode="auto"
      data-light-theme="light"
      data-dark-theme="dark"
    >
      <head>
        <meta charSet="utf-8" />
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//api.github.com" />
      </head>
      <body className="min-h-screen bg-canvas-default text-fg-default">{children}</body>
    </html>
  )
}
