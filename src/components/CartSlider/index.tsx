import { CartContext } from '@app/context'
import Link from 'next/link'
import React, { useContext, useMemo, useState } from 'react'

const CartSlider = () => {
  const { products, setProducts } = useContext(CartContext)

  const [productss, setProductss] = useState([
    {
      id: '1',
      title: 'GMK Olive',
      price: 100,
      images: [
        'https://preview.redd.it/wf9kd6zl2mv41.jpg?width=960&crop=smart&auto=webp&s=b7f41edf2d4ca98d524bdab43654f6b1fbcbfe8e'
      ],
      quantity: 1,
      totalprice: 100
    },
    {
      id: '3',
      title: 'GMK ICE',
      price: 13400,
      images: ['https://cf.shopee.co.th/file/e117d87a9a52e940c4b8d188492473c9'],
      quantity: 1,
      totalprice: 13400
    },
    {
      id: '2',
      title: 'GMK YO',
      price: 10340,
      images: [
        'https://preview.redd.it/9g497ysk46641.jpg?width=960&crop=smart&auto=webp&s=1707c6e910499817c1716091a277abf8a225672c'
      ],
      quantity: 1,
      totalprice: 10340
    }
  ])

  const getTotal = useMemo(() => {
    return productss.reduce(
      (acc, item) => (acc += item.quantity * item.price),
      0
    )
  }, [productss])

  const updateProduct = (id, action) => {
    const updatedProducts = productss.map(item => {
      if (item.id === id && action === 'increment') {
        return { ...item, quantity: item.quantity + 1 }
      } else if (item.id === id && action === 'decrement') {
        return { ...item, quantity: item.quantity - 1 }
      } else {
        return { ...item }
      }
    })
    setProductss(updatedProducts)
  }

  return (
    <div className=" bg-black flex flex-row justify-between w-auto">
      <div className="mt-20 text-lg flex flex-col space-y-4 pl-5 text-white">
        <h1 className="text-3xl">CART</h1>
        <div className="flex flex-col space-y-4">
          {}
          <ul>
            {productss &&
              productss.map(item => {
                return (
                  <div className="flex flex-col space-y-3 my-5" key={item.id}>
                    <hr />
                    <div className="flex flex-row space-x-3">
                      <img className="h-20 w-20" src={item.images[0]} alt="" />
                      <div>
                        <h2>{item.title}</h2>
                        <div className="">
                          <div className="w-28 h-5 flex space-x-1 items-center text-xs">
                            <button
                              className="w-3 h-3"
                              onClick={() =>
                                updateProduct(item.id, 'decrement')
                              }
                            >
                              -
                            </button>

                            <div className="w-3 h-3 text-white text-center text-xs">
                              {item.quantity}
                            </div>

                            <button
                              className="w-3 h-3"
                              onClick={() =>
                                updateProduct(item.id, 'increment')
                              }
                            >
                              +
                            </button>
                          </div>
                          <div className="mt-2">
                            <p className="text-sm">
                              {' '}
                              {item.price * item.quantity}.-
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </ul>
          <p className="text-white">Total: {getTotal}</p>
          <Link href="/checkout/">
            <a className="bg-transparent border-white text-white text-center font-bold py-2 px-4 border text-xs w-56">
              {' '}
              CHECK OUT
            </a>
          </Link>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default CartSlider
