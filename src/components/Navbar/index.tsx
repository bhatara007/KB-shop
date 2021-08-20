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
        className="bg-transparent flex justify-around m-6 z-10 fixed top-0 w-full"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-transparent text-white bold">
          <p> LOGO </p>
        </div>
        <div className=" space-x-6">
          <Link href="/">
            <a className="text-white"> Product </a>
          </Link>
          <Link href="/">
            <a className="text-white"> Groupbuy </a>
          </Link>
          <Link href="/">
            <a className="text-white"> Upcoming </a>
          </Link>
          <Link href="/">
            <a className="text-white"> Help </a>
          </Link>
        </div>
      </motion.div>
      {banner && <Banner bannerDesc={bannerDesc} />}
    </>
  )
}

export default Navbar
