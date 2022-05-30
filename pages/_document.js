// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Developed by psylab" />
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap" rel="stylesheet"></link>
        {/* Change your Icon */}
        <link rel="icon" href="/mosque.png" />
        <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

        <Script strategy="lazyOnload">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
                });
            `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}