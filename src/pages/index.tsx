import { NextPage } from 'next'
import React from 'react'

import Card from '../components/Card'
import Navbar from '../components/Navbar'

export interface HomeProps {
  data: {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
  }[]
}

export const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <div>
      <Navbar banner />
      <div className="container mx-auto mt-8">
        <h1 className='text-center text-4xl mb-4'> Feature Product </h1>
        <div className="flex flex-wrap">
          {data &&
            data.slice(0, 8).map(item => {
              return <Card key={item.id} item={item} />
            })}
        </div>
      </div>
    </div>
  )
}

export default Home

Home.getInitialProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products/')
  const json = await res.json()
  return { data: json }
}
