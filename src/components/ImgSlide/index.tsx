import { AnimatePresence, motion } from 'framer-motion'
import { wrap } from 'popmotion'
import React, { useRef, useState } from 'react'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'

import { variants } from './constants'

export interface ImgSlideProps {
  images: string[]
  width?: string | number
  height?: string | number
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

const ImgSlide: React.FC<ImgSlideProps> = ({
  images,
  width = 500,
  height = 300
}) => {
  const [[page, direction], setPage] = useState([0, 0])

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  const imageIndex = wrap(0, images.length, page)
  const imgSize = useRef(null)

  return (
    <div>
      <div
        className=""
        style={{
          width: width,
          height: height
        }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            ref={imgSize}
            className="absolute z-10 h-92"
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              width: width,
              height: height
            }}
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
          />
        </AnimatePresence>
        <div
          className="z-20 flex absolute justify-end items-end"
          style={{
            width: width,
            height: height
          }}
        >
          <button
            className="bg-white h-10 w-10 text-lg font-bold hover:bg-black hover:text-white rounded-none border"
            onClick={() => paginate(-1)}
          >
            <AiFillCaretLeft className="w-full" />
          </button>
          <button
            className=" bg-white h-10 w-10 text-lg font-bold hover:bg-black hover:text-white rounded-none border"
            onClick={() => paginate(1)}
          >
            <AiFillCaretRight className="w-full" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-3 p-1 flex-nowrap overflow-x-auto" style={{ width: width }}>
        {images.map((image, index) => (
          <img src={image} key={index} alt={image} className={`h-16 cursor-pointer ${index===imageIndex?"border-2 border-gray-300":""}`}
          onClick = {() => setPage([index, 1])}/>
        ))}
      </div>
    </div>
  )
}

export default ImgSlide
