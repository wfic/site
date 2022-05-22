import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="">
        <Head>
            <title>Wichita Falls Islamic Community Mosque | Home</title>
            <meta name="description" content="Developed by psylab" />
            {/* Google Fonts */}
            <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap" rel="stylesheet"></link>
            {/* Change your Icon */}
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />
        <main className="container relative">
            <div className="">Home Page</div>
        </main>
        <Footer />
    </div>
  )
}
