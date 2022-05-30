import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

import { FaDonate } from 'react-icons/fa'

function donate() {
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
                    <h2 className="text-3xl md:text-6xl font-Cinzel font-bold text-yellow-600">Donate</h2>
                    <span className="text-md md:text-xl text-gray-300">Home / Donate</span>
                </div>
            </div>

            <div className="container">
                <h2 className="font-Cinzel font-semibold text-yellow-600 text-2xl text-center mt-10">Support For Our new mosque</h2>
                <div className="newMosqueGallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-10">
                    <div>
                        <img src="/img/mosque/m1.jpg" alt="New Mosque 1" className="w-full h-[300px] md:h-[250px] md:w-[450px] rounded-md object-cover hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer" />
                    </div>
                    <div>
                        <img src="/img/mosque/m2.jpg" alt="New Mosque 2" className="w-full h-[300px] md:h-[250px] md:w-[450px] rounded-md object-cover hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer" />
                    </div>
                    <div>
                        <img src="/img/mosque/m3.jpg" alt="New Mosque 3"className="w-full h-[300px] md:h-[250px] md:w-[450px] rounded-md object-cover hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"  />
                    </div>
                    <div>
                        <img src="/img/mosque/m4.jpg" alt="New Mosque 4" className="w-full h-[300px] md:h-[250px] md:w-[450px] rounded-md object-cover hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer" />
                    </div>

                </div>
                <div className="content py-20">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-Cinzel font-semibold text-yellow-600">Thank You For Your Desire To Give!</h2>
                        
                        <div className="grid place-items-center mt-10 cursor-pointer">
                            <Link href="https://www.paypal.com/donate/?hosted_button_id=AQUAXFVS5ZY4A">
                                <FaDonate className="text-8xl text-sky-600" />
                            </Link>
                        </div>
                        <p className='mt-5 text-xl text-slate-600'>Please donate to our new mosque in paypal</p>
                        <button className="text-white bg-sky-500 rounded-full px-5 mt-3">
                            <Link href="https://www.paypal.com/donate/?hosted_button_id=AQUAXFVS5ZY4A">Donate</Link>
                        </button>

                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </>
  )
}

export default donate