import React from 'react'
// import Image from 'next/image'
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
    <div className="mb-10">
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
                <img src="/img/hero/hero1.jpg" alt="heor1" className="w-full h-[80vh] object-cover" />
                <p className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">Hello world</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/img/hero/hero2.jpg" alt="heor1" className="w-full h-[80vh] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/img/hero/hero3.jpg" alt="heor1" className="w-full h-[80vh] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/img/hero/hero4.jpg" alt="heor1" className="w-full h-[80vh] object-cover" />
        </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Hero