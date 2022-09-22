
import axios from 'axios'

export const key = "909962f70e56728a213d0aa491a1c36ca6c0479b"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;