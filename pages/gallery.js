import React from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function gallery() {
  return (
    <>
        <Head>
            <title>Wichita Falls Islamic Community Mosque | Gallery</title>
        </Head>
        <Nav />

        <main className="">
            <div className="banner relative">
                <img src="/img/bg/bg.jpg" alt="background image" />
                <div className="bannerText absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <h2 className="text-3xl md:text-6xl font-Cinzel font-bold text-yellow-600">Gallery</h2>
                    <span className="text-md md:text-xl text-gray-300">Home / Gallery</span>
                </div>
            </div>
            <div className="container">

                
            </div>
        </main>
        <Footer />
    </>
  )
}

export default gallery