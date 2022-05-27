import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,  A11y, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Hero() {
  return (
    <div className="">
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            loop
            autoplay={{delay: 5000}}
        >
        <SwiperSlide>
            <div className="relative">
                <img src="/img/hero/hero1.jpg" alt="heor1" className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] xl:h-[80vh] object-cover" />
                <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-center p-10 bg-white-/20 backdrop-blur-sm border-2 border-white rounded-xl">
                    <h2 className="text-2xl md:text-4xl xl:text-6xl font-Cinzel font-semibold mb-5 text-yellow-600">"And Allah Invites to the home of peace"</h2>
                    <span className="text-xl text-slate-500">Surah Yunus, Verse 25</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative">
                <img src="/img/hero/hero2.jpg" alt="heor2" className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] xl:h-[80vh] object-cover" />
                <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-center p-10 bg-white-/20 backdrop-blur-sm border-2 border-white rounded-xl">
                    <h2 className="text-2xl md:text-4xl xl:text-6xl font-Cinzel font-semibold mb-5 text-yellow-600">women qur'an class every friday night</h2>
                    <span className="text-xl text-slate-500">Between Magrib and Isha</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative">
                <img src="/img/hero/hero3.jpg" alt="heor3" className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] xl:h-[80vh] object-cover" />
                <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-center p-10 bg-white-/20 backdrop-blur-sm border-2 border-white rounded-xl">
                    <h2 className="text-2xl md:text-4xl xl:text-6xl font-Cinzel font-semibold mb-5 text-yellow-600">Sirat Rasul allah every 2nd and 4th friday</h2>
                    <span className="text-xl text-slate-500">After Magrib Prayers</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative">
                <img src="/img/hero/hero4.jpg" alt="heor4" className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] xl:h-[80vh] object-cover opacity-70" />
                <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-center p-10 bg-white-/20 backdrop-blur-sm border-2 border-white rounded-xl">
                    <h2 className="text-2xl md:text-4xl xl:text-6xl font-Cinzel font-semibold mb-5 text-yellow-600">Donate for our new mosque</h2>
                    <Link href="/donate">
                        <button className="px-6 py-2 bg-yellow-600 text-white rounded-full drop-shadow-md text-md">Donate</button>
                    </Link>
                </div>
            </div>
        </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Hero