import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {client} from '../lib/client'
import YouTube from 'react-youtube'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

export async function getServerSideProps() {
    // All photos query
    const allQuery = `
        *[_type=="gallery"]{
            _id,
            title,
            "imgUrl": image.asset->url
        }
    `;
    // New Mosque query
    const newMosqueQuery = `
    *[_type=="gallery" && tag->title match "New Mosque"]{
        _id,
        title,
        "imgUrl": image.asset->url
    }
    `;

    // Events query 
    const eventsQuery = `
    *[_type=="gallery" && tag->title match "Event"]{
        _id,
        title,
        "imgUrl": image.asset->url
    }
    `;

    // School query
    const schoolQuery = `
        *[_type=="gallery" && tag->title match "School"]{
            _id,
            title,
            "imgUrl": image.asset->url
        }
    `;

    // Current mosque query
    const currentQuery = `
        *[_type=="gallery" && tag->title match "Current"]{
            _id,
            title,
            "imgUrl": image.asset->url
        }
    `;

    // Video query
    const videoQuery = `
        *[_type=="videos"]{
            _id,
            videoUrl
        }
    `;
    const allData = await client.fetch(allQuery);
    const currentData = await client.fetch(currentQuery);
    const eventsData = await client.fetch(eventsQuery);
    const schoolData = await client.fetch(schoolQuery);
    const newMosqueData = await client.fetch(newMosqueQuery);
    const videoData = await client.fetch(videoQuery);

    return {
        props: {
            allData,
            currentData,
            eventsData,
            schoolData,
            newMosqueData,
            videoData

        }
    };
}

function gallery({allData, currentData, eventsData, schoolData, newMosqueData, videoData}) {
    console.log(videoData[0].videoUrl.split("v=")[1].split("&")[0]);

    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
    }

    // options for yt player
    const opts = {
        height: "250",
        width: "350",
        playerVars: {
          autoplay: 1,
        },
      };

    function onReady(e){
        e.target.pauseVideo()
    }
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
            {/* Gallery starts here */}
            <div className="container py-20">
                <div>
                    <div className="blockTabs flex flex-col md:flex-row items-center space-y-5 md:space-x-10 md:space-y-0">
                        <div className={toggleState==1 ? "tabs px-4 py-2 border-b-[1px] border-emerald-500 font-Cinzel font-semibold text-slate-800 cursor-pointer": "tabs py-2 px-4 font-Cinzel font-semibold text-slate-800 cursor-pointer"} onClick={() => toggleTab(1)}>All Images</div>
                        <div className={toggleState==2 ? "px-4 py-2 border-b-[1px] border-emerald-500 font-Cinzel font-semibold text-slate-800 cursor-pointer": "tabs py-2 px-4 font-Cinzel font-semibold text-slate-800 cursor-pointer"} onClick={() => toggleTab(2)}>New Mosque</div>
                        <div className={toggleState==3 ? "px-4 py-2 border-b-[1px] border-emerald-500 font-Cinzel font-semibold text-slate-800 cursor-pointer": "tabs py-2 px-4 font-Cinzel font-semibold text-slate-800 cursor-pointer"} onClick={() => toggleTab(3)}>Events</div>
                        <div className={toggleState==4 ? "px-4 py-2 border-b-[1px] border-emerald-500 font-Cinzel font-semibold text-slate-800 cursor-pointer": "tabs py-2 px-4 font-Cinzel font-semibold text-slate-800 cursor-pointer"} onClick={() => toggleTab(4)}>School</div>
                        <div className={toggleState==5 ? "px-4 py-2 border-b-[1px] border-emerald-500 font-Cinzel font-semibold text-slate-800 cursor-pointer": "tabs py-2 px-4 font-Cinzel font-semibold text-slate-800 cursor-pointer"} onClick={() => toggleTab(5)}>Current Mosque</div>
                        <div className={toggleState==6 ? "px-4 py-2 border-b-[1px] border-emerald-500 font-Cinzel font-semibold text-slate-800 cursor-pointer": "tabs py-2 px-4 font-Cinzel font-semibold text-slate-800 cursor-pointer"} onClick={() => toggleTab(6)}>Videos</div>
                    </div>
                    <div className="tabContent grid place-content-center md:place-content-start">
                        {/* For All Images */}
                        <div className={toggleState == 1 ? "block" : "hidden"}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                                {allData.map((item) => (
                                    <img src={item.imgUrl} alt={item.title} className="w-full h-[300px] md:h-[250px] md:w-[450px] rounded-md object-cover hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer" key={item._id} />
                                ))}
                            </div>
                        </div>

                        {/* For New Mosque */}
                        <div className={toggleState == 2 ? "block" : "hidden"}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                                {newMosqueData.map((item) => (
                                    <img src={item.imgUrl} alt={item.title} className="w-full h-[300px] md:h-[250px] md:w-[450px] rounded-md object-cover hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer" key={item._id} />
                                ))}
                            </div>
                        </div>

                        {/* For Events */}
                        <div className={toggleState == 3 ? "block" : "hidden"}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                                {eventsData.map((item) => (
                                    <img src={item.imgUrl} alt={item.title} className="w-full h-[300px] md:h-[250px] md:w-[450px] rounded-md object-cover hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer" key={item._id} />
                                ))}
                            </div>
                        </div>

                        {/* For School */}
                        <div className={toggleState == 4 ? "block" : "hidden"}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                                {schoolData.map((item) => (
                                    <img src={item.imgUrl} alt={item.title} className="w-full h-[300px] md:h-[250px] md:w-[450px] rounded-md object-cover hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer" key={item._id} />
                                ))}
                            </div>
                        </div>

                        {/* For Current */}
                        <div className={toggleState == 5 ? "block" : "hidden"}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                                {currentData.map((item) => (
                                    <img src={item.imgUrl} alt={item.title} className="w-full h-[300px] md:h-[250px] md:w-[450px] rounded-md object-cover hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer" key={item._id} />
                                ))}
                            </div>
                        </div>

                        {/* For Videos */}
                        <div className={toggleState == 6 ? "block" : "hidden"}>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-5">
                                {videoData.map((item) => (
                                    <YouTube videoId={item.videoUrl.split("v=")[1].split("&")[0]} opts={opts} onReady={onReady}  />
                                ))}
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

export default gallery