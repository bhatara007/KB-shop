import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

import Banner from '../Banner'
import { bannerDesc, variants } from './constant'

export interface NavbarProps {
  banner?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ banner }) => {
  return (
    <>
      <motion.div
        className="flex justify-center space-x-10 md:justify-around p-2 z-50 fixed top-0 w-full bg-white bg-opacity-40 
        hover:bg-opacity-100 duration-500 text-black font-bold"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-transparent bold">
          <p> LOGO </p>
        </div>
        <div className="space-x-2 md:space-x-6 text-sm">
          <Link href="/">
            <a className="text-black"> Product </a>
          </Link>
          <Link href="/">
            <a className="text-black"> Groupbuy </a>
          </Link>
          <Link href="/">
            <a className="text-black"> Upcoming </a>
          </Link>
          <Link href="/">
            <a className="text-black"> Help </a>
          </Link>
        </div>
      </motion.div>
      {banner && <Banner bannerDesc={bannerDesc} />}
    </>
  )
}

export default Navbar
