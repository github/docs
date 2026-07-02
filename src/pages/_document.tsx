import Document, { Html, Head, Main, NextScript } from 'next/document'

import { defaultCSSTheme } from '@/color-schemes/components/useTheme'
import { colorModeScript } from '@/color-schemes/lib/color-mode-script'

export default class MyDocument extends Document {
  render() {
    return (
      <Html
        // These values are always the SSR rendering defaults.
        // Before the browser's first paint, the inline `colorModeScript`
        // below updates them on the client from the `color_mode` cookie, so
        // the page paints with the user's real theme and doesn't flash. The
        // SSR defaults stay constant, so the HTML remains shared-cacheable.
        data-color-mode={defaultCSSTheme.colorMode}
        data-light-theme={defaultCSSTheme.lightTheme}
        data-dark-theme={defaultCSSTheme.darkTheme}
      >
        <Head>
          {/* Inline color-mode script must run before paint to avoid a flash; it
              injects executable JS (not content HTML), so RenderedHTML/hast do
              not apply here. */}
          {/* eslint-disable-next-line custom-rules/no-dangerously-set-inner-html */}
          <script dangerouslySetInnerHTML={{ __html: colorModeScript }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
