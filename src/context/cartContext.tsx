import { createContext, useState } from 'react'


interface CartSliderType {
  cartSlider: boolean
  setCartSlider: (cartSlider: boolean) => void
}

export const CartSliderContextWrapper = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cartSlider, setCartSlider] = useState<boolean>(false)

  return (
    <CartSliderContext.Provider value={{ cartSlider, setCartSlider }}>
      {children}
    </CartSliderContext.Provider>
  )
}

export const CartSliderContext = createContext<CartSliderType>({} as CartSliderType)
