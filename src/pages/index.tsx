import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'


export default function Home({ allPostsData }) {
  return (
    <div>
      <Navbar/>
    </div>
  )
}
