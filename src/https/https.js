import axios from 'axios'

const kbServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST
}) 

export default kbServer