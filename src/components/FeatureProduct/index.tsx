import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { number } from 'prop-types'
import React, { ReactElement } from 'react'

export interface Product{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

interface Props {
    data:number[]
}

const FeatureProduct = ({data}: Props): ReactElement => {
    
    return (
        <div className=' items-center text-xl container mx-auto flex flex-col pt-80 mt-7'>
            <div>
                <h1> Freatured Product </h1>
            </div>
            <div className='container flex flex-wrap'>
            </div>

        </div>
    )
}
