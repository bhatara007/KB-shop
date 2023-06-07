import Card from '@app/components/Card'
import ImgSlide from '@app/components/ImgSlide'
import MobileNav from '@app/components/MobileNav'
import Navbar from '@app/components/Navbar'
import axios from '@app/https/https'
import { GetStaticProps } from 'next'
import React from 'react'


export interface StaticProps {
  data: {
    _id: number
    title: string
    price?: number
    description: string
    available: true
    quantity: number
    category: string
    images: string
  }
}


const ProductImage = ( { data }) => {

  
  return (
    <div className="">
      <Navbar banner={false}/>
      <div className='flex flex-wrap container mx-auto mt-12 justify-center'>
        {data.map(item => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<StaticProps> = async context => {
  const { data } = await axios.get(`products/`)

  return {
    props: {
      data
    }
  }
}

export default ProductImage
