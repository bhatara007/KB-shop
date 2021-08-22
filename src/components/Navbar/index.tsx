import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineShopping } from 'react-icons/ai'

import Banner from '../Banner'
import CartSilder from '../CartSlider'
import MobileNav from '../MobileNav'
import { bannerDesc, cartVariants, mobileVariants, variants } from './constant'
export interface NavbarProps {
  banner?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ banner }) => {

  const [mobileNav, setMobileNav] = useState(false)
  const [cartSilder, setCartSilder] = useState(false)

  return (
    <>
      <div>
        <motion.div
          className={`flex sm:space-x-10 md:p-2 z-50 fixed top-0 w-full bg-white
          ${mobileNav || cartSilder ? '' : 'bg-opacity-40'}
          hover:bg-opacity-100 duration-500 text-black font-bold
          items-center justify-around h-10`}
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <div className="sm:hidden ml-2 absolute text-2xl left-0">
            {!mobileNav && (
              <button
                className="w-10 h-10 z-50"
                onClick={() => setMobileNav(true)}
              >
                <AiOutlineMenu />
              </button>
            )}
            {mobileNav && (
              <button
                className="w-10 h-10 z-50"
                onClick={() => setMobileNav(false)}
              >
                <AiOutlineClose />
              </button>
            )}
          </div>
          <div className="bg-transparent text-lg bold">LOGO</div>
          <div className={`space-x-2 md:space-x-6 text-sm hidden sm:block`}>
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
          <div className="w-10 h-10 text-2xl bg-transparent flex items-center justify-center absolute right-0 ">
            {!cartSilder && (
              <button
                className="w-10 h-10 z-50"
                onClick={() => setCartSilder(true)}
              >
                <AiOutlineShopping />
              </button>
            )}
            {cartSilder && (
              <button
                className="w-10 h-10 z-50"
                onClick={() => setCartSilder(false)}
              >
                <AiOutlineClose />
              </button>
            )}
          </div>
        </motion.div>
        {banner && <Banner bannerDesc={bannerDesc} />}
      </div>
      <motion.div
        className="absolute z-30 top-0 h-full bg-black p-4"
        variants={mobileVariants}
        initial={false}
        animate={!mobileNav ? 'hidden' : 'animate'}
      >
        <MobileNav />
      </motion.div>

      <motion.div
        className=" absolute top-0 h-full bg-black p-4 right-0 z-30"
        variants={cartVariants}
        initial={false}
        animate={!cartSilder ? 'hidden' : 'animate'}
      >
        <CartSilder />
      </motion.div>
    </>
  )
}

export default Navbar
