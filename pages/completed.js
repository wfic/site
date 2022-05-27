import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

function completed() {
  return (
    <>
        <Head>
            <title>Wichita Falls Islamic Community Mosque | Completed</title>
        </Head>
        <Nav />
        <main className="container">
            <div className="h-[60vh] grid place-content-center text-center">
                <h2 className="text-2xl font-bold font-Cinzel">Thank you for your donation. <br /> Hope you will do it again.</h2>
            </div>
        </main>
        <Footer />
    </>
  )
}

export default completed