import Navbar from '@app/components/Navbar'
import axios from '@app/https/https'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Login = () => {
  const { register, handleSubmit } = useForm()

  const router = useRouter()

  const onSubmit = data => {
    axios
      .post('/user/login', data)
      .then(res => {
        const {token} = res.data
        localStorage.setItem('userToken', token)
        router.push('/')
        console.log(token);
        
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <Navbar banner={false} />
      <div className=" max-w-xl mx-auto p-5 justify-center flex flex-col">
        <h1 className="mt-20 text-center text-3xl mb-4 font-bold">
          {' '}
          Login{' '}
        </h1>
        <form
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="border p-1"
            {...register('email')}
            placeholder="Email"
          />
          <input
            className="border p-1"
            type="password"
            {...register('password')}
            placeholder="password"
          />

          <input type="submit" className="cursor-pointer" />
        </form>
      </div>
    </div>
  )
}

export default Login
