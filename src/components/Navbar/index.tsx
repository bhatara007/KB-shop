import Link from 'next/link'
import React from 'react'

export interface NavbarProps {
  banner?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ banner }) => {
  const bannerDesc = [
    {
      name: 'Gmk Botanical',
      desc: 'Designed my Omnitype'
    }
  ]

  return (
    <>
      {banner && (
        <div
          className=" text-white justify-center text-center mx-auto flex flex-col h-96 text-2xl"
          style={{ zIndex: -1 }}
        >
          <p> {bannerDesc[0].name}</p>
          <p> {bannerDesc[0].desc}</p>
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
        <div
          className="h-96 w-100% absolute inset-0 bg-local text-center pt-36 text-4xl text-white
            filter contrast-75 bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://preview.redd.it/ycse9u77vm461.jpg?width=960&crop=smart&auto=webp&s=bbb3b9d9de8b20dd590fb05adedef10c1d5c5873)',
            zIndex: -2
          }}
        ></div>
      )}
    </>
  )
}

export default Navbar
