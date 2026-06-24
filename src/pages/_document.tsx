import Document, { Html, Head, Main, NextScript } from 'next/document'

import { defaultCSSTheme } from '@/color-schemes/components/useTheme'

export default class MyDocument extends Document {
  render() {
    return (
      <Html
        // These values are always the SSR rendering defaults.
        // The will get updated later in a useEffect hook, in the client,
        // in the MyApp component.
        data-color-mode={defaultCSSTheme.colorMode}
        data-light-theme={defaultCSSTheme.lightTheme}
        data-dark-theme={defaultCSSTheme.darkTheme}
      >
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
