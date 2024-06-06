import { useEffect } from 'react'
import App from 'next/app'
import type { AppProps, AppContext } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@primer/react'

import { initializeEvents } from 'src/events/components/events'
import { initializeExperiments } from 'src/events/components/experiment'
import {
  LanguagesContext,
  LanguagesContextT,
  LanguageItem,
} from 'src/languages/components/LanguagesContext'
import { useTheme } from 'src/color-schemes/components/useTheme'

type MyAppProps = AppProps & {
  isDotComAuthenticated: boolean
  languagesContext: LanguagesContextT
}

const MyApp = ({ Component, pageProps, languagesContext }: MyAppProps) => {
  const { theme } = useTheme()

  useEffect(() => {
    initializeEvents()
    initializeExperiments()
  }, [])

  useEffect(() => {
    // The CSS from primer looks something like this:
    //
    //   @media (prefers-color-scheme: dark) [data-color-mode=auto][data-dark-theme=dark] {
    //       --color-canvas-default: black;
    //   }
    //   html {
    //       background-color: var(--color-canvas-default);
    //   }
    //
    // So if that `[data-color-mode][data-dark-theme=dark]` isn't present
    // on the html, but on a top-level wrapping `<div>` then the `<html>`
    // doesn't get the right CSS.
    // Normally, with Primer you make sure you set these things in the
    // `<html>` tag and you can use `_document.tsx` for that but that's
    // only something you can do in server-side rendering. So,
    // we use a hook to assure that the `<html>` tag has the correct
    // dataset attribute values.
    const html = document.querySelector('html')
    if (html) {
      // Note, this is the same as setting `<html data-color-mode="...">`
      // But you can't do `html.dataset['color-mode']` so you use the
      // camelCase variant and you get the same effect.
      // Appears Next.js can't modify <html> after server rendering:
      // https://stackoverflow.com/a/54774431
      html.dataset.colorMode = theme.css.colorMode
      html.dataset.darkTheme = theme.css.darkTheme
      html.dataset.lightTheme = theme.css.lightTheme
    }
  }, [theme])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>GitHub Docs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* The value in these "/cb-xxxxx" prefixes aren't important. They
            just need to be present. They help the CDN cache the asset
            for infinity.
            Just remember, if you edit these images on disk, remember to
            change these numbers
         */}
        <link rel="icon" type="image/png" href="/assets/cb-345/images/site/favicon.png" />

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
        preventSSRMismatch
      >
        <LanguagesContext.Provider value={languagesContext}>
          <Component {...pageProps} />
        </LanguagesContext.Provider>
      </ThemeProvider>
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
  const languagesContext: LanguagesContextT = {
    languages: {},
  }

  // If we're rendering certain 404 error pages, the middleware might not
  // yet have contextualized the `context.languages`. So omit this
  // context mutation and live without it.
  // Note, `req` will be undefined if this is the client-side rendering
  // of a 500 page ("Ooops! It looks like something went wrong.")
  if (req?.context?.languages) {
    for (const [langCode, langObj] of Object.entries(
      req.context.languages as Record<string, LanguageItem>,
    )) {
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

  return {
    ...appProps,
    languagesContext,
  }
}

export default MyApp
