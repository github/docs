import React, { useEffect } from 'react'
import App from 'next/app'
import type { AppProps, AppContext } from 'next/app'
import Head from 'next/head'
import { ThemeProvider, SSRProvider, ThemeProviderProps } from '@primer/react'

import '../stylesheets/index.scss'

import events from 'components/lib/events'
import experiment from 'components/lib/experiment'
import { LanguagesContext, LanguagesContextT } from 'components/context/LanguagesContext'
import { useSession } from 'components/hooks/useSession'

type MyAppProps = AppProps & {
  isDotComAuthenticated: boolean
  languagesContext: LanguagesContextT
}

type colorModeAuto = Pick<ThemeProviderProps, 'colorMode'>

const MyApp = ({ Component, pageProps, languagesContext }: MyAppProps) => {
  const { session, isLoadingSession } = useSession()
  useEffect(() => {
    events(session?.csrfToken)
    experiment()
  }, [session])

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
      </Head>
      <SSRProvider>
        <ThemeProvider
          colorMode={
            (session?.theme?.colorMode as colorModeAuto['colorMode']) ||
            ('auto' as colorModeAuto['colorMode'])
          }
          dayScheme={session?.theme?.dayTheme || 'light'}
          nightScheme={session?.theme?.nightTheme || 'dark'}
        >
          {/* Appears Next.js can't modify <body> after server rendering: https://stackoverflow.com/a/54774431 */}
          <div
            data-color-mode={session?.themeCss?.colorMode || 'auto'}
            data-dark-theme={session?.themeCss?.nightTheme || 'dark'}
            data-light-theme={session?.themeCss?.dayTheme || 'light'}
            style={
              /* render a mostly gray background until we know the color mode via XHR */
              { opacity: isLoadingSession ? 0.1 : 1 }
            }
          >
            <LanguagesContext.Provider value={languagesContext}>
              <Component {...pageProps} />
            </LanguagesContext.Provider>
          </div>
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

  // Have to define the type manually here because `req.context.languages`
  // comes from Node JS and is not type-aware.
  const languages: LanguagesContextT = req.context.languages

  return {
    ...appProps,
    languagesContext: { languages },
  }
}

export default MyApp
