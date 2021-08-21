import ImgSlide from "@app/components/ImgSlide";
import Navbar from "@app/components/Navbar";
import { IProduct } from "@app/dto/product";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import React from "react";

export interface StaticProps {
  data: {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
  }
}

export const Productpage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> =
  ({ data }) => {
    const images = [
      'https://cdn.shopify.com/s/files/1/0068/3599/4706/products/Bingsu-Valkyrie-Bowl-Deskmat_720x.jpg?v=1625671189',
      'https://cdn.shopify.com/s/files/1/0068/3599/4706/products/Bingsu-Tengu_720x.jpg?v=1625671189',
      'https://cdn.shopify.com/s/files/1/0068/3599/4706/products/GMK-Bingsu-R2_720x.jpg?v=1625671190',
      'https://cdn.shopify.com/s/files/1/0068/3599/4706/products/Bingsu-Valkyrie-Mono_720x.jpg?v=1625671189',
      'https://cdn.shopify.com/s/files/1/0068/3599/4706/products/00-GMK-Bingsu-R2-Basev4_590x.jpg?v=1625671190',
      'https://cdn.shopify.com/s/files/1/0068/3599/4706/products/02-GMK-Bingsu-R2-Spacebar.v2_720x.jpg?v=1625671190',
      'https://cdn.shopify.com/s/files/1/0068/3599/4706/products/04-GMK-Bingsu-R2-Novelties_720x.jpg?v=1625671190'
    ]
    

    return (
      <div className="mt-12 flex flex-col justify-center">

        <div className="">
          <Navbar banner={false} />
        </div>

        <div className=" md:justify-center flex flex-col sm:flex-row md:space-x-14 md:container mx-auto items-center">
          <div className="flex">
            <ImgSlide images={images} />
          </div>
          <div className="container md:w-60 text-black text-center p-3 space-y-4 mt-4">
            <h1 className="font-bold text-lg tex">[Group Buy] GMK Bingsu</h1>
            <p className='text-sm'> SGD$162.00 </p>
            <button className="bg-transparent border-black text-black font-bold py-2 px-4 border text-xs w-56">
              Add to Cart
            </button>
            <p className="text-xs" style={{
              fontSize: '10px'
            }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              molestiae labore repellendus cumque deleniti. Eos eius dolorem
              sunt repudiandae accusamus consequatur consequuntur, fuga nihil
              quis pariatur totam facilis voluptatum tempora.
            </p>
          </div>
        </div>

        <div className="container mx-auto text-black text-center space-y-2 bg-yellow-700 ">
          <p className="text-xl font-bold">You may also Like</p>
        </div>
      </div>
    )
  } 

  export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
    const id = context.params.id
    const res = await fetch('https://fakestoreapi.com/products/' + id)
    const data = await res.json()

    return {
      props: {
        data
      }
    }
  }

  export const getStaticPaths = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()

    const paths = data.map(product => {
      return {
        params: { id: product.id.toString() }
      }
    })

    return {
      paths,
      fallback: false
    }
  }


export default Productpage;