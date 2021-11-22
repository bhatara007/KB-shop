import { CartContext } from '@app/context'
import { CartSliderContext } from '@app/context/cartContext'
import Link from 'next/link'
import React, { useContext, useMemo, useState } from 'react'

const CartSlider = () => {

  const { products, setProducts } = useContext(CartContext)

  const { cartSlider, setCartSlider } = useContext(CartSliderContext)


  const getTotal = useMemo(() => {
    return products.reduce(
      (acc, item) => (acc += item.quantity * item.price),
      0
    )
  }, [products])

  const updateProduct = (id, action) => {
    const updatedProducts = products.map(item => {
      if (item._id === id && action === 'increment') {
        return { ...item, quantity: item.quantity + 1 }
      } else if (item._id === id && action === 'decrement' && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 }
      } else {
        return { ...item }
      }
    })
    setProducts(updatedProducts)
  }

  const removeProduct = (id) => {
    const removedProduct = products.filter((item) => item._id !== id)
    setProducts(removedProduct)
    
  }

  return (
    <div className=" bg-black flex flex-row justify-between w-auto z-50">
      <div className="mt-20 text-lg flex flex-col space-y-4 pl-5 text-white">
        <h1 className="text-3xl">CART</h1>
        <div className="flex flex-col space-y-4">
          {}
          <ul>
            {products &&
              products.map(item => {
                return (
                  <div className="flex flex-col space-y-3 my-5" key={item._id}>
                    <hr />
                    <div className="flex flex-row space-x-3">
                      <img className="h-20 w-24 bg-black" src={item.images[0]} alt="" />
                      <div>
                        <h2>{item.title}</h2>
                        <div className="">
                          <div className="w-28 h-5 flex space-x-1 items-center text-xs">
                            <button
                              className="w-3 h-3"
                              onClick={() =>
                                updateProduct(item._id, 'decrement')
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
                                updateProduct(item._id, 'increment')
                              }
                            >
                              +
                            </button>
                          </div>
                          <div className="flex justify-between mt-2">
                            <p className="text-sm">
                              {' '}
                              {item.price * item.quantity}.-
                            </p>
                            <button className="text-sm"
                            onClick={() => {
                              removeProduct(item._id)
                            }}>
                              delete
                            </button>
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
            <button className="bg-transparent border-white text-white text-center font-bold py-2 px-4 border text-xs w-56"
            onClick={() => setCartSlider(false)}>
              {' '}
              CHECK OUT
            </button>
          </Link>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default CartSlider
