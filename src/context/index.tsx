import { createContext, useState } from 'react'

import { ICartProduct } from '../dto/product'

interface CartProductType {
  products: ICartProduct[]
  setProducts: (products: ICartProduct[]) => void
}

export const CartContextWrapper = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [products, setProducts] = useState<ICartProduct[]>([])

  return (
    <CartContext.Provider value={{products, setProducts}}>
      {children}
    </CartContext.Provider>
  )

}

export const CartContext = createContext<CartProductType>({} as CartProductType)
