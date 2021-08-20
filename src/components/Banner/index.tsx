import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

import { bannerVariants, imgVariants } from './constants'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BannerProps {
  bannerDesc: {
    name?: string
    desc?: string
    link: string
  }[]
}

const Banner: React.FC<BannerProps> = ({ bannerDesc }) => {
  const ref = useRef(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setInterval(() => {
      if (ref.current) ref.current.click()
    }, 5000) //miliseconds
  }, [])

  return (
    <div>
      <AnimatePresence initial={false} custom={index}>
        <div key={index}>
          <motion.div
            className=" text-white absolute w-full justify-center text-center mx-auto flex flex-col h-96 text-2xl items-center
          bg-black bg-opacity-20 z-0"
            variants={imgVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <p className="text-5xl font-bold"> {bannerDesc[index].name}</p>
            <p> {bannerDesc[index].desc}</p>
            <button className="bg-white text-black mt-4 text-sm py-2 px-4">
              CHECK IT OUT NOW!
            </button>
            <button
              ref={ref}
              className="absolute bg-white text-black text-sm py-2 px-4 mt-80 right-0"
              onClick={() => {
                setIndex((index + 1) % bannerDesc.length)
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
            exit={{ opacity: 0 }}
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          ></motion.div>
        </div>
      </AnimatePresence>
      <div className="h-96"></div>
    </div>
  )
}

export default Banner
