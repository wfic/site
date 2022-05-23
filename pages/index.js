import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
        <Head>
            <title>Wichita Falls Islamic Community Mosque | Home</title>
            <meta name="description" content="Developed by psylab" />
            {/* Google Fonts */}
            <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap" rel="stylesheet"></link>
            {/* Change your Icon */}
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />
        <Hero />
        <Footer />

        <Script src="/node_modules/dist/js/index.min.js"></Script>
    </>
  )
}
