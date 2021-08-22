import { createContext, useState } from 'react'

import { IProduct } from '../dto/product'

interface CartProductType {
  products: IProduct[]
  setProducts: (products: IProduct[]) => void
}

export const CartContextWrapper = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [products, setProducts] = useState<IProduct[]>([])

  return (
    <CartContext.Provider value={{products, setProducts}}>
      {children}
    </CartContext.Provider>
  )

}

export const CartContext = createContext<CartProductType>({} as CartProductType)
