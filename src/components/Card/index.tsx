import products from '@app/pages/products'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'

import { IProduct } from '../../dto/product'
import { variants } from './constants'
export interface CardProps {
  item: IProduct
}

const Card: React.FC<CardProps> = ({ item }) => {
  const [cardHover, setCardHover] = useState(false)

  return (
    <div
      className="flex flex-col items-center border-2 w-48 m-3 justify-self-center"
      onMouseOver={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
    >
      <img
        className="h-32 object-contain bg-cover"
        src={item.images[0]}
        alt="this is image"
      />
      <p className="text-lg text-center">{item.title.slice(0, 15)}</p>
      <p className="text-sm">{item.price}</p>
      {cardHover && (
        <motion.div
          className="absolute mt-14"
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <Link href={'/products/' + item.id}>
            <a className="bg-gray-100 hover:bg-gray-500 border-black text-black font-bold py-2 px-4 border text-xs">
              VIEW
            </a>
          </Link>
        </motion.div>
      )}
    </div>
  )
}

export default Card
