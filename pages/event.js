import React from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function event() {
  return (
    <>
        <Head>
            <title>Wichita Falls Islamic Community Mosque | Event</title>
        </Head>
        <Nav />

        <main className="">
            <div className="banner relative">
                <img src="/img/bg/bg.jpg" alt="background image" />
                <div className="bannerText absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <h2 className="text-3xl md:text-6xl font-Cinzel font-bold text-yellow-600">Our Events</h2>
                    <span className="text-md md:text-xl text-gray-300">Home / Event</span>
                </div>
            </div>
            <div className="container py-20">
                <h2 className="text-2xl md:text-4xl font-semibold text-slate-800 font-Cinzel mb-10">Upcomming events</h2>
                <div className="flex pt-5 border-t-2 border-slate-400 mb-10">
                    <div className="flex items-center justify-start w-[250px] ">
                        <div className="text-4xl md:text-6xl font-bold text-slate-300">28</div>
                        <div className="flex flex-col ml-5">
                            <span className="text-md md:text-xl font-semibold text-slate-900">May</span>
                            <span className="text-md md:text-xl text-slate-500">Saturday</span>
                        </div>
                    </div>
                    <div className="ml-20">
                        <h3 className="text-xl md:text-2xl font-Cinzel font-semibold text-slate-800 mb-5">Message of the Quran Class</h3>
                        <p className="text-md text-slate-400">28 May @ 6 pm - 7 pm</p>
                        <p className="text-md text-slate-400">1701 Trigg Ln, Wichita Falls, TX, 76308, USA</p>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </>
  )
}

export default event