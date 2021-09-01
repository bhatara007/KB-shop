import Navbar from '@app/components/Navbar'
import { IUser, IUserAddr } from '@app/dto/user'
import axios from '@app/https/https'
import hi from 'date-fns/esm/locale/hi/index.js'
import { redirect } from 'next/dist/server/api-utils'
import React, { useEffect, useRef,useState  } from 'react'
import { useForm } from 'react-hook-form'
import {useHistory}  from 'react-router-dom'

const Account: React.FC = () => {
  const [user, setUser] = useState<IUser>({} as IUser)

  const [addrFrom, setAddrFrom] = useState(false)

  const [address, setAddress] = useState<IUserAddr[]>([])

  const { register, handleSubmit } = useForm()

  const [newAddr, setNewAddr] = useState("")

  useEffect(() => {
    axios
      .get('/user/get-user', {
        headers: { 'x-access-token': localStorage.getItem('userToken') }
      })
      .then(res => {
        setUser(res.data)
        setAddress(res.data.addr)
      })
  }, [])

  const updateAddress = (data) => {
    const newAddress = [...address, data]
    axios.put('/user/add-address', {addr: newAddress}, {
        headers: { 'x-access-token': localStorage.getItem('userToken') }
      })
      .then(res => {
        setAddress(res.data.addr)
      })
  }

  const onSubmit = data => {
    console.log(register);

    updateAddress(data)

  }

  const addAddressField = () => {
    setAddrFrom(!addrFrom)
  }

  const removeAddress = delAddress => {
    const removedAddr = address.filter(addr => addr !== delAddress)
    setAddress(removedAddr)
    axios
      .put(
        '/user/add-address',
        { addr: removedAddr },
        {
          headers: { 'x-access-token': localStorage.getItem('userToken') }
        }
      )
      .then(res => {
        setAddress(res.data.addr)
      })

    
  }

  const logOut = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory()
    history.push('/')
    localStorage.clear()
    // eslint-disable-next-line react-hooks/rules-of-hooks
  }

  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto text-center mt-16">
        <h1 className="text-4xl font-bold mb-5">My Account</h1>
        <button onClick={() => logOut()}>LOG OUT</button>
        <hr />
      </div>
      <div className="container mx-auto flex mt-16 space-y-3 justify-between items-baseline">
        <div className="space-y-3 pl-8">
          <div>
            <button
              className="border p-2 bg-black text-white relative"
              onClick={() => addAddressField()}
            >
              ADD A NEW ADDRESS
            </button>
          </div>

          {addrFrom && (
            <div className="flex flex-col text-center space-y-3 border-2 absolute">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col p-2 space-y-1 m-2 text-sm">
                  <div className="space-x-1 flex flex-col text-left">
                    <span> Name </span>
                    <input
                      {...register('name')}
                      className="border"
                      type="text"
                    />
                  </div>
                  <div className="space-x-1 flex flex-col text-left">
                    <span> Company </span>
                    <input
                      {...register('company')}
                      className="border"
                      type="text"
                    />
                  </div>
                  <div className="space-x-1 flex flex-col text-left">
                    <span> Address </span>
                    <textarea
                      {...register('address')}
                      className="border h-20 w-64 p-2"
                      required={true}
                    />
                  </div>
                  <div className="flex space-x-6 text-left">
                    <div className="flex flex-col">
                      <span> Postal Code </span>
                      <input
                        {...register('postal')}
                        className="border w-28"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span> Country </span>
                      <input
                        {...register('country')}
                        className="border w-28"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col text-left">
                    <span> Phone </span>
                    <input
                      {...register('phone')}
                      className="border w-40"
                      type="text"
                    />
                  </div>
                </div>
                <button className="border mt-4 p-2 m-2 " type="submit">
                  Addddddddddd
                </button>
              </form>
            </div>
          )}
        </div>
        <div className="pr-8 w-2/4">
          <div className="flex space-x-2 font-bold text-xl">
            <span> Name: </span>
            <span>{user.firstName}</span>
            <span>{user.lastName}</span>
          </div>
          {(address || []).map((addr, index) => (
            <div key={index}>
              <div>
                <span className='font-bold'> Address {index+1} </span>
                <p>{addr.name}</p>
                <p>{addr.company}</p>
                <p>{addr.address}</p>
                <p>{addr.postal}</p>
                <p>{addr.country}</p>
                <p>{addr.phone}</p>
              </div>
              <button onClick={() => removeAddress(addr)}> delete </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Account
