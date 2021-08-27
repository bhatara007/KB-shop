import ImgSlide from "@app/components/ImgSlide";
import Navbar from "@app/components/Navbar";
import { CartContext } from "@app/context";
import { CartSliderContext } from "@app/context/cartContext";
import { ICartProduct } from "@app/dto/product";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import React, { useContext } from "react";



export interface StaticProps {
  item: {
    _id: number
    title: string
    price: number
    desc: string
    images: string[]
    quantity: number
  }
}


export const Productpage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> =
  ({ item }) => {
    
    const {products, setProducts} = useContext(CartContext) 

    const { cartSlider, setCartSlider } = useContext(CartSliderContext)

    console.log(setCartSlider)

    console.log(cartSlider);
    

    const addToCart = (item: ICartProduct) => {
      
    
      setCartSlider(true)
      console.log(cartSlider)

      const existed = products.find((cartItem) => item.title === cartItem.title)
      
      const cartItem = {
        _id: item._id,
        title: item.title,
        price: item.price,
        desc: item.desc,
        images: item.images,
        quantity: 1
      }

      if(!existed){
        setProducts([...products, cartItem])
      }
      //updated Cart
      else{
        const updatedProducts = products.map(itemCart => {
          if (item.title === itemCart.title) {
            return { ...itemCart, quantity: itemCart.quantity + 1 }
          } else {
            return itemCart
          }
        })
        setProducts(updatedProducts)
      }
    }
    
    // const images = [data.images]

    return (
      <div className="mt-12 flex flex-col justify-center">
        <div className="">
          <Navbar banner={false} />
        </div>
        <div className=" md:justify-center flex flex-col sm:flex-row md:space-x-14 md:container mx-auto items-center">
          <div className="flex">
            <ImgSlide images={item.images} />
          </div>
          <div className="container md:w-60 text-black text-center p-3 space-y-4 mt-4">
            <h1 className="font-bold text-lg tex">{item.title.slice(0,18)}</h1>
            <p className='text-sm'>USD {item.price}$ </p>
            <button className="bg-transparent border-black text-black font-bold py-2 px-4 border text-xs w-56"
            onClick = {() => addToCart(item)}>
              Add to Cart
            </button>
            <p className="text-xs" style={{
              fontSize: '10px'
            }}>
              {item.desc}
            </p>

          </div>
        </div>

        <div className="container mx-auto text-black text-center space-y-2 ">
          <p className="text-xl font-bold">You may also Like</p>
        </div>

        {/* <div className='bg-yellow-200'>
          { products.map( item => {
            return <li key={item.id}> {item.title} </li>
          })}
        </div> */}
      </div>
    )
  } 

  export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
    const id = context.params.id
    const res = await fetch('http://localhost:4000/products/' + id)
    const data = await res.json()

    const item = {
        _id: data._id,
        title: data.title,
        desc: data.desc,
        price: data.price,
        images: data.images,
        quantity: data.quantity,
    }

    return {
      props: {
        item
      }
    }
  }

  export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:4000/products/')
    const data = await res.json()

    const paths = data.map(product => {
      return {
        params: { id: product._id }
      }
    })

    return {
      paths,
      fallback: false
    }
  }


export default Productpage;