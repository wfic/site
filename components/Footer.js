import React from 'react'
import Link from 'next/link'

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
                            <li className="text-md md:text-xl text-gray-100/80 font-light ">
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li className="text-md md:text-xl text-gray-100/80 font-light ">
                                <Link href="/event">
                                    Event
                                </Link>
                            </li>
                            <li className="text-md md:text-xl text-gray-100/80 font-light ">
                                <Link href="/about">
                                    About
                                </Link>
                            </li>
                            <li className="text-md md:text-xl text-gray-100/80 font-light ">
                                <Link href="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li className="text-md md:text-xl text-gray-100/80 font-light ">
                                <Link href="/school">
                                    School
                                </Link>
                            </li>
                            <li className="text-md md:text-xl text-gray-100/80 font-light ">
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
                        <li className="text-md md:text-xl text-gray-100/80 font-light ">Marriage</li>
                        <li className="text-md md:text-xl text-gray-100/80 font-light ">Funeral</li>
                        <li className="text-md md:text-xl text-gray-100/80 font-light ">Scholarship</li>
                        <li className="text-md md:text-xl text-gray-100/80 font-light ">Shahada</li>
                        <li className="text-md md:text-xl text-gray-100/80 font-light ">Community</li>
                        <li className="text-md md:text-xl text-gray-100/80 font-light ">Donate</li>
                    </ul>
                </div>
                <div className="footerContact">
                    <h3 className="text-2xl font-bold font-Cinzel py-4 text-yellow-600">Contact</h3>
                    <ul>
                        <li className="text-md md:text-xl text-gray-100/80 font-light ">
                            <a href="tel:+19403375021"></a>
                        </li>
                        <li className="text-md md:text-xl text-gray-100/80 font-light ">
                            <a href="mailto:islamicsocietyofwf@gmail.com">islamicsocietyofwf@gmail.com</a>
                        </li>
                        <li className="text-md md:text-xl text-gray-100/80 font-light ">
                            <p>1701 Trigg Ln, Wichita Falls,</p>
                            <p>TX, 76308, USA</p>
                        </li>
                    </ul>
                </div>
                <div className="footerSocial">
                    <h3 className="text-2xl font-bold font-Cinzel py-4 text-yellow-600">Social</h3>
                    <ul>
                        <li className="text-md md:text-xl text-gray-100/80 font-light ">
                            <a href="http://www.facebook.com">Facebook</a>
                        </li>
                        <li className="text-md md:text-xl text-gray-100/80 font-light ">
                            <a href="http://www.twitter.com">Twitter</a>
                        </li>
                        <li className="text-md md:text-xl text-gray-100/80 font-light ">
                            <a href="http://www.instagram.com">Instagram</a>
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