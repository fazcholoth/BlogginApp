import axios from 'axios'
import { toast } from 'react-toastify';



const register = async (userData) => {
  const response = await axios.post(
    "http://localhost:8000/registeruser",
    userData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: false,
    }
  )

  if (response.data.message) {
    console.log(response.data.message);
    localStorage.setItem('user', JSON.stringify(response.data.message))
  }else{
     toast.error(response.data.error)
  }

  return response.data.message
}


const adminlogin = async (adminData) => {
  console.log(adminData);
  const response = await axios.post(
    "http://localhost:8000/admin/login",
    adminData,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );  

  if (response?.data?.message) {
    localStorage.setItem('admin', JSON.stringify(response?.data?.message))
  }else{
    toast.error(response.data.error)
  }

  return response.data.message
}



const userLogout = () => {
  localStorage.removeItem('user')
}

const adminLogout = () => {
  localStorage.removeItem('admin')
}


const authService = {
  register,
  adminlogin,
  userLogout,
  adminLogout
}

export default authService


