// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap" rel="stylesheet"></link>
        {/* Change your Icon */}
        <link rel="icon" href="/favicon.png" />
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}