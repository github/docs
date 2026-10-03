import { useEffect } from 'react'
import App from 'next/app'
import type { AppProps, AppContext } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@primer/react'
import { useRouter } from 'next/router'

import { BrandThemeProvider } from '@/color-schemes/components/BrandThemeProvider'
import { initializeEvents } from '@/events/components/events'
import {
  initializeExperiments,
  initializeForwardFeatureUrlParam,
} from '@/events/components/experiments/experiment'
import {
  LanguagesContext,
  LanguagesContextT,
  LanguageItem,
} from '@/languages/components/LanguagesContext'
import { useTheme } from '@/color-schemes/components/useTheme'
import { SharedUIContextProvider } from '@/frame/components/context/SharedUIContext'
import { ClientSideHashFocus } from '@/frame/components/ClientSideHashFocus'
import type { ExtendedRequest } from '@/types'

type MyAppProps = AppProps & {
  isDotComAuthenticated: boolean
  languagesContext: LanguagesContextT
  stagingName?: string
}

const stagingNames = new Set([
  'balsam',
  'boxwood',
  'cedar',
  'cypress',
  'fir',
  'hemlock',
  'hinoki',
  'holly',
  'juniper',
  'laurel',
  'pine',
  'redwood',
  'sequoia',
  'spruce',
  'yew',
])

// Cache-busting prefixes need any cb-number so Fastly assigns the manual surrogate key.
// Change the cb number when the image changes, so browsers and the CDN miss the old URL.
function getFaviconHref(stagingName?: string) {
  if (stagingName) {
    return `/assets/cb-346/images/site/evergreens/${stagingName}.png`
  }
  return '/assets/cb-345/images/site/favicon.png'
}

const MyApp = ({ Component, pageProps, languagesContext, stagingName }: MyAppProps) => {
  const { theme } = useTheme()
  const router = useRouter()

  useEffect(() => {
    initializeEvents()
    if (pageProps.mainContext) {
      try {
        initializeExperiments(
          router.locale || 'en',
          pageProps.mainContext.currentVersion,
          pageProps.mainContext.allVersions,
        )
      } catch (e) {
        console.error('Error initializing experiments:', e)
      }
    }
  }, [])

  useEffect(() => {
    if (pageProps.mainContext) {
      try {
        initializeForwardFeatureUrlParam(router, pageProps.mainContext.currentVersion)
      } catch (e) {
        console.error('Error initializing feature param forwarding:', e)
      }
    }
  }, [router, router.query, pageProps.mainContext])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>GitHub Docs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" type="image/png" href={getFaviconHref(stagingName)} />

        <link href="/manifest.json" rel="manifest" />

        <meta
          name="google-site-verification"
          content="OgdQc0GZfjDI52wDv1bkMT-SLpBUo_h5nn9mI9L22xQ"
        />
        <meta
          name="google-site-verification"
          content="c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY"
        />
      </Head>
      <ThemeProvider
        colorMode={theme.component.colorMode}
        dayScheme={theme.component.dayScheme}
        nightScheme={theme.component.nightScheme}
      >
        {/* @primer/react-brand context lets Brand components coexist with @primer/react. */}
        <BrandThemeProvider>
          <LanguagesContext.Provider value={languagesContext}>
            <SharedUIContextProvider>
              <ClientSideHashFocus />
              <Component {...pageProps} />
            </SharedUIContextProvider>
          </LanguagesContext.Provider>
        </BrandThemeProvider>
      </ThemeProvider>
    </>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { ctx } = appContext
  const appProps = await App.getInitialProps(appContext)
  const req = ctx.req as unknown as ExtendedRequest

  const languagesContext: LanguagesContextT = {
    languages: {},
  }

  // Some 404 renders lack req.context.languages.
  if (req?.context?.languages) {
    const languageEntries = Object.entries(req.context.languages as Record<string, LanguageItem>)
    for (const [langCode, langObj] of languageEntries) {
      languagesContext.languages[langCode] = {
        name: langObj.name,
        code: langObj.code,
      }
      // hreflang drives alternate-language link tags.
      if (langObj.hreflang && langObj.hreflang !== langObj.code) {
        languagesContext.languages[langCode].hreflang = langObj.hreflang
      }
      if (langObj.nativeName) {
        languagesContext.languages[langCode].nativeName = langObj.nativeName
      }
    }
  }
  const headerValue = req?.headers['x-ong-external-url']
  const stagingName = (typeof headerValue === 'string' ? headerValue : headerValue?.[0])?.match(
    /staging-(\w+)\./,
  )?.[1]
  return {
    ...appProps,
    languagesContext,
    stagingName: stagingName && stagingNames.has(stagingName) ? stagingName : undefined,
  }
}

export default MyApp
