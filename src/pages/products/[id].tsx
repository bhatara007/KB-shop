import ImgSlide from "@app/components/ImgSlide";
import Navbar from "@app/components/Navbar";
import React from "react";


const Productpage: any = ({ data }) => {

  const images = [
    'https://cdn.shopify.com/s/files/1/0068/3599/4706/products/Bingsu-Valkyrie-Bowl-Deskmat_720x.jpg?v=1625671189',
    'https://cdn.shopify.com/s/files/1/0068/3599/4706/products/Bingsu-Tengu_720x.jpg?v=1625671189',
    'https://cdn.shopify.com/s/files/1/0068/3599/4706/products/GMK-Bingsu-R2_720x.jpg?v=1625671190',
    'https://cdn.shopify.com/s/files/1/0068/3599/4706/products/Bingsu-Valkyrie-Mono_720x.jpg?v=1625671189',
    'https://cdn.shopify.com/s/files/1/0068/3599/4706/products/00-GMK-Bingsu-R2-Basev4_590x.jpg?v=1625671190',
    'https://cdn.shopify.com/s/files/1/0068/3599/4706/products/02-GMK-Bingsu-R2-Spacebar.v2_720x.jpg?v=1625671190',
    'https://cdn.shopify.com/s/files/1/0068/3599/4706/products/04-GMK-Bingsu-R2-Novelties_720x.jpg?v=1625671190',
  ]  
    
    return (
      <div>
        <div className="bg-black">
          <nav className="container bg-black h-12 items-center mx-auto">
            <Navbar banner={false} />
          </nav>
        </div>
        <div className='flex md:justify-center space-x-10 mt-10 md:flex-row flex-col'>
          <div className=" text-black">
            <ImgSlide images={images} />
          </div>
          <div>
            <p className='text-xs w-40'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis deserunt, possimus 
              molestias in natus tenetur fugiat facere ducimus, reprehenderit labore iure consequuntur, ipsum 
              placeat voluptate perferendis. Ex rerum fuga tempore.
            </p>
          </div>
        </div>
      </div>
    )
  } 

  export const getStaticProps = async context => {
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