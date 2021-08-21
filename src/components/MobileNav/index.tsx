import Link from 'next/link'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const MobileNav:React.FC = () => {
    return (
      <div className=" bg-white text-white flex flex-row justify-between w-auto pr-5">
        <div className="mt-20 text-lg flex flex-col space-y-4 pl-5">
          <div className="font-extrabold flex flex-col space-y-4">
            <Link href="/">
              <a className="text-black"> PRODUCT </a>
            </Link>
            <Link href="/">
              <a className="text-black"> GROUPBUY </a>
            </Link>
            <Link href="/">
              <a className="text-black"> UPCOMING </a>
            </Link>
            <Link href="/">
              <a className="text-black"> HELP </a>
            </Link>
          </div>
          <hr />
          <div className="flex flex-col space-y-4 text-gray-500 text-sm pr-5">
            <Link href="/">
              <a className="text-gray-500"> Account </a>
            </Link>
            <Link href="/">
              <a className="text-gray-500"> Order </a>
            </Link>
            <Link href="/">
              <a className="text-gray-500"> Help </a>
            </Link>
            <Link href="/">
              <a className="text-gray-500"> Logout </a>
            </Link>
          </div>
        </div>
      </div>
    )
}

export default MobileNav