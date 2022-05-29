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

export default function Home({pt}) {
    const today = new Date()
    const formattedDate = today.toDateString()
    // console.log(date)
  return (
    <>
        <Head>
            <title>Wichita Falls Islamic Community Mosque | Home</title>
        </Head>

        <Nav />
        <Hero />
        <main>
            {/* Welcome section */}
            <div className="relative bg-[url('/img/bg/homeBg.png')] bg-no-repeat bg-center py-20">
                <div className="container grid gap-5 grid-cols-1 md:grid-cols-2 place-content-center text-center">
                    <div className="text-left">
                        <h2 className="text-2xl md:text-4xl font-Cinzel font-bold text-slate-900 mb-5 md:mb-10">Welcome to Wichita Falls Islamic Society</h2>
                        <p className="text-md md:text-xl text-slate-700 w-4/5">The Wichita Falls Islamic Society is not just a mosque for prayers rather it is a community center for all. The Center is committed to preserving an Islamic identity, building and supporting a viable Muslim community, promoting a comprehensive Islamic way of life based on the Holy Quran and the Sunnah of Prophet Muhammad.</p>
                        <div className="mt-10 px-4 py-2 bg-yellow-600 text-white w-3/5 md:w-1/5 rounded-md">
                            <Link href="/about" >
                                Read more
                            </Link>
                        </div>
                    </div>
                    <div className="p-10 bg-slate-300/20 backdrop-blur-sm border-[1px] border-white rounded-sm w-full 2xl:w-2/3 mt-10 md:mt-0 2xl:ml-auto">
                        <h2 className="text-xl md:text-4xl font-bold font-Cinzel text-slate-800">Prayer Times</h2>
                        <p className="text-md md:text-xl text-slate-800">Prayer time in Texas</p>
                        <span className="text-sm md:text-md text-slate-600">{formattedDate}</span>

                        <div className="mx-10 mt-10 space-y-5">
                            <div className="flex justify-between items-center text-xl font-semibold text-slate-600">
                                <span>Fajr</span>
                                <span>{pt.Fajr}</span>
                            </div>
                            <div className="flex justify-between items-center text-xl font-semibold text-slate-600">
                                <span>Sunrise</span>
                                <span>{pt.Sunrise}</span>
                            </div>
                            <div className="flex justify-between items-center text-xl font-semibold text-slate-600">
                                <span>Dhuhr</span>
                                <span>{pt.Dhuhr}</span>
                            </div>
                            <div className="flex justify-between items-center text-xl font-semibold text-slate-600">
                                <span>Asr</span>
                                <span>{pt.Asr}</span>
                            </div>
                            <div className="flex justify-between items-center text-xl font-semibold text-slate-600">
                                <span>Maghrib</span>
                                <span>{pt.Maghrib}</span>
                            </div>
                            <div className="flex justify-between items-center text-xl font-semibold text-slate-600">
                                <span>Isha</span>
                                <span>{pt.Isha}</span>
                            </div>
                        </div>
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
                        <p className="text-slate-600 text-xl">A critical component of every Muslims journey is knowledge.</p>
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

export async function getStaticProps() {
    const today = new Date().getDate()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()

    const res = await fetch(`http://api.aladhan.com/v1/calendar?latitude=33.965980&longitude=-98.518550&method=2&month=${month+1}&year=${year}`)
    const data = await res.json()


    return {
        props: {
            pt: data.data[today-1].timings
        }
    }
}