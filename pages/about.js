import React from 'react'
import Head from 'next/head'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

import { ImQuotesLeft } from 'react-icons/im'


function about() {
  return (
    <>
        <Head>
            <title>Wichita Falls Islamic Community Mosque | About</title>            
        </Head>
        <Nav />

        <main className="">
            <div className="banner relative">
                <img src="/img/bg/bg.jpg" alt="background image" />
                <div className="bannerText absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <h2 className="text-3xl md:text-6xl font-Cinzel font-bold text-yellow-600">About</h2>
                    <span className="text-md md:text-xl text-gray-300">Home / About</span>
                </div>
            </div>
            <div className="py-20 container grid grid-cols-1 md:grid-cols-2">
                <div className="mb-10 md:mb-0">
                    <img src="/img/about_1.webp" alt="about" />
                </div>
                <div>
                    <h2 className='text-2xl md:text-4xl font-Cinzel text-yellow-600 font-bold mb-6'>Mission Statement</h2>
                    <p className="text-md md:text-xl text-slate-600 mb-5">Islam is monotheistic religion teaching that there is only one incomparable God – Allah and that Muhammad is the messenger of God. It is the world’s second-largest religion and the fastest-growing major religion in the world. Islam teaches that God is merciful, all-powerful and unique.</p>
                    <p className="text-md md:text-xl text-slate-600">Nam facilisis mauris a metus finibus, id gravida velit ornare. Cras neque tortor, faucibus sit amet lacus eu, maximus hendrerit ipsum. Fusce condimentum sem enim, est ornare ex vestibulum ut. Aliquam pulvinar libero vitae dui porttitor, at condimentum dolor eleifend.</p>
                </div>

                
            </div>

            <div className="bg-[url('/img/bg/bgAbout.jpg')] bg-center bg-no-repeat">
                <div className="container py-20">
                    <ImQuotesLeft className="text-4xl text-slate-600"/>
                    <p className="text-md md:text-xl text-slate-600">Assalaamu Alaikum:</p>
                    <p className="text-md md:text-xl text-slate-600">Thank you for visiting the Islamic Center website. The WFIC is located in Texas and is one of the first mosques in Texas. The WFIC is not only a mosque, it is also a community center. I invite you to visit us and discover the beauty of our Center. This will give you an opportunity to meet our diverse and friendly community represented by dozens of different ethnicities. Hope to see you soon at our center!</p>
                    <p className="text-md md:text-xl text-slate-600">Dani Waleed Aswad, <span className="text-yellow-600">Director</span></p>
                </div>
            </div>
        </main>

        <Footer />
    </>
  )
}

export default about