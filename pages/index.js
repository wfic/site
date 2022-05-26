import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

import {FaMosque, FaQuran, FaHandsHelping} from 'react-icons/fa'
import { BsFillMoonStarsFill, BsClockHistory, BsHexagon } from 'react-icons/bs'
import { GiSelfLove } from 'react-icons/gi'

import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
        <Head>
            <title>Wichita Falls Islamic Community Mosque | Home</title>
        </Head>

        <Nav />
        <Hero />
        <main>
            {/* Welcome section */}
            <div className="relative bg-[url('/img/bg/homeBg.png')] bg-no-repeat bg-center mb-20">
                {/* <img src="/img/bg/homeBg.png" alt="home background" /> */}
                <div className="container h-[50vh] md:h-[70vh] grid place-content-center text-center">
                    <h2 className="text-xl md:text-4xl font-Cinzel font-bold text-slate-900 mb-5 md:mb-10">Welcome to Wichita Falls Islamic Society</h2>
                    <p className="text-md md:text-xl text-slate-700 w-2/3 m-auto">The Shaha is not just a mosque for prayers rather it is a community center for all. The Center is committed to preserving an Islamic identity, building and supporting a viable Muslim community, promoting a comprehensive Islamic way of life based on the Holy Quran and the Sunnah of Prophet Muhammad.</p>
                    <div className="mt-10 px-4 py-2 bg-yellow-600 text-white w-2/5 md:w-1/5 m-auto rounded-md">
                        <Link href="/about" >
                            Read more
                        </Link>
                    </div>
                </div>
            </div>

            {/* Philosophy Section */}
            <div className="philosophy container py-10 text-center mb-20">
                <h2 className="text-4xl font-Cinzel font-bold text-slate-900 mb-20">Our Philosophy</h2>

                <div className="phis text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20">
                    <div className="grid grid-cols-1">
                        <FaQuran className="text-6xl m-auto mb-10 text-red-500" />
                        <h4 className="text-red-500 text-2xl font-Cinzel font-semibold mb-5">Knowledge</h4>
                        <p className="text-slate-600 text-xl">A critshahal component of every Muslims journey is knowledge.</p>
                    </div>
                    <div className="grid grid-cols-1">
                        <BsFillMoonStarsFill className="text-6xl m-auto text-emerald-500 mb-10" />
                        <h4 className="text-emerald-500 text-2xl font-Cinzel font-semibold mb-5">Spirituality</h4>
                        <p className="text-slate-600 text-xl">Ihsan was the way of our Messenger</p>
                    </div>
                    <div className="grid grid-cols-1">
                        <FaMosque className="text-6xl m-auto mb-10 text-blue-500" />
                        <h4 className="text-blue-500 text-2xl font-Cinzel font-semibold mb-5">Community</h4>
                        <p className="text-slate-600 text-xl">We pray together, we break our fast together, Islam is community</p>
                    </div>
                    <div className="grid grid-cols-1">
                        <FaHandsHelping className="text-6xl m-auto mb-10 text-green-500" />
                        <h4 className='text-green-500 text-2xl font-Cinzel font-semibold mb-5'>Service</h4>
                        <p className="text-slate-600 text-xl">Being in service to others is the duty of every Muslim</p>
                    </div>
                </div>

            </div>

            {/* Donate section */}
            <div className="donate relative">
                <div className="">
                    <img src="/img/bg/donatebg.jpg" alt="donate bg" className="h-[40vh] md:h-[60vh] w-full object-cover" />
                </div>
                <div className="container">
                    <div className="absolute top-1/2 md:right-1/4 -translate-y-1/2">
                        <h2 className="text-xl md:text-4xl font-bold text-white font-Cinzel mb-5">Support us, <br /> we need your help.</h2>
                        <p className="w-[450px] text-gray-200 mb-5">May Allah bless you! Thank you. Those who (in charity) spend of their goods by night and by day, in secret and in public, have their reward with their Lord</p>
                        <button className="py-2 px-5 bg-yellow-600 rounded-md">
                            <Link href="/donate">
                                <a className="text-white font-bold">Donate</a>
                            </Link>

                        </button>
                    </div>
                    
                </div>
            </div>

            {/* Services Section */}
            <div className="section relative py-20">
                <h2 className="text-4xl text-center font-Cinzel font-bold mb-20">Our Services</h2>

                <div className="container text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
                    <div className="grid grid-cols-1">
                        <BsHexagon className="text-6xl m-auto mb-10 text-sky-500" />
                        <h4 className="text-sky-500 text-2xl font-Cinzel font-semibold mb-5">Shahada</h4>
                        <p className="text-slate-600 text-xl">Taking the shahada, profession of the Islamic faith, is one of the biggest decisions</p>
                    </div>
                    <div className="grid grid-cols-1">
                        <BsClockHistory className="text-6xl m-auto text-emerald-500 mb-10" />
                        <h4 className="text-emerald-500 text-2xl font-Cinzel font-semibold mb-5">Funeral</h4>
                        <p className="text-slate-600 text-xl">Funeral Arrangements “To Allah we belong and to Him is our return.”</p>
                    </div>
                    <div className="grid grid-cols-1">
                        <GiSelfLove className="text-6xl m-auto mb-10 text-red-500" />
                        <h4 className="text-red-500 text-2xl font-Cinzel font-semibold mb-5">Marriage</h4>
                        <p className="text-slate-600 text-xl">Islam teaches us that marriage is an important part of our life</p>
                    </div>
                </div>
            </div>


            {/* school scetion */}
            <div className="school relative">
                <div className="">
                    <img src="/img/bg/schoolbg.webp" alt="school bg" className="h-[40vh] md:h-[60vh] w-full object-cover" />
                </div>
                <div className="container">
                    <div className="absolute top-1/2 md:right-1/4 -translate-y-1/2">
                        <h2 className="text-xl md:text-4xl font-bold text-white font-Cinzel mb-5">Islamic School</h2>
                        <p className="w-[450px] text-gray-200 mb-5 text-md">The Weekend School of the Islamic Center of Allah is committed to providing quality Islamic Education according to the Quran and the Sunnah of the Prophet Mohammed (Peace Be upon Him) to a diverse student population in the greater area.</p>
                        <button className="py-2 px-5 bg-yellow-600 rounded-md">
                            <Link href="/school">
                                <a className="text-white font-bold">See More</a>
                            </Link>

                        </button>
                    </div>
                    
                </div>
            </div>
        </main>
        <Footer />

        <Script src="/node_modules/dist/js/index.min.js"></Script>
    </>
  )
}
