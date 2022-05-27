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
            <div className="h-[60vh]">
                <h2>Want to cancel the donation?</h2>
                <p>Your donation will help building the mosque and help the community</p>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default event