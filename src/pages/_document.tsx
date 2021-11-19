import Document, { Html, Main, NextScript, DocumentInitialProps, DocumentContext, Head } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    const googleAnalyticsScripts = process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
      <>
        <script defer src="/api/u"></script>
        <script defer src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}></script>
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());`,
          }}
        />
      </>
    )

    return (
      <Html lang="en">
        <Head>
          {googleAnalyticsScripts}
          <meta name="referrer" content="same-origin" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="apple-mobile-web-app-title" content="Fider" />
          <meta name="application-name" content="Fider" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body className="text-gray-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
