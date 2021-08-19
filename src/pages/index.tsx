import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'
import FeatureProduct from '../components/FeatureProduct'


export default function Home() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <FeatureProduct/>
    </div>
  )
}
