import Link from 'next/link'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const MobileNav:React.FC = () => {
    return (
      <div className=" bg-black flex flex-row justify-between w-auto pr-5">
        <div className="mt-20 text-lg flex flex-col space-y-4 pl-5">
          <div className="font-extrabold flex flex-col space-y-4">
            <Link href="/">
              <a className="text-white"> PRODUCT </a>
            </Link>
            <Link href="/">
              <a className="text-white"> GROUPBUY </a>
            </Link>
            <Link href="/">
              <a className="text-white"> UPCOMING </a>
            </Link>
            <Link href="/">
              <a className="text-white"> HELP </a>
            </Link>
          </div>
          <hr />
          <div className="flex flex-col space-y-4 text-gray-500 text-sm pr-5">
            <Link href="/">
              <a className="text-white"> Account </a>
            </Link>
            <Link href="/">
              <a className="text-white"> Order </a>
            </Link>
            <Link href="/">
              <a className="text-white"> Help </a>
            </Link>
            <Link href="/">
              <a className="text-white"> Logout </a>
            </Link>
          </div>
        </div>
      </div>
    )
}

export default MobileNav