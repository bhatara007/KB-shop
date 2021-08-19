import { NextPage } from 'next'
import React from 'react'

import Navbar from '../components/Navbar'
import FeatureProduct from '../components/FeatureProduct'

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
      <Navbar />
      <ul>
        {data &&
          data.map(item => {
            return (
              <li key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.price}</p>
                <p>{item.description}</p>
                <p>{item.category}</p>
                <img src={item.image} alt="this is image" />
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Home

Home.getInitialProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const json = await res.json()
  return { data: json }
}
