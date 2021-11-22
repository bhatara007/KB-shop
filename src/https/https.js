import axios from 'axios'

const kbServer = axios.create({
  baseURL: 'https://kb-server007.herokuapp.com/'
}) 

export default kbServer