import ImgSlide from '@app/components/ImgSlide'
import { IProduct } from '@app/dto/product'
import { NextPage } from 'next'
import React from 'react'

import Card from '../components/Card'
import Navbar from '../components/Navbar'
export interface HomeProps {
  data: IProduct[]
}

const images = [
  'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png'
]

export const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <div>
      <Navbar banner />
      <div className="container mx-auto mt-8">
        <h1 className="text-center text-3xl mb-4 font-bold">
          {' '}
          Feature Product{' '}
        </h1>
        <div className="flex flex-wrap justify-center">
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
