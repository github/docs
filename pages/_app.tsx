import React, { useEffect } from 'react'
import App from 'next/app'
import type { AppProps, AppContext } from 'next/app'
import Head from 'next/head'
import { ThemeProvider, ThemeProviderProps, SSRProvider } from '@primer/react'

import '../stylesheets/index.scss'

import events from 'components/lib/events'
import experiment from 'components/lib/experiment'
import { LanguagesContext, LanguagesContextT } from 'components/context/LanguagesContext'
import {
  DotComAuthenticatedContext,
  DotComAuthenticatedContextT,
} from 'components/context/DotComAuthenticatedContext'
import { defaultComponentTheme } from 'lib/get-theme.js'

type MyAppProps = AppProps & {
  csrfToken: string
  isDotComAuthenticated: boolean
  themeProps: typeof defaultComponentTheme & Pick<ThemeProviderProps, 'colorMode'>
  languagesContext: LanguagesContextT
  dotComAuthenticatedContext: DotComAuthenticatedContextT
}
const MyApp = ({
  Component,
  pageProps,
  csrfToken,
  themeProps,
  languagesContext,
  dotComAuthenticatedContext,
}: MyAppProps) => {
  useEffect(() => {
    events()
    experiment()
  }, [])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>GitHub Documentation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* The value in these "/cb-xxxxx" prefixes aren't important. They
            just need to be present. They help the CDN cache the asset
            for infinity.
            Just remember, if you edit these images on disk, remember to
            change these numbers
         */}
        <link rel="alternate icon" type="image/png" href="/assets/cb-600/images/site/favicon.png" />
        <link rel="icon" type="image/svg+xml" href="/assets/cb-803/images/site/favicon.svg" />

        <meta
          name="google-site-verification"
          content="OgdQc0GZfjDI52wDv1bkMT-SLpBUo_h5nn9mI9L22xQ"
        />
        <meta
          name="google-site-verification"
          content="c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY"
        />

        <meta name="csrf-token" content={csrfToken} />
      </Head>
      <SSRProvider>
        <ThemeProvider
          colorMode={themeProps.colorMode}
          dayScheme={themeProps.dayTheme}
          nightScheme={themeProps.nightTheme}
          preventSSRMismatch
        >
          <LanguagesContext.Provider value={languagesContext}>
            <DotComAuthenticatedContext.Provider value={dotComAuthenticatedContext}>
              <Component {...pageProps} />
            </DotComAuthenticatedContext.Provider>
          </LanguagesContext.Provider>
        </ThemeProvider>
      </SSRProvider>
    </>
  )
}

// Remember, function is only called once if the rendered page can
// be in-memory cached. But still, the `<MyApp>` component will be
// executed every time **in the client** if it was the first time
// ever (since restart) or from a cached HTML.
MyApp.getInitialProps = async (appContext: AppContext) => {
  const { ctx } = appContext
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)
  const req: any = ctx.req

  const { getTheme } = await import('lib/get-theme.js')

  return {
    ...appProps,
    themeProps: getTheme(req),
    csrfToken: req?.csrfToken?.() || '',
    languagesContext: { languages: req.context.languages, userLanguage: req.context.userLanguage },
    dotComAuthenticatedContext: { isDotComAuthenticated: Boolean(req.cookies?.dotcom_user) },
  }
}

export default MyApp
