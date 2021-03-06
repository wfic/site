import React, {useState, useEffect} from 'react'
import Link from 'next/link'

import { HiOutlineMenuAlt3 } from 'react-icons/hi'

import style from '../styles/Home.module.css'

function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu() {
        setIsOpen(!isOpen)
    }
    function closeMenu() {
        setIsOpen(false)
    }
  return (
    <>
        <nav className="bg-[url('/img/navbg.webp')] bg-center drop-shadow-md sticky top-0 left-0 z-10">
            <div className="container flex justify-between items-center md:items-center md:flex-col py-2 md:py-4 w-full">
                <div className="logo text-4xl font-Cinzel font-black text-yellow-600 w-12 md:w-20">
                    <Link href='/'>
                        <img src="/img/logo.svg" alt="Logo" />
                    </Link>
                </div>
                <div className="links hidden md:block">
                    <ul className="flex flex-col md:flex-row md:space-x-5 text-xl font-Cinzel pt-2 font-light ">
                        <li className={style.buttonUnderlineAnim}>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li className={style.buttonUnderlineAnim}>
                            <Link href="/event">
                                Event
                            </Link>
                        </li>
                        <li className={style.buttonUnderlineAnim}>
                            <Link href="/school">
                                School
                            </Link>
                        </li>
                        <li className={style.buttonUnderlineAnim}>
                            <Link href="/gallery">
                                Gallery
                            </Link>
                        </li>
                        <li className={style.buttonUnderlineAnim}>
                            <Link href="/about">
                                About
                            </Link>
                        </li>
                        <li className={style.buttonUnderlineAnim}>
                            <Link href="/contact">
                                Contact
                            </Link>
                        </li>
                        <li className={style.buttonUnderlineAnim}>
                            <Link href="/donate">
                                Donate
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="ham md:hidden">
                    <HiOutlineMenuAlt3 className="text-3xl text-yellow-600 cursor-pointer" onClick={toggleMenu}/>
                </div>
            </div>
        </nav>
        <div className={isOpen ? "mobileLinks md:hidden fixed top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2 bg-white drop-shadow-2xl w-3/5 h-[50vh] grid place-content-center transition-all duration-300 z-10 bg-center rounded-2xl" : "hidden"}>
            <ul className="text-center space-y-5 text-xl font-Cinzel pt-2 font-light ">
                <li className={style.mobileMenuLink} onClick={closeMenu}>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className={style.mobileMenuLink} onClick={closeMenu}>
                    <Link href="/event">
                        Event
                    </Link>
                </li>
                <li className={style.mobileMenuLink} onClick={closeMenu}>
                    <Link href="/school">
                        School
                    </Link>
                </li>
                <li className={style.mobileMenuLink} onClick={closeMenu}>
                    <Link href="/gallery">
                        Gallery
                    </Link>
                </li>
                <li className={style.mobileMenuLink} onClick={closeMenu}>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li className={style.mobileMenuLink} onClick={closeMenu}>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>

                <li className={style.mobileMenuLink} onClick={closeMenu}>
                    <Link href="/donate">
                        Donate
                    </Link>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Nav