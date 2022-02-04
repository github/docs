import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

import { ServerStyleSheet } from 'styled-components'

import { getThemeProps } from 'components/lib/getThemeProps'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        cssThemeProps: getThemeProps(ctx.req, 'css'),
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    const { colorMode, nightTheme, dayTheme } = (this.props as any).cssThemeProps
    return (
      <Html>
        <Head />
        <body data-color-mode={colorMode} data-dark-theme={nightTheme} data-light-theme={dayTheme}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
