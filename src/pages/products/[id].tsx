import { Product } from "@app/components/FeatureProduct";
import Navbar from "@app/components/Navbar";
import ProductImage from "@app/components/showProduct";
import { IProduct } from "@app/dto/product";
import { InferGetServerSidePropsType, InferGetStaticPropsType, NextPage } from "next";
import React from "react";


export const Productpage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> =
  ({ data }) => {
    return (
      <div>
        <div className="bg-black">
          <nav className="container bg-black h-24 mx-auto">
            <Navbar banner={false} />
          </nav>
        </div>
        <div className=" text-black">
            
        </div>
      </div>
    )
  } 

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('https://fakestoreapi.com/products/' + id)
  const data = await res.json()

  return {
    props: {
      data,
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()

  const paths = data.map(product => {
      return {
          params: {id: product.id.toString()}
      }
  })

  return {
      paths,
      fallback: false
  }
}

export default Productpage;