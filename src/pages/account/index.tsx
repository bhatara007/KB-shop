import Navbar from '@app/components/Navbar'
import { IUser, IUserAddr } from '@app/dto/user'
import axios from '@app/https/https'
import hi from 'date-fns/esm/locale/hi/index.js'
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/router'
import React, { useEffect, useRef,useState  } from 'react'
import { useForm } from 'react-hook-form'

const Account: React.FC = () => {

  const [user, setUser] = useState<IUser>({} as IUser)
  const [addrFrom, setAddrFrom] = useState(false)
  const [address, setAddress] = useState<IUserAddr[]>([])
  const {register, handleSubmit } = useForm()
  const [newAddr, setNewAddr] = useState("")
  const router = useRouter()

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
    localStorage.removeItem("userToken")
    router.push('/')
  }

  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto">
        <div className=" text-center mt-16">
          <h1 className="text-4xl font-bold mb-5">My Account</h1>
          <button onClick={() => logOut()}>LOG OUT</button>
          <hr />
        </div>
        <div className=" flex flex-col mt-8 space-y-3 md:flex-row md:justify-between md:items-baseline">
          <div className="flex space-y-3 flex-col ">
            <div className="text-center">
              <button
                className="border p-2 bg-black text-white"
                onClick={() => addAddressField()}
              >
                ADD A NEW ADDRESS
              </button>
            </div>

            {addrFrom && (
              <div className="flex flex-col text-center space-y-3 border-2 md:mx-20 m-4">
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
                        className="border h-20 w-full p-2"
                        required={true}
                      />
                    </div>
                    <div className="flex md:flex-row md:justrify-evenly flex-col space-x-6 space-y-3">
                      <div className="">
                        <p> Postal Code </p>
                        <input
                          {...register('postal')}
                          className="border w-full"
                          type="text"
                        />
                      </div>
                      <div className="">
                        <p> Country </p>
                        <input
                          {...register('country')}
                          className="border w-full"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col text-left">
                      <span> Phone </span>
                      <input
                        {...register('phone')}
                        className="border w-5/6"
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
          <div className="m-2 md:w-2/4">
            <div className="flex space-x-2 font-bold text-xl">
              <span> Name: </span>
              <span>{user.firstName}</span>
              <span>{user.lastName}</span>
            </div>
            {(address || []).map((addr, index) => (
              <div key={index} className="flex flex-col space-y-5">
                <div>
                  <span className="font-bold"> Address {index + 1} </span>
                  <table className="table-auto">
                    <tbody>
                      <tr>
                        <td className="font-bold">Name </td>
                        <td className="pl-1">{addr.name}</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Company </td>
                        <td className="pl-1">{addr.company}</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Address </td>
                        <td className="pl-1">{addr.address}</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Postal </td>
                        <td className="pl-1">{addr.postal}</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Country </td>
                        <td className="pl-1">{addr.country}</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Phone </td>
                        <td className="pl-1">{addr.phone}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button onClick={() => removeAddress(addr)}> delete </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
