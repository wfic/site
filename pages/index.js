import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import {AiFillEdit} from 'react-icons/ai'

export default function Home() {
  return (
    <div className="bg-[url('/img/hero.jpg')] bg-no-repeat bg-cover backdrop-blur-sm">
      <Head>
        <title>Next Starter</title>
        <meta name="description" content="Organized by psylab" />
        {/* Change your Icon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container h-[100vh] grid place-content-center relative">
        
        <div className="text-6xl lg:text-8xl font-extrabold lg:w-2/3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 to-fuchsia-500">Start your project from here..</div>
        <div className="flex items-center text-xl py-5 text-gray-700 ">
          <AiFillEdit className="text-xl mr-3 text-indigo-600" /> Edit <span className="bg-gray-200 text-blue-600 px-2 pb-1 ring-1 rounded-lg mx-2">pages/index.js</span> to start...
        </div>
      </main>
    </div>
  )
}
