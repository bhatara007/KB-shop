import kbServer from '@app/https/https.js'
import axios from 'axios';
import React, { useState } from 'react'

import Navbar from '../Navbar';


interface formDatatype {
  title: string
  category: string
  desc: string
  available: boolean
  price: number
  quantity: number
  images: string[]
}

const CreateProductForm:React.FC = () => {

  const [formData, setFormdata] = useState<formDatatype>({
    title: "",
    category: "",
    desc: "",
    available: true,
    price: 0,
    quantity: 0,
    images: ["", ""]
  })

  const addImg = () => {

    const newImgArr = [...formData.images, " "]
      setFormdata({
        ...formData,
        images: newImgArr

      })
  }

  const onInputChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onCheckBoxChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.checked
    })
  }


  const submitHandle = (e) => {
    // eslint-disable-next-line no-console
    e.preventDefault()

    kbServer.post('/products/create-product', formData)

    setFormdata({
      title: '',
      category: '',
      desc: '',
      available: true,
      price: 0,
      quantity: 0,
      images: ['']
    })
  
  }


  const onImgChange = (e, index: number) => {
    const newImgArr = formData.images.map((img, i) => {
      if (index === i){
        return e.target.value
      }
      else{
        return img
      }
    })
    setFormdata({
      ...formData,
      [e.target.name]: newImgArr
    })
  }

  return (
    <>
      <Navbar banner={false} />
      <div className=" justify-center mt-14 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-7"> Add Product </h1>
        <form
          className="flex flex-col justify-center space-y-5"
          onSubmit={submitHandle}
        >
          <div>
            <label> Title </label>
            <input
              className="border"
              type="text"
              name="title"
              value={formData.title}
              required={true}
              onChange={onInputChange}
            />
          </div>
          <div>
            <label> Desc </label>
            <input
              className="border"
              type="text"
              name="desc"
              value={formData.desc}
              required={true}
              onChange={onInputChange}
            />
          </div>
          <div>
            <label> Category </label>
            <select
              className="border"
              name="category"
              value={formData.category}
              required={true}
              onChange={onInputChange}
            >
              <option> Keyboard </option>
              <option> Keycaps </option>
              <option> Swtich </option>
              <option> Acc </option>
            </select>
          </div>
          <div>
            <label> Price </label>
            <input
              className="border"
              type="number"
              name="price"
              value={formData.price}
              required={true}
              onChange={onInputChange}
            />
          </div>
          <div>
            <label> Quatity </label>
            <input
              className="border"
              type="number"
              name="quantity"
              value={formData.quantity}
              required={true}
              onChange={onInputChange}
            />
          </div>
          <div>
            <input
              type="checkbox"
              name="available"
              checked={formData.available}
              onChange={onCheckBoxChange}
              required={true}
            />
            <label> available </label>
          </div>
          <div>
            <label> Img </label>
            <button
              className="pl-6"
              type="button"
              onClick={() => {
                addImg()
              }}
            >
              +
            </button>
          </div>
          <div>
            {formData.images.map((img, index) => (
              // eslint-disable-next-line react/jsx-key
              <div key={index}>
                <div className="flex">
                  <input
                    className="border"
                    type="text"
                    name="images"
                    required={true}
                    value={formData.images[index]}
                    onChange={e => onImgChange(e, index)}
                  />
                </div>
              </div>
            ))}
          </div>
          <button className="border-2" type="submit">
            {' '}
            Submit{' '}
          </button>
        </form>
      </div>
    </>
  )
}

export default CreateProductForm