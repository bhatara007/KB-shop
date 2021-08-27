import ImgSlide from '@app/components/ImgSlide'
import { IProduct } from '@app/dto/product'
import { NextPage } from 'next'
import React, { useContext, useState } from 'react'

import Card from '../components/Card'
import Navbar from '../components/Navbar'
export interface HomeProps {
  data: IProduct[]
}

export const Home: NextPage<HomeProps> = ({ data }) => {



  return (
    <>
      <div className="top-0 h-96 w-full justify-center">
        <Navbar banner />
      </div>
      <div className="container mx-auto mt-8">
        <h1 className="text-center text-2xl md:text-3xl mb-4 font-bold">
          {' '}
          Feature Product{' '}
        </h1>
        <div className="flex flex-wrap justify-center">
          {data &&
            data.map(item => {
              return <Card key={item._id} item={item} />
            })}
        </div>
      </div>
    </>
  )
}

export default Home

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:4000/products/')
  const json = await res.json()

  
  return { data: json }
}
