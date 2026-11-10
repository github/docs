import Document, { Html, Head, Main, NextScript } from 'next/document'

import { defaultCSSTheme } from '@/color-schemes/components/useTheme'
import { colorModeScript } from '@/color-schemes/lib/color-mode-script'

// MyDocument leaves SSR theme attributes at defaultCSSTheme so the HTML stays shared-cacheable.
// colorModeScript updates them from the color_mode cookie before the browser's first paint.
// colorModeScript injects executable JS, not content HTML, so RenderedHTML and hast do not apply.
// Primer Brand sets smooth scrolling on <html>. data-scroll-behavior lets Next jump instantly on
// route changes and keep smooth scrolling for in-page anchors.
export default class MyDocument extends Document {
  render() {
    return (
      <Html
        data-scroll-behavior="smooth"
        data-color-mode={defaultCSSTheme.colorMode}
        data-light-theme={defaultCSSTheme.lightTheme}
        data-dark-theme={defaultCSSTheme.darkTheme}
      >
        <Head>
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
