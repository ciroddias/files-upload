import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_UPLOAD_API_BASE_URL
})

export {
  instance
}