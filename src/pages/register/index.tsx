import Navbar from '@app/components/Navbar'
import axios from '@app/https/https'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Register = () => {
  const { register, handleSubmit } = useForm()

  const router = useRouter()

  const onSubmit = data => {
      
    axios
      .post('/user/register', data)
      .then(res => {
        router.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <Navbar banner={false} />
      <div className="container mx-auto p-5 justify-center flex flex-col">
        <h1 className="mt-20 text-center text-3xl mb-4 font-bold">
          {' '}
          Register{' '}
        </h1>
        <form
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="border p-1"
            {...register('firstName')}
            placeholder="First name"
          />
          <input
            className="border p-1"
            {...register('lastName')}
            placeholder="Last name"
          />
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

          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Register
