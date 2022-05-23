import React from 'react'
import Head from 'next/head'

import Nav from '../components/Nav'
import Footer from '../components/Footer'


function event() {
  return (
    <>
        <Head>
            <title>Wichita Falls Islamic Community Mosque | Events</title>
            <meta name="description" content="Developed by psylab" />
            {/* Change your Icon */}
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <div className="container">
            <div className="">Event Page</div>
        </div>
        <Footer />
    </>
  )
}

export default event