export interface IProduct {
  _id: number
  title: string
  price?: number
  description: string
  available: true
  quantity: number
  category: string
  images: string[]
}

export interface ICartProduct {
  id: number
  title: string
  price: number
  images: string[]
  quantity: number
}
