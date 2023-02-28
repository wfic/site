import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {client} from '../lib/client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export async function getServerSideProps() {
    const query = '*[_type == "banner"]';
    const result = await client.fetch(query);

    console.log(result);

    return {
        props: {
            bannerData: result
        }
    };
}

function Hero({bannerData}) {
    console.log(bannerData);
  return (
    
  )
}

export default Hero