import {createBrowserRouter} from 'react-router-dom'
import {Admindash,Adminallpost,Blogform,Userhome,Detailedpost,UserRegisterform,
  Adminallcategory,Adminallusers, Categoryhome,Adminlogin} from './Routs/UserRouts'
import './index.css'

const appRouter = createBrowserRouter([
  Blogform,
  Adminallpost,
  Admindash,
  Userhome,
  Detailedpost,
  UserRegisterform,
  Categoryhome,
  Adminallusers,
  Adminallcategory,
  Adminlogin
])

export default appRouter
