import Navbar from '@app/components/Navbar'
import { CartContext } from '@app/context'
import { ICartProduct } from '@app/dto/product'
import React, { useContext } from 'react'

const index = () => {
  // const products = [
  //   {
  //     _id: '6127bf7181fd2b031c77461c',
  //     title: 'Block-67',
  //     price: 330,
  //     desc: 'The 144 USD 65% Gasket Mount Full CNC Aluminum Keyboard',
  //     images: [],
  //     quatity: 2
  //   },
  //   {
  //     _id: '6127c1cc81fd2b031c774631',
  //     title: 'Ts60 - A 60%',
  //     price: 200,
  //     desc: 'Greetings, we are TS Workshop, a group of enthusia…and we would love to hear your thoughts about it.',
  //     images: [],
  //     quatity: 2
  //   },
  //   {
  //     _id: '6127c48881fd2b031c774640',
  //     title: 'Swift65',
  //     price: 285,
  //     desc: 'Hello Everybody, Some of the member may recognize … i do enjoy all the time i had with my keyboards.',
  //     images: [],
  //     quatity: 2
  //   }
  // ]

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { products, setProducts } = useContext(CartContext)

      const updateProduct = (id, action) => {
        const updatedProducts = products.map(item => {
          if (item._id === id && action === 'increment') {
            return { ...item, quantity: item.quantity + 1 }
          } else if (
            item._id === id &&
            action === 'decrement' &&
            item.quantity > 1
          ) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return { ...item }
          }
        })
        setProducts(updatedProducts)
      }

      const removeProduct = id => {
        const removedProduct = products.filter(item => item._id !== id)
        setProducts(removedProduct)
      }

      const getTotal = (products) => {
        let total = 0;
        products.forEach((product) => {
          total += (product.quantity * product.price)
        })
        return total
      }
    

    return (
      <div>
        <Navbar />
        <div className="w-full flex justify-center mt-7">
          <div className="mt-10 flex-col">
            <p className="text-4xl mt-10"> Checkout </p>
            {products &&
              products.map(item => {
                return (
                  <div className="flex flex-col space-y-3 my-5" key={item._id}>
                    <hr />
                    <div className="flex flex-row space-x-3">
                      <img
                        className=" h-44 w-44 bg-cover bg-black"
                        src={item.images[0]}
                        alt=""
                      />
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

                            <div className="w-3 h-3 text-black text-center text-xs">
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
                            <button
                              className="text-sm"
                              onClick={() => {
                                removeProduct(item._id)
                              }}
                            >
                              delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            <p className="text-4xl mt-10">Total {getTotal(products)} .- </p>
          </div>
        </div>
      </div>
    )
}

export default index
