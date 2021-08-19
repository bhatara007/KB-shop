import React from 'react'

import { IProduct } from '../../dto/product'

export interface CardProps {
  item: IProduct
}


const Card:React.FC<CardProps> = ({item}) => {
    return (
      <div className="flex flex-col items-center border-2 w-48 m-3">
        <img className='h-32 object-contain bg-cover' src={item.image} alt="this is image" />
        <p className='text-lg text-center'>{item.title.slice(0,15)}</p>
        <p className='text-sm'>{item.price}</p>
      </div>
    )
}

export default Card

