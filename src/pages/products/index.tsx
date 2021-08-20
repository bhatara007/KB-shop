import ProductImage from '@app/components/showProduct'
import React from 'react'

export interface productsProps {
    
}

const products:React.FC<productsProps> = (props) => {
    return (
        <div>
            <ProductImage/>
        </div>
    )
}


export default products