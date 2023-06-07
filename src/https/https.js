import axios from 'axios'

const kbServer = axios.create({
  baseURL: 'http://localhost:4000/'
}) 

export default kbServer