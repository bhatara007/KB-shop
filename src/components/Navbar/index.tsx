import Link from 'next/link'
import React, { useState } from 'react'


const Navbar = () => {

    const [banner, setbanner] = useState(true)

    const bannerDesc = [
        {
            name: "Gmk Botanical",
            desc: "Designed my Omnitype"
        }
    ]

    return ( <>
        <div className='bg-transparent flex justify-between m-6'>
            <div className='pl-16 bg-transparent z-10 text-white bold'>
                <p> LOGO </p>
            </div>
            <div className='pr-16 space-x-6 z-10'>
                <Link href='/'>
                    <a className='text-white'> Product </a>
                </Link>
                <Link href='/'>
                    <a className='text-white'> Groupbuy </a>
                </Link>
                <Link href='/'>
                    <a className='text-white'> Upcoming </a>
                </Link>
                <Link href='/'>
                    <a className='text-white'> Help </a>
                </Link>
            </div>
        </div>
        { banner &&
            <div className='h-96 w-100% absolute inset-0 bg-local text-center pt-36 text-4xl text-white bg-opacity-70' 
            style={{backgroundImage: "url(https://preview.redd.it/ycse9u77vm461.jpg?width=960&crop=smart&auto=webp&s=bbb3b9d9de8b20dd590fb05adedef10c1d5c5873)"}}>
                <p> { bannerDesc[0].name }</p>
                <p> { bannerDesc[0].desc }</p>
            </div>
        }
        </>
    )
}

export default Navbar
