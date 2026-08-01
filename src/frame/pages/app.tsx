import { useEffect } from 'react'
import App from 'next/app'
import type { AppProps, AppContext } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@primer/react'
import { ThemeProvider as BrandThemeProvider } from '@primer/react-brand'
import { useRouter } from 'next/router'

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

function getFaviconHref(stagingName?: string) {
  /* The value in these "/cb-xxxxx" prefixes aren't important. They
      just need to be present. They help the CDN cache the asset
      for infinity.
      Just remember, if you edit these images on disk, remember to
      change these numbers
   */
  if (stagingName) {
    return `/assets/cb-345/images/site/evergreens/${stagingName}.png`
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
        {/*
          Primer Brand ThemeProvider, nested so migrated @primer/react-brand
          components receive brand theme context during the Docs 2026 migration
          (github/docs-engineering#5879). Runs alongside the @primer/react
          ThemeProvider above while the component-by-component swap is in progress.
          Brand expects a CSS color mode ('auto' | 'light' | 'dark'), so pass
          theme.css.colorMode rather than the component ('auto' | 'day' | 'night') mode.
        */}
        <BrandThemeProvider colorMode={theme.css.colorMode}>
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
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)
  const req = ctx.req as unknown as ExtendedRequest

  // Have to define the type manually here because `req.context.languages`
  // comes from Node JS and is not type-aware.
  const languagesContext: LanguagesContextT = {
    languages: {},
  }

  // If we're rendering certain 404 error pages, the middleware might not
  // yet have contextualized the `context.languages`. So omit this
  // context mutation and live without it.
  // Note, `req` will be undefined if this is the client-side rendering
  // of a 500 page ("Ooops! It looks like something went wrong.")
  if (req?.context?.languages) {
    const languageEntries = Object.entries(req.context.languages as Record<string, LanguageItem>)
    for (const [langCode, langObj] of languageEntries) {
      // Only pick out the keys we actually need
      languagesContext.languages[langCode] = {
        name: langObj.name,
        code: langObj.code,
      }
      // The `hreflang` is used for the `<link rel="alternate">` tags.
      if (langObj.hreflang && langObj.hreflang !== langObj.code) {
        languagesContext.languages[langCode].hreflang = langObj.hreflang
      }
      if (langObj.nativeName) {
        languagesContext.languages[langCode].nativeName = langObj.nativeName
      }
    }
  }
  const headerValue = req.headers['x-ong-external-url']
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
