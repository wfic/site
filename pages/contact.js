import React from 'react'
import Head from 'next/head'

import Mailer from '../components/Mailer'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function contact() {
  return (
    <>
        <Head>
            <title>Wichita Falls Islamic Community Mosque | Contact</title>
        </Head>
        <Nav />

        <main className="">
            <div className="banner relative">
                <img src="/img/bg/bg.jpg" alt="background image" />
                <div className="bannerText absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <h2 className="text-3xl md:text-6xl font-Cinzel font-bold text-yellow-600">Contact</h2>
                    <span className="text-md md:text-xl text-gray-300">Home / Contact</span>
                </div>
            </div>
            <div className="container py-20">
                <h3 className="text-3xl md:text-4xl font-Cinzel font-bold text-slate-800 ">Contact info</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
                    <div className="">
                        <h2 className="text-md md:text-xl font-semibold text-slate-800 py-2">Islamic Society of Wichita Falls</h2>
                        <p className='text-md md:text-xl text-slate-800'>1701 Trigg Ln,</p>
                        <p className='text-md md:text-xl text-slate-800'>Wichita Falls,</p>
                        <p className='text-md md:text-xl text-slate-800 mb-3'>TX, 76308, USA</p>
                        <div>
                            <a href="tel:++19403375021" className='text-slate-800 mt-4 font-semibold text-md md:text-xl'>Phone: +19403375021</a>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div>
                        <Mailer />
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </>
  )
}

export default contact