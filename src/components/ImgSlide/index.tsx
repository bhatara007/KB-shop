import { AnimatePresence, motion } from 'framer-motion'
import { wrap } from 'popmotion'
import React, { useRef, useState } from 'react'

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
    <div className="w-full">
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
        className="relative z-20 flex justify-between items-end p-5"
        style={{
          width: width,
          height: height
        }}
      >
        <button
          className="bg-white h-10 w-10 text-lg rounded-full font-bold transform rotate-180"
          onClick={() => paginate(-1)}
        >
          {'‣'}
        </button>
        <button
          className="bg-white h-10 w-10 font-bold text-lg rounded-full"
          onClick={() => paginate(1)}
        >
          {'‣'}
        </button>
      </div>
    </div>
  )
}

export default ImgSlide
