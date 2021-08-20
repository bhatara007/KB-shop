import Link from 'next/link'
import React from 'react'

export interface NavbarProps {
  banner?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ banner }) => {
  const bannerDesc = [
    {
      name: 'Gmk Tuzi',
      desc: 'Designed my Omnitype'
    }
  ]

  return (
    <>
      {banner && (
        <div
          className=" text-white justify-center text-center mx-auto flex flex-col h-96 text-2xl items-center"
          style={{ zIndex: -1 }}
        >
          <p className="text-5xl font-bold"> {bannerDesc[0].name}</p>
          <p> {bannerDesc[0].desc}</p>
          <button className="bg-white text-black mt-4 text-sm py-2 px-4">
            {' '}
            CHECK IT OUT NOW!
          </button>
        </div>
      )}
      <div className="bg-transparent flex justify-around m-6 z-40 fixed top-0 w-full">
        <div className="bg-transparent text-white bold">
          <p> LOGO </p>
        </div>
        <div className=" space-x-6">
          <Link href="/">
            <a className="text-white"> Product </a>
          </Link>
          <Link href="/">
            <a className="text-white"> Groupbuy </a>
          </Link>
          <Link href="/">
            <a className="text-white"> Upcoming </a>
          </Link>
          <Link href="/">
            <a className="text-white"> Help </a>
          </Link>
        </div>
      </div>
      {banner && (
        <div>
          <div
            className="h-96 w-100% absolute inset-0 bg-local text-center pt-36 text-4xl text-white
            filter bg-center bg-no-repeat bg-cover bg-opacity-75"
            style={{
              backgroundImage: 'url(https://i.imgur.com/mqN7rGs.jpg)',
              zIndex: -3
            }}
          ></div>
          <div className=' h-96 absolute z-50 container top-0 bg-black opacity-20'
          style={{
            zIndex: -2
          }}>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
