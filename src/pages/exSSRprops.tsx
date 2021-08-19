import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import React from 'react'

import Navbar from '../components/Navbar'

export interface SSRProps {
  data: {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
  }[]

  data2: {
    userid: number
    id: number
    title: string
    complete: boolean
  }[]

}

export const getServerSideProps: GetServerSideProps<SSRProps> = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()

  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data2 = await response.json()

  return {
    props: {
      data, data2
    }, 
  }
}


export const SSR: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data, data2 }) => {
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
      <hr/>
      <ul>
        { data2 &&
          data2.map(item => {
            return(
              <li key={item.userid}>
                <p>{item.id}</p>
                <p>{item.title}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default SSR
