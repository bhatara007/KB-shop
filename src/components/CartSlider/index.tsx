import { CartContext } from '@app/context'
import Link from 'next/link'
import React, { useContext } from 'react'


const CartSlider = () => {

    const { products, setProducts } = useContext(CartContext)
    
    const productss = [
      {
        title: 'GMK Olive',
        price: 100,
        images: [
          'https://preview.redd.it/wf9kd6zl2mv41.jpg?width=960&crop=smart&auto=webp&s=b7f41edf2d4ca98d524bdab43654f6b1fbcbfe8e'
        ]
      },
      {
        title: 'GMK ICE',
        price: 13400,
        images: [
          'https://cf.shopee.co.th/file/e117d87a9a52e940c4b8d188492473c9'
        ]
      },
      {
        title: 'GMK YO',
        price: 10340,
        images: [
          'https://preview.redd.it/9g497ysk46641.jpg?width=960&crop=smart&auto=webp&s=1707c6e910499817c1716091a277abf8a225672c'
        ]
      }
    ]
    
    return (
      <div className=" bg-black flex flex-row justify-between w-auto">
        <div className="mt-20 text-lg flex flex-col space-y-4 pl-5 text-white">
          <h1 className="text-3xl">CART</h1>
          <div className="flex flex-col space-y-4">
            <ul>
              {productss.map(item => {
                return (
                  <div className="flex flex-col space-y-3 my-5" key={'1'}>
                    <hr />
                    <div className="flex flex-row space-x-3">
                      <img className="h-20 w-20" src={item.images[0]} alt="" />
                      <div>
                        <h2>{item.title}</h2>
                        <p> {item.price}.-</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </ul>
            <Link href="/checkout/">
              <a className='bg-transparent border-white text-white text-center font-bold py-2 px-4 border text-xs w-56'> CHECK OUT</a>
            </Link>
          </div>
          <hr />
        </div>
      </div>
    )
}

export default CartSlider