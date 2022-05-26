import React from 'react'
import Head from 'next/head'

import Nav from '../components/Nav'
import Footer from '../components/Footer'


function event() {
  return (
    <>
        <Head>
            <title>Wichita Falls Islamic Community Mosque | Events</title>
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