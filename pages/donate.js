import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

import { FaDonate } from 'react-icons/fa'

function donate() {
  return (
    <>
        <Head>
            <title>Wichita Falls Islamic Community Mosque | Contact</title>
            <meta name="description" content="Developed by psylab" />
            {/* Change your Icon */}
            <link rel="icon" href="/favicon.ico" />
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
                <div className="content py-20">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-Cinzel font-semibold text-yellow-600">Thank You For Your Desire To Give!</h2>
                        
                        <div className="grid place-items-center mt-10">
                            <FaDonate className="text-8xl text-yellow-600" />
                        </div>
                        <p className='mt-5 text-xl text-slate-600'>Please donate to our new mosque in paypal</p>
                        <div>
                        <div id="donate-button-container">
                            <div id="donate-button"></div>
                            <Script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" charset="UTF-8"></Script>
                            <Script>
                            PayPal.Donation.Button({
                            env:'production',
                            hosted_button_id:'AQUAXFVS5ZY4A',
                            image: {
                            src:'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
                            alt:'Donate with PayPal button',
                            title:'PayPal - The safer, easier way to pay online!',
                            }
                            }).render('#donate-button');
                            </Script>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </>
  )
}

export default donate