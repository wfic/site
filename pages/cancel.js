import React from 'react'
import Head from 'next/head'

import Nav from '../components/nav'
import Footer from '../components/footer'

function cancel() {
  return (
    <>
        <Head>
            <title>Wichita Falls Islamic Community Mosque | Cancel</title>
        </Head>
        <Nav />
        <main className="container">
            Cancel
        </main>
        <Footer />
    </>
  )
}

export default cancel