import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return ( <>
        <div className='h-40 bg-transparent flex justify-between m-6 
        '>
            <div className='pl-16 bg-transparent z-10'>
                <p> LOGO </p>
            </div>
            <div className='pr-16 space-x-6 z-10'>
                <Link href='/'>
                    Product
                </Link>
                <Link href='/'>
                    Groupbuy
                </Link>
                <Link href='/'>
                    Upcoming
                </Link>
                <Link href='/'>
                    Help
                </Link>
            </div>
        </div>
        <div className='h-48 inset-0 absolute' style={{backgroundImage: "url(https://preview.redd.it/ycse9u77vm461.jpg?width=960&crop=smart&auto=webp&s=bbb3b9d9de8b20dd590fb05adedef10c1d5c5873)"}}>

        </div>
        </>
    )
}

export default Navbar
