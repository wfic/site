import React from 'react'
import Head from 'next/head'

import Nav from '../components/Nav'
import Footer from '../components/Footer'


function about() {
  return (
    <>
        <Head>
            <title>Wichita Falls Islamic Community Mosque | About</title>
            <meta name="description" content="Developed by psylab" />
            {/* Change your Icon */}
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />

        <main className="container">
            <div>About Page</div>
        </main>

        <Footer />
    </>
  )
}

export default about