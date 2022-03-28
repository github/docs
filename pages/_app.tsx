import React, { useEffect } from 'react'
import App from 'next/app'
import type { AppProps, AppContext } from 'next/app'
import Head from 'next/head'
import { ThemeProvider, ThemeProviderProps } from '@primer/react'
import { SSRProvider } from '@react-aria/ssr'
import { defaultComponentThemeProps, getThemeProps } from 'components/lib/getThemeProps'

import '../stylesheets/index.scss'

import events from 'components/lib/events'
import experiment from 'components/lib/experiment'
import { LanguagesContext, LanguagesContextT } from 'components/context/LanguagesContext'

type MyAppProps = AppProps & {
  csrfToken: string
  themeProps: typeof defaultComponentThemeProps & Pick<ThemeProviderProps, 'colorMode'>
  languagesContext: LanguagesContextT
}
const MyApp = ({ Component, pageProps, csrfToken, themeProps, languagesContext }: MyAppProps) => {
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
            <Component {...pageProps} />
          </LanguagesContext.Provider>
        </ThemeProvider>
      </SSRProvider>
    </>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { ctx } = appContext
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)
  const req: any = ctx.req

  return {
    ...appProps,
    themeProps: getThemeProps(req),
    csrfToken: req?.csrfToken?.() || '',
    languagesContext: { languages: req.context.languages },
  }
}

export default MyApp
