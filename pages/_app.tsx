import React, { useEffect } from 'react'
import App from 'next/app'
import type { AppProps, AppContext } from 'next/app'
import Head from 'next/head'
import { ThemeProvider, SSRProvider } from '@primer/react'

import '../stylesheets/index.scss'

import { initializeEvents } from 'components/lib/events'
import experiment from 'components/lib/experiment'
import { LanguagesContext, LanguagesContextT } from 'components/context/LanguagesContext'
import { useSession } from 'components/hooks/useSession'
import { useTheme } from 'components/hooks/useTheme'

type MyAppProps = AppProps & {
  isDotComAuthenticated: boolean
  languagesContext: LanguagesContextT
}

const MyApp = ({ Component, pageProps, languagesContext }: MyAppProps) => {
  const { session } = useSession()
  const { theme } = useTheme()

  useEffect(() => {
    if (session?.csrfToken) {
      initializeEvents(session.csrfToken)
    }
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
          colorMode={theme.component.colorMode}
          dayScheme={theme.component.dayScheme}
          nightScheme={theme.component.nightScheme}
          preventSSRMismatch
        >
          {/* Appears Next.js can't modify <body> after server rendering: https://stackoverflow.com/a/54774431 */}
          <div
            data-color-mode={theme.css.colorMode}
            data-light-theme={theme.css.lightTheme}
            data-dark-theme={theme.css.darkTheme}
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
