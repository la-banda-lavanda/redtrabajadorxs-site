import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
                    <link rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin />
                    <link rel="preload"
                        as="style"
                        href="https://fonts.googleapis.com/css?family=Bebas+Neue&family=Source+Sans+Pro&display=swap" />

                    <link rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Bebas+Neue&family=Source+Sans+Pro&display=swap"
                        media="print" onLoad="this.media='all'" />

                    <noscript>
                    <link rel="stylesheet"
                            href="https://fonts.googleapis.com/css?family=Bebas+Neue&family=Source+Sans+Pro&display=swap" />
                    </noscript>
                    
                </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}