export interface IProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  images: string[]
}

export interface ICartProduct {
  id: number
  title: string
  price: number
  image: string,
  quantity: number
}
