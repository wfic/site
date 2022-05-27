import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { FaDonate } from 'react-icons/fa'


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
            <div className="h-[60vh] grid place-content-center text-center">
                <div className="grid place-items-center my-10">
                    <FaDonate className="text-8xl text-yellow-600" />
                </div>
                <h2 className="text-2xl font-bold font-Cinzel">Want to cancel the donation?</h2>
                <p className="">Your donation will help building the mosque and help the community</p>
                <button className="text-white bg-blue-600 rounded-full px-3 py-2 mt-5 md:w-1/3 mx-auto">
                    <Link href="https://www.paypal.com/donate/?hosted_button_id=AQUAXFVS5ZY4A">Donate Again</Link>
                </button>
            </div>
        </main>
        <Footer />
    </>
  )
}

export default cancel