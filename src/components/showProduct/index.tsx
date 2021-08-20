import React from 'react'
import { Carousel } from 'react-carousel-minimal'

import ImgSlide from '../ImgSlide'

const ProductImage = () => {
  const images = [
    'https://cdn.shopify.com/s/files/1/0068/3599/4706/products/Bingsu-Valkyrie-Bowl-Deskmat_720x.jpg?v=1625671189',
    'https://cdn.shopify.com/s/files/1/0068/3599/4706/products/Bingsu-Tengu_720x.jpg?v=1625671189',
    'https://cdn.shopify.com/s/files/1/0068/3599/4706/products/GMK-Bingsu-R2_720x.jpg?v=1625671190',
    'https://cdn.shopify.com/s/files/1/0068/3599/4706/products/Bingsu-Valkyrie-Mono_720x.jpg?v=1625671189',
    'https://cdn.shopify.com/s/files/1/0068/3599/4706/products/00-GMK-Bingsu-R2-Basev4_590x.jpg?v=1625671190',
    'https://cdn.shopify.com/s/files/1/0068/3599/4706/products/02-GMK-Bingsu-R2-Spacebar.v2_720x.jpg?v=1625671190',
    'https://cdn.shopify.com/s/files/1/0068/3599/4706/products/04-GMK-Bingsu-R2-Novelties_720x.jpg?v=1625671190'
  ]

     return (
       <div className="">
         <ImgSlide images={images}/>
       </div>
     )
  }


export default ProductImage

