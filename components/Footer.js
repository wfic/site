import React from 'react'
import Link from 'next/link'

import { AiFillFacebook } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'

function Footer() {
    const year = new Date().getFullYear()
  return (
    <>
        <footer className="relative text-center bg-[url('/img/footer.webp')] bg-no-repeat bg-center">
            <div className="container md:flex md:justify-between py-10">
                <div className="footerMenu">
                    <h3 className="text-2xl font-bold font-Cinzel py-4 text-yellow-600">Menu</h3>
                    <div>
                        <ul>
                            <li className="text-sm md:text-md text-gray-100/80 font-light ">
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li className="text-sm md:text-md text-gray-100/80 font-light ">
                                <Link href="/event">
                                    Event
                                </Link>
                            </li>
                            <li className="text-sm md:text-md text-gray-100/80 font-light ">
                                <Link href="/about">
                                    About
                                </Link>
                            </li>
                            <li className="text-sm md:text-md text-gray-100/80 font-light ">
                                <Link href="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li className="text-sm md:text-md text-gray-100/80 font-light ">
                                <Link href="/school">
                                    School
                                </Link>
                            </li>
                            <li className="text-sm md:text-md text-gray-100/80 font-light ">
                                <Link href="/donate">
                                    Donate
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footerServices">
                    <h3 className="text-2xl font-bold font-Cinzel py-4 text-yellow-600">Services</h3>
                    <ul className="">
                        <li className="text-sm md:text-md text-gray-100/80 font-light ">Marriage</li>
                        <li className="text-sm md:text-md text-gray-100/80 font-light ">Funeral</li>
                        <li className="text-sm md:text-md text-gray-100/80 font-light ">Scholarship</li>
                        <li className="text-sm md:text-md text-gray-100/80 font-light ">Shahada</li>
                        <li className="text-sm md:text-md text-gray-100/80 font-light ">Community</li>
                    </ul>
                </div>
                <div className="footerContact">
                    <h3 className="text-2xl font-bold font-Cinzel py-4 text-yellow-600">Address</h3>
                    <ul>
                        <li className="text-sm md:text-md text-gray-100/80 font-light ">
                            <a href="tel:+19403375021"></a>
                        </li>
                        <li className="text-sm md:text-md text-gray-100/80 font-light ">
                            <p>1701 Trigg Ln, Wichita Falls,</p>
                            <p>TX, 76308, USA</p>
                        </li>
                    </ul>
                </div>
                <div className="footerSocial">
                    <h3 className="text-2xl font-bold font-Cinzel py-4 text-yellow-600">Social</h3>
                    <ul>
                        <li className="text-sm md:text-md text-gray-100/80 font-light ">
                            <a href="https://www.facebook.com/groups/559737301531661">
                                <div className="flex justify-center items-center">
                                    <AiFillFacebook/>
                                    <span className="ml-2">Facebook</span>
                                </div>
                            </a>
                        </li>
                        <li className="text-sm md:text-md text-gray-100/80 font-light ">
                            <a href="http://www.instagram.com">
                                <div className="flex justify-center items-center">
                                    <AiOutlineWhatsApp/>
                                    <span className="ml-2">Whatsapp</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full h-[1px] bg-gray-400/20 drop-shadow-lg"></div>

            <div className="copy py-5 text-sm md:text-md text-gray-400/30">
                {`Copyright © ${year} Islamic Society of Wichita Falls. All rights reserved.`} 
            </div>


        </footer>
    </>
  )
}

export default Footer