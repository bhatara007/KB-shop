import ImgSlide from "@app/components/ImgSlide";
import Navbar from "@app/components/Navbar";
import { CartContext } from "@app/context";
import { ICartProduct } from "@app/dto/product";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import React, { useContext } from "react";



export interface StaticProps {
  data: {
    _id: number
    title: string
    price?: number
    desc: string
    available: true
    quantity: number,
    category: string
    images: string[]
  }
}


export const Productpage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> =
  ({ data }) => {
    
    const {products, setProducts} = useContext(CartContext) 

    const addToCart = (item: ICartProduct) => {
      console.log(item)
      const updatedProducts = products.map(itemCart => {

        if(item.title === itemCart.title){
          return itemCart.quantity + 1 
        }
        else{
          return item
        }
      })
      console.log(updatedProducts);
      
      setProducts(updatedProducts)
    }
    
    // const images = [data.images]

    return (
      <div className="mt-12 flex flex-col justify-center">
        <div className="">
          <Navbar banner={false} />
        </div>
        <div className=" md:justify-center flex flex-col sm:flex-row md:space-x-14 md:container mx-auto items-center">
          <div className="flex">
            <ImgSlide images={data.images} />
          </div>
          <div className="container md:w-60 text-black text-center p-3 space-y-4 mt-4">
            <h1 className="font-bold text-lg tex">{data.title.slice(0,18)}</h1>
            <p className='text-sm'>USD {data.price}$ </p>
            <button className="bg-transparent border-black text-black font-bold py-2 px-4 border text-xs w-56"
            onClick = {() => setProducts([ ...products,
            {
              id: data._id,
              title: data.title,
              price: data.price,
              images: data.images,
              quantity: 1,
            }])}>
              Add to Cart
            </button>
            <p className="text-xs" style={{
              fontSize: '10px'
            }}>
              {data.desc}
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

    return {
      props: {
        data
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