import React from 'react'
import Head from 'next/head'

import {client} from '../lib/client'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

export async function getServerSideProps() {
    // All photos query
    const allQuery = `
        *[_type=="school"]
    `;
    const allData = await client.fetch(allQuery);

    return {
        props: {
            data: allData[0]
        }
    };
}

function school({data}) {
  return (
    <>
        <Head>
            <title>Wichita Falls Islamic Community Mosque | School</title>
            <meta name="description" content="Developed by psylab" />
            {/* Change your Icon */}
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />

        <main className="">
            <div className="banner relative">
                <img src="/img/bg/bg.jpg" alt="background image" />
                <div className="bannerText absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <h2 className="text-3xl md:text-6xl font-Cinzel font-bold text-yellow-600">Our School</h2>
                    <span className="text-md md:text-xl text-gray-300">Home / School</span>
                </div>
            </div>

            <div className="container grid grid-cols-1 md:grid-cols-2 py-10">
                <div className="mb-10 md:mb-0">
                    <img src="/img/school2.jpg" alt="School Image" className="w-3/4 m-auto rounded-md p-2 border-2 border-red-500" />
                </div>
                <div>
                    <h2 className="text-2xl md:text-4xl font-Cinzel font-bold text-slate-800 mb-5">Information about our islamic school</h2>
                    <p className="text-slate-500 text-md mb-4">Following in the tradition of Islam and holding to the Sunnah of our Prophet Muhammad (PBUH), Wichita Falls Islamic society school strives to promote the moral values of Islam among young generations with an emphasis on responsibility and self-reliance.</p>
                    <p className="text-slate-500 text-md mb-4">Over 20 children coming to the school to learn Quran and Hadith Alhamdulillah. We provide free breakfast and we have full time teachers. If you are interested to learn more about our school or have any questions, please email/call us in the given number below.</p>
                    <div className="flex justify-between items-center mt-10">
                        <div>
                            <h2 className="text-2xl md:text-6xl font-Cinzel font-semibold text-slate-800">{data.totalStudents}+</h2>
                            <p className="text-md md:text-xl text-slate-600">Students</p>
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-6xl font-Cinzel font-semibold text-slate-800">{data.totalTeachers}</h2>
                            <p className="text-md md:text-xl text-slate-600">Teachers</p>
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-6xl font-Cinzel font-semibold text-slate-800"><span className="text-2xl md:text-4xl">$</span>{data.lastDonation}</h2>
                            <p className="text-md md:text-xl text-slate-600">Donation per month</p>
                        </div>
                    </div>
                </div>
            </div>

            
        </main>
        <Footer />
    </>
  )
}

export default school