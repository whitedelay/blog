import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='ko'>
        <Head>
          <meta
            name='google-site-verification'
            content='efjMNdIz7NsOOkbzUAEMvhjwXi-K7u7dLCpyY4zE49M'
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `
            }}
          />
          <link
            rel='icon'
            href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✏️</text></svg>'
          />
          <link rel='manifest' href='/manifest.json' />
        </Head>

        <body>
          <script src='noflash.js' />

          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}
