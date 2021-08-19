import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import React from 'react'

import Navbar from '../components/Navbar'

export interface StaticProps {
  data: {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
  }[]
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}

export const Static: NextPage<InferGetStaticPropsType<typeof getStaticProps>> =
  ({ data }) => {
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

export default Static
