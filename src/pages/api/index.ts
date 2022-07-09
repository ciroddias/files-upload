import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_UPLOAD_API_BASE_URL
})

async function uploadFiles(formData: FormData) {
  try {
    const response = await instance.post('/', formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    return response
  } catch (error: any) {
    return {status: false, message: error.message}
  }
}

export {
  uploadFiles
}