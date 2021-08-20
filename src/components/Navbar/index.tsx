import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

import { bannerVariants, variants } from './constant'

export interface NavbarProps {
  banner?: boolean
}

  const bannerDesc = [
    {
      name: 'GMK Botanical',
      desc: 'Designed by Omnitype',
      link: 'https://cdn.shopify.com/s/files/1/0054/0878/4458/files/GMK_Botanical_2_OMNI_Bauer_003_dist_x800.jpg?v=1628715382'
    },
    {
      name: 'GMK Handarbeit',
      desc: 'Designed by cocobrais',
      link: 'https://i.imgur.com/K94YTos.jpg'
    }
  ]

  
const Navbar: React.FC<NavbarProps> = ({ banner }) => {

  const ref = useRef(null)
  const [index, setIndex] = useState(0)

  const [show, setShow] = useState(true)

  useEffect(() => {
    if (!show){
      setShow(true)
    }
  }, [show])

  useEffect(() => {
    setInterval(() => {
      ref.current.click()
    }, 5000) //miliseconds
  }, [])

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
      {banner && (
        <div>
          {show && (
            <>
              <motion.div
                className=" text-white justify-center text-center mx-auto flex flex-col h-96 text-2xl items-center
                bg-black bg-opacity-20 z-0"
                variants={variants}
                initial="hidden"
                animate="visible"
              >
                <p className="text-5xl font-bold"> {bannerDesc[index].name}</p>
                <p> {bannerDesc[index].desc}</p>
                <button className="bg-white text-black mt-4 text-sm py-2 px-4">
                  CHECK IT OUT NOW!
                </button>
                <button
                  ref = {ref}
                  className="absolute bg-white text-black text-sm py-2 px-4 mt-80 right-0"
                  onClick={() => {
                    setIndex((index + 1) % bannerDesc.length)
                    setShow(false)
                  }}
                >
                  change banner
                </button>
              </motion.div>

              <motion.div
                className="h-96 w-100% absolute inset-0 bg-local text-center pt-36 text-4xl text-white
                filter bg-center bg-no-repeat bg-cover bg-opacity-75"
                style={{
                  backgroundImage: `url(${bannerDesc[index].link})`,
                  zIndex: -3
                }}
                variants={bannerVariants}
                initial="hidden"
                animate="visible"
              ></motion.div>
            </>
          )}
          {!show && <div className="bg-transparent h-96 top-0"></div>}
        </div>
      )}
    </>
  )
}

export default Navbar
