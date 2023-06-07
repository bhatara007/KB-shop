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

    const handleImageError = (event) => {
      event.target.src =
        'https://drive.google.com/file/d/1EIHhcCZZEf8TBfM0C-pzGk6KnACE4PUg/view' // Replace with the path to your placeholder photo
    }

  return (
    <div
      className="flex flex-col items-center border-2 w-48 m-3 justify-center"
      onMouseOver={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
    >
      <img
        className="object-contain"
        src={item.images[0]} // Replace with the path to your placeholder photo
        alt="product image"
      />
      <div className="flex flex-col item-center justify-center text-center">
        <p className="text-lg text-center">{item.title.slice(0, 19)}</p>
        <p className="text-sm">USD {item.price}$</p>
      </div>
      {cardHover && (
        <motion.div
          className="absolute"
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <Link href={'/products/' + item._id}>
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
