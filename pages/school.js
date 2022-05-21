import React from 'react'
import Head from 'next/head'

import Nav from '../components/Nav'


function school() {
  return (
    <>
        <Head>
            <title>Wichita Falls Islamic Community Mosque | School</title>
            <meta name="description" content="Developed by psylab" />
            {/* Change your Icon */}
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />

        <main className="container">
            <div>School Page</div>
        </main>
    </>
  )
}

export default school