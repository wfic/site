import React from 'react'
import Head from 'next/head'

import {client} from '../lib/client'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

export async function getServerSideProps() {
    const query = '*[_type == "events"]';
    const result = await client.fetch(query);

    // console.log(result);

    return {
        props: {
            events: result
        }
    };
}

const Event = ({events}) => {
    // console.log(new Date(events[0].eventDate).toLocaleString('en-us',{month:'short', day:'numeric', year:'numeric', weekday:'short'}))

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

                {/* Data from sanity */}
                {events.map((event, i) => (
                    <div className="flex pt-5 border-t-2 border-slate-400 mb-10" key={i}>
                        <div className="flex items-center mr-10">
                            <div className="text-4xl md:text-6xl font-bold text-slate-300">
                                {
                                new Date(event.eventDate).toLocaleString('en-us',{day:'numeric'}).length<2 ? '0'+new Date(event.eventDate).toLocaleString('en-us',{day:'numeric'}) : new Date(event.eventDate).toLocaleString('en-us',{day:'numeric'})}
                            </div>
                            <div className="flex flex-col ml-5">
                                <span className="text-md md:text-xl font-semibold text-slate-900">
                                    {new Date(event.eventDate).toLocaleString('en-us',{month:'short'})}
                                </span>
                                <span className="text-md md:text-xl text-slate-500">
                                    {new Date(event.eventDate).toLocaleString('en-us',{weekday:'short'})}
                                </span>
                            </div>
                        </div>
                        <div className="flex-2">
                            <h3 className="text-xl md:text-2xl font-Cinzel font-semibold text-slate-800 mb-5">{event.title}</h3>
                            <p className="text-md text-slate-400">{`${new Date(event.eventDate).toLocaleString('en-us',{month:'short', day:'numeric', year:'numeric', weekday:'short'})}`}</p>
                            <p className="text-md text-slate-400">{event.description}</p>
                        </div>
                    </div>
                ))}

                
            </div>
        </main>
        <Footer />
    </>
  )
};


export default Event