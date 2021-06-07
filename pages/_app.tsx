import React, { useEffect } from 'react'
import App from 'next/app'
import type { AppProps, AppContext } from 'next/app'
import Head from 'next/head'
import { useTheme, ThemeProvider } from '@primer/components'
import { getThemeProps } from 'components/lib/getThemeProps'

import '../stylesheets/index.scss'

import { defaultThemeProps } from 'components/lib/getThemeProps'

type MyAppProps = AppProps & { csrfToken: string; themeProps: typeof defaultThemeProps }
const MyApp = ({ Component, pageProps, csrfToken, themeProps }: MyAppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>GitHub Documentation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="alternate icon" type="image/png" href="/assets/images/site/favicon.png" />
        <link rel="icon" type="image/svg+xml" href="/assets/images/site/favicon.svg" />

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
      <ThemeProvider>
        <SetTheme themeProps={themeProps} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { ctx } = appContext
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)
  const req: any = ctx.req

  return { ...appProps, themeProps: getThemeProps(req), csrfToken: req?.csrfToken?.() || '' }
}

const SetTheme = ({ themeProps }: { themeProps: typeof defaultThemeProps }) => {
  // Cause primer/components to re-evaluate the 'auto' color mode on client side render
  const { setColorMode } = useTheme()
  useEffect(() => {
    setTimeout(() => {
      setColorMode(themeProps.colorMode as any)
    })
  }, [])
  return null
}

export default MyApp
