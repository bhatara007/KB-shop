/* eslint-disable no-mixed-spaces-and-tabs */
import Navbar from '@app/components/Navbar'
import { IUser } from '@app/dto/user'
import axios from '@app/https/https'
import React, { useEffect, useState } from 'react'



const Account: React.FC = () => {

  const [user, setUser] = useState<IUser>({} as IUser)

	const [addrFrom, setAddrFrom] = useState(false)

	const [address, setAddress] = useState([])

	
  useEffect(() => {
	axios
	  .get('/user/get-user', {
		headers: { 'x-access-token': localStorage.getItem('userToken') }
	  })
	  .then(res => {
		setUser(res.data)

	  })
  }, [])

	useEffect(() => {
		axios
			.put('/user/add-address', user, {
				headers: { 'x-access-token': localStorage.getItem('userToken') }
			})
			.then(res => {
				setAddress(res.data.addr)
			})
	}, [user])

	const submitHandle = (e) => {
		e.preventDefault()

		console.log(address);
		
		setUser(user => ({ ...user, addr: address }))
		
	}

	const addAddressField = () => {
		setAddrFrom(true)
		setAddress([...address, ""])
	}
	
	const addAddress = (e) => {
		const newAddrArr = address.map( (addr, index) => {
			if (index == address.length-1){
				return e.target.value
			}
			else {
				return addr
			}
		})
		setAddress(newAddrArr)
	}


  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto flex flex-col items-center mt-16 space-y-3">
        <h1 className="text-4xl">Account</h1>
        <div className='flex space-x-2'>
          <span>{user.firstName}</span>
          <span>{user.lastName}</span>
        </div>
        <span> Address </span>
				{ console.log(address)
				}
        {(address || []).map(addr => {
            <div>
              <p>{addr}</p>
            </div>
          })}

        <button className="border p-2" onClick={() => addAddressField()}>
          Add Address
        </button>

        {addrFrom && (
          <div className="flex flex-col text-center">
            <form onSubmit={submitHandle}>
              <div className="flex flex-col justify-center items-center">
                <textarea
                  className="border h-36 w-56 p-2"
                  name="addr"
                  required={true}
                  value={address[address.length - 1]}
                  onChange={e => addAddress(e)}
                />
              </div>
              <button className="border mt-4 p-2 " type="submit">
                Addddddddddd
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default Account
