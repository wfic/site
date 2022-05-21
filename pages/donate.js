import React from 'react'
import Head from 'next/head'

import Nav from '../components/Nav'


function donate() {
  return (
    <>
        <Head>
            <title>Wichita Falls Islamic Community Mosque | Contact</title>
            <meta name="description" content="Developed by psylab" />
            {/* Change your Icon */}
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />

        <main className="container">
            <div>Donation Page</div>
        </main>
    </>
  )
}

export default donate