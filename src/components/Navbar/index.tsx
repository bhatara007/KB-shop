import { CartSliderContext } from '@app/context/cartContext'
import { IUser } from '@app/dto/user'
import kbServer from '@app/https/https'
import { motion, transform } from 'framer-motion'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineShopping,
  AiOutlineUser
} from 'react-icons/ai'

import Banner from '../Banner'
import CartSilder from '../CartSlider'
import MobileNav from '../MobileNav'
import { bannerDesc, cartVariants, mobileVariants, variants } from './constant'
export interface NavbarProps {
  banner?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ banner }) => {
  const { pathname } = useRouter()
  const { cartSlider, setCartSlider } = useContext(CartSliderContext)

  const [mobileNav, setMobileNav] = useState(false)

  const [dropDown, setDropDown] = useState(false)

  const [user, setUser] = useState<IUser>({} as IUser)

  const getUser = async () => {
    const token = localStorage.getItem('userToken')
    if (token) {
      const { data } = await kbServer.get('/user/get-user', {
        headers: { 'x-access-token': token }
      })

      return data
    }
  }

  useEffect(() => {
    getUser()
      .then(data => setUser(data))
      .catch(() => localStorage.removeItem('userToken'))
  }, [])

  useEffect(() => {
    setCartSlider(false)
  }, [pathname])

  return (
    <>
      <div>
        <motion.div
          className={`flex sm:space-x-10 md:p-2 z-50 fixed top-0 w-full bg-white
          ${mobileNav || cartSlider ? '' : ''}
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
          <div className="bg-transparent text-lg bold">
            <Link href="/">
              <a className="text-black"> LOGO </a>
            </Link>
          </div>
          <div className={`sm:flex space-x-2 md:space-x-6 text-sm hidden`}>
            <div
              onMouseOver={() => setDropDown(true)}
              onMouseLeave={() => setDropDown(false)}
              className="relative"
            >
              <Link href="/products">
                <a className="text-black relative z-50"> Product </a>
              </Link>
              {dropDown && (
                <div
                  className=" bg-white absolute flex p-3 space-y-2 flex-col bot top-0"
                  style={{
                    left: -20
                  }}
                >
                  <Link href="/products">
                    <a className="text-black mt-2"> </a>
                  </Link>
                  <Link href="/category/keyboard">
                    <a className="text-black"> Keyboards </a>
                  </Link>
                  <Link href="/category/keycaps">
                    <a className="text-black"> Keycaps </a>
                  </Link>
                  <Link href="/category/switch">
                    <a className="text-black"> Swtichs </a>
                  </Link>
                  <Link href="/category/acc">
                    <a className="text-black"> Accessories </a>
                  </Link>
                </div>
              )}
            </div>
            <div>
              <Link href="/">
                <a className="text-black"> Groupby </a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a className="text-black"> Upcoming </a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a className="text-black"> Help </a>
              </Link>
            </div>
            <div>
              <Link href={!user ? '/login' : '/account'}>
                <a className="text-black">
                  <AiOutlineUser className="w-5 h-5" />
                </a>
              </Link>
            </div>
          </div>
          <div className="w-10 h-10 text-2xl bg-transparent flex items-center justify-center absolute right-0 ">
            {!cartSlider && (
              <button
                className="w-10 h-10 z-50"
                onClick={() => setCartSlider(true)}
              >
                <AiOutlineShopping />
              </button>
            )}
            {cartSlider && (
              <button
                className="w-10 h-10 z-50"
                onClick={() => setCartSlider(false)}
              >
                <AiOutlineClose />
              </button>
            )}
          </div>
        </motion.div>
        {banner && <Banner bannerDesc={bannerDesc} />}
      </div>
      <motion.div
        className="fixed z-30 top-0 h-full bg-black p-4"
        variants={mobileVariants}
        initial={false}
        animate={!mobileNav ? 'hidden' : 'animate'}
      >
        <MobileNav />
      </motion.div>

      <motion.div
        className=" top-0 bg-black p-4 right-0 z-30 h-full fixed overflow-y-auto"
        variants={cartVariants}
        initial={false}
        animate={!cartSlider ? 'hidden' : 'animate'}
      >
        <CartSilder />
      </motion.div>
    </>
  )
}

export default Navbar
